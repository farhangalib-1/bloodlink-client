"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { Bell, ChevronDown } from "lucide-react";

const AdminHeader = () => {
     const { data: session } = authClient.useSession()
      const user = session?.user
      
  return (
    <header className="h-[90px] border-b border-gray-200 bg-white lg:left-[272px]">
      <div className="flex h-full items-center justify-between px-8">
        {/* Left - Page Title */}
        <h1 className="text-[22px] font-semibold tracking-[-0.3px] text-[#111827]">
          Dashboard
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Notification */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#334155] transition hover:bg-gray-50 hover:text-[#e9232b]"
            aria-label="Notifications"
          >
            <Bell size={23} strokeWidth={1.8} />

            {/* Notification Dot */}
            <span className="absolute right-[7px] top-[6px] h-2 w-2 rounded-full bg-[#e9232b]" />
          </button>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-200" />

          {/* Admin Profile */}
          <button
            type="button"
            className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition hover:bg-gray-50"
          >
            {/* Avatar */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f4f6] text-[17px] font-semibold text-[#111827]">
              <Avatar>
                        <Avatar.Image
                          alt="Junior Garcia"
                          src={user?.image}
                          className="border-2 bg-white border-red-500 rounded-full p-0.5"
                        />
                        <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                      </Avatar>
            </div>

            {/* Admin Name */}
            <span className="text-[14px] font-medium text-[#111827]">
              {user?.name}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;