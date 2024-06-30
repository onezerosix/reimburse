"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getReimbrusements, ReimbursementModel, ReimbursementStatus } from "@/lib/api"
import { formatAccountID, formatCurrency } from "@/lib/format";

export async function ReimbursementTable() {
  // TODO: padding and spacing of table
  const reimbursements: ReimbursementModel[] = await getReimbrusements()

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Bank Account</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {reimbursements.map((reimbursement) => (
              <ReimbursementRow key={reimbursement.id} reimbursement={reimbursement} />
            ))}
          </TableBody>
      </Table>
    </div>
  );
}

function ReimbursementRow({
  reimbursement
}: {
  reimbursement: ReimbursementModel
}) {
  return (
    <TableRow>
      <TableCell>{reimbursement.transaction_date.toString()}</TableCell>
      <TableCell>{reimbursement.description}</TableCell>
      <TableCell>{formatAccountID(reimbursement.account_id)}</TableCell>
      <TableCell>{formatCurrency(reimbursement.amount)}</TableCell>
      <TableCell>{ReimbursementStatus[reimbursement.status]}</TableCell>
    </TableRow>
  );
}
