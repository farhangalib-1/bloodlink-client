"use client";

import { Card } from "@heroui/react";

import {
  Droplet,
  CircleCheck,
  Persons,
  Paperclip,
} from "@gravity-ui/icons";

const stats = [
  {
    title: "Total Donations",
    value: "1,256",
    change: "12%",
    description: "from last week",
    type: "donation",
    icon: Droplet,
  },
  {
    title: "Pending Requests",
    value: "84",
    change: "12 urgent",
    description: "",
    type: "pending",
    icon: Paperclip,
  },
  {
    title: "Completed Donations",
    value: "982",
    change: "15%",
    description: "from last week",
    type: "completed",
    icon: CircleCheck,
  },
  {
    title: "Total Users",
    value: "2,340",
    change: "18%",
    description: "from last week",
    type: "users",
    icon: Persons,
  },
];
const AdminDashboard = () => {
  return (
    <main className="px-5 py-8 md:px-8 lg:px-9">

      {/* Welcome */}
      <div className="mb-7">
        <h1 className="text-[27px] font-bold tracking-[-0.5px] text-[#111827]">
          Welcome back, Admin 👋
        </h1>

        <p className="mt-2 text-[15px] text-[#475569]">
          Here's an overview of BloodLink Donation.
        </p>
      </div>

      {/* Your existing Stats Cards */}
      {/* Your existing Recent Requests */}
      {/* Your existing User Overview */}
      {/* Your existing Transaction History */}

    </main>
  );
};

export default AdminDashboard;