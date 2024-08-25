// import React from 'react'
// import Link from 'next/link';
// import Button from '../Components/Button';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <>
//     <div className="w-full h-20 bg-sky-800 sticky top-0 left-0 right-0 bottom-0"> 
//     <div className='container mx-auto px-4 h-full'>
//     <div className="flex justify-between items-center h-full">
//         <ul className="md:flex items-center h-50 w-full align-bottom gap-x-6 text-white">
//           <li><Link href="/"><Image src="/glucozbeat-logo.svg" alt="logo" width={150} height={50} /></Link></li>
//             <li><Link href="/Home">Home </Link></li>
//             <li><Link href="/About"> About us </Link></li>
//             <li><Link href="/">Info</Link></li>
//         </ul>
//         <Button />
//     </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Navbar;
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "../Constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/glucozbeat-logo.svg" alt="logo" width={150} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />

    </nav>
  )
}

export default Navbar