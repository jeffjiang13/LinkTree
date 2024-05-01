import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "LinkTri Clone | Pricing",
  description:
    "Share your links, social profiles, contact info and more on one page",
};

export default function Pricing() {
  return (
    <div className="py-8 px-4">
      <main className="max-w-6xl mb-20 mx-auto mt-10">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-20">
          Pricing Plans
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Free Plan */}
          <div className="w-full max-w-sm p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
            <h2 className="text-2xl font-semibold text-center mb-4">Free</h2>
            <ul className="mb-6">
              <li className="mb-2">Basic Link Management</li>
              <li className="mb-2">Custom Profile URL</li>
              <li className="mb-2">Basic Analytics</li>
            </ul>
            <div className="text-center">
              <Link
                href="/account"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-200 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          {/* <div className="w-full max-w-sm p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-blue-50">
            <h2 className="text-2xl font-semibold text-center mb-4">Pro</h2>
            <ul className="mb-6">
              <li className="mb-2">All Free features</li>
              <li className="mb-2">Advanced Link Management</li>
              <li className="mb-2">Extended Analytics</li>
              <li className="mb-2">Custom Domains</li>
            </ul>
            <div className="text-center">
              <Link href="/signup"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-200 transition-colors">Upgrade
              </Link>
            </div>
          </div> */}

          {/* Enterprise Plan */}
          {/* <div className="w-full max-w-sm p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-center mb-4">Enterprise</h2>
            <ul className="mb-6">
              <li className="mb-2">All Pro features</li>
              <li className="mb-2">24/7 Support</li>
              <li className="mb-2">Custom Integrations</li>
              <li className="mb-2">Unlimited Links</li>
            </ul>
            <div className="text-center">
              <Link href="/contact"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-200 transition-colors">Contact Us
              </Link>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
