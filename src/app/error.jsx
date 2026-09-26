"use client";

import { fontBangla } from "@/lib/fonts";
import Link from "next/link";
import { useEffect } from "react";
import { FaBug, FaHome, FaRedo, FaSadTear } from "react-icons/fa";

const Error = ({ error, retry }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="hero min-h-[70vh] bg-base-200 rounded-box">
      <div className="hero-content text-center flex-col gap-8">

        <div className="relative flex items-center justify-center">
          <span className="absolute h-28 w-28 rounded-full bg-error/10 animate-ping" />

          <FaSadTear className="text-7xl text-error relative" />

          <FaBug className="absolute -bottom-1 -right-2 text-2xl text-warning" />
        </div>

        <div className="space-y-3 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold">
            Something Went Wrong
          </h1>

          <p className={`${fontBangla.className} text-3xl text-base-content/70`}>
            কিছু একটা সমস্যা হয়েছে
          </p>

          <p className="text-base-content/60 leading-7">
            An unexpected error occurred while loading this page. Please try
            again, and if the problem persists, head back to the store.
          </p>
        </div>

        {error?.digest && (
          <div className="alert alert-warning max-w-md">
            <FaBug />
            <span className="text-sm">
              Error reference: <code className="font-mono">{error.digest}</code>
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={() => retry()} className="btn btn-primary">
            <FaRedo />
            Try Again
          </button>

          <Link href="/" className="btn btn-outline">
            <FaHome />
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Error;
