"use client";

import Image from "next/image";
import PlantCarousel from "../cards/PlantCarousel";

const HeroSection = () => {
  return (
    <section className="relative w-full mt-10 sm:mt-14 lg:mt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* LEFT */}
          <div className="relative w-full text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#E7E7E7] leading-tight lg:leading-none font-inter">
              Earth&apos;s Exhale
            </h1>

            <p className="mt-5 text-gray-300 w-full text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 max-w-xl mx-auto lg:mx-0">
              &quot;Earth Exhale&quot; symbolizes the purity and vitality of the
              Earth&apos;s natural environment and its essential role in
              sustaining life.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-5 mt-8">
              <button className="px-6 sm:px-8 text-lg sm:text-xl lg:text-2xl cursor-pointer text-white py-2.5 sm:py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
                Buy Now
              </button>

              <button className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white flex items-center justify-center">
                  <Image
                    src="/images/icons/playbtn.svg"
                    alt="Play Icon"
                    width={12}
                    height={12}
                  />
                </div>

                <span className="text-base sm:text-lg lg:text-xl text-white font-indie">
                  Live Demo...
                </span>
              </button>
            </div>

            {/* Review Card */}
            <div className="relative mt-14 sm:mt-20 lg:mt-45 w-full max-w-[320px] sm:max-w-[360px] lg:w-90 mx-auto lg:mx-0">
              {/* Card background */}
              <Image
                src="/images/hero/Rectangle15.png"
                alt="Card"
                width={300}
                height={200}
                className="w-full h-auto"
                priority
              />

              {/* Content overlay */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testimonials/roni.png"
                      alt="avatar"
                      width={48}
                      height={48}
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-white">
                      Ronnie Hamill
                    </h4>

                    <div className="flex gap-1 mt-1 h-3">
                      <Image
                        src="/images/testimonials/star.png"
                        width={12}
                        height={8}
                        alt="star"
                      />
                      <Image
                        src="/images/testimonials/star.png"
                        width={12}
                        height={8}
                        alt="star"
                      />
                      <Image
                        src="/images/testimonials/star.png"
                        width={12}
                        height={8}
                        alt="star"
                      />
                      <Image
                        src="/images/testimonials/star.png"
                        width={12}
                        height={8}
                        alt="star"
                      />
                      <Image
                        src="/images/testimonials/halfstar.png"
                        width={10}
                        height={8}
                        alt="half star"
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-200 leading-5">
                  I can&apos;t express how thrilled I am with my new natural
                  plants! They bring such a fresh and vibrant energy to my
                  home.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end items-center w-full lg:w-auto mt-8 lg:mt-0">
            <PlantCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;