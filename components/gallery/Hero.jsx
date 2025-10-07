"use client";

import React from "react";
import Image from "next/image";
import ogeti from "../../public/ogeti.jpg"

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      

      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl  md:text-6xl font-bold text-red-700 mb-4">
          Our Gallery
        </h1>
        <p className="text-lg md:text-md text-gray-700 max-w-2xl mx-auto">
          A visual journey through the taste, aroma, and beauty of Ogeti Cafe &
          Restaurant. Explore our moments captured in every dish.
        </p>
      </div>
    </section>
  );
};

export default Hero;
