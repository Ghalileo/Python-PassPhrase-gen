import motor.motor_asyncio
from backend.model import Results
from typing import List,Optional,TypedDict
import asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
database = client.PhraseList
collection = database.phrase


async def create_phrase(phrase):
    document = phrase 
    result = await collection.insert_one(document)
    return document

async def fetch_all_phrases():
    thephrases=[]
    for doc in await collection.find({}).to_list(100):
        thephrases.append(doc)
    return thephrases

tp1={'title':'testing one'}
tp2 = {'phrase':'testing two'}

loop = asyncio.get_event_loop()
loop.run_until_complete(create_phrase(tp1))
loop.run_until_complete(create_phrase(tp2))
loop.run_until_complete(fetch_all_phrases())

async def update_phrase(title, pphrases):
    await collection.update_one({"title": title}, {"$set": {"phrase": pphrases}})
    document = await collection.find_one({"title": title})
    return document

async def remove_phrase(title):
    await collection.delete_one({"title": title})
    return True

#async def fetch_all_phrases():
 #   thephrases = []
  #  cursor = collection.find({}).to_list(100)
   # for document in await cursor:
    #    thephrases.append(Results(document))
    #return thephrases
