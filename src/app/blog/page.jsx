import Blogs from '@/components/Blogs';
import { blogs } from '@/lib/actions';
import { Calendar, Clock, ArrowRight, PenLine, Mail } from "lucide-react";
import Link from 'next/link';
const BlogsPage = async () => {
  const allBlogPosts = await blogs();

  console.log(allBlogPosts);

  return (
    <div>
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
      <div className="flex flex-col lg:flex-row mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 gap-10 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-7">
      {allBlogPosts.map((el) => (
        <Blogs key={el._id} el={el} />
      ))}
      </div>

      <div>
         

    
       <aside className="space-y-6 mb-7 ">


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
      </div>


     
    </div>
  );
};

export default BlogsPage;