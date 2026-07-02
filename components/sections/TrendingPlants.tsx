"use client";

import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { trendingPlants } from "../../data/products";
import { SECTION_DECORATIONS, SECTION_HEADINGS } from "../../lib/constants";
import type { TrendingPlantCardData } from "../../types/products";

const TrendingPlantFeatureCard = ({
  title,
  description,
  price,
  image,
  imageAlt,
  width,
  height,
  backgroundImage,
  reverseLayout = false,
  imageClassName = "",
}: TrendingPlantCardData) => {
  return (
    <div className="relative w-full h-auto min-h-140 sm:min-h-160 lg:h-105 lg:min-h-0">
      <Image
        src={backgroundImage}
        alt="Card Background"
        fill
        priority
        className="object-cover hidden lg:flex lg:object-contain"
      />

      <div
        className={`relative rounded-4xl border border-amber-100 backdrop-blur-lg flex flex-col ${reverseLayout ? "lg:flex-row-reverse lg:px-14" : "lg:flex-row lg:pr-3"} h-full items-center justify-start lg:justify-between px-4 sm:px-8 py-10 sm:py-12 lg:py-0`}
      >
        <div className="flex w-full lg:w-1/2 justify-center mt-2 sm:mt-0">
          <Image
            src={image}
            alt={imageAlt}
            width={width}
            height={height}
            className={`object-contain w-44 sm:w-64 md:w-80 lg:w-600 ${imageClassName}`}
          />
        </div>

        <div className={`w-full lg:w-[45%] text-white text-center lg:text-left mt-5 sm:mt-6 lg:mt-0 ${reverseLayout ? "" : "lg:pr-2"}`}>
          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug sm:leading-tight px-2 sm:px-0">
            {title}
          </h3>

          <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base leading-6 lg:leading-7 text-gray-300 px-1 sm:px-0">
            {description}
          </p>

          <h4 className="mt-5 sm:mt-6 lg:mt-8 text-2xl sm:text-4xl lg:text-5xl font-bold">
            Rs. {price}/-
          </h4>

          <div className="mt-5 sm:mt-6 lg:mt-8 flex justify-center lg:justify-start items-center gap-3 sm:gap-4 lg:gap-5">
            <button className="rounded-xl border border-white px-4 sm:px-7 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base lg:text-lg transition hover:bg-white hover:text-black">
              Explore
            </button>

            <button
              aria-label="Add to cart"
              title="Add to cart"
              className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl border border-white transition hover:bg-white hover:text-black"
            >
              <FiShoppingBag className="text-lg lg:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingPlants = () => {
  return (
    <section className="max-w-7xl mx-auto -mt-4 sm:-mt-6 lg:-mt-10 pb-10 px-3 sm:px-6 lg:px-0">
      {/* Heading */}
      <div className="relative flex justify-center items-center py-6 sm:py-10 lg:py-12">
        <div className="relative w-fit mx-auto pb-2">
          <Image
            src={SECTION_DECORATIONS.leftCorner}
            alt=""
            width={50}
            height={50}
            className="absolute left-2 bottom-1 sm:left-3 lg:left-7 lg:bottom-4 w-5 sm:w-8 lg:w-12.5"
          />

          <h2 className="px-4 sm:px-8 lg:px-10 text-xl sm:text-4xl lg:text-6xl font-bold text-white text-center leading-tight sm:leading-normal">
            {SECTION_HEADINGS.trendingPlants}
          </h2>

          <Image
            src={SECTION_DECORATIONS.rightCorner}
            alt=""
            width={50}
            height={50}
            className="absolute right-2 sm:right-3 lg:right-7 top-0 lg:top-4 w-5 sm:w-8 lg:w-12.5"
          />
        </div>
      </div>

      <div className="space-y-10 sm:space-y-14 lg:space-y-20 mt-8 sm:mt-10 lg:mt-12">
        {trendingPlants.map((plant) => (
          <TrendingPlantFeatureCard key={plant.price} {...plant} />
        ))}
      </div>
    </section>
  );
};

export default TrendingPlants;