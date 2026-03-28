"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Send,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const iconStyle =
    "hover:text-white transition duration-300 hover:scale-110";

  return (
    <footer className="relative bg-[#020817] text-white pt-24 pb-12 px-6 overflow-hidden">
      
      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Logo */}
        <div data-aos="fade-up" className="flex justify-center mb-6">
          <img
            src="/opti.png"
            alt="Optimus PRO"
            className="h-10 sm:h-12 object-contain"
          />
        </div>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 px-4"
        >
          Be part of a growing movement building intelligent, decentralized
          systems for the next era of the internet.
        </p>

        {/* Social Icons */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center gap-6 text-gray-400 mb-8 flex-wrap"
        >
          <a href="https://www.linkedin.com/company/optimusproinc/" target="_blank" rel="noopener noreferrer">
            <Linkedin className={iconStyle} size={20} />
          </a>

          <a href="https://x.com/OptimusPRO_org" target="_blank" rel="noopener noreferrer">
            <Twitter className={iconStyle} size={20} />
          </a>

          <a href="https://www.instagram.com/optimuspro_org" target="_blank" rel="noopener noreferrer">
            <Instagram className={iconStyle} size={20} />
          </a>

          {/* Telegram */}
          <a href="https://t.me/optimuspro" target="_blank" rel="noopener noreferrer">
            <Send className={iconStyle} size={20} />
          </a>

          {/* Discord */}
          <a href="https://discord.gg/CYkVRGUVY" target="_blank" rel="noopener noreferrer">
            <MessageCircle className={iconStyle} size={20} />
          </a>
        </div>

        {/* CTA (clean, no strong border) */}
        <div data-aos="fade-up" data-aos-delay="300">
          <button
            className="
              bg-gradient-to-r from-blue-600 to-cyan-500
              px-6 py-3 rounded-lg text-sm font-medium text-white
              shadow-md
            "
          >
            Join The Movement
          </button>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="relative z-10 max-w-6xl mx-auto border-t border-blue-500/20 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
        <p>© 2026 Optimus PRO. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Terms of Service
          </span>
        </div>
      </div>

      {/* ===== BIG BACKGROUND TEXT ===== */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none">
        <h1 className="text-[60px] sm:text-[120px] md:text-[180px] font-bold text-white/5 tracking-widest whitespace-nowrap">
          Optimus PRO
        </h1>
      </div>

      {/* Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none"></div>

    </footer>
  );
}