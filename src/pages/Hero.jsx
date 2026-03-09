"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import BigPicture from "./BigPicture";
import CommunitySection from "./CommunitySection";
import IndustrySection from "./IndustrySection";
import ConnectSection from "./ConnectSection";
import Footer from "../components/Footer";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-36"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          {/* Badge */}
          <div data-aos="zoom-in" className="flex justify-center mb-8 px-">
            <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-800/40 rounded-full px-3 py-2 backdrop-blur-sm">
              {/* Badge Text */}
              <span className="text-xs sm:text-sm text-blue-200">
                We build intelligent products for the decentralized future
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-100 leading-tight mb-6"
          >
            <span className="">Building</span> the Future at the
            Intersection of AI, Blockchain & Community
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            A frontier technology startup pushing the boundaries of intelligent,
            secure, and community-centric products redefining how people
            interact with technology.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Explore Products Button */}
            <a href="#products" className="w-full sm:w-auto">
              <button className="cursor-pointer w-full px-6 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition text-center">
                Explore Products
              </button>
            </a>

            {/* Join Button */}
            <a href="#footer" className="w-full sm:w-auto">
              <button className="cursor-pointer w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex justify-center items-center gap-2 transition shadow-lg shadow-blue-600/30">
                Join the Optimists
                <ArrowRight size={16} />
              </button>
            </a>
          </div>
        </div>

        {/* Floating Dots Animation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 pointer-events-none">
          <div className="absolute inset-0 flex items-end justify-center opacity-20">
            <div className="grid grid-cols-12 gap-3 w-64">
              {Array.from({ length: 60 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-500/50"
                  style={{
                    animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-20px);
              opacity: 0.7;
            }
          }
        `}</style>
      </section>

      <section id="products">
        <BigPicture />
      </section>

      {/* COMMUNITY */}
      <section id="community">
        <CommunitySection />
      </section>

      {/* INDUSTRY */}
      <section id="company">
        <IndustrySection />
      </section>

      {/* CONNECT */}
      <section id="contact">
        <ConnectSection />
      </section>

      {/* FOOTER */}
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
