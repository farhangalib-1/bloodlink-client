"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DonatePage() {
  const router = useRouter();

  const [isFirstTime, setIsFirstTime] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    bloodType: "",
    previousDonationDate: "",
  });

  // Get today's date in YYYY-MM-DD format
  const getToday = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // Get the earliest date allowed for a previous donation.
  // The donor must have waited at least two calendar months.
  const getMinimumDonationDate = () => {
    const date = new Date();

    date.setHours(0, 0, 0, 0);

    // Move back two months
    date.setMonth(date.getMonth() - 2);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove previous error when user starts correcting the form
    setError("");
  };

  const handleFirstTimeChange = (e) => {
    const checked = e.target.checked;

    setIsFirstTime(checked);
    setError("");

    // Clear previous donation date for first-time donors
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        previousDonationDate: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // -----------------------------
    // AGE VALIDATION
    // -----------------------------

    const age = Number(formData.age);

    if (age < 18 || age > 65) {
      setError(
        "You must be between 18 and 65 years old to apply for blood donation."
      );
      return;
    }

    // -----------------------------
    // PREVIOUS DONATION VALIDATION
    // -----------------------------

    if (!isFirstTime) {
      if (!formData.previousDonationDate) {
        setError("Please provide your previous donation date.");
        return;
      }

      const previousDonation = new Date(
        `${formData.previousDonationDate}T00:00:00`
      );

      const minimumDonationDate = new Date(
        `${getMinimumDonationDate()}T00:00:00`
      );

      const today = new Date(`${getToday()}T00:00:00`);

      // Prevent future dates
      if (previousDonation > today) {
        setError("Previous donation date cannot be in the future.");
        return;
      }

      // Check whether two months have passed
      if (previousDonation > minimumDonationDate) {
        setError(
          "You must wait at least two months after your previous blood donation before applying again."
        );
        return;
      }
    }

    // -----------------------------
    // FORM DATA
    // -----------------------------

    const applicationData = {
      ...formData,
      age: Number(formData.age),
      firstTimeDonor: isFirstTime,
      previousDonationDate: isFirstTime
        ? null
        : formData.previousDonationDate,
    };

    // For now, this only prints the application data.
    // Later, this is where we will send it to your database.
    console.log("Donation Application:", applicationData);

    // Redirect after successful validation
    router.push("/donate/success");
  };

  return (
    <main className="min-h-screen bg-white text-[#172033]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fffafa] via-white to-[#fff1f2]">

        {/* Decorative background elements */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />

        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10">

          <div className="max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-600">
              #DonateBlood &nbsp; #SaveLives
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#172033] md:text-5xl">
              Become a{" "}
              <span className="text-red-600">Blood Donor</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Your donation can give someone another chance at life.
              Fill out the form below to apply for blood donation.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          MAIN FORM SECTION
      ========================================================= */}
      <section className="bg-[#fafafa] px-6 py-12 lg:px-10 lg:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">


            {/* =====================================================
                DONATION FORM
            ===================================================== */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:p-10">

              <div className="mb-8">

                <h2 className="text-2xl font-bold text-[#172033]">
                  Donation Application
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Please provide your information accurately before
                  submitting your application.
                </p>

              </div>


              {/* =================================================
                  ERROR MESSAGE
              ================================================= */}
              {error && (
                <div
                  className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
                  role="alert"
                >

                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                    !
                  </div>

                  <p className="text-sm leading-5 text-red-700">
                    {error}
                  </p>

                </div>
              )}


              <form onSubmit={handleSubmit} className="space-y-6">

                {/* =================================================
                    NAME
                ================================================= */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#172033]"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />

                </div>


                {/* =================================================
                    AGE + PHONE
                ================================================= */}
                <div className="grid gap-6 md:grid-cols-2">

                  {/* Age */}
                  <div>

                    <label
                      htmlFor="age"
                      className="mb-2 block text-sm font-semibold text-[#172033]"
                    >
                      Age
                    </label>

                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      min="18"
                      max="65"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />

                    <p className="mt-2 text-xs text-gray-400">
                      Donors must be between 18 and 65 years old.
                    </p>

                  </div>


                  {/* Phone */}
                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#172033]"
                    >
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />

                  </div>

                </div>


                {/* =================================================
                    EMAIL
                ================================================= */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#172033]"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />

                </div>


                {/* =================================================
                    ADDRESS
                ================================================= */}
                <div>

                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-semibold text-[#172033]"
                  >
                    Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your current address"
                    rows={3}
                    required
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />

                </div>


                {/* =================================================
                    BLOOD TYPE
                ================================================= */}
                <div>

                  <label
                    htmlFor="bloodType"
                    className="mb-2 block text-sm font-semibold text-[#172033]"
                  >
                    Blood Type
                  </label>

                  <select
                    id="bloodType"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  >

                    <option value="">
                      Select your blood type
                    </option>

                    <option value="A+">A+</option>
                    <option value="A-">A-</option>

                    <option value="B+">B+</option>
                    <option value="B-">B-</option>

                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>

                    <option value="O+">O+</option>
                    <option value="O-">O-</option>

                  </select>

                </div>


                {/* =================================================
                    PREVIOUS DONATION DATE
                ================================================= */}
                <div>

                  <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">

                    <label
                      htmlFor="previousDonationDate"
                      className="block text-sm font-semibold text-[#172033]"
                    >
                      Previous Donation Date
                    </label>


                    {/* First Time Donor */}
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">

                      <input
                        type="checkbox"
                        checked={isFirstTime}
                        onChange={handleFirstTimeChange}
                        className="h-4 w-4 cursor-pointer accent-red-600"
                      />

                      <span>
                        I'm a first-time donor
                      </span>

                    </label>

                  </div>


                  <input
                    type="date"
                    id="previousDonationDate"
                    name="previousDonationDate"
                    value={formData.previousDonationDate}
                    onChange={handleChange}
                    disabled={isFirstTime}
                    required={!isFirstTime}
                    max={getToday()}
                    className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition ${
                      isFirstTime
                        ? "cursor-not-allowed border-gray-100 bg-gray-100 text-gray-400"
                        : "border-gray-200 bg-white text-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    }`}
                  />


                  {isFirstTime ? (
                    <p className="mt-2 text-xs text-gray-400">
                      Previous donation date is not required for
                      first-time donors.
                    </p>
                  ) : (
                    <p className="mt-2 text-xs text-gray-400">
                      You must wait at least two months between blood
                      donations.
                    </p>
                  )}

                </div>


                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}
                <div className="pt-3">

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#e30613] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-red-200 transition hover:bg-[#c80511] hover:shadow-lg active:scale-[0.99]"
                  >
                    Apply for Donation
                  </button>

                </div>


                {/* Disclaimer */}
                <p className="text-center text-xs leading-5 text-gray-400">
                  By submitting this form, you confirm that the
                  information provided is accurate.
                </p>

              </form>

            </div>


            {/* =====================================================
                RIGHT SIDEBAR
            ===================================================== */}
            <aside className="space-y-6">


              {/* =================================================
                  ELIGIBILITY CARD
              ================================================= */}
              <div className="rounded-2xl bg-gradient-to-br from-[#e30613] to-[#c9000c] p-7 text-white shadow-lg">

                <h3 className="text-xl font-bold">
                  Am I Eligible?
                </h3>

                <p className="mt-2 text-sm leading-6 text-red-50">
                  Make sure you meet the basic requirements before
                  applying to donate blood.
                </p>


                <div className="mt-6 space-y-4">

                  <div className="flex items-start gap-3">

                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-red-600">
                      ✓
                    </span>

                    <span className="text-sm">
                      Age between 18 – 65 years
                    </span>

                  </div>


                  <div className="flex items-start gap-3">

                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-red-600">
                      ✓
                    </span>

                    <span className="text-sm">
                      Weight at least 50 kg
                    </span>

                  </div>


                  <div className="flex items-start gap-3">

                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-red-600">
                      ✓
                    </span>

                    <span className="text-sm">
                      Hemoglobin level above 12.5 g/dl
                    </span>

                  </div>


                  <div className="flex items-start gap-3">

                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-red-600">
                      ✓
                    </span>

                    <span className="text-sm">
                      Good health & no major illness
                    </span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  EVERY DROP MATTERS CARD
              ================================================= */}
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">

                  <span className="text-xl text-red-600">
                    ♥
                  </span>

                </div>


                <h3 className="text-lg font-bold text-[#172033]">
                  Every Drop Matters
                </h3>


                <p className="mt-2 text-sm leading-6 text-gray-500">
                  A single blood donation can help save up to three
                  lives. Your small act can make a huge difference
                  to someone in need.
                </p>


                <div className="mt-5 border-t border-gray-100 pt-5">

                  <p className="text-sm font-semibold text-[#172033]">
                    Together, we save lives.
                  </p>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}