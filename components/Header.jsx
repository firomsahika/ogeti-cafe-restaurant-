"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed h-20 top-0 left-0 w-full px-12 backdrop-blur-2xl z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 ">
        {/* Logo */}
        <div className="text-2xl font-bold text-amber-700">
          <Link href="/">
             <Image 
             src={logo}
             width={60}
             height={60}
             alt="ogeti cafe and restaurant logo "
             className="object-cover"
             />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <Link href="/" className="hover:text-amber-600 transition">Home</Link>
          <Link href="/about" className="hover:text-amber-600 transition">About</Link>
          <Link href="/service" className="hover:text-amber-600 transition">Service</Link>
          <Link href="/gallery" className="hover:text-amber-600 transition">Gallery</Link>
        </nav>

        {/* Contact Us Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-red-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-800 font-medium">
          <Link href="/" className="block hover:text-amber-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-amber-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/service" className="block hover:text-amber-600" onClick={() => setIsOpen(false)}>Service</Link>
          <Link href="/gallery" className="block hover:text-amber-600" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link
            href="/contact"
            className="block bg-red-700 text-white px-4 py-2 rounded-full text-center hover:bg-amber-800"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
