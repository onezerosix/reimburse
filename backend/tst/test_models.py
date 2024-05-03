"""
TODO:

test default values & limits for all tables
- account.balance --> 0, max 15 digits, 2 decimal places
- reimbursement.account_id --> random int [111111111,999999999]
- reimbursement.amount --> 0, max 10 digits, 2 decimal places
- reimbursement.status --> submitted

test primary key is id and uid are primary and index respectively
for each table and that uid has default_factory of uuid4

test foreign keys exist:
- account --> bank_member_id
- reimbursement --> account_id

test model column types? and enums?
"""
