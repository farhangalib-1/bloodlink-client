"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Droplet, Clock3 } from "lucide-react";

const ComingSoon = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-6">
      <div className="w-full max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#e9232b]">
            <Droplet size={30} strokeWidth={2} />
          </div>

          <div className="text-left leading-none">
            <h1 className="text-[27px] font-bold tracking-[-0.8px] text-[#111827]">
              Blood<span className="text-[#e9232b]">Link</span>
            </h1>

            <p className="mt-1 text-[9px] font-bold tracking-[1px] text-[#111827]">
              BLOOD DONATION
            </p>
          </div>
        </div>

        {/* Icon */}
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <Clock3
            size={38}
            strokeWidth={1.7}
            className="text-[#e9232b]"
          />
        </div>

        {/* Content */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#e9232b]">
          Coming Soon
        </p>

        <h2 className="text-4xl font-bold tracking-[-1px] text-[#111827] sm:text-5xl">
          Something amazing is
          <span className="text-[#e9232b]"> coming soon.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-[#64748b]">
          We&apos;re working hard to bring this feature to BloodLink.
          Stay tuned — it will be available soon.
        </p>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e9232b] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d91f27] hover:shadow-md"
        >
          <ArrowLeft size={17} />
          Go Back
        </button>

        {/* Bottom Text */}
        <p className="mt-8 text-xs text-[#94a3b8]">
          BloodLink — Connecting donors with those in need.
        </p>
      </div>
    </main>
  );
};

export default ComingSoon;