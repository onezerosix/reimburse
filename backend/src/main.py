from contextlib import asynccontextmanager

from fastapi import FastAPI
from sqlmodel import create_engine, SQLModel

from . import models # this line is necessary to create all tables

engine = create_engine("sqlite://")

@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield
    SQLModel.metadata.drop_all(engine)

app = FastAPI(lifespan=lifespan)
