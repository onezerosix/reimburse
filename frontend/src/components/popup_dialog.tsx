"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
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

export function PopupDialog({
  trigger,
  description,
  title,
  formContent,
  onSubmit,
  errorAlertMessage,
  moduleClassName,
}: Readonly<{
  trigger: React.ReactNode;
  description: string;
  title: string;
  formContent: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<Response>;
  errorAlertMessage: string;
  moduleClassName?: string;
}>) {
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await onSubmit(event);

      if (response.ok) {
        setIsOpen(false);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      alert(errorAlertMessage);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={moduleClassName}>
        <DialogHeader>
          <DialogDescription>
            {description}
          </DialogDescription>
          <DialogTitle className="text-xl">
            {title}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          {formContent}
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
