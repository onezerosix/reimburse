"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateReimbursementModel, createReimbursement } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";

// TODO: move to components folder?
export function SubmitNewReimbursementDialog() {
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget)
    const newReimbursement: CreateReimbursementModel = {
      // TODO: remove non-null operators
      description: formData.get("description")!.toString(),
      amount: formData.get("amount")!.toString(),
      transaction_date: formData.get("transactionDate")!.toString(),
    };

    try {
      const response = await createReimbursement(newReimbursement);

      if (response.ok) {
        setIsOpen(false);
        router.refresh();
      }
      else {
        throw new Error("Response not okay. Failed to save.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add");
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-700">Submit new request</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            Requests
          </DialogDescription>
          <DialogTitle className="text-xl">
            New
          </DialogTitle>
        </DialogHeader>
        <form className="grid" onSubmit={handleSubmit}>
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
          <DialogFooter className="gap-2 pt-4">
            <DialogClose asChild>
              <Button variant="outline" className="text-blue-700 w-1/2">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-blue-700 w-1/2" disabled={isLoading}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
