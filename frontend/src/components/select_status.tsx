"use client"

import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReimbursementStatus } from "@/lib/api";

export function SelectStatus({
  onStatusChange,
  enableAll=false,
  placeholder
}: Readonly<{
  onStatusChange: Dispatch<SetStateAction<ReimbursementStatus | undefined>>, // TODO: not undefined?
  enableAll?: boolean,
  placeholder?: ReimbursementStatus
}>) {
  const handleChange = (value: string) => {
    // TODO: handle value is out of range of ReimbursementStatus
    const convertedValue = Number(value);
    if (isNaN(convertedValue)) {
      onStatusChange(undefined);
    } else {
      onStatusChange(convertedValue);
    }
  }

  return (
    <div>
      <div className="pb-2 text-xs font-bold">Status</div>
      <Select onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue
            placeholder={(
              typeof placeholder === "undefined") ?
              "" :
              ReimbursementStatus[placeholder]
            }/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="0">Pending</SelectItem>
            <SelectItem value="1">Denied</SelectItem>
            <SelectItem value="2">Approved</SelectItem>
            {enableAll && <SelectItem value="undefined">All</SelectItem>}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
