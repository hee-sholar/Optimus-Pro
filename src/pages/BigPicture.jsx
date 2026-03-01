"use client"

import React from "react"
import { Wallet, User, Users } from "lucide-react"

export default function BigPicture() {
  return (
    <section className="relative overflow-hidden py-24 px-6 text-white">

      {/* ===== BASE BLUE GRADIENT ===== */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#020617] via-[#07132a] to-[#020617]" />

      {/* ===== RADIAL GLOW ===== */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_60%)]" />

      {/* ===== DOTTED OVERLAY ===== */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_#2563eb_1px,_transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ===== BIG PICTURE ===== */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center p-10 mb-20 backdrop-blur-md"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            The BIG Picture
          </h2>

          <p className="text-slate-300 leading-relaxed">
            The next era of the internet won’t be defined by hype or speculation.
            It will be shaped by intelligence, trust, and aligned communities.
            Optimus PRO exists to make that future real. We believe, the future
            isn’t just decentralized. It’s intelligent, open, secure, and
            collective by design.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-blue-600/40 mb-16" />

        {/* ===== WHAT WE ARE BUILDING ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT TEXT */}
          <div data-aos="fade-right">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              What we are building
            </h3>

            <p className="text-slate-400 mb-6">
              Explore next-generation products by Optimus PRO Labs
            </p>

            <p className="text-slate-400 mb-10 leading-relaxed">
              We’re building a connected suite of products designed to make
              decentralized technology usable, intelligent, and human-centered.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Together, these layers power a more intelligent, secure,
              and human-centric decentralized ecosystem for everyday users.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6" data-aos="fade-left">

            {/* TOP GRID */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* PROXION */}
              <div className="border border-blue-500/40 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300 bg-blue-950/20 backdrop-blur-md">
                <Wallet className="text-blue-400 mb-4" size={32} />
                <h4 className="text-lg font-semibold mb-2">Proxion</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  The intelligent wallet for the new digital economy.
                  A smart, secure gateway for managing identity, assets
                  and interactions across Web3.
                </p>
                <span className="text-xs text-blue-400">more →</span>
              </div>

              {/* PROPASS */}
              <div className="border border-blue-500/40 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300 bg-blue-950/20 backdrop-blur-md">
                <User className="text-blue-400 mb-4" size={32} />
                <h4 className="text-lg font-semibold mb-2">PROpass</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Smart identity and access for the evolving web.
                  A unified identity layer enabling trust, access,
                  and participation across decentralized systems.
                </p>
                <span className="text-xs text-blue-400">more →</span>
              </div>
            </div>

            {/* PROTEAM */}
            <div className="border border-blue-500/40 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300 bg-blue-950/20 backdrop-blur-md">
              <Users className="text-blue-400 mb-4" size={32} />
              <h4 className="text-lg font-semibold mb-2">PROteam</h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                The token layer bridging decentralized ecosystems.
                A coordinated network of contributors, builders,
                and operators powering creation, adoption, and growth.
              </p>
              <span className="text-xs text-blue-400">more →</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}