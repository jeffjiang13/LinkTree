import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center text-blue-500 hover:text-blue-300 mb-1 md:mb-0">
          <Image
            src={'/assets/logo.webp'}
            alt="logo"
            height={40}
            width={40}
          />
          <span className="font-extrabold text-2xl ml-2">LinkTri</span>
        </div>

        {/* Copyright for mobile */}
        <div className="w-full text-center text-sm text-gray-500 order-3 md:order-2 md:w-auto mt-1 md:mt-0 md:flex-1 md:text-center">
          © {new Date().getFullYear()} LinkTri Clone. All rights reserved.
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 order-2 md:order-3 mb-1 md:mb-0">
          <Link href="https://twitter.com/jeffjiang9" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
            <FaTwitter size="1.5em" />
          </Link>
          <Link href="https://www.facebook.com/jeff.jiang.9" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
            <FaFacebookF size="1.5em" />
          </Link>
          <Link href="https://github.com/jeffjiang13" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
            <FaGithub size="1.5em" />
          </Link>
          <Link href="https://www.linkedin.com/in/jeffjiang13/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
            <FaLinkedinIn size="1.5em" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
