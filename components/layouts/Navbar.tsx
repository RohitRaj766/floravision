"use client";
import { useState } from "react";
import {
  FiX,
  FiSearch,
  FiShoppingBag,
  FiChevronDown,
} from "react-icons/fi";
import Image from "next/image";


const HamburgerMenu = () => {
  return (
    <button className="group flex flex-col items-end justify-center gap-2 cursor-pointer"
    ><span className="h-1 w-10 rounded-full bg-white transition-all duration-300 group-hover:bg-green-400"></span>
      <span className="h-1 w-7 rounded-full bg-white transition-all duration-300 group-hover:bg-green-400"></span>
    </button>
  );
};


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="w-full bg-transparent text-white sticky top-0 z-50  font-indie">
      <div className="max-w-7xl mx-auto pr-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center px-3 py-2 cursor-pointer">
            <div className="justify-center items-center"><Image src="/images/common/logoN.png" alt="FloraVision Logo" width={48} height={48} /></div>

            <h1 className="text-3xl font-bold ml-1 font-inter">
              Flora<span className="text-gray-300">Vision.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-14 text-xl">
            <li className="cursor-pointer hover:text-green-400 transition">
              Home
            </li>

            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <div className="flex items-center gap-1 hover:text-green-400 transition">
                Plants Type
                <FiChevronDown />
              </div>

              {dropdown && (
                <div className="absolute top-7 left-0 bg-[#23361d] rounded-lg shadow-lg w-52 py-2">
                  <p className="px-4 py-2 hover:bg-green-700 cursor-pointer">
                    Indoor Plants
                  </p>
                  <p className="px-4 py-2 hover:bg-green-700 cursor-pointer">
                    Outdoor Plants
                  </p>
                  <p className="px-4 py-2 hover:bg-green-700 cursor-pointer">
                    Succulents
                  </p>
                  <p className="px-4 py-2 hover:bg-green-700 cursor-pointer">
                    Flowers
                  </p>
                </div>
              )}
            </li>

            <li className="cursor-pointer hover:text-green-400 transition">
              More
            </li>

            <li className="cursor-pointer hover:text-green-400 transition">
              Contact
            </li>
          </ul>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-8 text-2xl">
            <button className="hover:text-green-400 cursor-pointer">
              <FiSearch />
            </button>

            <button className="hover:text-green-400 cursor-pointer">
              <FiShoppingBag />
            </button>

        <button className="group flex flex-col items-end justify-center gap-2 cursor-pointer"
    ><span className="h-1 w-10 rounded-full bg-white transition-all duration-300 group-hover:bg-green-400"></span>
      <span className="h-1 w-7 rounded-full bg-white transition-all duration-300 group-hover:bg-green-400"></span>
    </button>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <HamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#1b2a16] px-6 py-5 space-y-5">
          <p className="cursor-pointer">Home</p>

          <div>
            <button
              className="flex items-center gap-2"
              onClick={() => setDropdown(!dropdown)}
            >
              Plants Type
              <FiChevronDown
                className={`transition ${
                  dropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdown && (
              <div className="ml-5 mt-3 space-y-3 text-gray-300">
                <p>Indoor Plants</p>
                <p>Outdoor Plants</p>
                <p>Succulents</p>
                <p>Flowers</p>
              </div>
            )}
          </div>

          <p className="cursor-pointer">More</p>

          <p className="cursor-pointer">Contact</p>

          <div className="flex gap-6 text-2xl pt-3 border-t border-gray-600">
            <FiSearch />
            <FiShoppingBag />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;