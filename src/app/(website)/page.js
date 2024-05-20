import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import Carousel from "@/components/Carousel";
import GridContainer from "@/components/GridContainer";
import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";

const imageUrls = [
  "/assets/polly.png",
  "/assets/preview.png",
  "/assets/doggie.png",
  "/assets/manfred.png",
  "/assets/walter.png",
  "/assets/model.png",
  "/assets/cat.png",
  "/assets/model1.png",

];
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className="pt-32 flex flex-wrap md:flex-nowrap justify-center items-center">
        <div className="max-w-6xl mb-8 md:mb-0 md:mr-8">
          <h1 className="text-6xl font-bold">Everything in one</h1>
          <h2 className="text-gray-500 text-xl mt-6 mb-4">
            Share your links, social media profiles, contact info and more on
            one page
          </h2>
          <HeroForm user={session?.user} />
        </div>
        <Carousel images={imageUrls} />

        {/* <Image
          src={'/assets/preview.png'}
          alt="banner image"
          width={290} // Adjust the width as needed
          height={290} // Adjust the height to maintain the aspect ratio
          className="rounded-2xl border-2 shadow-gray-500/20 shadow-lg hover:shadow-2xl transition-shadow"
        /> */}
      </section>
      <div className="mt-20 text-center max-w-5xl">
        <h1 className=" mb-5 text-5xl font-bold">
          You never have to change the link in your bio again
        </h1>
        <p>
          Back in 2016 LinkTri solved social media’s most annoying problem: only
          having one link in your bio. LinkTri was the first ‘link in bio’
          platform made to solve this problem. LinkTri has since become so much
          more. Allowing businesses or creators to get more out of their social
          media, grow their following, easily take payments and take back
          control of how your content is discovered.
        </p>
      </div>
      <GridContainer />
      <div className="mt-20 text-center max-w-5xl">
        <h1 className=" mb-5 text-5xl font-bold">
          Turn your Link In Bio into your own mini-website
        </h1>
        <p>
          It takes seconds to turn your bio into a mini website, allowing your
          followers to engage with your content, discover you on other platforms
          or purchase and support you with just one simple link.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/account"
          className="flex items-center gap-2 border p-2 px-3 shadow rounded-md text-white bg-blue-500 hover:bg-blue-300 font-bold"
        >
          Start now
        </Link>
      </div>
      <ImageGrid images={imageUrls} /> {/* Add the ImageGrid component */}

    </main>
  );
}
