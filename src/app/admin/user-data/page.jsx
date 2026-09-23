"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import avatar from "@/assets/images/avatar.jpg";
import Image from "next/image";
import { allUser } from "@/lib/actions";
import { DeleteBtn } from "./DeleteBtn";

const UserDataPage = () => {
  const [user, setUser] = useState([]);

  const userData = async () => {
    const res = await allUser();
    setUser(res);
  };

  useEffect(() => {
    userData();
  }, []);

  const allUserInfo = user.filter((el) => el.role !== "admin");

  return (
    <main className="min-h-screen bg-[#fafafa] px-5 py-8 md:px-8">

      <div className="mb-5">
        <h1 className="text-[28px] font-bold tracking-[-0.7px] text-[#111827] md:text-[32px]">
          All User Data
        </h1>

        <p className="mt-1.5 text-[13px] text-[#64748b] md:text-[14px]">
          View and manage all user information registered on the platform
        </p>
      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {/* Desktop Table */}
        <div className="overflow-x-hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-[#fcfcfc] text-left">
                <th className="w-[45px] px-2 py-2.5 text-[10px] font-semibold text-[#334155]">
                  Sl. no
                </th>

                <th className="w-[65px] px-2 py-2.5 text-[10px] font-semibold text-[#334155]">
                  Profile
                </th>

                <th className="w-[100px] px-2 py-2.5 text-[10px] font-semibold text-[#334155]">
                  Name
                </th>

                <th className="w-[45px] px-2 py-2.5 text-[10px] font-semibold text-[#334155]">
                  Age
                </th>

                <th className="w-[70px] px-2 py-2.5 text-center text-[10px] font-semibold text-[#334155]">
                  Blood Group
                </th>

                <th className="w-[65px] px-2 py-2.5 text-[10px] font-semibold text-[#334155]">
                  Gender
                </th>

                <th className="w-[155px] px-2 py-2.5 text-[10px] font-semibold text-[#334155]">
                  E-mail
                </th>

                <th className="w-[60px] px-2 py-2.5 text-center text-[10px] font-semibold text-[#334155]">
                  Role
                </th>

                {/* Combined Location */}
                <th className="w-[150px] px-2 py-2.5 text-[10px] font-semibold text-[#334155]">
                  Location
                </th>

                <th className="w-[105px] px-2 py-2.5 text-[10px] font-semibold text-[#334155]">
                  Mobile Number
                </th>


                <th className="w-[65px] px-2 py-2.5 text-center text-[10px] font-semibold text-[#334155]">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {allUserInfo.map((el, index) => (
                <tr
                  key={el._id}
                  className="border-b border-gray-100 last:border-0"
                >
                  {/* Serial */}
                  <td className="px-2 py-2.5 text-[10px] text-[#334155]">
                    {index + 1}
                  </td>

                  {/* Profile Image */}
                  <td className="px-2 py-2.5">
                    <Image
                      src={el.image || avatar}
                      width={42}
                      height={42}
                      alt="profileimage"
                      className="h-9 w-9 rounded-lg object-cover"
                    />
                  </td>

                  {/* Name */}
                  <td className="truncate px-2 py-2.5 text-[11px] font-semibold text-[#111827]">
                    {el.name}
                  </td>

                  {/* Age */}
                  <td className="px-2 py-2.5 text-[11px] text-[#334155]">
                    {el.age}
                  </td>

                  {/* Blood Group */}
                  <td className="px-2 py-2.5 text-center text-[11px] text-[#334155]">
                    {el.bloodGroup}
                  </td>

                  {/* Gender */}
                  <td className="px-2 py-2.5 text-[11px] text-[#334155]">
                    {el.gender}
                  </td>

                  {/* Email */}
                  <td className="truncate px-2 py-2.5 text-[11px] text-[#334155]">
                    {el.email}
                  </td>

                  {/* Role */}
                  <td className="px-2 py-2.5 text-center text-[11px] text-[#334155]">
                    {el.role}
                  </td>

                  {/* Location */}
                  <td className="px-2 py-2.5 text-[10px] text-[#475569]">
                    <ul className="list-disc space-y-0.5 pl-4">
                      <li>
                        <span className="font-medium text-[#334155]">
                          Division:
                        </span>{" "}
                        {el.division}
                      </li>

                      <li>
                        <span className="font-medium text-[#334155]">
                          District:
                        </span>{" "}
                        {el.district}
                      </li>

                      <li>
                        <span className="font-medium text-[#334155]">
                          Upazila:
                        </span>{" "}
                        {el.upazila}
                      </li>
                    </ul>
                  </td>

                  {/* Mobile Number */}
                  <td className="px-2 py-2.5 text-[10px] text-[#334155]">
                    {el.mobileNumber}
                  </td>


                  {/* Action */}
                  <td className="px-2 py-2.5 text-center">
                    <DeleteBtn el={el} refreshUsers={userData} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom / Pagination */}
        <div className="flex flex-col gap-4 px-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-[#475569]">
            Showing 1 to 10 of {allUserInfo.length} users
          </p>

          <div className="flex items-center gap-1">
            {/* Previous */}
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50"
            >
              <ChevronLeft size={15} />
            </button>

            {/* Active Page */}
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ed1c24] text-[11px] font-semibold text-white"
            >
              1
            </button>

            {/* Pages */}
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

            {/* Last Page */}
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-[11px] text-gray-700 transition hover:bg-gray-50"
            >
              126
            </button>

            {/* Next */}
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

export default UserDataPage;