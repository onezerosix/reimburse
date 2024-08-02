"use client"

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReimbursementModel, ReimbursementStatus, updateReimbursement, UpdateReimbursementModel } from "@/lib/api";
import { formatAccountID, formatCurrency } from "@/lib/format";
import { PopupDialog } from "./popup_dialog";
import { SelectStatus } from "./select_status";

export function ReimbursementTable({
  reimbursements,
  filteredStatus,
  isEditable=false
}: Readonly<{
  reimbursements: ReimbursementModel[]
  filteredStatus?: ReimbursementStatus // TODO: pre-filter records in parent?
  isEditable?: boolean // TODO: don't want undefined
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
          {renderReimbursementRows(reimbursements, filteredStatus, isEditable)}
        </TableBody>
      </Table>
    </div>
  );
}

// TODO: separate file to limit "use client"
function renderReimbursementRows(
  reimbursements: ReimbursementModel[],
  filteredStatus?: ReimbursementStatus,
  isEditable: boolean = false,
) {
  const filteredReimbursements = (typeof filteredStatus === "undefined") ?
    reimbursements : reimbursements.filter(r => r.status === filteredStatus);

  return filteredReimbursements.map((reimbursement) => (
    <ReimbursementRow
      key={reimbursement.id}
      reimbursement={reimbursement}
      isEditable={isEditable}
    />
  ));
}

function ReimbursementRow({
  reimbursement,
  isEditable=false,
}: Readonly<{
  reimbursement: ReimbursementModel,
  isEditable: boolean,
}>) {
  const row = (
    <TableRow>
      <TableCell>{reimbursement.transaction_date.toString()}</TableCell>
      <TableCell>{reimbursement.description}</TableCell>
      <TableCell>{formatAccountID(reimbursement.account_id)}</TableCell>
      <TableCell>{formatCurrency(reimbursement.amount)}</TableCell>
      <TableCell>{ReimbursementStatus[reimbursement.status]}</TableCell>
    </TableRow>
  );

  const [newStatus, setNewStatus] = useState<ReimbursementStatus | undefined>(
    reimbursement.status
  ); // TODO: only including undefined because of SelectStatus prop type
  const formContent = (
    <div className="w-full pb-2">
      <SelectStatus
        onStatusChange={setNewStatus}
        placeholder={reimbursement.status}
      />
    </div>
  );

  // TODO: validations
  async function handleSubmit(): Promise<Response> {
    const request: UpdateReimbursementModel = {
      id: reimbursement.id,
      status: Number(newStatus)
    };

    const response = await updateReimbursement(request);
    if (!response.ok) {
      throw new Error("Response not okay. Failed to update.");
    }

    return response;
  }
  
  return (
    isEditable ?
      <PopupDialog
        trigger={row}
        description="Management"
        title={reimbursement.description}
        formContent={formContent}
        onSubmit={handleSubmit}
        errorAlertMessage="Failed to update"
        moduleClassName="w-[400px]"
      />
    :
      row
  );
}
