"use client";

import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";

const TrendingPlants = () => {
  return (
    <section className="max-w-7xl mx-auto -mt-10 pb-10">
    <div className="relative flex justify-center items-center py-12">
<div className="relative w-fit mx-auto pb-2">
  <Image
    src="/images/common/leftcorner.svg"
    alt=""
    width={50}
    height={50}
    className="absolute left-7  bottom-0"
  />

  <h2 className="px-10 text-6xl font-bold text-white">
    Our Trendy plants
  </h2>

  <Image
    src="/images/common/rightcorner.svg"
    alt=""
    width={50}
    height={50}
    className="absolute right-7 top-2"
  />
</div>
</div>

<div className="space-y-20 mt-12">
  {/* Card 1 */}
  <div className="relative w-full h-[420px] z-10 pr-3">
    <Image
      src="/images/common/Rectangle7.png"
      alt="Card Background"
      fill
      priority
      className="-z-1 object-contain"
    />

    <div className="flex h-full items-center justify-between px-2 ">
      {/* Plant */}
      <div className="flex w-1/2 justify-center">
        <Image
          src="/images/plants/rose3.png"
          alt="Rose Plant"
          width={600}
          height={500}
          className="object-contain -mt-24"
        />
      </div>

      {/* Content */}
      <div className="w-[45%] text-white pr-2">
        <h3 className="text-4xl font-semibold leading-tight">
          For Your Desks Decorations
        </h3>

        <p className="mt-5 leading-7 text-gray-300">
          I recently added a beautiful desk decoration plant to my workspace,
          and it has made such a positive difference! The greenery adds a touch
          of nature and serenity.
        </p>

        <h4 className="mt-8 text-5xl font-bold">Rs. 599/-</h4>

        <div className="mt-8 flex items-center gap-5">
          <button className="rounded-xl border border-white px-8 py-3 text-lg transition hover:bg-white hover:text-black">
            Explore
          </button>

          <button className="flex h-14 w-14 items-center justify-center rounded-xl border border-white transition hover:bg-white hover:text-black">
            <FiShoppingBag size={22} />
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
<div className="relative w-full h-[420px] pl-3">
  {/* Background */}
  <Image
    src="/images/common/Rectangle8.png"
    alt="Card Background"
    fill
    priority
    className="object-contain"
  />

  {/* Content */}
  <div className="relative flex h-full items-center justify-between px-14 flex-row-reverse">
    
    {/* Plant */}
    <div className="flex w-1/2 justify-center">
      <Image
        src="/images/plants/rose2.png"
        alt="Rose Plant"
        width={600}
        height={500}
        className="object-contain -mt-24"
      />
    </div>

    {/* Content */}
    <div className="w-[45%] text-white">
      <h3 className="text-4xl font-semibold leading-tight">
        For Your Desks Decorations
      </h3>

      <p className="mt-5 leading-7 text-gray-300">
        The greenery adds a touch of nature and serenity to my desk, making
        it feel more inviting and calming.
      </p>

      <h4 className="mt-8 text-5xl font-bold">Rs. 399/-</h4>

      <div className="mt-8 flex items-center gap-5">
        <button className="rounded-xl border border-white px-8 py-3 text-lg transition hover:bg-white hover:text-black">
          Explore
        </button>

        <button className="flex h-14 w-14 items-center justify-center rounded-xl border border-white transition hover:bg-white hover:text-black">
          <FiShoppingBag size={22} />
        </button>
      </div>
    </div>
  </div>
</div>
</div>
    </section>
  );
};

export default TrendingPlants;