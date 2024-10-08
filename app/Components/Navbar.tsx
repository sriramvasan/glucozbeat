'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle the dropdown

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="sticky top-0 w-full h-18 shadow-xl bg-white z-40">
      <div className="flexBetween max-container padding-container relative py-3">
        <Link href="/">
          <Image src="/glucozbeat-logo.svg" alt="logo" width={150} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 sm:flex">
          <li><Link href='/Home' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Home</Link></li>
          <li><Link href='/UnderstandingGDM' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Understand GDM</Link></li>
          <li><Link href='/LowGI101' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Low GI 101</Link></li>
          <li><Link href='/CheckYourRisk' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Wellness Check</Link></li>

          {/* Dropdown for Snap GI and Food Flip */}
          <li className="relative cursor-pointer">
            <div onClick={toggleDropdown} className="regular-16 text-gray-50 flexCenter pb-1.5 transition-all hover:font-bold flex items-center">
              GI Tools <FaChevronDown className="ml-1" />
            </div>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                <li className="py-2 px-4 hover:bg-gray-100">
                  <Link href='/SnapGI' onClick={() => setDropdownOpen(false)}>Snap GI</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <Link href='/giFoods' onClick={() => setDropdownOpen(false)}>Food Flip</Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link href='/Recipe' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Recipes</Link></li>
        </ul>

        <div onClick={handleNav} className="inline-block cursor-pointer sm:hidden">
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div className={
        menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f4] p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/UnderstandingGDM">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer">
                Understand GDM
              </li>
            </Link>
            <Link href="/CheckYourRisk">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer">
                Wellness Check
              </li>
            </Link>

            {/* Mobile dropdown */}
            <li className="py-4 cursor-pointer">
              <div onClick={toggleDropdown} className="flex justify-between items-center">
                Explore <FaChevronDown className="ml-1" />
              </div>
              {dropdownOpen && (
                <ul className="mt-2">
                  <Link href="/SnapGI">
                    <li className="py-2 px-4" onClick={() => setMenuOpen(false)}>Snap GI</li>
                  </Link>
                  <Link href="/giFoods">
                    <li className="py-2 px-4" onClick={() => setMenuOpen(false)}>Food Flip</li>
                  </Link>
                </ul>
              )}
            </li>

            <Link href="/Recipe">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer">
                Recipes
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
