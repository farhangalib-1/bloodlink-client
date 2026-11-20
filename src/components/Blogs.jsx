"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, PenLine, Mail } from "lucide-react";





export default function Blogs({ el }) {
   const formattedDate = new Date(el.createdAt).toLocaleDateString(
    "en-BD",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Dhaka",
    }
  );
  const formattedTime = new Date(el.createdAt).toLocaleTimeString(
    "en-BD",
    {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "Asia/Dhaka",
    }
  );
  return (


      <section>

        <div>

          <div>
            <div >
 
                <article
                  key={el._id}
                  className=" h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Image */}
                  <Link href={`/blog/${el._id}`}>
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">

                      <Image
                        src={el.image}
                        alt={el.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                    </div>
                  </Link>


                  {/* Card Content */}
                  <div className="p-5">

                    {/* Category */}
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-600">
                      {el.category}
                    </p>


                    {/* Title */}
                    <Link href={`/blog/${el._id}`}>
                      <h2 className="line-clamp-2 text-base font-bold leading-6 text-gray-900 transition-colors group-hover:text-red-600">
                        {el.title}
                      </h2>
                    </Link>


                    {/* Description */}
                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
                      {el.description}
                    </p>


                    {/* Meta */}
                    <div className="mt-5 flex items-center gap-4 text-xs text-gray-500">

                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        <span>{formattedDate}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock size={13} />
                        <span>{formattedTime}</span>
                      </div>

                    </div>

                  </div>
                </article>
            

            </div>


            {/* =====================
                PAGINATION
            ====================== */}
           

          </div>

         

        </div>

      </section>


  );
}