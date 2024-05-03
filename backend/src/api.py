"""
TODO
- don't directly call DB
- use API models instead of DB ones (see models.py)
"""

from fastapi import APIRouter
from sqlmodel import select, Session

from .db import engine
from .models import Reimbursement

api_router = APIRouter(
    prefix="/reimbursements",
    tags=["reimbursements"]
)

@api_router.get("/", response_model=list[Reimbursement])
async def get_reimbursements() -> list[Reimbursement]:
    with Session(engine) as session:
        return session.exec(select(Reimbursement)).all()
