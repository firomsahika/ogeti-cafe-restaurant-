"use client";

import React from "react";
import Image from "next/image";
import cutter from "../../public/cutter.jpg";
import buna from "../../public/buna.jpg";
import qocho from "../../public/qocho.jpg";
import cororsa from "../../public/corosa.jpg";

const DineIn = () => {
  return (
    <section className="py-20 flex gap-16 flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-xl font-medium text-gray-800 tracking-wide">SERVICES</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 ">
        {/* Left Image Collage */}
        <div className="relative w-full md:w-[500px] h-[400px]">
          {/* Main image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2">
            <Image
              src={cutter}
              alt="Cutter"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlayed images */}
          <div className="absolute top-10 -left-4 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-6">
            <Image src={buna} alt="Buna" fill className="object-cover" />
          </div>

          <div className="absolute bottom-6 left-10 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-3">
            <Image src={qocho} alt="Qocho" fill className="object-cover" />
          </div>

          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-3">
            <Image src={cororsa} alt="Cororsa" fill className="object-cover" />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col gap-5 max-w-xl">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl text-red-700 font-bold uppercase">
              DINE-IN EXPERIENCE
            </h2>
            <h3 className="text-xl italic text-gray-700">
              Cozy Dining, Every Day
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Ogeti Café & Restaurant, we go beyond the table. From casual dining to catering your biggest celebrations, 
            our services are crafted to bring people together through food.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From our humble beginnings, journey and discover the heart and soul of
            Oromo and Ethiopian cuisine — a true Ogeti experience that blends heritage
            and love for food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DineIn;
