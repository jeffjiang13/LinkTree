import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import Image from 'next/image';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className="pt-32 flex flex-wrap md:flex-nowrap justify-center items-center">
        <div className="max-w-6xl mb-8 md:mb-0 md:mr-8">
          <h1 className="text-6xl font-bold">
            Everything in one
          </h1>
          <h2 className="text-gray-500 text-xl mt-6 mb-4">
            Share your links, social media profiles, contact info and more on one page
          </h2>
          <HeroForm user={session?.user} />
        </div>

        <Image
          src={'/assets/preview.png'}
          alt="banner image"
          width={290} // Adjust the width as needed
          height={290} // Adjust the height to maintain the aspect ratio
          className="rounded-2xl border-2 border-muted"
        />
      </section>
    </main>
  );
}
