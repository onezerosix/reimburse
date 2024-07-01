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
  const reimbursements: ReimbursementModel[] = await getReimbrusements()

  return (
    <div>
      <Table className="w-8/12">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/12">Date</TableHead>
            <TableHead className="w-4/12">Description</TableHead>
            <TableHead className="w-3/12">Bank Account</TableHead>
            <TableHead className="w-3/12">Amount</TableHead>
            <TableHead className="w-1/12">Status</TableHead>
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
