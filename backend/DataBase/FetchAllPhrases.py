import motor.motor_asyncio
import pydantic
from model import Results, UserLoginSchema, UserSchema,UserSession
from typing import List,Optional,TypedDict
import asyncio
import time
#client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://dbUser:UtCgMNghTUiNyKgM@myfirstcluster.py8c0.mongodb.net/MyFirstCluster')
database = client.PhraseList
passphrase_collection = database.phrase
user_signup_collection = database.user_signup
user_login_collection = database.user_login
user_session_collection = database.user_session



async def Fetch_All_Phrases():
    #time.sleep(1)
    print('\t\tFETCHING ALL PHRASES')
    thephrases=[]
    for doc in await passphrase_collection.find({}).to_list(100):
        res = Results(**doc)
        thephrases.append(res)

    return thephrases
