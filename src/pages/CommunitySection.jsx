"use client"

import React from "react"

export default function CommunitySection() {
  return (
    <section id="#community" className="relative overflow-hidden px-6 text-white">

      {/* ===== BACKGROUND GRADIENT ===== */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#020617] via-[#07132a] to-[#020617]" />

      {/* ===== RADIAL GLOW ===== */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_60%)]" />

      <div className="max-w-7xl mx-auto">

        {/* ================= TOP COMMUNITY BOX ================= */}
        <div className="border border-blue-500/40 border-dashed rounded-lg p-12 text-center mb-24 backdrop-blur-md bg-blue-950/20">

          <p className="text-blue-400 mb-3">We Don’t Build Alone</p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Built with the Optimists, not just for them
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Everything we build at Optimus PRO is shaped alongside a growing collective of Optimists —
            our global community of visionaries, builders, innovators, and early believers bound by a shared vision
            for an intelligent, decentralized future.
          </p>

          <p className="text-slate-400 text-sm mb-6">
            Community isn’t an audience here. It’s a co-builder.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md text-sm font-medium shadow-lg shadow-blue-600/30">
            Join the Optimists
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-blue-600/40 mb-20" />

        {/* ================= HOW EVERYTHING CONNECTS ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h3 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
              How everything connects
            </h3>

            <p className="text-slate-400 mb-6">
              Reimaging the frontier technology ecosystem
            </p>

            <p className="text-slate-300 leading-relaxed">
              Imagine an ecosystem unified through interoperability, enhanced by artificial
              intelligence, and powered by community. We envision an intelligent, trusted,
              and inclusive digital ecosystem where people can safely create, own, and collaborate —
              and that’s why we exist.
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
  )
}