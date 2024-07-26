from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .api import api_router
from .db import create_tables_with_data, delete_tables

@asynccontextmanager
async def lifespan(application: FastAPI):
    create_tables_with_data()
    yield
    delete_tables()

app = FastAPI(lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(api_router)
