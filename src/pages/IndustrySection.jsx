"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  Code,
  Palette,
  Briefcase,
  Linkedin,
} from "lucide-react";

export default function IndustrySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const testimonials = [
    {
      name: "Corrales Cachola",
      role: "Founder, Brand New Voices",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHrDw-Lgy_lsQ/profile-displayphoto-shrink_200_200/B56ZeBW6kLGQAc-/0/1750221957991?e=1774483200&v=beta&t=OMZ0omfsQLWj7HjqhHuruGmtZDuX6Fx8VK02WWXUY8I",
      linkedin:
        "https://www.linkedin.com/in/corycachola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      quote:
        "Henry is OG web3 and understands the important nuances of blockchain, how it is interconnected with other systems, and how it impacts people. I can’t wait to see where he takes Optimus PRO!",
    },
    {
      name: "Sarah Kim",
      role: "AI Product Lead, FutureStack",
      image: "https://i.pravatar.cc/100?img=48",
      linkedin: "https://www.linkedin.com/",
      quote:
        "Optimus PRO is building the kind of infrastructure the next generation of AI and decentralized systems will rely on.",
    },
    {
      name: "Michael Torres",
      role: "Blockchain Architect, NovaChain",
      image: "https://i.pravatar.cc/100?img=12",
      linkedin: "https://www.linkedin.com/",
      quote:
        "The team behind Optimus PRO understands where technology and community intersect. That’s rare in this space.",
    },
  ];

  return (
    <div className="w-full bg-[#020817] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* ================= TESTIMONIAL SECTION ================= */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="max-w-xl mx-auto">
          <h3 className="text-center text-blue-400 text-2xl mb-2 sm:text-3xl font-semibold leading-tight">
            Don't Take Our Word For It
          </h3>

          <h2
            data-aos="fade-up"
            className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-200 leading-snug mb-10"
          >
            What industry leaders are saying about us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-[#071426] border border-blue-500/20 rounded-xl p-6 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,140,255,0.05)]"
            >
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                “{item.quote}”
              </p>

              <div className="flex items-center justify-between">
                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-blue-500/30"
                  />

                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button className="p-3 rounded-full bg-[#0B1C2D] hover:bg-blue-600 transition">
            <ChevronLeft size={20} />
          </button>

          <button className="p-3 rounded-full bg-[#0B1C2D] hover:bg-blue-600 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ================= CAREER SECTION ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-400">
            Build the Future with Optimus PRO
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            We’re looking for top engineers, designers, product leads, and
            community builders passionate about AI, blockchain, and building
            products that empower people.
          </p>

          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md text-sm font-medium">
            View Open Positions
            <ArrowRight size={16} />
          </button>
        </div>

        <div
          data-aos="fade-left"
          className="bg-[#071426] border border-blue-500/20 p-6 rounded-xl shadow-[0_0_40px_rgba(0,140,255,0.05)]"
        >
          <div className="space-y-4">
            <RoleCard icon={<Code size={18} />} title="Engineers" />
            <RoleCard icon={<Palette size={18} />} title="Designers" />
            <RoleCard icon={<Briefcase size={18} />} title="Product leads" />
            <RoleCard icon={<Users size={18} />} title="Community builders" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= ROLE CARD ================= */

function RoleCard({ icon, title }) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-[#0B1C2D] to-[#0E2238] border border-blue-500/20 rounded-lg px-5 py-4 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className="text-blue-400 group-hover:text-blue-300 transition">
          {icon}
        </div>
        <span className="text-sm font-medium">{title}</span>
      </div>

      <ArrowRight
        size={16}
        className="text-gray-400 group-hover:text-white transition"
      />
    </div>
  );
}
