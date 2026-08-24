"use client";

import { authClient } from "@/lib/auth-client";
import {
  Droplet,
  ClipboardList,
  CheckCircle,
  Users,
  ArrowUp,
  Clock,
  Heart,
  UserRound,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const stats = [
  {
    title: "Total Donations",
    value: "1,256",
    description: "from last week",
    change: "12%",
    icon: Droplet,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    changeColor: "text-green-600",
  },
  {
    title: "Pending Requests",
    value: "84",
    description: "urgent",
    change: "12 urgent",
    icon: ClipboardList,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    changeColor: "text-orange-500",
  },
  {
    title: "Completed Donations",
    value: "982",
    description: "from last week",
    change: "15%",
    icon: CheckCircle,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    changeColor: "text-green-600",
  },
  {
    title: "Total Users",
    value: "2,340",
    description: "from last week",
    change: "18%",
    icon: Users,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    changeColor: "text-green-600",
  },
];

const requests = [
  {
    initials: "MR",
    name: "Mahmud Rahman",
    blood: "B+",
    location: "Dhaka Medical College",
    status: "Urgent",
    statusStyle: "bg-red-50 text-red-500",
    avatarStyle: "bg-red-50 text-red-500",
    time: "10 min ago",
  },
  {
    initials: "SA",
    name: "Sadia Akter",
    blood: "A-",
    location: "Chattogram",
    status: "In Progress",
    statusStyle: "bg-orange-50 text-orange-500",
    avatarStyle: "bg-orange-50 text-orange-500",
    time: "35 min ago",
  },
  {
    initials: "AR",
    name: "Ahmed Raza",
    blood: "O+",
    location: "Rajshahi",
    status: "Pending",
    statusStyle: "bg-blue-50 text-blue-500",
    avatarStyle: "bg-green-50 text-green-600",
    time: "1 hr ago",
  },
  {
    initials: "JF",
    name: "Jannatul Ferdous",
    blood: "AB+",
    location: "Sylhet",
    status: "Pending",
    statusStyle: "bg-blue-50 text-blue-500",
    avatarStyle: "bg-purple-50 text-purple-500",
    time: "2 hr ago",
  },
];

const transactions = [
  {
    id: "TXN12345678",
    donor: "Ahsan Rahman",
    amount: "৳ 500",
    method: "bKash",
    date: "May 24, 2024",
  },
  {
    id: "TXN12345677",
    donor: "Tasnim Ahmed",
    amount: "৳ 300",
    method: "Nagad",
    date: "May 24, 2024",
  },
  {
    id: "TXN12345676",
    donor: "Rafi Islam",
    amount: "৳ 1,000",
    method: "Rocket",
    date: "May 23, 2024",
  },
  {
    id: "TXN12345675",
    donor: "Mithila Jannat",
    amount: "৳ 200",
    method: "Stripe",
    date: "May 23, 2024",
  },
  {
    id: "TXN12345674",
    donor: "Hasan Mahmud",
    amount: "৳ 500",
    method: "bKash",
    date: "May 22, 2024",
  },
];

const userOverview = [
  {
    label: "Total Users",
    value: "2,340",
    icon: Users,
    iconColor: "text-slate-600",
  },
  {
    label: "Donors",
    value: "1,842",
    icon: Heart,
    iconColor: "text-red-500",
  },
  {
    label: "Requesters",
    value: "498",
    icon: ClipboardList,
    iconColor: "text-slate-600",
  },
  {
    label: "New Users (This Week)",
    value: "156",
    icon: UserRound,
    iconColor: "text-slate-600",
  },
];

const Dashboard = () => {
  
     const { data: session } = authClient.useSession()
  const user = session?.user
 
  return (
    <div className="min-h-screen bg-[#fafafa] px-8 py-8">
      {/* Welcome Section */}
      <section className="mb-7 flex items-center justify-between">
        <div>
          <h2 className="text-[26px] font-semibold tracking-[-0.5px] text-[#111827]">
            Welcome back, {user?.name}  (Admin) 👋
          </h2>

          <p className="mt-1.5 text-[14px] text-[#64748b]">
            Here&apos;s an overview of BloodLink Blood Donation.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className={stat.iconColor}
                  />
                </div>

                <div>
                  <p className="text-[27px] font-semibold leading-none tracking-[-0.5px] text-[#111827]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[13px] font-medium text-[#111827]">
                    {stat.title}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[12px]">
                {stat.title !== "Pending Requests" && (
                  <ArrowUp
                    size={14}
                    strokeWidth={2}
                    className="text-green-600"
                  />
                )}

                <span className={`font-medium ${stat.changeColor}`}>
                  {stat.change}
                </span>

                <span className="text-[#64748b]">
                  {stat.description}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Recent Requests + User Overview */}
      <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
        {/* Recent Requests */}
        <div className="rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <h3 className="text-[16px] font-semibold text-[#111827]">
              Recent Requests
            </h3>
            <Link href={"/admin/requests"}>
            <button className="text-[12px] font-medium text-red-500 transition hover:text-red-600 cursor-pointer">
              View all
            </button>
            </Link>
          </div>

          <div className="px-6">
            {requests.map((request, index) => (
              <div
                key={request.name}
                className={`flex items-center justify-between py-3 ${
                  index !== requests.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex min-w-0 items-center gap-4">
                  {/* Avatar */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${request.avatarStyle}`}
                  >
                    {request.initials}
                  </div>

                  {/* User Information */}
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-[#111827]">
                      {request.name}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-[12px] text-[#64748b]">
                      <span>{request.blood}</span>
                      <span>•</span>
                      <span className="truncate">
                        {request.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ml-4 flex shrink-0 items-center gap-6">
                  <span
                    className={`rounded-md px-3 py-1.5 text-[11px] font-medium ${request.statusStyle}`}
                  >
                    {request.status}
                  </span>

                  <span className="hidden w-[55px] text-right text-[11px] text-[#64748b] sm:block">
                    {request.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Overview */}
        <div className="rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <h3 className="text-[16px] font-semibold text-[#111827]">
              User Overview
            </h3>
          </div>

          <div className="px-6">
            {userOverview.map((user, index) => {
              const Icon = user.icon;

              return (
                <div
                  key={user.label}
                  className={`flex items-center justify-between py-4 ${
                    index !== userOverview.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className={user.iconColor}
                    />

                    <span className="text-[13px] text-[#475569]">
                      {user.label}
                    </span>
                  </div>

                  <span className="text-[14px] font-semibold text-[#111827]">
                    {user.value}
                  </span>
                </div>
              );
            })}
          </div>
            
          <div className="px-6 pb-5 pt-2 text-center">
            <Link href={"/admin/user-data"}>
            <button className="text-[12px] font-medium text-red-500 transition hover:text-red-600  cursor-pointer">
              View all users
            </button>
            </Link>
          </div>
           
        </div>
       
      </section>

      {/* Recent Transactions */}
      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <h3 className="text-[16px] font-semibold text-[#111827]">
            Recent Transactions
          </h3>
            <Link href={"/admin/transactions"}>
          <button className="text-[12px] font-medium text-red-500 transition hover:text-red-600 cursor-pointer">
            View all
          </button>
          </Link>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="px-6 py-3 text-[11px] font-semibold text-[#334155]">
                  ID
                </th>

                <th className="px-4 py-3 text-[11px] font-semibold text-[#334155]">
                  Donor
                </th>

                <th className="px-4 py-3 text-[11px] font-semibold text-[#334155]">
                  Amount
                </th>

                <th className="px-4 py-3 text-[11px] font-semibold text-[#334155]">
                  Method
                </th>

                <th className="px-4 py-3 text-[11px] font-semibold text-[#334155]">
                  Date
                </th>

                <th className="px-6 py-3 text-[11px] font-semibold text-[#334155]">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-6 py-3.5 text-[12px] text-[#334155]">
                    {transaction.id}
                  </td>

                  <td className="px-4 py-3.5 text-[12px] font-medium text-[#111827]">
                    {transaction.donor}
                  </td>

                  <td className="px-4 py-3.5 text-[12px] text-[#334155]">
                    {transaction.amount}
                  </td>

                  <td className="px-4 py-3.5">
                    <span className="text-[12px] font-medium text-[#334155]">
                      {transaction.method}
                    </span>
                  </td>

                  <td className="px-4 py-3.5 text-[12px] text-[#334155]">
                    {transaction.date}
                  </td>

                  <td className="px-6 py-3.5">
                    <span className="rounded-md bg-green-50 px-2.5 py-1.5 text-[10px] font-medium text-green-600">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Transactions */}
        <div className="divide-y divide-gray-100 md:hidden">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[#111827]">
                  {transaction.donor}
                </span>

                <span className="rounded-md bg-green-50 px-2.5 py-1 text-[10px] font-medium text-green-600">
                  Completed
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-[11px]">
                <div>
                  <p className="text-gray-400">Transaction ID</p>
                  <p className="mt-1 text-[#334155]">
                    {transaction.id}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">Amount</p>
                  <p className="mt-1 text-[#334155]">
                    {transaction.amount}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">Method</p>
                  <p className="mt-1 text-[#334155]">
                    {transaction.method}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">Date</p>
                  <p className="mt-1 text-[#334155]">
                    {transaction.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;