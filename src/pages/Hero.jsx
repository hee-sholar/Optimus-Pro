"use client"

import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { ArrowRight } from "lucide-react"
import BigPicture from "./BigPicture"
import CommunitySection from "./CommunitySection"
import IndustrySection from "./IndustrySection"
import ConnectSection from "./ConnectSection"

// Custom 4-pointed AI Star Icon
const AiStar = ({ size = 16, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12,2 14,12 22,12 14,14 12,22 10,14 2,12 10,12 12,2" />
    <circle cx="12" cy="12" r="2" fill="#00f" />
    <line x1="12" y1="10" x2="12" y2="14" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
)

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div data-aos="zoom-in" className="flex justify-center mb-8 px-2 sm:px-0">
  <div className="inline-flex flex-nowrap items-center gap-2 sm:gap-3 bg-blue-950/40 border border-blue-800/40 rounded-full px-3 sm:px-4 py-2 backdrop-blur-sm max-w-full">
    {/* AI Star Icon */}
    <AiStar size={20} className="text-blue-400 flex-shrink-0" />
    
    {/* Badge Text */}
    <span className="text-xs sm:text-sm text-blue-200 truncate">
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
            <span className="text-gray-500">Building</span> the Future at the Intersection of{" "}
              AI, Blockchain & Community
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            A frontier technology startup pushing the boundaries of intelligent,
            secure, and community-centric products redefining how people interact
            with technology.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="w-full sm:w-auto px-6 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition text-center">
              Explore Products
            </button>

            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex justify-center items-center gap-2 transition shadow-lg shadow-blue-600/30">
              Join the Optimus
              <ArrowRight size={16} />
            </button>
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
            0%, 100% {
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

      <BigPicture />
      <CommunitySection />
      <IndustrySection />
      <ConnectSection />
    </>
  )
}