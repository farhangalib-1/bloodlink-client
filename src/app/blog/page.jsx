"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, PenLine, Mail } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Things to Know Before Donating Blood",
    category: "Donation Tips",
    description:
      "New to blood donation? Here are 10 essential things every donor should know before donating blood.",
    date: "May 10, 2024",
    readTime: "5 min read",
    image: "/assets/images/blog-1.png",
  },
  {
    id: 2,
    title: "How a Single Donation Can Save Multiple Lives",
    category: "Impact Stories",
    description:
      "Your single act of kindness can create a ripple of hope. Here's how one blood donation can help save multiple lives.",
    date: "May 5, 2024",
    readTime: "4 min read",
    image: "/assets/images/blog-2.png",
  },
  {
    id: 3,
    title: "Meet Farhana: A Regular Blood Donor",
    category: "Donor Stories",
    description:
      "Farhana has been donating blood for over 3 years. Here's what motivates her to keep giving.",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    image: "/assets/images/blood-3.png",
  },
  {
    id: 4,
    title: "Interesting Facts About Blood You Didn't Know",
    category: "Health & Facts",
    description:
      "Blood is more than just red. Discover some amazing facts about blood, its components, and why it matters.",
    date: "Apr 20, 2024",
    readTime: "4 min read",
    image: "/assets/images/blog-2.png",
  },
  {
    id: 5,
    title: "Our Successful Blood Drive at Daffodil University",
    category: "Community",
    description:
      "A huge thank you to everyone who participated and made our recent blood drive a success.",
    date: "Apr 15, 2024",
    readTime: "3 min read",
    image: "/assets/images/blog-1.png",
  },
  {
    id: 6,
    title: "Why There Is Always a Need for Blood Donors",
    category: "Awareness",
    description:
      "The need for blood is constant and unpredictable. Here's why regular blood donors are so important.",
    date: "Apr 10, 2024",
    readTime: "5 min read",
    image: "/assets/images/blood-3.png",
  },
  {
    id: 7,
    title: "How to Prepare for Your First Blood Donation",
    category: "Donation Tips",
    description:
      "Planning to donate blood for the first time? Follow these simple steps to make your experience comfortable.",
    date: "Apr 5, 2024",
    readTime: "5 min read",
    image: "/assets/images/blog-1.png",
  },
  {
    id: 8,
    title: "The Importance of Regular Blood Donation",
    category: "Awareness",
    description:
      "Regular blood donors play an important role in keeping hospitals and emergency services prepared.",
    date: "Mar 30, 2024",
    readTime: "4 min read",
    image: "/assets/images/blog-2.png",
  },
  {
    id: 9,
    title: "Blood Donation: Myths vs Facts",
    category: "Health & Facts",
    description:
      "Let's clear up some of the most common misconceptions surrounding blood donation.",
    date: "Mar 25, 2024",
    readTime: "6 min read",
    image: "/assets/images/blood-3.png",
  },
];

const popularPosts = blogPosts.slice(0, 3);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* =========================
          PAGE HEADER / BREADCRUMB
      ========================== */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          

          <div className="mt-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Blogs
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Stories, updates and insights about blood donation, our
              community and the impact we create together.
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          MAIN BLOG SECTION
      ========================== */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_305px]">

          {/* =====================
              BLOG POSTS
          ====================== */}
          <div>

            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing <span className="font-medium text-gray-900">1–9</span>{" "}
                of <span className="font-medium text-gray-900">32</span> blogs
              </p>
            </div>


            {/* Blog Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Image */}
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">

                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                    </div>
                  </Link>


                  {/* Card Content */}
                  <div className="p-5">

                    {/* Category */}
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-600">
                      {post.category}
                    </p>


                    {/* Title */}
                    <Link href={`/blog/${post.id}`}>
                      <h2 className="line-clamp-2 text-base font-bold leading-6 text-gray-900 transition-colors group-hover:text-red-600">
                        {post.title}
                      </h2>
                    </Link>


                    {/* Description */}
                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
                      {post.description}
                    </p>


                    {/* Meta */}
                    <div className="mt-5 flex items-center gap-4 text-xs text-gray-500">

                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        <span>{post.date}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock size={13} />
                        <span>{post.readTime}</span>
                      </div>

                    </div>

                  </div>
                </article>
              ))}

            </div>


            {/* =====================
                PAGINATION
            ====================== */}
            <div className="mt-8 flex items-center justify-center gap-2">

              <button
                disabled
                className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-400"
              >
                ‹
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-sm font-medium text-white">
                1
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-sm text-gray-700 transition hover:border-red-500 hover:text-red-600">
                2
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-sm text-gray-700 transition hover:border-red-500 hover:text-red-600">
                3
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-sm text-gray-700 transition hover:border-red-500 hover:text-red-600">
                4
              </button>

              <span className="flex h-9 w-9 items-center justify-center text-gray-500">
                ...
              </span>

              <button className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-sm text-gray-700 transition hover:border-red-500 hover:text-red-600">
                11
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:border-red-500 hover:text-red-600">
                ›
              </button>

            </div>

          </div>


          {/* =========================
              RIGHT SIDEBAR
          ========================== */}
          <aside className="space-y-6">


            {/* =====================
                WRITE A BLOG
            ====================== */}
            <div className="rounded-xl border border-red-100 bg-red-50 p-6">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-600 shadow-sm">
                <PenLine size={22} />
              </div>

              <h2 className="text-lg font-bold text-gray-900">
                Share Your Story
              </h2>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Have a story, experience or useful information about blood
                donation? Share it with the BloodLink community.
              </p>

              <Link
                href="/blogpost"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700"
              >
                Write a Blog
                <ArrowRight size={16} />
              </Link>

            </div>


            {/* =====================
                POPULAR POSTS
            ====================== */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

              <h2 className="mb-5 text-lg font-bold text-gray-900">
                Popular Posts
              </h2>

              <div className="space-y-4">

                {popularPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group flex gap-3"
                  >

                    {/* Thumbnail */}
                    <div className="relative h-14 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">

                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                    </div>


                    {/* Text */}
                    <div className="min-w-0">

                      <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-900 transition-colors group-hover:text-red-600">
                        {post.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {post.date}
                      </p>

                    </div>

                  </Link>
                ))}

              </div>

            </div>


            {/* =====================
                NEWSLETTER
            ====================== */}
            <div className="rounded-xl bg-red-50 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-red-200 bg-white text-red-600">
                  <Mail size={22} />
                </div>

                <div>
                  <h2 className="text-base font-bold text-gray-900">
                    Stay Updated
                  </h2>

                  <p className="mt-2 text-sm leading-5 text-gray-500">
                    Subscribe to our newsletter and get the latest updates and
                    stories.
                  </p>
                </div>

              </div>
              <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700">
                Subscribe Now
                <ArrowRight size={16} />
              </button>
            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}