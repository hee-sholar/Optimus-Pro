"use client";

import React from "react";
import { Wallet } from "lucide-react";

export default function BigPicture() {
  return (
    <section
      id="products"
      className="relative overflow-hidden px-6 text-white mb-0"
    >
      {/* ===== BASE GRADIENT ===== */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#020617] via-[#07132a] to-[#020617]" />

      {/* ===== SOFT RADIAL GLOW ===== */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_65%)]" />

      {/* ===== DOTTED OVERLAY ===== */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_#2563eb_6px,_transparent_6px)] [background-size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ================= BIG PICTURE ================= */}
        <div data-aos="fade-up" className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
            The BIG Picture
          </h2>

          <div className="md:px-0">
            <div className="md:px-0">
              <p
                className="
    text-slate-300
    text-[15px] md:text-lg
    leading-[1.65] md:leading-relaxed
    tracking-[-0.01em]
    text-justify
    mx-auto
    max-w-[330px] md:max-w-2xl
    hyphens-auto
  "
              >
                The next era of the internet won’t be defined by{" "}
                <em className="italic text-white">hype or speculation</em>. It
                will be shaped by intelligence, trust, and aligned communities.
                Optimus PRO exists to make that future real. We believe the
                future isn’t just decentralized. It’s intelligent, open, secure
                and collec<span className="text-center">tive by design</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mb-20" />

        {/* ================= WHAT WE ARE BUILDING ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div
            data-aos="fade-right"
            className="animate-[floatSlow_6s_ease-in-out_infinite]"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-1">
              What we are building
            </h3>

            <p className="text-slate-400 mb-6 whitespace-nowrap text-sm md:text-base">
              Next-generation products by Optimus PRO Labs.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
              We’re building a connected suite of products designed to make
              decentralized technology usable, intelligent, and human-centered.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div data-aos="fade-left">
            <div
              className="group border border-blue-500/30 rounded-2xl p-8 bg-blue-950/20 backdrop-blur-xl 
              hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 
              transition duration-300"
            >
              <Wallet
                className="text-blue-400 mb-6 group-hover:scale-110 transition"
                size={36}
              />

              <h4 className="text-xl font-semibold mb-3">Proxion</h4>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                The intelligent wallet for the new digital economy. A smart,
                secure gateway for managing identity, assets, and interactions
                across Web3.
              </p>

              <span className="text-sm text-blue-400 cursor-pointer group-hover:text-blue-300">
                Learn more →
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
