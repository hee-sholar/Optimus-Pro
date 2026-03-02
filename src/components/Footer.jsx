"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="relative bg-[#020817] text-white pt-20 pb-10 px-6 md:px-20 overflow-hidden">

      {/* ====== CONTENT ====== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">

        {/* LEFT SIDE */}
        <div data-aos="fade-up">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            Optimus PRO
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            Be part of a growing movement building intelligent, decentralized
            systems for the next era of the internet.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <Linkedin className="hover:text-white cursor-pointer transition" size={18} />
            <Twitter className="hover:text-white cursor-pointer transition" size={18} />
            <Github className="hover:text-white cursor-pointer transition" size={18} />
            <Instagram className="hover:text-white cursor-pointer transition" size={18} />
          </div>

          {/* Button */}
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md text-sm font-medium">
            Join The Movement
          </button>
        </div>

        {/* NAVIGATIONS */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-semibold mb-4">Navigations</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Resources</li>
            <li className="hover:text-white cursor-pointer">Company</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
          </ul>
        </div>
      </div>

      {/* ====== BOTTOM BAR ====== */}
      <div className="max-w-7xl mx-auto border-t border-blue-500/20 mt-16 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-400 relative z-10">
        <p>© 2026 Optimus PRO. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>

      {/* ====== BIG BACKGROUND TEXT ====== */}
      <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none">
        <h1 className="text-[80px] md:text-[180px] font-bold text-white/5 tracking-widest whitespace-nowrap">
          Optimus PRO
        </h1>
      </div>

      {/* Gradient Overlay for fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none"></div>

    </footer>
  );
}