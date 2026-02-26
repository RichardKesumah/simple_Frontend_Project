from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes_users import router as users_router

from .db import create_db_and_tables
from .routes_auth import router as auth_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

app.include_router(auth_router)
app.include_router(users_router)

@app.get("/health")
def health():
    return {"status": "ok"}