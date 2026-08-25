import Image from "next/image";
import Link from "next/link";

import bloodImage from "@/assets/images/blood-3.png";
import blog1 from "@/assets/images/blog-1.png";
import blog2 from "@/assets/images/blog-2.png";

const blogPosts = [
  {
    id: 1,
    title: "5 Benefits of Donating Blood",
    description:
      "Blood donation is not just good for others, it's good for you too.",
    date: "May 15, 2024",
    image: blog1,
  },
  {
    id: 2,
    title: "How Your Blood Saves Lives",
    description:
      "From emergency patients to surgeries, your blood is there to help.",
    date: "May 5, 2024",
    image: blog2,
  },
];

const donationTips = [
  "Eat a healthy meal before donation",
  "Drink plenty of water",
  "Get a good night's sleep",
  "Bring a valid ID with you",
];

export default function BeforeDonate() {
  return (
    <section className="w-full bg-white py-8">
      <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_1.2fr_0.85fr]">

          {/* =========================================================
              BEFORE YOU DONATE
          ========================================================= */}
          <div className="relative min-h-[220px] overflow-hidden rounded-xl bg-[#fafafa] px-6 py-5 shadow-sm">
            <h2 className="mb-5 text-[20px] font-bold text-[#172033]">
              Before You Donate
            </h2>

            {/* Donation tips */}
            <ul className="relative z-10 max-w-[190px] space-y-4 pl-5">
              {donationTips.map((tip, index) => (
                <li
                  key={index}
                  className="list-disc pl-1 text-[12px] leading-[1.45] text-[#555b66] marker:text-[#e3182d]"
                >
                  {tip}
                </li>
              ))}
            </ul>

            {/* Blood image */}
            <div className="absolute bottom-6 right-5 h-[175px] w-[43%]">
              <Image
                src={bloodImage}
                alt="Blood donation illustration"
                fill
                sizes="250px"
                className="object-contain object-right-bottom"
              />
            </div>
          </div>

          {/* =========================================================
              LATEST FROM OUR BLOG
          ========================================================= */}
          <div className="rounded-xl bg-[#fafafa] px-6 py-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[20px] font-bold text-[#172033]">
                Latest from Our Blog
              </h2>

              <Link
                href="/blog"
                className="text-[11px] font-semibold text-[#e3182d] transition hover:text-[#b81224]"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex gap-4"
                >
                  {/* Clickable blog image */}
                  <Link
                    href="/blog"
                    className="relative h-[68px] w-[95px] shrink-0 overflow-hidden rounded-md"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="95px"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>

                  {/* Blog content */}
                  <div className="min-w-0">
                    {/* Clickable blog title */}
                    <Link
                      href="/blog"
                      className="block text-[13px] font-bold leading-[1.3] text-[#202633] transition-colors hover:text-[#e3182d]"
                    >
                      {post.title}
                    </Link>

                    <p className="mt-1 text-[10px] leading-[1.45] text-[#777]">
                      {post.description}
                    </p>

                    <p className="mt-1.5 text-[9px] text-[#999]">
                      {post.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =========================================================
              NEED BLOOD
          ========================================================= */}
          <div className="rounded-xl bg-[#fafafa] px-6 py-5 shadow-sm">
            <h2 className="mb-4 text-[20px] font-bold text-[#172033]">
              Need Blood?
            </h2>

            <p className="mb-6 max-w-[210px] text-[12px] leading-[1.6] text-[#555b66]">
              We're here to help. Request blood or search for donors in your
              area.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-md border border-[#e3182d] bg-white px-5 py-2.5 text-[11px] font-semibold text-[#e3182d] transition-all duration-200 hover:bg-[#e3182d] hover:text-white"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2S5 10 5 14a7 7 0 0 0 14 0c0-4-7-12-7-12z" />
              </svg>

              Request Blood
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}