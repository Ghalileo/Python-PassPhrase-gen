from fastapi import Depends, FastAPI
from app.router import passphrase
from app.models import UserDB
from app.users import auth_backend, current_active_user, fastapi_users
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
# Parameters for middleware(software bridging operating system, database, or applications on a network)
react_address = "http://127.0.0.1:3000"
fastapi_address = "http://127.0.0.1:8000"
origins = [react_address,fastapi_address,"http://127.0.0.1:8080","*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True, 
    allow_methods = ["*"],
    allow_headers = ["*"]
)
app.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)
app.include_router(fastapi_users.get_register_router(), prefix="/auth", tags=["auth"])
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(fastapi_users.get_users_router(), prefix="/users", tags=["users"])

app.include_router(passphrase.router)

@app.get("/authenticated-route")
async def authenticated_route(user: UserDB = Depends(current_active_user)):
    return {"message": f"Hello {user.email}!"}