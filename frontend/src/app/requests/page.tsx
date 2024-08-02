import { ReimbursementTable } from "@/components/reimbursement_table";
import { SubmitNewReimbursementDialog } from "./submit_new";
import { getReimbrusements, ReimbursementModel } from "@/lib/api";

export default async function Requests() {
  const reimbursements: ReimbursementModel[] = await getReimbrusements();

  return (
    <div className="w-full p-10">
      <div className="text-2xl font-bold">
        Requests
      </div>
      <div className="py-5">
        <SubmitNewReimbursementDialog />
      </div>
      <div>
        <ReimbursementTable reimbursements={reimbursements} />
      </div>
    </div>
  );
}
