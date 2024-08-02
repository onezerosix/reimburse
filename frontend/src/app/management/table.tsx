"use client"

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReimbursementTable } from "@/components/reimbursement_table";
import { ReimbursementModel, ReimbursementStatus } from "@/lib/api";

// TODO: move to componenets folder?
export function ReimbursementTableWithFilter({
  reimbursements
}: Readonly<{
  reimbursements: ReimbursementModel[]
}>) {
  // TODO: edit a row

  const [status, setStatus] = useState<ReimbursementStatus | undefined>();
  const handleChange = (value: string) => {
    // TODO: handle value is out of range of ReimbursementStatus
    //        convert to ReimursementStatus explicitly?
    const convertedValue = Number(value);
    if (isNaN(convertedValue)) {
      setStatus(undefined);
    }
    else {
      setStatus(convertedValue);
    }
  };

  // TODO: separate Select into it's own component?
  // TODO: filter here (i.e. don't send filteredStatus to ReimbursementTable)?
  return (
    <div>
      <div className="pt-5 pb-10">
        <div className="pb-1.5 text-xs font-bold">Status</div>
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder=""/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">Pending</SelectItem>
              <SelectItem value="1">Denied</SelectItem>
              <SelectItem value="2">Approved</SelectItem>
              <SelectItem value="undefined">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <ReimbursementTable
          reimbursements={reimbursements}
          filteredStatus={status}
        />
      </div>
    </div>
  );
}
