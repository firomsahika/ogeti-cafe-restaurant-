"use client";

import { motion } from "framer-motion";

export const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff5f5] via-[#ffe4e6] to-[#fce7f3] opacity-60" />

      {/* Animated gradient glow blobs */}
      <motion.div
        className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#dd4163] via-[#f87171] to-transparent blur-[120px] opacity-40"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-180px] right-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#7f1d1d] via-[#b91c1c] to-transparent blur-[150px] opacity-40"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center glow pulse for depth */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#fca5a5] via-[#f43f5e] to-transparent blur-[180px] opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
