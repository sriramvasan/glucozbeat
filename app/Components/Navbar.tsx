import React from 'react'
import Link from 'next/link';
import Button from '../Components/Button';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
    <div className="w-full h-20 bg-sky-800 sticky top-0 left-0 right-0 bottom-0"> 
    <div className='container mx-auto px-4 h-full'>
    <div className="flex justify-between items-center h-full">
        <ul className="md:flex items-center h-50 w-full align-bottom gap-x-6 text-white">
          <li><Link href="/"><Image src="/glucozbeat-logo.svg" alt="logo" width={150} height={50} /></Link></li>
            <li><Link href="/Home">Home </Link></li>
            <li><Link href="/About"> About us </Link></li>
            <li><Link href="/">Info</Link></li>
        </ul>
        <Button />
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;
