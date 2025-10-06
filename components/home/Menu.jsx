"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import qocho from "../../public/qocho.jpg";
import cororsa from "../../public/corosa.jpg";
import cuko from "../../public/cuko.jpg";
import buna from "../../public/buna.jpg";

const MenuPage = () => {
  const menuItems = [
    { image: cororsa, name: "Cororsa", description: "Traditional Oromo breakfast dish served with honey and butter.", price: "80" },
    { image: qocho, name: "Qocho", description: "Soft enset-based flatbread paired with spicy meat sauce.", price: "120" },
    { image: cuko, name: "Cuko", description: "Delicious Oromo delicacy made with barley and rich spices.", price: "100" },
    { image: buna, name: "Ethiopian Coffee", description: "Authentic hand-roasted coffee prepared in a traditional ceremony.", price: "70" },
    { image: cororsa, name: "Cororsa Deluxe", description: "A richer version served with butter and honey mix.", price: "90" },
    { image: qocho, name: "Qocho Special", description: "Served with seasoned meat sauce and cottage cheese.", price: "150" },
    { image: cuko, name: "Cuko Combo", description: "Includes fresh juice and salad on the side.", price: "160" },
    { image: buna, name: "Traditional Coffee Set", description: "Coffee served with popcorn and incense.", price: "100" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-20  min-h-screen flex flex-col items-center">
      {/* Header with Pagination Controls */}
      <div className="w-full flex justify-between items-start max-w-6xl mb-6">
        <div className="flex flex-col items-start">
        <h2 className="text-3xl md:text-sm font-bold text-center mb-3 text-red-700">
        CUSTOMER FAVORITES
      </h2>
      <h2 className="text-3xl md:text-2xl font-bold text-center mb-10 text-gray-900">STANDOUT DISHES FROM OUR MENU</h2>
     </div>

        {/* Pagination Icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-full border ${
              currentPage === 1
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-red-700 border-red-700 hover:bg-red-700 hover:text-white transition"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <span className="font-medium text-gray-700">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-red-700 border-red-700 hover:bg-red-700 hover:text-white transition"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {visibleItems.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative w-full h-56">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-red-700">{item.price} ETB</span>
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
