// StatsSection.js
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, Box, Handshake } from "lucide-react";

const StatItem = ({ icon, target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <div
      className="flex flex-col items-center justify-center text-center space-y-2
                 bg-gradient-to-br from-black via-blue-900 to-blue-500
                 border border-blue-500
                 p-6 rounded-3xl shadow-2xl w-60"
      data-aos="fade-up"
    >
      <div className="text-white text-4xl">{icon}</div>
      <div className="text-3xl font-bold text-white">{count.toLocaleString()}+</div>
      <div className="text-gray-200">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#020617] via-[#07132a] to-[#020617] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h3 className="text-gray-300 uppercase tracking-wide">Our Story in Numbers</h3>
        <p className="text-gray-400">More than just words, our traction speaks for itself</p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8">
          <StatItem icon={<Handshake size={40} />} target={115} label="Global co-builders" />
          <StatItem icon={<Box size={40} />} target={3} label="Products in active development" />
          <StatItem icon={<Users size={40} />} target={25000} label="Wait-listed users" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;