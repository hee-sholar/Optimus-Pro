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
      <div className="py-24 px-6 md:px-20">
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

      {/* Divider Line */}
      <div className="w-full h-[2px] bg-blue-500/30"></div>

      {/* ================= NEWSLETTER ================= */}
      <div className="bg-[#031225] py-24 px-6 md:px-20">
        <div
          data-aos="fade-up"
          className="max-w-xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
            Stay Updated on Our Journey
          </h3>

          <p className="text-gray-400 mb-10">
            Join our newsletter to receive regular updates on our progress,
            product developments, and exciting news from our team.
          </p>

          {/* Input */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-3 rounded-md 
                       bg-[#071426] border border-blue-500/20 
                       focus:outline-none focus:border-blue-500 
                       text-sm"
          />

          {/* Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 
                             transition px-6 py-3 rounded-md 
                             text-sm font-medium">
            Subscribe
          </button>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs mt-6 italic">
            We respect your inbox. Updates monthly.  
            Unsubscribe anytime.
          </p>
        </div>
      </div>

    </section>
  );
}