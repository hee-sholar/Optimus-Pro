"use client";

import React from "react";

export default function CommunitySection() {
  return (
    <section
      id="#community"
      className="relative overflow-hidden py-20 px-6 text-white"
    >
      {/* ===== BACKGROUND GRADIENT ===== */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#020617] via-[#07132a] to-[#020617]" />

      {/* ===== RADIAL GLOW ===== */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_60%)]" />

      <div className="max-w-7xl mx-auto">
        {/* ================= TOP COMMUNITY BOX ================= */}
        <div className="mb-24 backdrop-blur-md max-w-4xl mx-auto">
          {/* Heading */}
          <p className="text-blue-400 text-center text-2xl font-semibold tracking-tight">
            We Don’t Build Alone
          </p>

          {/* Subheading */}
          <h2 className="font-semibold text-center mb-6">
            Built with the Optimists, for global adoption
          </h2>

          {/* Body */}
          <div className="max-w-md md:max-w-3xl md:px-0">
            <p className="text-slate-300 leading-relaxed mb-5 mx-auto text-justify hyphens-auto">
              Everything we build at Optimus PRO is shaped alongside a growing
              collective of Optimists — our global community of visionaries,
              builders, innovators, and early believers bound by a shared vision
              for an intelligent, decentralized future.
            </p>

            <p className="text-slate-400 text-sm mb-6">
              Community isn’t an audience here. It’s a co-builder.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md text-sm font-medium shadow-lg shadow-blue-600/30">
              Join the Contributors
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-blue-600/40 mb-20" />

        {/* ================= HOW EVERYTHING CONNECTS ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h3 className="text-2xl text-blue-400 font-semibold mb-0">
              How everything connects
            </h3>

            <p className="text-slate-400 mb-6">
              Reimaging the frontier technology ecosystem
            </p>

            <p className="text-slate-300 leading-relaxed">
              Imagine an ecosystem unified through interoperability, enhanced by
              artificial intelligence, and powered by community. We envision an
              intelligent, trusted, and inclusive digital ecosystem where people
              can safely create, own, and collaborate
            </p>
          </div>

          {/* RIGHT GRAPHIC */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              {/* Outer Ring */}
              <img src="/Frame.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
