import os
from unittest import result
from app.router.schemas import Results
import motor.motor_asyncio
from fastapi_users.db import MongoDBUserDatabase
from fastapi import Depends
from typing import Optional
from decouple import config

from app.models import UserDB, UserPhrase, User
DATABASE_URL = config("DATABASE_URL")

client = motor.motor_asyncio.AsyncIOMotorClient(
    DATABASE_URL, uuidRepresentation="standard"
)
db = client["PassPhraseGenerator"]
users_collection = db["users"]
user_phrases_collection = db['user_phrases']
async def get_user_db():
    yield MongoDBUserDatabase(UserDB, users_collection)

async def create_phrase(phrase:Results,user:User):
    print('CREATE NEW PHRASE')
    document = Results(**phrase)
    document.passphrase_output = document.generate_phrases(document.phrases)
    user_phrases = UserPhrase(**{"user_passphrases":document.dict(),'user':user})
    result = await user_phrases_collection.insert_one(user_phrases.dict())
    return user_phrases

async def get_phrases_by_user(user:User):
    thephrases = []
    for doc in await user_phrases_collection.find({}).to_list(100):
        response = UserPhrase(**doc)
        if response.user.email == user.email:
            thephrases.append(response)
    return thephrases

async def delete_phrase_by_user(title: Optional[str], user:User):
    response = await get_phrases_by_user(user)
    for i,res in enumerate(response): 
        new_res = UserPhrase(**res.dict())
        if new_res.user_passphrases.title == title:
            result = await user_phrases_collection.delete_one({'_id':new_res.id})
            return result.deleted_count
        