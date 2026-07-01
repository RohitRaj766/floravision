"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B2316] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          {/* Left */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/common/logoN.png"
                alt="FloraVision"
                width={55}
                height={55}
              />

              <h2 className="text-4xl font-bold text-white font-inter">
                FloraVision.
              </h2>
            </div>

            <p className="mt-8 max-w-md text-xl leading-9 text-gray-300 font-medium">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>

            {/* Socials */}
            <div className="mt-14 flex gap-10 text-2xl font-bold text-white">
              <a href="#" className="hover:text-green-400 transition">
                FB
              </a>

              <a href="#" className="hover:text-green-400 transition">
                TW
              </a>

              <a href="#" className="hover:text-green-400 transition">
                LI
              </a>
            </div>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Quick Link&apos;s
            </h3>

            <ul className="mt-8 space-y-5 text-lg text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 hover:underline transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 hover:underline transition">
                  Type&apos;s Of plant&apos;s
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 hover:underline  transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 hover:underline  transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              For Every Update.
            </h3>

            <div className="mt-8 flex overflow-hidden rounded-lg border border-white">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-transparent px-5 py-4 text-white placeholder:text-gray-400 outline-none"
              />

              <button className="cursor-pointer bg-white px-6 font-bold text-black transition hover:bg-green-500 hover:text-white">
                SUBSCRIBE
              </button>
            </div>

            <p className="mt-20 text-lg text-gray-300">
              FloraVision © all right reserve
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;