"""
TODO: unit tests for api.py

get_reimbursements
- calls DB once
- returns list of Reimbursements

api_router variable:
- prefix & tags correct?
- GET for / path response is list of Reimbursements, no request params

create_reimbursement:
see integ test and balance between the two and:
- calls DB once
- returns id

update_reimbursement:
see integ test and balanc between the two and:
- validate update model
- throws 404 "Reimbursement not found" if record not found
- enforce finalized state?
- sql commits one record
- updates status only
"""
