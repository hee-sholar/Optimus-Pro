"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

export default function ConnectSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full bg-[#020817] text-white">

      {/* ================= LET'S CONNECT ================= */}
      <div className=" px-6 md:px-20">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto border border-blue-500/30 
                     rounded-xl text-center p-12 
                     bg-[#071426]"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Let’s Connect
          </h2>

          <p className="text-blue-400 text-sm mb-6">
            Partnerships · Collaborations · Inquiries
          </p>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you’re a potential partner, investor, fellow builder,
            or just curious about what we’re creating, we’d love to hear from you.
          </p>

          <button className="inline-flex items-center gap-2 bg-blue-600 
                             hover:bg-blue-700 transition 
                             px-6 py-2 rounded-md text-sm font-medium">
            Start a Conversation
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

    </section>
  );
}