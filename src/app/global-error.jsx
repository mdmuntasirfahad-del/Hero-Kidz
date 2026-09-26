"use client";

import "./globals.css";
import { fontBangla } from "@/lib/fonts";
import { useEffect } from "react";
import { FaBug, FaRedo, FaSadTear } from "react-icons/fa";

const GlobalError = ({ error, retry }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen">
        <title>Application Error | Hero Kidz</title>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center flex-col gap-8 px-4">

            <div className="relative flex items-center justify-center">
              <span className="absolute h-28 w-28 rounded-full bg-error/10 animate-ping" />

              <FaSadTear className="text-7xl text-error relative" />

              <FaBug className="absolute -bottom-1 -right-2 text-2xl text-warning" />
            </div>

            <div className="space-y-3 max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold">
                Application Error
              </h1>

              <p className={`${fontBangla.className} text-3xl text-base-content/70`}>
                কিছু একটা সমস্যা হয়েছে
              </p>

              <p className="text-base-content/60 leading-7">
                The application ran into an unexpected error and could not
                recover. Reloading the page may fix it.
              </p>
            </div>

            <button onClick={() => retry()} className="btn btn-primary">
              <FaRedo />
              Reload
            </button>

          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
