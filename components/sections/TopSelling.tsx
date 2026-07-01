"use client";

import Image from "next/image";
import PlantCard from "../cards/PlantCards";

const plants = [
  {
    name: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.",
    price: "300",
    image: "/images/plants/rose1.png",
    width: 330,
    height: 320,
    imageClassName: "-mt-16",
  },
  {
    name: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes and sizes.",
    price: "380",
    image: "/images/plants/rose3.png",
    width: 360,
    height: 320,
    imageClassName: "-mt-24",
  },
  {
    name: "Cactus",
    description:
      "It is known for their ability to thrive in arid environments.",
    price: "259",
    image: "/images/plants/cactus.png",
    width: 390,
    height: 320,
    imageClassName: "-mt-6",
  },
  {
    name: "Swiss Cheese Plant",
    description:
      "It is a popular tropical houseplant known for its distinctive, perforated leaves.",
    price: "400",
    image: "/images/plants/rose6.png",
    width: 350,
    height: 320,
    imageClassName: "-mt-25",
  },
  {
    name: "Sansevieria Plant",
    description:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "450",
    image: "/images/plants/rose4.png",
    width: 350,
    height: 320,
    imageClassName: "-mt-24",
  },
  {
    name: "Agave Plant",
    description:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "359",
    image: "/images/plants/rose5.png",
    width: 390,
    height: 320,
    imageClassName: "-mt-12",
  },
];

const TopSelling = () => {
  return (
    <section className="w-full bg-[#1B2316] py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="relative mx-auto mb-20 w-fit pb-2">
          <Image
            src="/images/common/leftcorner.svg"
            alt=""
            width={50}
            height={50}
            className="absolute bottom-0 left-7"
          />

          <h2 className="px-10 text-center text-5xl font-bold text-white lg:text-6xl">
            Our Top Selling Plants
          </h2>

          <Image
            src="/images/common/rightcorner.svg"
            alt=""
            width={50}
            height={50}
            className="absolute right-6 top-1"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-16 py-10 md:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <PlantCard
              key={plant.name}
              {...plant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;