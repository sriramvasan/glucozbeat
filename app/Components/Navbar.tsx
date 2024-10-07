'use client';

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    console.log("handleNav triggered"); // Debugging line
    setMenuOpen(!menuOpen);
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
          <li><Link href='/CheckYourRisk' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Wellness Check</Link></li>
          <li><Link href='/SnapGI' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Snap GI</Link></li>
          <li><Link href='/giFoods' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Food Flip</Link></li>
          <li><Link href='/Recipe' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Recipes</Link></li>
          {/* <li><Link href='/About' className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">Meet the team</Link></li> */}
        </ul>

        {/* <div className="lg:flexCenter hidden">
          <Link href="/CheckYourRisk">
          <Button
            type="button"
            title="Check Your Risk"
            icon="/user.svg"
            variant="btn_dark_green"
          />
          </Link>
        </div> */}

        <div onClick={handleNav} className="inline-block cursor-pointer sm:hidden">
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </div>
      </div>
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
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer">
                Snap GI
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer">
                Food Flip
              </li>
            </Link>
            {/* <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer">
                Meet the team
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
