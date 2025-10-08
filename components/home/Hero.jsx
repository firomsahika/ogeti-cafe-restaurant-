"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import Typewriter from "typewriter-effect"; // 👈 make sure to in

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
  const [activeIndex, setActiveIndex] = useState(0);
  const rotation = useMotionValue(0);

  // Smooth infinite rotation animation
  useAnimationFrame((t, delta) => {
    const newAngle = rotation.get() + delta * 0.02; // rotation speed
    rotation.set(newAngle % 360);
    const index = Math.round((newAngle / (360 / foods.length))) % foods.length;
    setActiveIndex((index + foods.length) % foods.length);
  });

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 relative overflow-hidden bg-gradient-to-br from-[#fff5f2] via-[#ffeae2] to-[#fff]">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start gap-6 mt-20 md:mt-0">
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
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug"
        >
          <span className="text-red-700">Discover the </span>
          <span className="text-gray-900">
            <Typewriter
              options={{
                strings: ["Art of Flavorful Mastery", "Taste of Oromo Culture", "Magic in Every Bite"],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-700 text-lg max-w-md"
        >
          Experience authentic Oromo cuisine — freshly prepared dishes, warm
          hospitality, and a touch of tradition in every serving.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-800 transition"
        >
          Explore Our Menu
        </motion.button>
      </div>

      {/* Right Section — 3D Rotating Food Carousel */}
      <div className="md:w-1/2 flex justify-center items-center relative mt-16 md:mt-0">
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            rotateY: useTransform(rotation, (r) => `${r}deg`),
          }}
        >
          {foods.map((food, index) => {
            const angle = (360 / foods.length) * index;
            return (
              <motion.div
                key={food.name}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(300px)`,
                  position: "absolute",
                }}
              >
                <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <Image
                    src={food.image}
                    alt={food.name}
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Food Info Card (Dynamic Text) */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-8 bg-white bg-opacity-90 backdrop-blur-sm p-4 px-6 rounded-2xl shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800">
            {foods[activeIndex].name}
          </h3>
          <p className="text-sm text-gray-600">
            Delicious, traditional, and made with love.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
