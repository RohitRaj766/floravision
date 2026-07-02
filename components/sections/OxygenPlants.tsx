"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { slides } from "../../data/products";


export default function OxygenPlants() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#1B2316] py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="relative mx-auto mb-10 sm:mb-14 lg:mb-16 w-fit">
          <Image
            src="/images/common/leftcorner.svg"
            alt=""
            width={50}
            height={50}
            className="absolute left-2 -bottom-2 sm:left-4 lg:left-6 lg:-bottom-2 w-6 sm:w-8 lg:w-[50px]"
          />

          <h2 className="px-5 sm:px-8 lg:px-10 text-3xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            Our Best O2
          </h2>

          <Image
            src="/images/common/rightcorner.svg"
            alt=""
            width={50}
            height={50}
            className="absolute right-2 -top-1 sm:right-4 lg:right-6 sm:-top-1.5 w-6 sm:w-8 lg:w-[50px]"
          />
        </div>

        {/* Card */}
        <div className="relative hidden lg:block h-125">
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

{/* Mobile & Tablet Layout */}
<div className="lg:hidden">
  <div className="relative rounded-3xl overflow-hidden">
    <Image
      src="/images/common/Rectangle9.png"
      alt=""
      fill
      className="object-cover"
    />

    <div className="relative px-6 py-10">

      {/* Plant */}
      <div className="flex justify-center">
        <Image
          key={slides[current].image}
          src={slides[current].image}
          alt=""
          width={300}
          height={300}
          className="w-[220px] sm:w-[280px] md:w-[340px] h-auto"
        />
      </div>

      {/* Content */}
      <div className="mt-6 text-center">

        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          {slides[current].title}
        </h3>

        <p className="mt-5 text-sm sm:text-base leading-7 text-gray-300">
          {slides[current].description1}
        </p>

        <p className="mt-5 text-sm sm:text-base leading-7 text-gray-300">
          {slides[current].description2}
        </p>

      </div>

      {/* Bottom */}
      <div className="mt-8 flex flex-col gap-6 items-center">

        <button className="border border-white px-8 py-3 rounded-lg text-white hover:bg-white hover:text-black transition">
          Explore
        </button>

        <div className="flex items-center gap-6 text-white">

          <button onClick={prevSlide}>
            <FiChevronLeft size={24} />
          </button>

          <span>
            {String(current + 1).padStart(2, "0")}/
            {String(slides.length).padStart(2, "0")}
          </span>

          <button onClick={nextSlide}>
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