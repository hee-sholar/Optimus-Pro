"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  Code,
  Palette,
  Briefcase,
} from "lucide-react";

export default function IndustrySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full bg-[#020817] text-white py-20 px-6 md:px-20 overflow-hidden">
      
      {/* ================= TESTIMONIAL SECTION ================= */}
      <div className="max-w-7xl mx-auto mb-24">
        <h3 className="text-center text-blue-400 font-medium mb-2">
          Don't Take Our Word For It
        </h3>

        <h2
          data-aos="fade-up"
          className="text-center text-2xl md:text-3xl font-semibold mb-12"
        >
          What industry leaders are saying about us
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              data-aos="zoom-in"
              className="bg-[#071426] border border-blue-500/20 rounded-xl p-6 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,140,255,0.05)]"
            >
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                “Most Web3 projects solve technology problems. Optimus PRO is
                solving usability problems. That’s the difference between
                building demos and building for mass adoption.”
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                <div>
                  <p className="text-sm font-medium">Name</p>
                  <p className="text-xs text-gray-400">Title, Company</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button className="p-3 rounded-full bg-[#0B1C2D] hover:bg-blue-600 transition">
            <ChevronLeft size={20} />
          </button>

          <button className="p-3 rounded-full bg-[#0B1C2D] hover:bg-blue-600 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ================= CAREER SECTION ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div data-aos="fade-right">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-400">
            Build the Future with Optimus PRO
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            We’re looking for top engineers, designers, product leads, and
            community builders who’re passionate about AI, blockchain, and
            building products that empower people.
          </p>

          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md text-sm font-medium">
            View Open Positions
            <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT ROLE CARDS */}
        <div
          data-aos="fade-left"
          className="bg-[#071426] border border-blue-500/20 p-6 rounded-xl shadow-[0_0_40px_rgba(0,140,255,0.05)]"
        >
          <div className="space-y-4">
            <RoleCard icon={<Code size={18} />} title="Engineers" />
            <RoleCard icon={<Palette size={18} />} title="Designers" />
            <RoleCard icon={<Briefcase size={18} />} title="Product leads" />
            <RoleCard icon={<Users size={18} />} title="Community builders" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= ROLE CARD ================= */

function RoleCard({ icon, title }) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-[#0B1C2D] to-[#0E2238] border border-blue-500/20 rounded-lg px-5 py-4 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className="text-blue-400 group-hover:text-blue-300 transition">
          {icon}
        </div>
        <span className="text-sm font-medium">{title}</span>
      </div>

      <ArrowRight
        size={16}
        className="text-gray-400 group-hover:text-white transition"
      />
    </div>
  );
}