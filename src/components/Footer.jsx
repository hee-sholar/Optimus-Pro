"use client"

import React, { useEffect } from "react"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <footer className="relative bg-slate-950 text-slate-100 border-t border-slate-800 overflow-hidden">

      {/* Subtle Top Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

          {/* Branding */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/opti.png"
                alt="Optimus PRO Logo"
                className="h-8 w-auto"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-8">
              Be part of a growing movement building intelligent,
              decentralized systems for the future of the internet.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group p-2.5 bg-slate-900 border border-slate-800 rounded-xl
                             hover:border-blue-500 hover:bg-slate-800
                             transition-all duration-300"
                >
                  <Icon
                    size={18}
                    className="text-slate-400 group-hover:text-blue-500 transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* Button */}
            <button
              className="relative px-6 py-3 bg-blue-600 hover:bg-blue-700 
                         rounded-xl text-sm font-medium tracking-wide
                         shadow-lg shadow-blue-600/20
                         transition-all duration-300
                         hover:shadow-blue-600/40"
            >
              Join the Movement
            </button>
          </div>

          {/* Navigation */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-white font-semibold mb-8 text-lg">
              Navigation
            </h3>
            <nav className="flex flex-col gap-5 text-sm">
              {["Community", "Resources", "Company", "Contact Us"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-white font-semibold mb-8 text-lg">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-5 text-sm">
              {["About Us", "Testimonials", "Blogs"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-400 hover:text-blue-500 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Bottom Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p>© 2026 Optimus PRO. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}