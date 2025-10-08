"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import qocho from "../../public/qocho.jpg";
import cororsa from "../../public/corosa.jpg";
import cuko from "../../public/cuko.jpg";
import buna from "../../public/buna.jpg";
import bunaqala from "../../public/buna qala.jpg"
import cutter from "../../public/cutter.jpg"
import marqa from "../../public/marqa.jpg"
import qori from "../../public/qori.jpg"

const images = [
  qocho,
  cororsa,
  cuko,
  buna,
  bunaqala,
  cutter,
  marqa,
  qori,
  qocho,
    cororsa,
    cuko,
    buna,

];

export default function GalleryCollage() {
  return (
    <section className=" py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-700">Our Gallery</h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Discover the soul of Ogeti Cafe & Restaurant — from our signature dishes 
          and vibrant atmosphere to the moments our guests love most.
        </p>
      </div>

      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-8 space-y-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          >
            <Image
              src={img}
              alt={`Ogeti gallery ${i + 1}`}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              width={300}
              height={100}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-lg font-semibold">
              Ogeti Moments
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
