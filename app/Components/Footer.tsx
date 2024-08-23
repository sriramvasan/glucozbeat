import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
                <Image src="/glucozbeat-logo.svg" alt="logo" width={150} height={50} />
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/About">About Us</Link>
            <Link href="/Services">Services</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/PrivacyPolicy">Privacy Policy</Link>
          </div>

          {/* Social Media Section */}
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://instragram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="text-center text-sm mt-4">
          &copy; {new Date().getFullYear()} Glucozbeat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
