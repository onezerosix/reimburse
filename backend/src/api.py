"""
TODO
- don't directly call DB, use a business logic layer
- use API models instead of DB ones (see models.py)
"""

from fastapi import APIRouter, Depends
from sqlmodel import select, Session

from .db import get_session
from .models import Reimbursement

api_router = APIRouter(
    prefix="/reimbursements",
    tags=["reimbursements"]
)

@api_router.get("/", response_model=list[Reimbursement])
async def get_reimbursements(
    *, session: Session = Depends(get_session)
):
    return session.exec(select(Reimbursement)).all()
