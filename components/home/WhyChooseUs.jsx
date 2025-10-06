"use client";

import React from "react";
import { HandPlatter, Utensils, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const categories = [
    {
      icon: <HandPlatter size={48} className="text-red-600" />,
      name: "Serve Healthy Food",
      description: "We serve fresh and healthy meals prepared with care using only the finest ingredients.",
    },
    {
      icon: <Utensils size={48} className="text-red-600" />,
      name: "Best Quality Food",
      description: "Our meals are prepared with top-quality ingredients to ensure delicious taste and high nutrition.",
    },
    {
      icon: <Zap size={48} className="text-red-600" />,
      name: "Fast Delivery",
      description: "We ensure fast and reliable delivery so you can enjoy your food at the perfect time.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-700">WHY CHOOSE US</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We stand out because we combine quality, health, and speed to give you the best dining experience possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <div className="mb-6">{category.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
