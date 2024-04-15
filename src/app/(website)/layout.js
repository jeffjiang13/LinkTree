import Header from "@/components/Header";
import {Lato} from 'next/font/google'
import '../globals.css'
import Footer from "@/components/Footer";
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'LinkTree Clone',
  description: 'Share your links, social profiles, contact info and more on one page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main>
          <Header />
          <div className="max-w-6xl mx-auto p-6 flex flex-col min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
