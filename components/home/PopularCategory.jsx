"use client";

import React from "react";
import Image from "next/image";
import qocho from "../../public/qocho.jpg";
import cororsa from "../../public/corosa.jpg";
import cuko from "../../public/cuko.jpg";
import buna from "../../public/buna.jpg";

const PopularCategory = () => {
  const categories = [
    {
      image: cororsa,
      name: "Cororsa",
      description: "Traditional Oromo breakfast dish served with honey and butter.",
      price: "800",
    },
    {
      image: qocho,
      name: "Qocho",
      description: "Soft enset-based flatbread paired with spicy meat sauce.",
      price: "120",
    },
    {
      image: cuko,
      name: "Cuko",
      description: "Delicious Oromo delicacy made with barley and rich spices.",
      price: "400",
    },
    {
      image: buna,
      name: "Ethiopian Coffee",
      description: "Authentic hand-roasted coffee prepared in a traditional ceremony.",
      price: "100",
    },
  ];

  return (
    <section className="py-20  flex flex-col items-start   relative overflow-hidden">
      <h2 className="text-3xl md:text-sm font-bold text-center mb-3 text-red-700">
        CUSTOMER FAVORITES
      </h2>
      <h2 className="text-3xl md:text-2xl font-bold text-center mb-10 text-gray-900">
        POPULAR CATEGORIES
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative w-full h-56">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-red-700">
                  {item.price} ETB
                </span>
                {/* <button className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-800 transition">
                  Order Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategory;
