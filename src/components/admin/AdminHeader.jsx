"use client";

import {
  Bell,
  ChevronDown,
} from "@gravity-ui/icons";

const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-30 flex h-[90px] items-center justify-between border-b border-[#e5e7eb] bg-white px-5 md:px-8 lg:px-9">
      <h2 className="text-[21px] font-bold text-[#111827]">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">
        {/* Notification */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-50">
          <Bell
            width={23}
            height={23}
            className="text-[#334155]"
          />

          <span className="absolute right-[8px] top-[7px] h-2 w-2 rounded-full bg-[#ed1c24]" />
        </button>

        {/* Admin */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f2f4] text-[17px] font-semibold text-[#111827]">
            A
          </div>

          <div className="hidden md:block">
            <p className="text-[14px] font-semibold text-[#111827]">
              Admin
            </p>
          </div>

          <ChevronDown
            width={17}
            height={17}
            className="text-[#334155]"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;