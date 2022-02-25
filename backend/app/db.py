import os
from unittest import result
from app.router.schemas import Results
import motor.motor_asyncio
from fastapi_users.db import MongoDBUserDatabase
from fastapi import Depends

from app.models import UserDB, UserPhrase, User

#DATABASE_URL = os.environ["mongodb+srv://dbUser:UtCgMNghTUiNyKgM@myfirstcluster.py8c0.mongodb.net/MyFirstCluster"]
client = motor.motor_asyncio.AsyncIOMotorClient(
    "mongodb+srv://dbUser:UtCgMNghTUiNyKgM@myfirstcluster.py8c0.mongodb.net/MyFirstCluster", uuidRepresentation="standard"
)
db = client["PassPhraseGenerator"]
users_collection = db["users"]
phrases_collection = db['passphrases']
new_doc_collection = db['test_user_phrases']
async def get_user_db():
    yield MongoDBUserDatabase(UserDB, users_collection)

async def create_phrase(phrase:Results,user:User):
    print('CREATE NEW PHRASE')
    document = Results(**phrase)
    document.passphrase_output = document.generate_phrases(document.phrases)
    print('check 1')
    new_doc = UserPhrase(**{"user_passphrases":document.dict(),'user':user})
    print('check 2')

    result = await new_doc_collection.insert_one(new_doc.dict())
    print('check 3')

    return new_doc

async def get_phrases_by_user(user:User):
    thephrases = []
    for doc in await new_doc_collection.find({}).to_list(100):
        response = UserPhrase(**doc)
        if response.user.email == user.email:
            thephrases.append(response)
    return thephrases

