import Header from "@/components/Header";
import {Lato} from 'next/font/google'
import '../globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'LinkTree',
  description: 'Share your links, social profiles, contact info and more on one page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main>
          <Header />
          <div className="max-w-4xl mx-auto p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
