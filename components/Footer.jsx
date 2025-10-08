"use client";

import React from "react";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white pt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Ogeti Cafe & Restaurant</h3>
            <p className="text-sm max-w-xs text-gray-100">
              Bringing the taste of tradition with the best quality foods and fast delivery. Experience dining like never before.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/service" className="hover:underline">Service</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">123 Ogeti Street, Addis Ababa, Ethiopia</p>
            <p className="text-sm">Phone: +251 911 123 456</p>
            <p className="text-sm">Email: info@ogeti.com</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-amber-300"><Facebook size={24} /></Link>
              <Link href="#" className="hover:text-amber-300"><Instagram size={24} /></Link>
              <Link href="#" className="hover:text-amber-300"><Twitter size={24} /></Link>
              <Link href="mailto:info@ogeti.com" className="hover:text-amber-300"><Mail size={24} /></Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-400 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-200 text-center md:text-left">
            © 2025 Ogeti Cafe & Restaurant. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-amber-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
