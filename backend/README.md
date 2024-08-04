# Welcome to the backend
The database and endpoints to interact with the database are here. This README describes how the backend program would work without the project's frontend.

Currently only three endpoints are implemented. Many of tests are stubs and comments. One integeration test exists.

There are almost no validations or input sanitization. There are TODOs for implementing them.

## Requirements
In order to run the backend, install python3 and pip3, then run the following line to install the necessary packages:

`pip3 install -r requirements.txt`

## Run the program
Run the following line to start the program:

`python3 -m uvicorn src.main:app`

The homepage is at http://127.0.0.1:8000 but an endpoint does not currently exist for the homepage. To interact with the program, visit the following pages:

1. Go to http://127.0.0.1:8000/reimbursements to see a list of reimbursements. By default, the program adds three random reimbursements.
2. Go to http://127.0.0.1:8000/docs to see the three current endpoints and test them out. http://127.0.0.1:8000/redoc can also be used to see the endpoint details.

## Testing
Only one integration test is currently implemented, the rest are skeletals. Run everything by running `pytest`.

There are currently no unit tests, only TODO comments. There is only one integration test, the rest are stubs/TODO comments.

## File organization
The files are organized in the following manner:
1. **src**: contains the program
2. **tst**: contains unit tests (only comments at this time)
3. **tst_integ**: contains integration tests (mainly stubs at this time)

## Notes
### SQL Tables
Most of the tables that created are currently not used. The design for the tables currently assumes that only bank exists per database. If multiple banks need to be in the database, a foregin key of `bank_id` can be added to the necessary tables.

### Far Distant Future Ideas
- Notify bank memebers of reimbursement approvals
- Notify bank administrators of reimbursement submissions
- If the project grows: separate models/endpoints/etc to their folders and files.
