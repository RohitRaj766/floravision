"use client";

import Image from "next/image";
import PlantCarousel from "../cards/PlantCarousel";

const HeroSection = () => {
  return (
    <section className="relative w-full mt-18">
      <div className="max-w-7xl mx-auto px-5 pt-10 pb-20">
        <div className="flex  items-start ">
          {/* LEFT */}
          <div className="relative w-full">
            <h1 className="text-6xl lg:text-8xl font-bold text-[#E7E7E7] leading-none font-inter">
              Earth&apos;s Exhale
            </h1>

            <p className="mt-5 text-gray-300 w-full text-xl leading-6 ">
              &quot;Earth Exhale&quot; symbolizes the purity and vitality of the Earth&apos;s
              natural <br/> environment and its essential role in sustaining life.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-5 mt-8">
              <button className="px-8 text-2xl cursor-pointer text-white py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
                Buy Now
              </button>

              <button className="flex items-center gap-3  cursor-pointer">
                <div className="w-12 text-white h-12  rounded-full border border-white flex items-center justify-center">
                  <Image src="/images/icons/playbtn.svg" alt="Play Icon" width={12} height={12} />
                </div>

                <span className="text-xl text-white font-indie">Live Demo...</span>
              </button>
            </div>

            {/* Review Card */}
       <div className="relative mt-60 w-90">
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
  <div className="absolute inset-0 p-5 flex flex-col justify-center">
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-full overflow-hidden">

      <Image
        src="/images/testimonials/roni.png"
        alt="avatar"
        width={48}
        height={48}
        className=""
        />
        </div>

      <div>
        <h4 className="font-semibold text-lg text-white">
          Ronnie Hamill
        </h4>

        <div className="flex gap-1 mt-1 w-full h-3">
          <Image src="/images/testimonials/star.png"     width={12} height={8} alt="star" />
          <Image src="/images/testimonials/star.png"     width={12} height={8} alt="star" />
          <Image src="/images/testimonials/star.png"     width={12} height={8} alt="star" />
          <Image src="/images/testimonials/star.png"     width={12} height={8} alt="star" />
          <Image src="/images/testimonials/halfstar.png" width={10} height={8} alt="star" />
        </div>
      </div>
    </div>

    <p className="mt-4 text-sm text-gray-200 leading-5">
      I can&apos;t express how thrilled I am with my new natural plants!
      They bring such a fresh and vibrant energy to my home.
    </p>
  </div>
</div>
          </div>

      {/* RIGHT CARD */}
      <div className="flex justify-end items-end ">
      <PlantCarousel />
      </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;