"use client";

import React from "react";
import Image from "next/image";
import buna from "../../public/buna.jpg";
import qocho from "../../public/qocho.jpg";
import cororsa from "../../public/corosa.jpg";
import ogeti from "../../public/ogeti.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between py-16 overflow-hidden ">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start gap-6 text-left px-6 md:px-0">
        <button className="bg-white text-black px-4 py-2 rounded-full shadow-md font-medium">
          About Ogeti Café & Restaurant
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Discover <span className="text-red-700">the Taste of Tradition</span>
        </h1>

        <p className="text-gray-700 text-lg max-w-md">
          Since our beginning, Ogeti Café & Restaurant has been more than just food —
          it’s about community, culture, and the joy of sharing meals together.
        </p>

        <button className="bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-800 transition">
          Explore More
        </button>
      </div>

      {/* Right Section - Stylish Image Collage */}
      <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px]">
          {/* Main image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3">
            <Image src={ogeti} alt="Dish Cutter" fill className="object-cover" />
          </div>

          {/* Overlapping images */}
          <div className="absolute top-10 -left-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-6">
            <Image src={buna} alt="Buna" fill className="object-cover" />
          </div>

          <div className="absolute bottom-6 left-10 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-2">
            <Image src={qocho} alt="Qocho" fill className="object-cover" />
          </div>

          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-3">
            <Image src={cororsa} alt="Cororsa" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
