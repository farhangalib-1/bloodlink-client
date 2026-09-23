"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Heart,
  ShieldCheck,
  ArrowRight,
  Home,
} from "lucide-react";
import {Droplet} from "@gravity-ui/icons";

const DonationSuccessPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-5 py-12">
      <div className="w-full max-w-[650px]">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-red-500">
             <Droplet />
            </div>

            <div className="leading-none">
              <h1 className="text-[23px] font-bold tracking-tight text-gray-950">
                Blood<span className="text-[#ed1c24]">Link</span>
              </h1>

              <p className="mt-1 text-[12px] font-bold tracking-wide text-red-500">
                BLOOD DONATION
              </p>
            </div>
          </Link>
        </div>

        {/* Success Card */}
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center shadow-[0_5px_30px_rgba(0,0,0,0.04)] md:px-12 md:py-12">
          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0f1]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ed1c24]">
              <CheckCircle2
                size={32}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-[30px] font-bold tracking-tight text-gray-950 md:text-[34px]">
            Donation Successful!
          </h2>

          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-7 text-[#64748b]">
            Thank you for your generous donation. Your contribution can help
            save lives and make a real difference in someone's life.
          </p>

          {/* Donation Confirmation */}
          <div className="mx-auto mt-8 max-w-[480px] rounded-xl border border-[#fee2e2] bg-[#fff8f8] px-5 py-5">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck
                size={19}
                className="text-[#ed1c24]"
              />

              <span className="text-sm font-semibold text-gray-900">
                Payment Successfully Completed
              </span>
            </div>

            <p className="mt-2 text-sm text-[#64748b]">
              Your payment was securely processed through Stripe.
            </p>
          </div>

          {/* Message */}
          <div className="mt-7">
            <p className="text-sm font-medium text-gray-800">
              Every drop counts. ❤️
            </p>

            <p className="mt-1 text-sm text-[#64748b]">
              Thank you for being a hero.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <Home size={17} />
              Back to Home
            </Link>

            <Link
              href="/donation"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#ed1c24] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d81720] hover:shadow-lg"
            >
              Donate Again
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Security */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#94a3b8]">
            <ShieldCheck size={15} />
            <span>Secure payment powered by Stripe</span>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs text-[#94a3b8]">
          © 2026 LifeLine Blood Donation. Every drop counts.
        </p>
      </div>
    </main>
  );
};

export default DonationSuccessPage;