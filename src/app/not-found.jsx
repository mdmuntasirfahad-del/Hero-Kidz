import { fontBangla } from '@/lib/fonts';
import Link from 'next/link';
import {
  FaCompass,
  FaHome,
  FaQuestionCircle,
  FaShoppingBasket,
} from "react-icons/fa";

const suggestions = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/products", label: "All Products", icon: FaShoppingBasket },
];

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

const NotFound = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200 rounded-box">
      <div className="hero-content text-center flex-col gap-8">

        <div className="relative">
          <FaQuestionCircle className="text-8xl md:text-9xl text-primary/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-black text-primary">
              404
            </h1>
          </div>
        </div>

        <div className="space-y-3 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Page Not Found
          </h2>

          <p className={`${fontBangla.className} text-3xl text-base-content/70`}>
            পেজটি খুঁজে পাওয়া যায়নি
          </p>

          <p className="text-base-content/60 leading-7">
            The page you are looking for may have been moved, renamed, or is
            temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {suggestions.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="btn btn-outline btn-primary">
              <Icon />
              {label}
            </Link>
          ))}
        </div>

        <Link href="/products" className="btn btn-primary">
          <FaCompass />
          Browse Our Products
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
