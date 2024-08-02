export enum ReimbursementStatus {
  Pending = 0,
  Denied = 1,
  Approved = 2
}

export type ReimbursementModel = {
  id: number
  transaction_date: Date
  description: string
  account_id: number
  amount: number
  status: ReimbursementStatus
};

export type CreateReimbursementModel = {
  description: string
  amount: string // TODO: type number?
  transaction_date: string // TODO: type Date?
};

export type UpdateReimbursementModel = {
  id: number
  status: number
};

// TODO: separate models and helper fetch functions

// TODO: error handling for all functions below
export async function getReimbrusements(): Promise<ReimbursementModel[]> {
  return (await fetch('http://localhost:8000/reimbursements/', { cache: 'no-store' })).json();
}

export async function createReimbursement(newReimbursement: CreateReimbursementModel): Promise<Response> {
  // TODO: validations
  return (await fetch('http://localhost:8000/reimbursements/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReimbursement),
  }));
}

export async function updateReimbursement(updateReimbursement: UpdateReimbursementModel): Promise<Response> {
  // TODO: validations
  return (await fetch('http://localhost:8000/reimbursements/', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateReimbursement),
  }));
}
