"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Shelly Russel",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    image: "/images/testimonials/shely.png",
    width: 120,
    height: 120,
  
  },
  {
    name: "Lula Rolfson",
    review:
      "Each one has its own unique charm and personality, and they've already started brightening up my space. ",
    image: "/images/testimonials/lula.jpg",
    width: 120,
    height: 120,

  },
  {
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    image: "/images/testimonials/carol.png",
    width: 120,
    height: 120,
    
    badge: true,
  },
];

interface ReviewCardProps {
  name: string;
  review: string;
  image: string;
  width: number;
  height: number;
  imageClassName?: string;
  badge?: boolean;
}

const ReviewCard = ({
  name,
  review,
  image,
}: ReviewCardProps) => {
  return (
    <div className="relative h-[340px] w-full">
      {/* Card Background */}
      <Image
        src="/images/common/Rectanglereview.png"
        alt="Rectanglereview"
        fill
        className="object-contain"
      />
     
     

      {/* Content */}
      <div className="absolute w-80 left-8 top-15 z-20">
        <div className="flex items-center justify-center gap-4 h-20">
        
     <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
  <Image
    src={image}
    alt={name}
    width={64}
    height={64}
    className="w-full h-full object-cover"
  />
</div>

          <div>
            <h3 className="text-3xl font-semibold text-white">
              {name}
            </h3>

            <div className="mt-1 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  size={12}
                  className="text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-gray-300 px-4 py-2">
          {review}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
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
            Customer Review
          </h2>

          <Image
            src="/images/common/rightcorner.svg"
            alt=""
            width={50}
            height={50}
            className="absolute right-7 top-1"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.name}
              {...review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;