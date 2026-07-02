"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { plants } from "../../data/products";

const PlantCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % plants.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + plants.length) % plants.length);

  return (
    <div className="relative w-90 h-125">
      {/* SVG Background */}
      <Image
        src="/images/common/Rectangle14.svg"
        alt="Card"
        fill
        priority
        className="pointer-events-none object-contain"
      />

      {/* Plant */}
      <div className="absolute left-1/2 -top-12 -translate-x-1/2 z-20 h-70 w-70">
        <Image
          src={plants[current].image}
          alt={plants[current].name}
          width={459}
          height={459}
          priority
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-10 left-10 right-5 z-20 pb-5">
        <p className="text-lg text-gray-300">
          {plants[current].type}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-[28px] leading-none font-light text-white">
            {plants[current].name}
          </h3>

          <button onClick={nextSlide}>
            <FiChevronRight
              size={28}
              className="cursor-pointer transition hover:translate-x-1 text-white"
            />
          </button>
        </div>

        <button className="mt-8  rounded-lg border text-white border-white px-8 py-3 text-2xl cursor-pointer  hover:bg-white hover:text-black transition">
          Buy Now
        </button>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-3">
          {plants.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "h-2 w-6 bg-white"
                  : "h-2 w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Previous Click Area */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-0 h-full w-1/4"
      />

      {/* Next Click Area */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-0 h-full w-1/4"
      />
    </div>
  );
};

export default PlantCarousel;