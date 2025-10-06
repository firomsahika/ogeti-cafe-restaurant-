"use client";

import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

import qocho from "../../public/qocho.jpg";
import cororsa from "../../public/corosa.jpg";
import cuko from "../../public/cuko.jpg";
import buna from "../../public/buna.jpg";

const testimonials = [
  {
    name: "Amanuel Tesfaye",
    review: "Ogeti Cafe offers the best traditional Oromo dishes I've ever tasted. Fresh, healthy, and delicious every time!",
    rating: 4.5,
    image: qocho, // replace with your image
  },
  {
    name: "Lily Abebe",
    review: "Amazing food and quick service. Their coffee is exceptional and always served with a smile.",
    rating: 5,
    image: cororsa,
  },
  {
    name: "Bekele Mengistu",
    review: "The ambiance, the food, and the hospitality at Ogeti Cafe make it my favorite place to eat.",
    rating: 5,
    image: cuko
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-700">What Our Customers Say</h2>
        <p className="text-gray-600 mt-4 max-w-sm mx-auto">
          Our customers’ experiences inspire us to keep delivering delicious food with passion and tradition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <div className="w-20 h-20 mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
            <div className="flex items-center gap-1 my-2">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
