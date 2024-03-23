import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Contact | Jeff Jiang</title>
        <meta name="description" content="Get in touch with Jeff Jiang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-4 md:px-20 text-center">
      <Image
            src={'/assets/logo.webp'}
            alt="banner image"
            height={400}
            width={400}
          />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
          Get in Touch
        </h1>

        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <a href="https://twitter.com/jeffjiang9" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.facebook.com/jeff.jiang.9" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://github.com/jeffjiang13" className="hover:text-gray-800" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/jeffjiang13/" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://jeff-jiang.com" className="text-xl hover:underline" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </div>
      </main>
    </div>
  );
}
