import "./globals.css";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BankLogo from "./favicon.ico";
import { ManagementIcon, RequestIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Reimburse Bank",
  description: "Small reimbursement bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen w-full">
          <div className="flex border-b-2 px-10 py-3">
            <Link href="/" className="flex gap-3 items-center">
              <Image src={BankLogo} className="h-12 w-fit" alt="<bank logo>" />
              <span className="text-xl font-bold">Reimburse Bank</span>
            </Link>
          </div>
          <div className="flex h-full">
            <div className="bg-blue-100 py-3">
              <nav>
                <Link href="/requests" className="flex transition-all hover:bg-blue-200">
                  <div className="flex gap-2 items-center px-10 py-5">
                    <RequestIcon/>
                    Request
                  </div>
                </Link>
                <Link href="/" className="flex transition-all hover:bg-blue-200">
                  <div className="flex gap-2 items-center px-10 py-5">
                    <ManagementIcon/>
                    Mangement
                  </div>
                </Link>
              </nav>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
