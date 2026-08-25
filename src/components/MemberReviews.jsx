"use client";

import { useEffect, useState } from "react";
import "./MemberReviews.css";

const reviews = [
  {
    id: 1,
    name: "Rifat Hossain",
    role: "Regular Donor",
    review:
      "Donating blood is an amazing feeling. It costs nothing but it can save a life.",
    rating: 5,
    initials: "RH",
  },
  {
    id: 2,
    name: "Aysha Islam",
    role: "First Time Donor",
    review:
      "The process was quick, safe and very well managed. I will definitely donate again.",
    rating: 5,
    initials: "AI",
  },
  {
    id: 3,
    name: "Sakib Ahmed",
    role: "Regular Donor",
    review:
      "It feels good to know that my small act can bring a big smile to someone's face.",
    rating: 5,
    initials: "SA",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Blood Recipient",
    review:
      "I am incredibly grateful to the donor who helped me when my family needed blood urgently.",
    rating: 5,
    initials: "NJ",
  },
  {
    id: 5,
    name: "Tanvir Rahman",
    role: "Regular Donor",
    review:
      "LifeLine made donating blood simple and convenient. I encourage everyone who is eligible to donate.",
    rating: 5,
    initials: "TR",
  },
  {
    id: 6,
    name: "Mim Akter",
    role: "Blood Recipient",
    review:
      "Finding the blood I needed was much easier than I expected. I am thankful to everyone who helped.",
    rating: 5,
    initials: "MA",
  },
  {
    id: 7,
    name: "Farhan Kabir",
    role: "Regular Donor",
    review:
      "I started donating after realizing how much a single donation can mean to a patient and their family.",
    rating: 5,
    initials: "FK",
  },
  {
    id: 8,
    name: "Sumaiya Rahman",
    role: "Blood Recipient",
    review:
      "When my family needed blood urgently, the support from the community gave us hope during a difficult time.",
    rating: 5,
    initials: "SR",
  },
  {
    id: 9,
    name: "Arif Mahmud",
    role: "Regular Donor",
    review:
      "The experience has encouraged me to become a regular donor. Knowing that I can help someone is incredibly rewarding.",
    rating: 5,
    initials: "AM",
  },
];

export default function MemberReviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Used to restart the auto-slide timer after manual navigation
  const [timerReset, setTimerReset] = useState(0);

  // Create groups of 3 reviews
  const slides = [];

  for (let i = 0; i < reviews.length; i += 3) {
    slides.push(reviews.slice(i, i + 3));
  }

  // Clone the first slide for the seamless loop
  const loopedSlides = [...slides, slides[0]];

  /*
   * Move to the next slide.
   *
   * Incrementing timerReset restarts the 5-second timer.
   */
  const nextSlide = () => {
    setTimerReset((prev) => prev + 1);

    setCurrentSlide((prev) => prev + 1);
  };

  /*
   * Move to the previous slide.
   */
  const previousSlide = () => {
    setTimerReset((prev) => prev + 1);

    if (currentSlide === 0) {
      /*
       * Temporarily jump to the cloned last position.
       */
      setIsTransitioning(false);
      setCurrentSlide(slides.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentSlide(slides.length - 1);
        });
      });

      return;
    }

    setCurrentSlide((prev) => prev - 1);
  };

  /*
   * Handle the cloned first slide.
   *
   * When we reach:
   *
   * [1] [2] [3] [1 COPY]
   *                  ↑
   *
   * We wait for the animation to finish, then
   * silently reset to the real Slide 1.
   */
  useEffect(() => {
    if (currentSlide !== slides.length) {
      return;
    }

    const resetTimer = setTimeout(() => {
      setIsTransitioning(false);
      setCurrentSlide(0);

      /*
       * Re-enable animation on the next render cycle.
       */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }, 650);

    return () => clearTimeout(resetTimer);
  }, [currentSlide, slides.length]);

  /*
   * AUTO SLIDE
   *
   * This timer is recreated whenever timerReset changes.
   *
   * Therefore:
   *
   * Automatic slide
   *      ↓
   * 5 seconds
   *      ↓
   * Next
   *
   * But if the user presses Next:
   *
   * User presses Next
   *      ↓
   * timerReset changes
   *      ↓
   * old timer is destroyed
   *      ↓
   * new 5-second timer starts
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [timerReset]);

  /*
   * Only three real slides exist.
   * The fourth one is just the clone.
   */
  const activeDot =
    currentSlide >= slides.length ? 0 : currentSlide;

  return (
    <section className="member-reviews">
      <div className="member-reviews-container">

        {/* Heading */}
        <div className="section-heading">
          <h2>
            What Our <span>Members</span> Say
          </h2>

          <div className="heading-line"></div>

          <p>
            Hear from the people who donate blood and those whose
            lives have been touched by their kindness.
          </p>
        </div>

        {/* Slider */}
        <div className="reviews-slider">

          {/* Previous Button */}
          <button
            type="button"
            className="review-arrow"
            onClick={previousSlide}
            aria-label="Previous reviews"
          >
            &#10094;
          </button>

          {/* Viewport */}
          <div className="reviews-viewport">

            {/* Track */}
            <div
              className="reviews-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isTransitioning
                  ? "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
              }}
            >
              {loopedSlides.map((slide, slideIndex) => (
                <div
                  className="reviews-slide"
                  key={slideIndex}
                >
                  {slide.map((review) => (
                    <article
                      className="review-card"
                      key={review.id}
                    >
                      {/* Quote */}
                      <div className="quote-icon">
                        &ldquo;
                      </div>

                      {/* Review */}
                      <p className="review-text">
                        {review.review}
                      </p>

                      {/* Member */}
                      <div className="member-info">

                        <div className="member-avatar">
                          {review.initials}
                        </div>

                        <div className="member-details">
                          <h3>{review.name}</h3>

                          <span
                            className={
                              review.role === "Blood Recipient"
                                ? "member-role recipient"
                                : "member-role"
                            }
                          >
                            {review.role}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="rating">
                          {"★".repeat(review.rating)}
                        </div>

                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>

          </div>

          {/* Next Button */}
          <button
            type="button"
            className="review-arrow"
            onClick={nextSlide}
            aria-label="Next reviews"
          >
            &#10095;
          </button>

        </div>

        {/* Dots */}
        <div className="review-dots">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`review-dot ${
                activeDot === index ? "active" : ""
              }`}
              onClick={() => {
                setTimerReset((prev) => prev + 1);
                setIsTransitioning(true);
                setCurrentSlide(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}