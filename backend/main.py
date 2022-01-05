import asyncio
import pydantic
#import passPhrase as pp
import time
#from auth.jwt_handler import signJWT,users
from typing import List
from database import (
   # fetch_one_phrase,
    fetch_all_phrases,
    create_phrase,
    update_phrase,
    remove_phrase,
    fetch_all_users,
    create_user,
    create_login_user,
    remove_user,
    fetch_all_phrases_by_email
)
from auth.jwt_handler import signJWT
from auth.jwt_bearer import jwtBearer
from fastapi import FastAPI, HTTPException, Body, Depends
from model import Results, UserSchema, UserLoginSchema, UserSession
from fastapi.middleware.cors import CORSMiddleware
import os
import motor.motor_asyncio
# Defining Logic Environment Variables 

# App object
app = FastAPI()
react_address = "http://127.0.0.1:3000"
fastapi_address = "http://127.0.0.1:8000"
origins = [react_address,fastapi_address,"http://127.0.0.1:8080","*"]
#users= [UserLoginSchema(**{"fullname":"oli","email":"oli@google.com","password":"123123"})]
# Parameters for middleware(software bridging operating system, database, or applications on a network)
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True, 
    allow_methods = ["*"],
    allow_headers = ["*"]

)

@app.get("/")
def read_root():
    return{'passphrase_object':''}

@app.get("/api/phrase",tags=['Phrase','Get All Phrases'])

async def get_phrase():
    print('get_phrase')
    response = await fetch_all_phrases()
    if response:

        return response

@app.post("/api/phrase", response_model=Results,tags= ['Phrase','Create New Phrase'])
async def post_phrase(phrase:Results):
    print('post_phrase')
    response = await create_phrase(phrase.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong my friend")
    

@app.put("/api/phrase/{title}",dependencies=[Depends(jwtBearer())], response_model=Results,tags=['Phrase','Update Phrase by Title'])
async def put_phrase(title: str, phra: str):
    print('put_phrase')
    response = await update_phrase(title, phra)
    if response:
        return response
    raise HTTPException(404, f"There is not phrase with the title {title}")
    

@app.delete("/api/phrase/{title}",tags=['Phrase','Delete Phrase by Title'])
async def delete_phrase(title):
    print('delete_phrase')
    response = await remove_phrase(title)
    if response:
        return "Item deleted succesfully!"
    raise HTTPException(404, "Thre is no phrase with the title {phrase}")
    
# Beginning of Authorization Section of application 
@app.post("/api/user_signup/",tags=["Authorization"])
async def signup_user(user:UserSchema = Body(default=None)):
    print('signup_user')
    response = await create_user(user.fullname,user.email,user.password)
    return signJWT(user.email)


@app.post("/api/user_login/", tags= ["Authorization"])
async def login_user(user: UserLoginSchema = Body(default=None)):
    print('login_user')
    user_list = await get_users()
    if check_user(user, user_list ):
        response = await create_login_user(user)
        return signJWT(user.email)
    else:
        return {
            "ERROR":"INVALID USER/PASS"
        }
def check_user(data: UserLoginSchema,user_list : List[UserSchema]):
    print('check_user')
    users = user_list
    for user in users:
        if user.email == data.email and user.password == data.password:
            return True
    return False

@app.get("/api/user_signup/",tags=['Authorization','Get All Users'])
async def get_users():
    print('get_users')
    response = await fetch_all_users()
    if response:
        return response
# Defining route to get active user (Work in Progress)
# @app.get("/api/user_login/", tags=['Authorization', 'Get Active User'])

@app.delete("/api/user_signup/{fullname}",tags=['Authorization','Delete Password by Fullname'])
async def delete_user(fullname):
    print('delete_user')
    response = await remove_user(fullname)
    if response:
        return "Item deleted succesfully!"
    raise HTTPException(404, f"Thre is no user with the fullname:  {fullname}")



@app.get("/api/phrase",tags = ["User Sessions", "Get Phrases by Email"])
async def get_phrases_by_email(email):
    print('get_phrases_by_email')
    response = await fetch_all_phrases_by_email(email=None)
    return response
