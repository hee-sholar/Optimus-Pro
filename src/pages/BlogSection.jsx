"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Newspaper, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full bg-[#020817] text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Blog
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Insights, updates, and thought leadership
          </p>
        </div>

        {/* Blog Cards */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">

            <BlogCard
              title="The ABC of the Tech Frontier: How AI, Blockchain, and Community Are Shaping the Future"
              delay="0"
            />

            <BlogCard
              title="Introducing Optimus PRO: Building What’s Next for Intelligent Decentralized Systems"
              delay="150"
            />

            <BlogCard
              title="Why the Future of Trust is Intelligent and Decentralized"
              delay="300"
            />

          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button className="p-2 rounded-full bg-[#0B1C2D] hover:bg-blue-600 transition">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full bg-[#0B1C2D] hover:bg-blue-600 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= BLOG CARD ================= */

function BlogCard({ title, delay }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="
        aspect-square
        bg-gradient-to-b from-[#071426] to-[#0B1C2D]
        border border-blue-500/20
        rounded-xl
        p-8
        flex flex-col items-center justify-center
        text-center
        hover:border-blue-500/50
        hover:-translate-y-2
        transition-all duration-300
        shadow-[0_0_40px_rgba(0,140,255,0.05)]
        cursor-pointer
      "
    >
      {/* Bigger Icon Box */}
      <div className="w-20 h-20 mb-8 rounded-xl bg-[#0E2238] flex items-center justify-center text-blue-400">
        <Newspaper size={38} />
      </div>

      {/* Title */}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        {title}
      </p>
    </div>
  );
}