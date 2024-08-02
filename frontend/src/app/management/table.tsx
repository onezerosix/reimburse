"use client"

import { useState } from "react";
import { ReimbursementTable } from "@/components/reimbursement_table";
import { SelectStatus } from "@/components/select_status";
import { ReimbursementModel, ReimbursementStatus } from "@/lib/api";

// TODO: move to componenets folder?
export function ReimbursementManagementTable({
  reimbursements
}: Readonly<{
  reimbursements: ReimbursementModel[]
}>) {
  const [status, setStatus] = useState<ReimbursementStatus | undefined>();
  
  // TODO: edit a row
  // TODO: filter here (i.e. don't send filteredStatus to ReimbursementTable)?
  return (
    <div>
      <div className="w-[200px] pb-10">
        <SelectStatus
          onStatusChange={setStatus}
          enableAll={true}
        />
      </div>
      <div>
        <ReimbursementTable
          reimbursements={reimbursements}
          filteredStatus={status}
          isEditable={true}
        />
      </div>
    </div>
  );
}
