import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz.vercel.app"),

  title: {
    default: "Hero Kidz | Educational Toys & Learning Products",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz brings fun, engaging, and educational toys and learning products for children. Explore products designed to make learning exciting and enjoyable.",

  keywords: [
    "Hero Kidz",
    "educational toys",
    "learning toys",
    "kids toys",
    "children toys",
    "educational products",
    "learning products",
    "kids learning",
    "toys for children",
    "educational toys Bangladesh",
  ],

  applicationName: "Hero Kidz",

  authors: [
    {
      name: "Hero Kidz",
      url: "https://hero-kidz.vercel.app",
    },
  ],

  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  category: "shopping",

  alternates: {
    canonical: "https://hero-kidz.vercel.app",
  },

  icons: {
    icon: [
      {
        url: "https://i.ibb.co/tM5P4ZSm/logo.png",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "https://i.ibb.co/tM5P4ZSm/logo.png",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hero-kidz.vercel.app",
    siteName: "Hero Kidz",

    title: "Hero Kidz | Educational Toys & Learning Products",

    description:
      "Discover fun and educational toys and learning products for children at Hero Kidz.",

    images: [
      {
        url: "https://i.ibb.co/tMTYPcsf/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz - Educational Toys & Learning Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hero Kidz | Educational Toys & Learning Products",

    description:
      "Discover fun and educational toys and learning products for children at Hero Kidz.",

    images: [
      "https://i.ibb.co/tMTYPcsf/image.png",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>

        <main className='py-2 md:w-11/12 mx-auto min-h-[calc(100vh-327px)] '>
          {children}
        </main>

        <footer>
          <Footer></Footer>
        </footer>

      </body>
    </html>
  );
}
