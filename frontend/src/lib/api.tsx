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

// TODO: separate models and helper fetch functions

export async function getReimbrusements(): Promise<ReimbursementModel[]> {
  return (await fetch('http://localhost:8000/reimbursements/')).json()
}
