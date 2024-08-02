import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReimbursementModel, ReimbursementStatus } from "@/lib/api";
import { formatAccountID, formatCurrency } from "@/lib/format";

export function ReimbursementTable({
  reimbursements,
  filteredStatus
}: Readonly<{
  reimbursements: ReimbursementModel[]
  filteredStatus?: ReimbursementStatus // TODO: pre-filter records in parent?
}>) {
  // TODO: sort table by date or create date?
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
            <ReimbursementRow
              key={reimbursement.id}
              reimbursement={reimbursement}
              filteredStatus={filteredStatus}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ReimbursementRow({
  reimbursement,
  filteredStatus
}: Readonly<{
  reimbursement: ReimbursementModel,
  filteredStatus?: ReimbursementStatus,
}>) {
  return (
    (
      typeof filteredStatus == "undefined" 
      || filteredStatus == reimbursement.status
    ) && (
      <TableRow>
        <TableCell>{reimbursement.transaction_date.toString()}</TableCell>
        <TableCell>{reimbursement.description}</TableCell>
        <TableCell>{formatAccountID(reimbursement.account_id)}</TableCell>
        <TableCell>{formatCurrency(reimbursement.amount)}</TableCell>
        <TableCell>{ReimbursementStatus[reimbursement.status]}</TableCell>
      </TableRow>
    )
  );
}
