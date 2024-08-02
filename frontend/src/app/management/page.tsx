import { getReimbrusements, ReimbursementModel } from "@/lib/api";
import { ReimbursementManagementTable } from "./table";

export default async function Management() {
  const reimbursements: ReimbursementModel[] = await getReimbrusements();

  return (
    <div className="w-full p-10">
      <div className="text-2xl font-bold">
        Management
      </div>
      <div className="pt-5">
        <ReimbursementManagementTable reimbursements={reimbursements}/>
      </div>
    </div>
  );
}
