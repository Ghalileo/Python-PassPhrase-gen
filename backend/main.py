import pydantic
import passPhrase as pp
import time
from database import (
    fetch_all_phrases,
    create_phrase,
    update_phrase,
    remove_phrase,
)
from fastapi import FastAPI, HTTPException
from model import Results
from fastapi.middleware.cors import CORSMiddleware
global passphrase_object
passphrase_object = pp.main()

# App object
app = FastAPI()
react_address = 'https://localhost:3000'
fastapi_address = 'https://localhost:8000'
origins = [react_address]

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
    return{'passphrase_object':f'{passphrase_object.__dict__}'}

@app.get("/api/phrase")
async def get_phrase(id):
    response = await fetch_all_phrases()
    return response

@app.get("/api/phrases/{title}", response_model=Results)
async def get_phrase_by_title(title):
    response = await fetch_one_phrase(title)
    if response:
        return response
    raise HTTPException(404, f"There is no phrase with the title {title}")

@app.post("/api/phrase", response_model=Results)
async def post_phrase(phrase:Results):
    response = await create_phrase(phrase.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong my friend")
    

@app.put("/api/phrase/{title}", response_model=Results)
async def put_phrase(title: str, phra: str):
    response = await update_phrase(title, phra)
    if response:
        return response
    raise HTTPException(404, f"There is not phrase with the title {title}")
    

@app.delete("/api/phrase/{title}")
async def delete_phrase(title):
    response = await remove_phrase(title)
    if response:
        return "Item deleted succesfully!"
    raise HTTPException(404, "Thre is no phrase with the title {phrase}")
