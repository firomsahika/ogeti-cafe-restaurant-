"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // ✅ Get the current path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md bg-white/40 shadow-md py-2" : "py-2"
      }`}
    >
      <div className=" px-10 md:px-20 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image 
            src={logo}
            width={isScrolled ? 45 : 54}
            height={isScrolled ? 45 : 54}
            alt="Ogeti Cafe and Restaurant logo"
            className="object-cover transition-all duration-300"
          />
        </Link>  

        {/* Centered Nav */}
        <div
          className={`hidden md:flex items-center justify-center transition-all duration-500 ${
            isScrolled ? "max-w-3xl w-full rounded-full py-2 px-8" : ""
          }`}
        >
          <nav
            className={`flex space-x-8 font-semibold ${
              isScrolled ? "text-gray-800" : "text-gray-900"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-red-600" // ✅ Active state
                    : "hover:text-amber-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className={`hidden md:block text-white rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-red-600 px-4 py-2 text-sm hover:bg-amber-700"
              : "bg-red-600 px-5 py-2 text-sm hover:bg-amber-800"
          }`}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block transition ${
                pathname === link.href
                  ? "text-red-600" // ✅ Active mobile
                  : "hover:text-amber-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
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
