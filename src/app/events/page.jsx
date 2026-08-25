"use client";

import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartPulse,
  HelpCircle,
  MapPin,
  Search,
  UserRound,
  Users,
  Mail,
  Phone,
  Droplet,
  CheckCircle2,
} from "lucide-react";


const bloodDrives = [
  {
    month: "MAY",
    day: "25",
    year: "2024",
    title: "City Hospital Drive",
    location: "City Hospital, Dhaka",
    time: "9:00 AM - 2:00 PM",
    registered: "120 / 150 Registered",
    organizer: "Organized by City Hospital",
    days: "5 Days Left",
  },
  {
    month: "MAY",
    day: "28",
    year: "2024",
    title: "University of Dhaka Drive",
    location: "DU Central Campus, Dhaka",
    time: "10:00 AM - 4:00 PM",
    registered: "85 / 120 Registered",
    organizer: "Organized by DU Blood Club",
    days: "8 Days Left",
  },
  {
    month: "JUN",
    day: "02",
    year: "2024",
    title: "Community Blood Camp",
    location: "Mirpur Community Center, Dhaka",
    time: "9:00 AM - 3:00 PM",
    registered: "60 / 100 Registered",
    organizer: "Organized by BloodConnect",
    days: "13 Days Left",
  },
  {
    month: "JUN",
    day: "08",
    year: "2024",
    title: "Green Road Blood Drive",
    location: "Green Road Islamic Center, Dhaka",
    time: "9:30 AM - 1:30 PM",
    registered: "45 / 80 Registered",
    organizer: "Organized by Youth Volunteers",
    days: "19 Days Left",
  },
];

export default function EventsPage() {
  return (
    <>
    

      <main className="min-h-screen bg-white text-gray-900">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-white via-white to-red-50">

          {/* Decorative plus signs */}
          <div className="absolute right-[15%] top-10 text-3xl font-bold text-red-500">
            +
          </div>

          <div className="absolute right-[35%] top-32 text-3xl font-bold text-red-500">
            +
          </div>

          <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-8">

            {/* Breadcrumb */}
            <div className="mb-12 flex items-center gap-3 text-sm">
              <a
                href="/"
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <span>⌂</span>
                Home
              </a>

              <ChevronRight
                size={16}
                className="text-gray-400"
              />

              <span className="text-gray-700">
                Blood Drives
              </span>
            </div>

            {/* Hero Text */}
            <div className="relative max-w-3xl">

              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Upcoming{" "}
                <span className="text-red-600">
                  Blood Drives
                </span>
              </h1>

              <div className="mb-5 h-1 w-8 rounded-full bg-red-600" />

              <p className="max-w-xl text-base leading-7 text-gray-700 md:text-lg">
                Join our upcoming blood drives and be a hero.
                <br />
                Your donation can save up to three lives.
              </p>

            </div>

            {/* Decorative Blood Bag */}
            <div className="pointer-events-none absolute right-10 top-24 hidden h-[250px] w-[300px] lg:block">

              {/* Bag top */}
              <div className="absolute left-[100px] top-4 h-8 w-16 rounded-t-xl border-4 border-gray-300 bg-white/60" />

              {/* Bag */}
              <div className="absolute left-[55px] top-10 h-[145px] w-[125px] rounded-b-[35px] rounded-t-[18px] border-4 border-gray-300 bg-white/70 shadow-lg">

                {/* Blood */}
                <div className="absolute bottom-0 left-0 right-0 h-[105px] rounded-b-[28px] rounded-t-[8px] bg-red-600" />

                {/* Logo */}
                <div className="absolute left-1/2 top-[68px] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                  <Droplet
                    size={27}
                    fill="#dc2626"
                    className="text-red-600"
                  />
                </div>

              </div>

              {/* Tube */}
              <div className="absolute left-[105px] top-[153px] h-[95px] w-1 rotate-[28deg] rounded-full bg-red-600" />

              {/* Heart */}
              <div className="absolute right-0 top-[85px] text-red-600">
                <HeartPulse
                  size={115}
                  strokeWidth={2}
                />
              </div>

            </div>
          </div>
        </section>


        {/* ================= FILTERS ================= */}
        <section className="-mt-2 px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row">

            {/* District */}
            <button className="flex h-12 flex-1 items-center justify-between rounded-lg border border-gray-200 px-4 text-sm text-gray-600 transition hover:border-red-300">

              <span className="flex items-center gap-3">
                <MapPin size={18} />
                All Districts
              </span>

              <ChevronDown size={18} />

            </button>


            {/* Date */}
            <button className="flex h-12 flex-1 items-center justify-between rounded-lg border border-gray-200 px-4 text-sm text-gray-600 transition hover:border-red-300">

              <span className="flex items-center gap-3">
                <CalendarDays size={18} />
                All Dates
              </span>

              <ChevronDown size={18} />

            </button>


            {/* Search */}
            <div className="flex h-12 flex-[1.2] items-center rounded-lg border border-gray-200 px-4">

              <Search
                size={18}
                className="mr-3 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search blood drives..."
                className="w-full bg-transparent text-sm outline-none"
              />

            </div>


            {/* Search Button */}
            <button className="h-12 rounded-lg bg-red-600 px-9 text-sm font-semibold text-white transition hover:bg-red-700">
              Search
            </button>

          </div>
        </section>


        {/* ================= CONTENT ================= */}
        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

          <div className="grid gap-7 lg:grid-cols-[1fr_320px]">

            {/* ================= LEFT ================= */}
            <div>

              {/* Results Header */}
              <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-semibold text-red-600">
                    8
                  </span>{" "}
                  upcoming blood drives
                </p>

                <div className="flex items-center gap-3">

                  <span className="text-sm text-gray-700">
                    Sort by:
                  </span>

                  <button className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:border-red-300">
                    Nearest Date
                    <ChevronDown size={16} />
                  </button>

                </div>

              </div>


              {/* Blood Drive Cards */}
              <div className="space-y-5">

                {bloodDrives.map((drive, index) => (
                  <BloodDriveCard
                    key={index}
                    drive={drive}
                  />
                ))}

              </div>


              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center gap-6">

                <button className="text-gray-600 hover:text-red-600">
                  <ChevronLeft size={20} />
                </button>

                <button className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-sm font-semibold text-white">
                  1
                </button>

                <button className="text-sm hover:text-red-600">
                  2
                </button>

                <button className="text-sm hover:text-red-600">
                  3
                </button>

                <button className="text-gray-600 hover:text-red-600">
                  <ChevronRight size={20} />
                </button>

              </div>

            </div>


            {/* ================= SIDEBAR ================= */}
            <aside className="space-y-6">

              {/* Eligibility */}
              <div className="rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-7 text-white shadow-sm">

                <h2 className="mb-6 text-2xl font-bold">
                  Am I Eligible?
                </h2>

                <div className="space-y-4">

                  {[
                    "Age between 18 - 65 years",
                    "Weight at least 50 kg",
                    "Hemoglobin level > 12.5 g/dl",
                    "Good health & no major illness",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm"
                    >

                      <CheckCircle2
                        size={18}
                        className="shrink-0"
                      />

                      <span>
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

                <a
                  href="/eligibility"
                  className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-gray-100"
                >
                  Check Eligibility
                </a>

              </div>


              {/* Subscribe */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <h2 className="mb-5 text-xl font-bold">
                  Subscribe to Updates
                </h2>

                <p className="mb-5 text-sm leading-6 text-gray-600">
                  Get notified about upcoming blood drives in your area.
                </p>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-3 h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none focus:border-red-500"
                />

                <button className="h-12 w-full rounded-lg bg-red-600 text-sm font-semibold text-white transition hover:bg-red-700">
                  Subscribe
                </button>

              </div>


              {/* Help */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <h2 className="mb-4 text-xl font-bold">
                  Need Help?
                </h2>

                <p className="mb-5 text-sm leading-6 text-gray-600">
                  Our team is here to help you with any questions.
                </p>

                <div className="space-y-4 text-sm text-gray-700">

                  <a
                    href="/resources/faqs"
                    className="flex items-center gap-3 hover:text-red-600"
                  >
                    <HelpCircle size={18} />
                    FAQs
                  </a>

                  <a
                    href="/contact"
                    className="flex items-center gap-3 hover:text-red-600"
                  >
                    <UserRound size={18} />
                    Contact Us
                  </a>

                  <a
                    href="/resources/process"
                    className="flex items-center gap-3 hover:text-red-600"
                  >
                    <HeartPulse size={18} />
                    Blood Donation Process
                  </a>

                </div>

                <a
                  href="/contact"
                  className="mt-6 flex h-11 items-center justify-center rounded-lg border border-red-500 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                >
                  Contact Support
                </a>

              </div>

            </aside>

          </div>
        </section>

      </main>
    </>
  );
}


/* =========================================================
   BLOOD DRIVE CARD
========================================================= */

function BloodDriveCard({ drive }) {
  return (
    <div className="group flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center">

      {/* Date */}
      <div className="flex h-[108px] w-[90px] shrink-0 flex-col overflow-hidden rounded-xl border border-gray-200 text-center">

        <div className="bg-red-50 py-2 text-sm font-bold text-red-600">
          {drive.month}
        </div>

        <div className="flex flex-1 flex-col justify-center">

          <span className="text-2xl font-bold">
            {drive.day}
          </span>

          <span className="text-xs text-gray-500">
            {drive.year}
          </span>

        </div>

      </div>


      {/* Details */}
      <div className="flex-1">

        <div className="mb-2 flex flex-wrap items-start justify-between gap-3">

          <h3 className="text-xl font-bold text-gray-900">
            {drive.title}
          </h3>

          <span className="rounded-md bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
            {drive.days}
          </span>

        </div>


        <div className="space-y-2 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <MapPin size={17} />
            {drive.location}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={17} />
            {drive.time}
          </div>

          <div className="flex items-center gap-2">
            <Users size={17} />
            {drive.registered}
          </div>

        </div>


        <div className="mt-3 inline-block rounded-md bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
          {drive.organizer}
        </div>

      </div>


      {/* Register Button */}
      <button className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-red-500 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white">

        Register Now

        <ChevronRight size={18} />

      </button>

    </div>
  );
}