"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    image: "/images/plants/rose1.png",
    width: 600,
    height: 600,
    imageClassName: "-translate-y-24",

    title: "We Have Small And Best O2 Plants Collection's",

    description1:
      'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',

    description2:
      "Many plants can help filter out pollutants and toxins from the air such as formaldehyde, benzene and trichloroethylene. This makes the air cleaner and healthier to breathe.",
  },

  {
    image: "/images/plants/rose2.png",
    width: 600,
    height: 600,
    imageClassName: "-translate-y-24",

    title: "Bring Nature Into Your Home",

    description1:
      "Indoor plants improve air quality while adding a beautiful natural touch to your living space.",

    description2:
      "Our premium collection of oxygen plants helps create a calm, refreshing, and healthier environment.",
  },

  {
    image: "/images/plants/rose3.png",
    width: 600,
    height: 600,
    imageClassName: "-translate-y-24",

    title: "Fresh Air Every Day",

    description1:
      "Decorate your home or office with elegant plants that naturally enhance your surroundings.",

    description2:
      "Easy to maintain and perfect for every space, these plants make wonderful companions.",
  },

  {
    image: "/images/plants/rose4.png",
    width: 600,
    height: 600,
    imageClassName: "-translate-y-24",

    title: "Green Living Starts Here",

    description1:
      "Transform your interiors with lush greenery that complements every décor style.",

    description2:
      "Enjoy cleaner air, reduced stress, and a refreshing atmosphere every day.",
  },
];

export default function OxygenPlants() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#1B2316] py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="relative mx-auto mb-16 w-fit">
          <Image
            src="/images/common/leftcorner.svg"
            alt=""
            width={50}
            height={50}
            className="absolute left-8 -bottom-1"
          />

          <h2 className="px-10 text-6xl font-bold text-white">
            Our Best O2
          </h2>

          <Image
            src="/images/common/rightcorner.svg"
            alt=""
            width={50}
            height={50}
            className="absolute right-8 -top-1"
          />
        </div>

        {/* Card */}
        <div className="relative h-[500px]">
          {/* Background */}
          <Image
            src="/images/common/Rectangle9.png"
            alt=""
            fill
            priority
            className="object-contain"
          />

          <div className="absolute inset-0 grid grid-cols-2 items-center px-14 ">
            {/* Left Image */}
            <div className="flex h-full items-center justify-center">
              <div className="flex h-[600px] w-[600px] items-center justify-center">
                <Image
                  key={slides[current].image}
                  src={slides[current].image}
                  alt=""
                  width={slides[current].width}
                  height={slides[current].height}
                  className={`transition-all duration-500 ${slides[current].imageClassName}`}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex h-fit flex-col justify-center pr-10 -mt-24">
              {/* Fixed Title */}
              <div className="h-20  ">
                <h3 className="text-4xl font-bold leading-tight text-white">
                  {slides[current].title}
                </h3>
              </div>

              {/* Fixed Description */}
              <div className="mt-5 h-60 ">
                <p className="text-lg leading-8 text-gray-300">
                  {slides[current].description1}
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {slides[current].description2}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-10  flex items-center justify-between pr-13 ">
                <button className="cursor-pointer rounded-lg border border-white px-8 py-3 text-white transition hover:bg-white hover:text-black">
                  Explore
                </button>

                <div className="flex items-center gap-6 text-white">
                  <button className="cursor-pointer" onClick={prevSlide}>
                    <FiChevronLeft size={24} />
                  </button>

                  <span>
                    {String(current + 1).padStart(2, "0")}/
                    {String(slides.length).padStart(2, "0")}
                  </span>

                  <button className="cursor-pointer" onClick={nextSlide}>
                    <FiChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Outside Card */}
        <div className="mt-8 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 ${
                current === index
                  ? "h-2 w-8 rounded-full bg-white"
                  : "h-2 w-2 rounded-full bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}