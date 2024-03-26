import { Page } from "@/models/Page";
import { User } from "@/models/User";
import { Event } from "@/models/Event";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLink,
  faLocationDot,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoose from "mongoose";
import { btoa } from "next/dist/compiled/@edge-runtime/primitives";
import Image from "next/image";
import Link from "next/link";

export const buttonsIcons = {
  email: faEnvelope,
  mobile: faPhone,
  instagram: faInstagram,
  facebook: faFacebook,
  discord: faDiscord,
  tiktok: faTiktok,
  youtube: faYoutube,
  whatsapp: faWhatsapp,
  github: faGithub,
  telegram: faTelegram,
};

function buttonLink(key, value) {
  if (key === "mobile") {
    return "tel:" + value;
  }
  if (key === "email") {
    return "mailto:" + value;
  }
  return value;
}

export default async function UserPage({ params }) {
  const uri = params.uri;
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({ uri });
  // Check if the page was not found
  if (!page) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <p
          style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}
        >
          Page Not Found
        </p>
      </div>
    );
  }

  const user = await User.findOne({ email: page.owner });

  // Optionally, also check if the user was not found
  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <p
          style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}
        >
          User Not Found
        </p>
      </div>
    );
  }
  await Event.create({ uri: uri, page: uri, type: "view" });
  return (
    <div className="bg-white min-h-screen">
      <div
        className="h-36 bg-gray-400 bg-cover bg-center"
        style={
          page.bgType === "color"
            ? { backgroundColor: page.bgColor }
            : { backgroundImage: `url(${page.bgImage})` }
        }
      ></div>
      <div className="aspect-square w-36 h-36 mx-auto relative -top-16 -mb-12">
        <Image
          className="rounded-full w-full h-full object-cover"
          src={user.image}
          alt="avatar"
          width={256}
          height={256}
        />
      </div>
      <h2 className="text-2xl text-center mb-1">{page.displayName}</h2>
      <h3 className="text-md flex gap-2 justify-center items-center">
        <FontAwesomeIcon className="h-4" icon={faLocationDot} />
        <span>{page.location}</span>
      </h3>
      <div className="max-w-xs mx-auto text-center my-2">
        <p>{page.bio}</p>
      </div>
      <div className="flex gap-2 justify-center mt-4 pb-4">
        {Object.keys(page.buttons).map((buttonKey) => (
          <Link
            key={buttonKey}
            href={buttonLink(buttonKey, page.buttons[buttonKey])}
            className="rounded-full bg-white text-blue-950 p-2 flex items-center justify-center hover:bg-gray-200 border border-gray-300"
          >
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={buttonsIcons[buttonKey]}
            />
          </Link>
        ))}
      </div>
      <div className="max-w-2xl mx-auto grid md:grid-cols-1 gap-6 p-4 px-8">
        {page.links.map((link) => (
          <Link
            key={link.url}
            target="_blank"
            ping={
              process.env.URL +
              "api/click?url=" +
              btoa(link.url) +
              "&page=" +
              page.uri
            }
            className="bg-white p-2 flex hover:bg-gray-100 rounded-md font-extrabold border-2 border-gray-300"
            href={link.url}
          >
            <div className="relative -left-7 w-18">
              <div className="w-16 h-16 bg-blue-200 aspect-square relative flex items-center justify-center rounded-full border-2 border-gray-300">
                {link.icon && (
                  <Image
                    className="w-full h-full object-cover rounded-full"
                    src={link.icon}
                    alt={"icon"}
                    width={64}
                    height={64}
                  />
                )}
                {!link.icon && (
                  <FontAwesomeIcon icon={faLink} className="w-8 h-8" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-center shrink grow-0 overflow-hidden">
              <div className="">
                <h3 className="">{link.title}</h3>
                <p className="text-sm text-gray-400 overflow-hidden">
                  {link.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
