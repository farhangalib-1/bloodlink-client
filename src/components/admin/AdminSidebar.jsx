"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Droplet,
  House,
  ArrowRightFromSquare,
  ArrowRightArrowLeft,
  Persons,
  Paperclip,
} from "@gravity-ui/icons";

const navItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: House,
  },
  {
    title: "Managing Requests",
    href: "/admin/requests",
    icon: Paperclip,
  },
  {
    title: "Transaction History",
    href: "/admin/transactions",
    icon: ArrowRightArrowLeft,
  },
  {
    title: "User Data",
    href: "/admin/users",
    icon: Persons,
  },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[272px] border-r border-[#e5e7eb] bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-[90px] items-center border-b border-transparent px-8">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0f1]">
            <Droplet
              width={31}
              height={31}
              className="text-[#ed1c24]"
            />
          </div>

          <div className="leading-none">
            <h1 className="text-[24px] font-bold tracking-[-0.8px]">
              Blood<span className="text-[#ed1c24]">Link</span>
            </h1>

            <p className="mt-1 text-[9px] font-bold tracking-[0.4px] text-[#111827]">
              BLOOD DONATION
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col px-5 pt-10">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (item.href !== "/admin" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex w-full items-center gap-4 rounded-xl px-3 py-4 text-left transition ${
                  active
                    ? "bg-[#fff3f4] text-[#ed1c24]"
                    : "text-[#334155] hover:bg-gray-50"
                }`}
              >
                <Icon
                  width={21}
                  height={21}
                />

                <span
                  className={`text-[14px] ${
                    active
                      ? "font-semibold"
                      : "font-medium"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div className="mt-auto border-t border-[#e5e7eb] pb-7 pt-6">
          <button className="flex w-full items-center gap-4 rounded-xl px-3 py-3 text-[#334155] transition hover:bg-gray-50">
            <ArrowRightFromSquare
              width={21}
              height={21}
            />

            <span className="text-[14px] font-medium">
              Logout
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;