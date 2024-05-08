"""
TODO:

implement tests & any necessary additional functionality
once other tags/prefixes used, group endpoints for each tag under their own folders
"""

from random import randint
from uuid import UUID

from fastapi.encoders import jsonable_encoder
from fastapi.testclient import TestClient
from sqlmodel import Session

from src.models import CreateReimbursementModel, Reimbursement, ReimbursementStatus

def get_request_model():
    return CreateReimbursementModel(
        description=f"train {randint(100, 599)}",
        amount=randint(8,40),
        transaction_date="2023-10-17"
    )

def test_creates_one_record(client: TestClient, session: Session) -> None:
    request = get_request_model()
    response = client.post("/reimbursements", json=jsonable_encoder(request))

    assert response.status_code == 200
    assert response.json() is not None
    assert isinstance(response.json(), int)

    # TODO: ensure not empty/null fields
    reimbursement = session.get(Reimbursement, response.json())
    assert reimbursement is not None
    assert reimbursement.description == request.description
    assert reimbursement.amount == request.amount
    assert reimbursement.transaction_date == request.transaction_date
    assert isinstance(reimbursement.account_id, int)
    assert reimbursement.status == ReimbursementStatus.SUBMITTED
    assert isinstance(reimbursement.id, int)
    assert isinstance(reimbursement.uid, UUID)

def test_null_description(): #throws?
    pass

def test_whitespace_description(): #throws?
    pass

def test_santize_description():
    pass

def test_invalid_description_throws():
    pass

def test_negative_amount_throws():
    pass

def test_amount_with_over_two_decimal_places_throws():
    pass

def test_zero_amount_throws():
    pass

def test_null_amount_throws():
    pass

def test_invalid_date_throws():
    pass

def test_null_date_throws():
    pass
