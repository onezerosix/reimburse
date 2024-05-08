"""
TODO
- don't directly call DB, use a business logic layer
- use API models instead of DB ones (see models.py)
"""

from fastapi import APIRouter, Depends
from sqlmodel import select, Session

from .db import get_session
from .models import Reimbursement, CreateReimbursementModel

api_router = APIRouter(
    prefix="/reimbursements",
    tags=["reimbursements"]
)

@api_router.get("/", response_model=list[Reimbursement])
async def get_reimbursements(
    *, session: Session=Depends(get_session)
):
    return session.exec(select(Reimbursement)).all()

@api_router.post("/", response_model=int)
async def create_reimbursement(
    *,
    session: Session=Depends(get_session),
    create_model: CreateReimbursementModel
):
    # TODO: santized/validate create_model

    reimbursement = Reimbursement(
        description=create_model.description,
        amount=create_model.amount,
        transaction_date=create_model.transaction_date
    )

    session.add(reimbursement)
    session.commit()
    session.refresh(reimbursement)

    return reimbursement.id
