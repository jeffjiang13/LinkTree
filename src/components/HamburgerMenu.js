"use client"
import LogoutButton from "@/components/buttons/LogoutButton";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button onClick={toggleMenu} className="text-slate-500 text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md z-50">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link href="/about" className="hover:underline" onClick={toggleMenu}>About</Link>
            <Link href="/pricing" className="hover:underline" onClick={toggleMenu}>Pricing</Link>
            <Link href="/contact" className="hover:underline" onClick={toggleMenu}>Contact</Link>
            {!!session ? (
              <>
                <Link
                  href="/account"
                  className="flex items-center gap-2 border p-2 px-4 shadow rounded-md text-white bg-blue-500 hover:bg-blue-300 font-bold"
                  onClick={toggleMenu}
                >
                  Account
                </Link>
                <LogoutButton />
              </>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 border p-2 px-4 shadow rounded-md text-white bg-blue-500 hover:bg-blue-300 font-bold"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
