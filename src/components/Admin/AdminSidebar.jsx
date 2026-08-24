"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


import {
  House,
  Paperclip,
  ArrowRight,
  Droplet,
  Persons,
  Heart,
  Person,
  ChartColumn,
  ArrowRightFromSquare,
} from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

const menuItems = [
  {
    name: "Overview",
    href: "/admin",
    icon: House,
  },
  {
    name: "Managing Requests",
    href: "/admin/requests",
    icon: Paperclip,
  },
  {
    name: "Transaction History",
    href: "/admin/transactions",
    icon: ArrowRight,
  },
  {
    name: "User Data",
    href: "/admin/user-data",
    icon: ChartColumn,
  },
];

const AdminSidebar = () => {
      const router = useRouter();
  const pathname = usePathname();
   const handleSignOut = async()=>{
    await authClient.signOut();
    router.push("/")
  }

  const isActive = (href) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }

    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[272px] flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-[120px] items-center px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="BloodLink Admin"
        >
          <div className="flex h-11 w-11 items-center justify-center text-[#e9232b]">
            <Droplet size={44} />
          </div>

          <div className="leading-none">
            <div className="text-[27px] font-bold tracking-[-0.8px] text-[#111827]">
              Blood<span className="text-[#e9232b]">Link</span>
            </div>

            <div className="mt-1 text-[11px] font-bold tracking-[0.8px] text-[#111827]">
              BLOOD DONATION
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-3">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex h-[58px] items-center gap-5 rounded-xl px-3 transition-all duration-200 ${
                  active
                    ? "bg-[#fff1f2] text-[#e9232b]"
                    : "text-[#334155] hover:bg-gray-50 hover:text-[#e9232b]"
                }`}
              >
                <span
                  className={`flex w-7 shrink-0 items-center justify-center ${
                    active ? "text-[#e9232b]" : "text-[#334155]"
                  }`}
                >
                  <item.icon size={22} />
                </span>

                <span
                  className={`text-[15px] ${
                    active ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom Logout */}
      <div className="px-5 pb-7">
        <div className="mb-5 h-px w-full bg-gray-200" />

        <button
          type="button"
          className="flex h-[58px] w-full items-center gap-5 rounded-xl px-3 text-[#334155] transition-all duration-200 hover:bg-gray-50 hover:text-[#e9232b]"
          onClick={handleSignOut}
        >
          <span className="flex w-7 shrink-0 items-center justify-center">
            <ArrowRightFromSquare size={22} />
          </span>

          <span className="text-[15px] font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;