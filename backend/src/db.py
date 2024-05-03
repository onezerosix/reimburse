from sqlmodel import create_engine, Session, SQLModel

from .models import * # must import all to create all tables

engine = create_engine("sqlite://", echo=True)

def create_tables_with_data():
    __create_tables()
    __create_reimbursement_records()

def __create_tables():
    SQLModel.metadata.create_all(engine)

def __create_reimbursement_records():
    reimburse1 = Reimbursement(
        account_id=123,
        description="train A",
        amount=12,
        transaction_date=date.today()
    )
    reimburse2 = Reimbursement(
        account_id=456,
        description="train B",
        amount=24,
        transaction_date=date.today()
    )
    reimburse3=Reimbursement(
        account_id=789,
        description="train C",
        amount=36,
        transaction_date=date.today()
    )

    with Session(engine) as session:
        session.add(reimburse1)
        session.add(reimburse2)
        session.add(reimburse3)
        session.commit()

def delete_tables():
    SQLModel.metadata.drop_all(engine)
