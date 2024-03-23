import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/buttons/LogoutButton";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-white border-b py-2">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-300 hover:underline">
          <FontAwesomeIcon icon={faLink} className="text-blue-500" />
          <span className="font-extrabold text-2xl">LinkTree</span>
        </Link>

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden sm:flex justify-center gap-10 text-slate-500 text-sm flex-grow font-bold">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Session/Login Buttons */}
        <div className="flex items-center gap-4 text-sm text-slate-500">
          {!!session ? (
            <>
              <Link
                className="flex items-center gap-2 border p-2 px-4 shadow rounded-md text-white bg-blue-500 hover:bg-blue-300 font-bold"
                href="/account"
              >
                {/* {session?.user?.name} */}
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

        {/* Mobile Navigation Links */}
        <nav className="w-full sm:hidden flex justify-center gap-10 font-bold text-slate-500 text-sm mt-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
