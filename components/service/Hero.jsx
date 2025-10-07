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
          Services of Ogeti Café & Restaurant
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Delicious Moments,  <span className="text-red-700">Served Your Way</span>
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
      <div className=" md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <div className="">
            <Image 
            src={ogeti}
            width={300}
            height={300} 
            alt="Dish Cutter" 
            className="object-cover rounded-3xl" />
          </div>
      </div>
    </section>
  );
}
