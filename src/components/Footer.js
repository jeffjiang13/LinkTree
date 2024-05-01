import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center text-blue-500 hover:text-blue-300">
          <Image
            src={'/assets/logo.webp'}
            alt="logo"
            height={40}
            width={40}
          />
          <span className="font-extrabold text-2xl">LinkTri</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <Link href="https://twitter.com/jeffjiang9"
            target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
            <FaTwitter size="1.5em" />
          </Link>
          <Link href="https://www.facebook.com/jeff.jiang.9"
            target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
            <FaFacebookF size="1.5em" />
          </Link>
          <Link href="https://github.com/jeffjiang13"
            target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
            <FaGithub size="1.5em"/>
          </Link>
          <Link href="https://www.linkedin.com/in/jeffjiang13/"
            target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
            <FaLinkedinIn size="1.5em" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="w-full text-center text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} LinkTri Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
