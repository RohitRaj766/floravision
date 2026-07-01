"use client";

import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";

interface PlantCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  width: number;
  height: number;
  imageClassName?: string;
}

const PlantCard = ({
  name,
  description,
  price,
  image,
  width,
  height,
  imageClassName = "",
}: PlantCardProps) => {
  return (
    <div className="relative h-[470px] w-full">
      {/* Background */}
      <Image
        src="/images/common/Rectangle6.png"
        alt="Card Background"
        fill
        priority
        className="object-contain"
      />

      {/* Plant */}
      <div
        className={`relative z-10 flex justify-center ${imageClassName}`}
      >
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-8 left-8 right-8 z-10 p-5">
        <h3 className="text-2xl  text-white">
          {name}
        </h3>

        <p className="mt-1  text-sm leading-6 text-gray-300">
          {description}
        </p>

        <div className="mt-1 flex items-center justify-between">
          <span className="text-3xl font-semibold text-white">
            Rs. {price}/-
          </span>

          <button className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 text-white transition hover:bg-white hover:text-black">
            <FiShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;