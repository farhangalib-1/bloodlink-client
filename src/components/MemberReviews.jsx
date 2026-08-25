"use client";

import { useEffect, useState } from "react";

const reviews = [
  { id: 1, name: "Rifat Hossain", role: "Regular Donor", review: "Donating blood is an amazing feeling. It costs nothing but it can save a life.", rating: 5, initials: "RH" },
  { id: 2, name: "Aysha Islam", role: "First Time Donor", review: "The process was quick, safe and very well managed. I will definitely donate again.", rating: 5, initials: "AI" },
  { id: 3, name: "Sakib Ahmed", role: "Regular Donor", review: "It feels good to know that my small act can bring a big smile to someone's face.", rating: 5, initials: "SA" },
  { id: 4, name: "Nusrat Jahan", role: "Blood Recipient", review: "I am incredibly grateful to the donor who helped me when my family needed blood urgently.", rating: 5, initials: "NJ" },
  { id: 5, name: "Tanvir Rahman", role: "Regular Donor", review: "LifeLine made donating blood simple and convenient. I encourage everyone who is eligible to donate.", rating: 5, initials: "TR" },
  { id: 6, name: "Mim Akter", role: "Blood Recipient", review: "Finding the blood I needed was much easier than I expected. I am thankful to everyone who helped.", rating: 5, initials: "MA" },
  { id: 7, name: "Farhan Kabir", role: "Regular Donor", review: "I started donating after realizing how much a single donation can mean to a patient and their family.", rating: 5, initials: "FK" },
  { id: 8, name: "Sumaiya Rahman", role: "Blood Recipient", review: "When my family needed blood urgently, the support from the community gave us hope during a difficult time.", rating: 5, initials: "SR" },
  { id: 9, name: "Arif Mahmud", role: "Regular Donor", review: "The experience has encouraged me to become a regular donor. Knowing that I can help someone is incredibly rewarding.", rating: 5, initials: "AM" },
];

export default function MemberReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Heading */}
        <div className="mb-9 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            What Our <span className="text-[#e51b23]">Members</span> Say
          </h2>
          <div className="mx-auto my-2.5 h-[3px] w-[42px] rounded-full bg-[#e51b23]" />
          <p className="mx-auto max-w-[600px] text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
            Hear from the people who donate blood and those whose lives have been touched by their kindness.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-[18px]">
          {/* Previous Button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous reviews"
            className="flex h-8 w-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-[#e51b23] text-sm text-white transition-all duration-200 hover:scale-105 hover:bg-[#c9141c] active:scale-95 sm:h-9 sm:w-9 sm:min-w-9 sm:text-base"
          >
            &#10094;
          </button>

          {/* Viewport */}
          <div className="w-full overflow-hidden">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
               
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  // Mobile: 100% width (1 Card)
                  // Tablet (md): 50% width (2 Cards)
                  // Desktop (lg): 33.33% width (3 Cards)
                  className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3"
                >
                  <article className="relative min-h-[210px] rounded-xl border border-gray-100 bg-white px-5 py-6 shadow-[0_4px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.07)] sm:min-h-[220px] sm:px-6">
                    {/* Quote Icon */}
                    <div className="absolute left-5 top-2 font-serif text-[42px] font-bold leading-none text-[#e51b23] sm:left-[22px] sm:text-[46px]">
                      &ldquo;
                    </div>

                    {/* Review Text */}
                    <p className="relative z-10 my-5 text-xs leading-6 text-gray-600 sm:text-sm sm:leading-7">
                      {review.review}
                    </p>

                    {/* Member Info */}
                    <div className="flex items-center gap-2.5 border-t border-gray-100 pt-4">
                      {/* Avatar */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-[11px] font-bold text-[#e51b23] sm:h-[42px] sm:w-[42px] sm:text-xs">
                        {review.initials}
                      </div>

                      {/* Details */}
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-0.5 truncate text-xs font-bold text-gray-900 sm:text-sm">
                          {review.name}
                        </h3>
                        <span
                          className={`text-[10px] sm:text-[11px] ${
                            review.role === "Blood Recipient"
                              ? "text-[#e51b23]"
                              : "text-gray-500"
                          }`}
                        >
                          {review.role}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="shrink-0 whitespace-nowrap text-[11px] tracking-[1px] text-[#e51b23] sm:text-[13px]">
                        {"★".repeat(review.rating)}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next reviews"
            className="flex h-8 w-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-[#e51b23] text-sm text-white transition-all duration-200 hover:scale-105 hover:bg-[#c9141c] active:scale-95 sm:h-9 sm:w-9 sm:min-w-9 sm:text-base"
          >
            &#10095;
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="mt-6 flex items-center justify-center gap-[7px]">
          {reviews.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-[7px] rounded-full p-0 transition-all duration-300 ${
                currentIndex === index
                  ? "w-[22px] bg-[#e51b23]"
                  : "w-[7px] bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}