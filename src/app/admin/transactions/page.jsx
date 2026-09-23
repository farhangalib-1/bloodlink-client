"use client";

import { useEffect, useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import paymentLogo from "@/assets/images/Stripe.png"
import Image from "next/image";

const TransactionsPage = () => {
  const [user, setUser] = useState([])
  const totalDonations = async()=>{
    const res = await fetch("https://bloodlink-serverside.vercel.app/payment");
    const data = await res.json();
    setUser(data);
    
  }
    useEffect(()=>{
      totalDonations()
    }, [])


  return (
    <main className="min-h-screen bg-[#fafafa] px-5 py-8 md:px-8">

      {/* Header */}
      <div className="mb-5">
        <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#111827] md:text-[32px]">
          All Transactions
        </h1>

        <p className="mt-1.5 text-[13px] text-[#64748b] md:text-[14px]">
          View all donation payments made through the platform.
        </p>
      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[850px] border-collapse">

            <thead>
              <tr className="border-b border-gray-100 bg-[#fcfcfc] text-left">
                <th className="w-[55px] px-3 py-3 text-[11px] font-semibold text-[#334155]">
                  #
                </th>

                <th className="px-3 py-3 text-[11px] font-semibold text-[#334155]">
                  Transaction ID
                </th>

                <th className="px-3 py-3 text-[11px] font-semibold text-[#334155]">
                  Donor
                </th>

                <th className="px-3 py-3 text-[11px] font-semibold text-[#334155]">
                  Amount
                </th>

                <th className="px-3 py-3 text-[11px] font-semibold text-[#334155]">
                  Method
                </th>

                <th className="px-3 py-3 text-[11px] font-semibold text-[#334155]">
                  Date
                </th>

                <th className="px-3 py-3 text-[11px] font-semibold text-[#334155]">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {user.map((transaction, index) => (
                <tr
                  key={transaction._id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-3 py-3 text-[11px] text-[#334155]">
                    {index + 1}
                  </td>

                  <td className="px-3 py-3 text-[11px] text-[#475569]">
                    {transaction._id}
                  </td>

                  <td className="px-3 py-3 text-[12px] font-semibold text-[#111827]">
                    {transaction.userName}
                  </td>

                  <td className="px-3 py-3 text-[12px] text-[#334155]">
                    $10
                  </td>

                  <td className="px-3 py-3">
                    <span
                      className={`inline-flex rounded-md px-2 py-1 text-[10px] font-semibold 
                      `}
                    >
                      <Image src={paymentLogo} alt="payment logo" width={50} height={25} ></Image>
                    </span>
                  </td>

                  <td className="px-3 py-3 text-[11px] text-[#475569]">
                    {transaction.createAt}
                  </td>

                  <td className="px-3 py-3">
                    <span className="inline-flex rounded-md bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}

             
            </tbody>
          </table>
        </div>

        {/* Bottom / Pagination */}
        <div className="flex flex-col gap-4 px-3 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[11px] text-[#475569]">
            Showing 1 to 10 of 1,256 transactions
          </p>

          <div className="flex items-center gap-1">

            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50"
            >
              <ChevronLeft size={15} />
            </button>

            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ed1c24] text-[11px] font-semibold text-white"
            >
              1
            </button>

            {[2, 3, 4, 5].map((page) => (
              <button
                key={page}
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-[11px] text-gray-700 transition hover:bg-gray-50"
              >
                {page}
              </button>
            ))}

            <span className="flex h-8 w-8 items-center justify-center text-[11px] text-gray-500">
              ...
            </span>

            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-[11px] text-gray-700 transition hover:bg-gray-50"
            >
              126
            </button>

            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50"
            >
              <ChevronRight size={15} />
            </button>

          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionsPage;