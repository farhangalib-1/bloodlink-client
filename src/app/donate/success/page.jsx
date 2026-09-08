import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#172033]">

      {/* Success Section */}
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16">

        <div className="w-full max-w-2xl">

          {/* Success Card */}
          <div className="rounded-2xl border border-gray-100 bg-white px-6 py-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:px-12">

            {/* Success Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e30613] text-3xl font-bold text-white">
                ✓
              </div>
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-3xl font-extrabold tracking-tight text-[#172033] md:text-4xl">
              Application Submitted!
            </h1>

            {/* Message */}
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
              Thank you for your willingness to donate blood and help
              save lives. Your donation application has been successfully
              submitted.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-gray-600">
              Our team will review your application and contact you after
              it has been approved.
            </p>

            {/* Divider */}
            <div className="mx-auto my-8 h-px max-w-md bg-gray-100" />

            {/* Reminder */}
            <div className="mx-auto max-w-md rounded-xl bg-red-50 px-5 py-4">
              <p className="text-sm leading-6 text-red-700">
                Please keep your phone available so our team can contact
                you regarding your donation application.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/"
                className="rounded-lg bg-[#e30613] px-6 py-3 text-sm font-bold text-white shadow-md shadow-red-200 transition hover:bg-[#c80511]"
              >
                Back to Home
              </Link>

              <Link
                href="/events"
                className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-[#172033] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                View Blood Drives
              </Link>

            </div>

          </div>

          {/* Bottom Message */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Every drop counts. Your donation can save lives.
          </p>

        </div>

      </section>
    </main>
  );
}