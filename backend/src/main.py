from contextlib import asynccontextmanager

from fastapi import FastAPI

from .api import api_router
from .db import create_tables_with_data, delete_tables

@asynccontextmanager
async def lifespan(application: FastAPI):
    create_tables_with_data()
    yield
    delete_tables()

app = FastAPI(lifespan=lifespan)
app.include_router(api_router)
