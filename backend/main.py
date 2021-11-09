import pydantic
import passPhrase as pp
import time
from database import (
    fetch_one_phrase,
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

origins = ['https://localhost:3000']

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

@app.get("api/phrase")
async def get_phrase(id):
    response = await fetch_all_phrases()
    return response

@app.post("api/phrase")
async def post_phrase(phrase):
    return 1

@app.put("api/phrase")
async def put_phrase(id, data):
    return 1

@app.delete("api/phrase")
async def delete_phrase(id, data):
    return 1
