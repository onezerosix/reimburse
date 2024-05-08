from fastapi.testclient import TestClient
from pytest import fixture
from sqlmodel import Session

from src.main import app
from src.db import db_engine, get_session

@fixture(name="session", scope="session")
def session_fixture():
    with Session(db_engine) as session:
        yield session


@fixture(name="client", scope="module")
def client_fixture(session):
    app.dependency_overrides[get_session] = lambda: session
    with TestClient(app) as client:
        yield client
    app.dependency_overrides.clear()
