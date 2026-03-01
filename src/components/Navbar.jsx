"use client"

import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { ArrowRight, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Define nav items with their paths
  const navItems = [
    { name: "Products", path: "/products" },
    { name: "Community", path: "/community" },
    { name: "Company", path: "/company" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 w-full z-50 border-b border-cyan-400/10 
      bg-gradient-to-r from-[#050B1A]/90 via-[#0A1F44]/90 to-[#001B33]/90 
      backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/opti.png" alt="Optimus Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-10 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-slate-300 hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              to="/join"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-400 hover:to-blue-500 
              text-white px-5 py-2 rounded-lg font-medium 
              flex items-center gap-2 transition shadow-lg shadow-cyan-500/20"
            >
              Join The Movement
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-[#050B1A]/95 backdrop-blur-xl border-t border-cyan-400/10`}
      >
        <div className="px-6 py-6 space-y-6 text-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block w-full text-slate-300 hover:text-cyan-400 transition text-lg"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/join"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 
            hover:from-cyan-400 hover:to-blue-500 
            text-white px-6 py-3 rounded-lg font-medium 
            flex items-center justify-center gap-2 transition"
          >
            Join The Movement
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  )
}