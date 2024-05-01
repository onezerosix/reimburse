"""
TODO
- separate into individual files
- add create_date, update_date, etc for all models
- create a parent "human" class for admins & members (names, addr, ssn)
- logging/tracking for changes made (e.g. which admin modified a reimbursement)
"""

import decimal
import uuid
from datetime import date
from enum import Enum
from sqlmodel import Field, SQLModel

class ReimbursementStatus(Enum):
    SUBMITTED = 0
    DENIED = 1
    APPROVED = 2

class SQLModelBase(SQLModel):
    id: int | None = Field(default=None, primary_key=True)
    uid: uuid = Field(default=None, index=True)

class Bank(SQLModelBase, table=True):
    name: str
    location: str

class BankAdministrator(SQLModelBase, table=True):
    first_name: str
    last_name: str
    # TODO: add ssn, address, email, hire_date, manager_id, etc

class BankMember(SQLModelBase, table=True):
    first_name: str
    last_name: str
    # TODO: add ssn, address, email, join_date, reimbursement_ids(?)

class Account(SQLModelBase, table=True):
    bank_member_id: int = Field(default=None, foreign_key = "bankmember.id", nullable=False)
    balance: decimal = Field(default=0, max_digits=15, decimal_places=2)
    # TODO: add balance, etc

class Reimbursement(SQLModelBase, table=True):
    account_id: int = Field(default=None, foreign_key = "account.id", nullable=False)
    description: str
    amount: decimal = Field(default=0, max_digits=10, decimal_places=2)
    transaction_date: date
    status: ReimbursementStatus = Field(default=ReimbursementStatus.SUBMITTED)
