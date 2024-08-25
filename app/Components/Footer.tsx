import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../Constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-20">
          <Link href="/" className="mb-10">
            <Image src="glucozbeat-logo.svg" alt="logo" width={200} height={80}/>
          </Link>

          <div className="flex flex-wrap gap-10 md:gap-20 lg:gap-32 w-full sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* Uncomment this block to include social media links */}
            {/* <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div> */}
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30"> {new Date().getFullYear()}  Glucoz | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 min-w-[150px]">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer


// import Link from 'next/link';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-sky-800 text-white py-6 mt-auto">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between items-center">
//           {/* Logo Section */}
//           <div className="mb-4 md:mb-0">
//             <Link href="/">
//                 <Image src="/glucozbeat-logo.svg" alt="logo" width={150} height={50} />
//             </Link>
//           </div>

//           {/* Links Section */}
//           <div className="flex flex-wrap gap-6 text-sm">
//             <Link href="/About">About Us</Link>
//             <Link href="/Services">Services</Link>
//             <Link href="/Contact">Contact</Link>
//             <Link href="/PrivacyPolicy">Privacy Policy</Link>
//           </div>

//           {/* Social Media Section */}
//           <div className="flex gap-4">
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} />
//             </a>
//             <a href="https://instragram.com" target="_blank" rel="noopener noreferrer">
//               <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} />
//             </a>
//           </div>
//         </div>

//         <div className="text-center text-sm mt-4">
//           &copy; {new Date().getFullYear()} Glucozbeat. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


