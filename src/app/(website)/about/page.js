import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'LinkTri Clone | About',
  description: 'Share your links, social profiles, contact info and more on one page',
}
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-10">
      <main className="flex flex-col items-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          About <span className="text-blue-500">LinkTri</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600">
          LinkTri is a dynamic and user-friendly platform designed to streamline your online presence. Inspired by actual <a className="text-blue-500" href="https://linktr.ee/">Linktree</a>, it allows users to create a personalized and easily shareable page that houses all their important links in one place.
        </p>

        <div className="mt-8 text-gray-600 text-left">
          <h2 className="text-3xl font-semibold">Key Features</h2>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Simple and secure authentication process.</li>
            <li>Intuitive dashboard for managing your links and profile.</li>
            <li>Customizable link buttons with real-time previews.</li>
            <li>Analytics to gain insights into your audience&apos;s engagement.</li>
            <li>Optimized for performance and SEO, ensuring your page stands out.</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-lg text-blue-500 hover:underline">Go back home
          </Link>
        </div>
      </main>
    </div>
  );
}
