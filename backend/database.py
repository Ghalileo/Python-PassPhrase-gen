import motor.motor_asyncio
from backend.model import Results
from backend import passPhrase
from typing import List,Optional,TypedDict
import asyncio

pp = passPhrase.main()

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://dbUser:UtCgMNghTUiNyKgM@myfirstcluster.py8c0.mongodb.net/MyFirstCluster')
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
    await collection.update_one({"title": title}, {"$set": {"phrases": pphrases}})
    document = await collection.find_one({"title": title})
    return document

async def remove_phrase(title):
    await collection.delete_one({"title": title})
    return True


result = Results()
result.title='My PassPhrase'
result.phrases=pp.passphrase_input

loop = asyncio.get_event_loop()
loop.run_until_complete(create_phrase(result.__dict__))
loop.run_until_complete(fetch_all_phrases())
loop.run_until_complete(update_phrase('My PassPhrase', 'new passphrase - Update Complete'))
loop.run_until_complete(fetch_all_phrases())
loop.run_until_complete(remove_phrase('My PassPhrase'))
loop.run_until_complete(fetch_all_phrases())