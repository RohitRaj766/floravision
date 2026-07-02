"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";
import { SECTION_BACKGROUNDS, SECTION_DECORATIONS, SECTION_HEADINGS } from "../../lib/constants";
import type { TestimonialData } from "../../types/testimonials";

const ReviewCard = ({
  name,
  review,
  image,
}: TestimonialData) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[320px] lg:h-[340px]">
      {/* Card Background */}
      <Image
        src={SECTION_BACKGROUNDS.testimonialCard}
        alt="Rectanglereview"
        fill
        className="object-contain"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 lg:px-0">
        <div className="w-full max-w-[320px] mx-auto lg:w-80 lg:left-8 lg:top-15">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src={image}
                alt={name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                {name}
              </h3>

              <div className="mt-1 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={11}
                    className="text-yellow-400 sm:w-3 sm:h-3"
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-6 lg:leading-7 text-gray-300 px-2 sm:px-4 py-2">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full bg-[#1B2316] py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        {/* Heading */}
        <div className="relative mx-auto mb-12 sm:mb-16 lg:mb-20 w-fit pb-2">
          <Image
            src={SECTION_DECORATIONS.leftCorner}
            alt=""
            width={50}
            height={50}
            className="absolute bottom-1 left-1 sm:left-3 lg:left-7 w-6 sm:w-8 lg:w-[50px]"
          />

          <h2 className="px-5 sm:px-8 lg:px-10 text-center text-2xl sm:text-4xl lg:text-6xl font-bold text-white">
            {SECTION_HEADINGS.testimonials}
          </h2>

          <Image
            src={SECTION_DECORATIONS.rightCorner}
            alt=""
            width={50}
            height={50}
            className="absolute right-1 sm:right-3 lg:right-7 -top-0.5 w-6 sm:w-8 lg:w-[50px]"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 gap-x-6">
          {testimonials.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;