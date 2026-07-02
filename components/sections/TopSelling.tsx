"use client";

import Image from "next/image";
import { topSellingPlants } from "../../data/products";
import { SECTION_DECORATIONS, SECTION_HEADINGS } from "../../lib/constants";
import PlantCard from "../cards/PlantCards";

const TopSelling = () => {
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
            className="absolute bottom-0 left-2 sm:left-3 lg:left-7 w-6 sm:w-8 lg:w-[50px]"
          />

          <h2 className="px-5 sm:px-8 lg:px-10 text-center text-xl sm:text-4xl lg:text-6xl font-bold text-white">
            {SECTION_HEADINGS.topSelling}
          </h2>

          <Image
            src={SECTION_DECORATIONS.rightCorner}
            alt=""
            width={50}
            height={50}
            className="absolute right-0 sm:right-3 lg:right-6 -top-0 w-6 sm:w-8 lg:w-[50px]"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 sm:gap-y-24 gap-x-6 py-6 sm:py-8 lg:py-10">
          {topSellingPlants.map((plant) => (
            <PlantCard key={plant.name} {...plant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;