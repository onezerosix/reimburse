import { ReimbursementTable } from "@/components/reimbursement_table";

export default async function Requests() {
  return (
    <div className="w-full p-10">
      <div className="text-2xl font-bold pb-10">
        Requests
      </div>
      <div>
        <ReimbursementTable />
      </div>
    </div>
  );
}
