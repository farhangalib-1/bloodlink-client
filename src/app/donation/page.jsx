"use client";

import {
  Home,
  ShieldCheck,
  LockKeyhole,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/images/Hero-bg.png"
import Image from "next/image";
const DonatePage = () => {
 

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-[1200px] px-5 py-8 lg:px-0">
  
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div>
            <h1 className="text-[40px] font-bold leading-[1.15] tracking-tight text-gray-950 md:text-[46px]">
              Your Donation
              <br />
              <span className="text-[#ed1c24]">Can Save Lives</span>
            </h1>

            <p className="mt-6 max-w-[390px] text-[15px] leading-7 text-[#64748b]">
              Your generosity helps us ensure safe blood for patients in need.
              Every contribution makes a difference.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <ShieldCheck
                  size={19}
                  className="text-[#ed1c24]"
                  strokeWidth={2}
                />

                <span>100% Secure Donation</span>
              </div>

              <div className="hidden h-6 w-px bg-gray-300 sm:block" />

              <div className="text-sm text-[#475569]">
                Powered by{" "}
                <span className="ml-1 text-[20px] font-bold text-[#635bff]">
                  stripe
                </span>
              </div>
            </div>
          </div>

          {/* Empty right side for your image */}
          <div className="hidden min-h-[280px] lg:block">
            <Image src={heroImage} alt="heroimage" width={400} height={400} ></Image>
          </div>
        </div>

        {/* Secure Payment Card */}
        <div className="mt-10 rounded-2xl border border-[#e5e7eb] px-6 py-10 shadow-[0_2px_15px_rgba(0,0,0,0.02)] md:px-16 md:py-12">
          {/* Lock Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0f1]">
            <LockKeyhole
              size={26}
              className="text-[#ed1c24]"
              strokeWidth={2}
            />
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-center text-[21px] font-bold text-gray-950">
            Complete Your Donation Securely
          </h2>

          <p className="mt-3 text-center text-sm text-[#64748b]">
            You will be redirected to Stripe to complete your secure payment.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-6 max-w-[850px] border-t border-gray-200" />

          {/* Stripe */}
          <div className="mt-5 text-center">
            <span className="text-[42px] font-bold tracking-[-3px] text-[#635bff]">
              stripe
            </span>
          </div>

          {/* Security Features */}
          <div className="mx-auto mt-5 flex max-w-[760px] flex-col items-center md:flex-row">
            {/* Secure Payment */}
            <div className="flex flex-1 items-center justify-center gap-2 py-2 text-sm text-[#64748b]">
              <LockKeyhole size={17} />
              <span>Secure Payment</span>
            </div>

            <div className="hidden h-7 w-px bg-gray-300 md:block" />

            {/* PCI DSS */}
            <div className="flex flex-1 items-center justify-center gap-2 py-2 text-sm text-[#64748b]">
              <ShieldCheck size={18} />
              <span>PCI DSS Compliant</span>
            </div>

            <div className="hidden h-7 w-px bg-gray-300 md:block" />

            {/* Trusted */}
            <div className="flex flex-1 items-center justify-center gap-2 py-2 text-sm text-[#64748b]">
              <CheckCircle size={18} />
              <span>Trusted by Millions</span>
            </div>
          </div>

          {/* Payment Button */}
          <div className="mt-8 flex justify-center">
             <form action="/api/checkout_sessions" method="POST">
      <section>
        <button className="flex w-full max-w-[310px] items-center justify-center gap-3 rounded-xl bg-[#ed1c24] px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-[#d81720] hover:shadow-lg" type="submit" role="link">
          Continue to Secure Payment
              <ArrowRight size={20} />
        </button>
      </section>
    </form>
        
          </div>

          {/* Security Message */}
          <div className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-[#64748b]">
            <LockKeyhole size={16} />

            <span>
              You will be redirected to Stripe. Your payment is 100% secure.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;