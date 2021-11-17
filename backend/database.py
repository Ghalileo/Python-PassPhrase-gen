import motor.motor_asyncio
from model import Results
import passPhrase
from typing import List,Optional,TypedDict
import asyncio



client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://127.0.0.1:27017')
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


async def update_phrase(title, pphrases):
    await collection.update_one({"title": title}, {"$set": {"phrase": pphrases}})
    document = await collection.find_one({"title": title})
    return document

async def remove_phrase(title):
    await collection.delete_one({"title": title})
    return True


# result = Results()
# result.title='My PassPhrase'
# result.phrases=pp.passphrase_input

# loop = asyncio.get_event_loop()
# loop.run_until_complete(create_phrase(result.__dict__))
# loop.run_until_complete(fetch_all_phrases())