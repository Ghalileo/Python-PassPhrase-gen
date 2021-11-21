import motor.motor_asyncio
from model import Results
#import passPhrase
from typing import List,Optional,TypedDict
import asyncio

#pp = passPhrase.main()
#client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb+srv://dbUser:UtCgMNghTUiNyKgM@myfirstcluster.py8c0.mongodb.net/MyFirstCluster')
database = client.PhraseList
collection = database.phrase


async def create_phrase(phrase):
    document = Results(**phrase)
    ph = document.phrases

    document.passphrase_input = document.generate_phrases(document.phrases)
    result = await collection.insert_one(document.__dict__)
    return document.__dict__

async def fetch_all_phrases():
    thephrases=[]
    for doc in await collection.find({}).to_list(100):
        res = Results(**doc)
        thephrases.append(res)
    return thephrases


async def update_phrase(title, pphrases):
    await collection.update_one({"title": title}, {"$set": {"phrases": pphrases}})
    document = await collection.find_one({"title": title})
    return document

async def remove_phrase(title):
    await collection.delete_one({"title": title})
    return True

#
#r = {'title':'my_pass',"phrases":'testing this phrase'}
#r2 = [r,{'title':'my_pass_2',"phrases":'testing this phrase too'}]
#results:List[Results] =  [Results(**r) for r in r2]
#results
#
#loop = asyncio.get_event_loop()
#loop.run_until_complete(create_phrase(results[1].__dict__))
#loop.run_until_complete(fetch_all_phrases())
#loop.run_until_complete(update_phrase('My PassPhrase', 'new passphrase - Update Complete'))
#loop.run_until_complete(fetch_all_phrases())
#loop.run_until_complete(remove_phrase('meow mix meow'))
#loop.run_until_complete(fetch_all_phrases())