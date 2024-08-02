"use client"

import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PopupDialog } from "@/components/popup_dialog";
import { CreateReimbursementModel, createReimbursement } from "@/lib/api";

// TODO: move to components folder?
export function SubmitNewReimbursementDialog() {
  const newReimbursementFormContent = (
    <div className="grid">
      <div className="grid grid-cols-5 py-2 items-center">
        <label className="text-left col-span-2 opacity-60">
          Reason
        </label>
        <Input
          required
          name="description"
          type="text"
          className="col-span-3 text-right"
        />
      </div>
      <div className="grid grid-cols-5 py-2 items-center">
        <label className="text-left col-span-2 opacity-60">
          Amount ($)
        </label>
        <Input
          required
          name="amount"
          type="number"
          className="col-span-3 text-right"
          min="0.01"
          step="0.01"
        />
      </div>
      <div className="grid grid-cols-5 py-2 items-center">
        <label className="text-left col-span-2 opacity-60">
          Transaction Date
        </label>
        <Input
          required
          name="transactionDate"
          type="date"
          className="col-span-3 text-right"
        />
      </div>
    </div>
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<Response> {
    const formData = new FormData(event.currentTarget)
    const newReimbursement: CreateReimbursementModel = {
      // TODO: remove non-null operators
      description: formData.get("description")!.toString(),
      amount: formData.get("amount")!.toString(),
      transaction_date: formData.get("transactionDate")!.toString(),
    };

    const response = await createReimbursement(newReimbursement);
    if (!response.ok) {
      throw new Error("Response not okay. Failed to save.");
    }

    return response;
  }
  
  return (
    <PopupDialog
      trigger={
        <Button className="bg-blue-700">Submit new request</Button>
      }
      description="Requests"
      title="New"
      formContent={newReimbursementFormContent}
      onSubmit={handleSubmit}
      errorAlertMessage="Failed to add"
    />
  );
}
