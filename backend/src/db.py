from sqlmodel import create_engine, Session, SQLModel

from .models import * # must import tables all to create them

engine = create_engine("sqlite://", echo=True)

def create_tables_with_data():
    __create_tables()
    __create_reimbursement_records()

def __create_tables():
    SQLModel.metadata.create_all(engine)

def __create_reimbursement_records():
    with Session(engine) as session:
        for i in range(1,4):
            session.add(
                Reimbursement(
                    description=f"train {i}",
                    amount=12*i,
                    transaction_date=date.today(),
                    status=ReimbursementStatus(i-1)
                )
            )
        session.commit()

def delete_tables():
    SQLModel.metadata.drop_all(engine)
