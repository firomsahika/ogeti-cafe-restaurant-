"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import buna from "../../public/buna.jpg";
import qocho from "../../public/qocho.jpg";
import cororsa from "../../public/corosa.jpg";
import cutter from "../../public/cutter.jpg";

const foods = [
  { name: "Injera", image: cororsa },
  { name: "Coffee", image: buna },
  { name: "Special", image: qocho },
  { name: "Firfir", image: cutter },
];

export default function Hero() {
  const [selected, setSelected] = useState(foods[0]);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 40,
      },
    });
  }, [controls]);

  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () =>
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 40,
      },
    });

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between  relative  overflow-hidden">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start gap-6 mt-10 md:mt-0">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-black px-4 py-2 rounded-full shadow-lg font-medium"
        >
          Welcome to Ogeti Café & Restaurant
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Discover the{" "}
          <span className="text-red-700">Art of Flavorful Mastery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-700 text-lg max-w-md"
        >
          Experience the authentic taste of Oromo culture — freshly prepared
          dishes, traditional drinks, and the warmth of our hospitality in every
          bite.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-800 transition"
        >
          See Menu
        </motion.button>
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
        {/* Main Food Image */}
        <motion.div
          key={selected.image}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-full overflow-hidden shadow-2xl w-72 h-72 md:w-80 md:h-80 border-[6px] border-white bg-white"
        >
          <Image
            src={selected.image}
            alt={selected.name}
            width={450}
            height={450}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Circular Buttons */}
        <motion.div
        animate={controls}
        style={{ position: "absolute", width: "100%", height: "100%" }}
        className="flex items-center justify-center"
      >
      {foods.map((food, index) => {
      const angle = (index / foods.length) * 360; // degrees
      const radius = 200;

      return (
        <div
          key={food.name}
          style={{
            position: "absolute",
            transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
            transformOrigin: "center center",
          }}
        >
          <motion.button
            onClick={() => setSelected(food)}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            whileHover={{ scale: 1.15 }}
            className={`text-sm text-slate-600 px-4 py-2 rounded-full transition shadow-lg font-medium ${
              selected.name === food.name
                ? "bg-red-700 text-white"
                  : " bg-white text-gray-800"
            }`}
          >
            {food.name}
          </motion.button>
        </div>
      );
  })}
</motion.div>
      </div>

      {/* Background animation bubbles */}
      {/* <motion.div
        className="absolute w-96 h-96 bg-red-200 rounded-full opacity-30 -top-20 -left-20 animate-pulse"
      />
      <motion.div
        className="absolute w-72 h-72 bg-yellow-200 rounded-full opacity-20 -bottom-20 -right-10 animate-pulse"
      /> */}
    </section>
  );
}
