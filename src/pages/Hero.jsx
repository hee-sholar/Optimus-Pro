"use client"

import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { ArrowRight, Star } from "lucide-react"
import BigPicture from "./BigPicture"
import CommunitySection from "./CommunitySection"
import StatsSection from "./StatsSection"
import IndustrySection from "./IndustrySection"
import BlogSection from "./BlogSection"
import ConnectSection from "./ConnectSection"

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
        <div
          data-aos="zoom-in"
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/40 border border-blue-800/40 rounded-full px-4 py-2 backdrop-blur-sm">
            <Star size={16} className="text-blue-400" fill="currentColor" />
            <span className="text-sm text-blue-200">
              Building intelligent products for the decentralized future
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Building the Future at the Intersection of{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI, Blockchain & Community
          </span>
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
          <button className="px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition">
            Read Bytepaper
          </button>

          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition shadow-lg shadow-blue-600/30">
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
      {/* <BigPicture /> */}
    </section>
    <BigPicture />
    <CommunitySection />
    <StatsSection />
    <IndustrySection />
    <BlogSection />
    <ConnectSection />
    </>
  )
}