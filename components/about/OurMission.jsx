"use client";

import React from "react";
import { Heart, Users, Star } from "lucide-react";

const OurMission = () => {
  const values = [
    {
      icon: <Heart className="w-10 h-10 text-red-600" />,
      title: "Authenticity",
      description:
        "We serve dishes inspired by Ethiopian flavors and global favorites, always staying true to quality.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-600" />,
      title: "Community",
      description:
        "We bring people together through food and culture, celebrating connection and shared experiences.",
    },
    {
      icon: <Star className="w-10 h-10 text-red-600" />,
      title: "Excellence",
      description:
        "We strive for perfection in every dish, ensuring every guest leaves with a smile.",
    },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-red-700 mb-2">
        Our Mission and Values
      </h2>
      <p className="text-gray-600 text-lg mb-12">What Drives Us</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl shadow-md  hover:shadow-xl transition-all duration-500 bg-gray-50 hover:bg-white"
          >
            <div className="flex justify-center mb-5">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {value.title}
            </h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMission;
