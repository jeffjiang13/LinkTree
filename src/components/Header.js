import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/buttons/LogoutButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from 'next/image';
import HamburgerMenu from "@/components/HamburgerMenu"; // Import the HamburgerMenu component

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-white border-b py-2">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center text-blue-500 hover:text-blue-300 hover:underline">
          <Image
            src={'/assets/logo.webp'}
            alt="logo"
            height={40}
            width={40}
          />
          <span className="font-extrabold text-2xl">LinkTri</span>
        </Link>

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden sm:flex justify-center gap-10 text-slate-500 text-sm flex-grow font-bold">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Session/Login Buttons for Desktop */}
        <div className="hidden sm:flex items-center gap-4 text-sm text-slate-500">
          {!!session ? (
            <>
              <Link
                className="flex items-center gap-2 border p-2 px-4 shadow rounded-md text-white bg-blue-500 hover:bg-blue-300 font-bold"
                href="/account"
              >
                Account
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link
              className="flex items-center gap-2 border p-2 px-4 shadow rounded-md text-white bg-blue-500 hover:bg-blue-300 font-bold"
              href="/login"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <HamburgerMenu session={session} />

        {/* Mobile Navigation Links (Hidden when Hamburger Menu is used) */}
        {/* <nav className="w-full sm:hidden flex justify-center gap-10 font-bold text-slate-500 text-sm mt-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav> */}
      </div>
    </header>
  );
}
