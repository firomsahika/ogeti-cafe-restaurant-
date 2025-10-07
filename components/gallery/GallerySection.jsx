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

const imagesRow1 = [qocho, cororsa, cuko, buna];
const imagesRow2 = [bunaqala, cutter, marqa, qori];

const GallerySection = () => {
  return (
    <section className="w-full py-1 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Delicious Moments Captured
        </h2>
        <p className="text-gray-500 mt-2">
          Explore the flavors, ambiance, and experience of Ogeti Cafe & Restaurant.
        </p>
      </div>

      {/* First Row (scrolls left) */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        className="flex space-x-4 mb-8 "
      >
        {[...imagesRow1, ...imagesRow1].map((img, i) => (
          <div key={i} className="min-w-[250px] h-[150px] relative rounded-2xl overflow-hidden shadow-md">
            <Image src={img} alt="gallery image" fill className="object-cover shadow-md" />
          </div>
        ))}
      </motion.div>

      {/* Second Row (scrolls right) */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        className="flex space-x-4"
      >
        {[...imagesRow2, ...imagesRow2].map((img, i) => (
          <div key={i} className="min-w-[250px] h-[150px] relative rounded-2xl overflow-hidden shadow-md">
            <Image src={img} alt="gallery image" fill className="object-cover" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
