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

async def create_phrase(phrase):
    print('CREATE NEW PHRASE')
    document = Results(**phrase)
    document.passphrase_output = document.generate_phrases(document.phrases)
    result = await passphrase_collection.insert_one(document.__dict__)
    return document.__dict__

async def fetch_all_phrases():
    #time.sleep(1)
    print('\t\tFETCHING ALL PHRASES')
    thephrases=[]
    for doc in await passphrase_collection.find({}).to_list(100):
        res = Results(**doc)
        thephrases.append(res)

    return thephrases

async def fetch_all_phrases_by_email(email : str = pydantic.Field(default=None)):
    print('FETCH ALL PHRASES BY EMAIL')
    thephrases=[]

    if email == None:
        for doc in await passphrase_collection.find({}).to_list(100):
            res = Results(**doc)
            thephrases.append(res)
        return thephrases
    email_response = user_login_collection.find_one({'email':email})

    for doc in await passphrase_collection.find({}).to_list(100):
        res = Results(**doc)
        if res.email == email_response:
            thephrases.append(res)

    return thephrases

async def update_phrase(title, pphrases):
    print(f"{'UPDATING PHRASES':>10}")
    await passphrase_collection.update_one({"title": title}, {"$set": {"phrases": pphrases}})
    document = await passphrase_collection.find_one({"title": title})
    return document

async def remove_phrase(title):
    print('REMOVE PHRASE')
    await passphrase_collection.delete_one({"title": title})
    return True




async def create_user(fullname,email,password):
    print('CREATE A USER')
    document = UserSchema(**{"fullname": f"{fullname}","email":f"{email}","password":f"{password}"})

    result = await user_signup_collection.insert_one(document.__dict__)
    return document
async def create_login_user(schema:UserLoginSchema):
    print('LOGIN USER')
    document = UserLoginSchema(**{"email":f"{schema.email}","password":f"{schema.password}"})

    result = await user_login_collection.insert_one(document.__dict__)
    return document

async def fetch_all_users():
    #time.sleep(1)
    print( ' FETCHING ALL USERS ')
    users=[]
    for doc in await user_signup_collection.find({}).to_list(100):
        res = UserSchema(**doc)
        users.append(res)
    return users

async def remove_user(fullname):
    print('REMOVE USER')
    await user_signup_collection.delete_one({"fullname": fullname})
    return True

async def check_usersession(UserSession):
    

    pass
#
#r = {'title':'my_pass',"phrases":'testing this phrase'}
#r2 = [r,{'title':'my_pass_2',"phrases":'testing this phrase too'}]
#results:List[Results] =  [Results(**r) for r in r2]
##results
##


#loop = asyncio.get_event_loop()
#loop.run_until_complete(create_user('test'))


#loop.run_until_complete(create_phrase(results[1].__dict__))
#loop.run_until_complete(fetch_all_phrases())
#loop.run_until_complete(update_phrase('My PassPhrase', 'new passphrase - Update Complete'))
#loop.run_until_complete(fetch_all_phrases())


#loop.run_until_complete(remove_phrase('meow mix meow'))
#loop.run_until_complete(fetch_all_phrases()