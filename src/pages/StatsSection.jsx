import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, Box, Handshake } from "lucide-react";

const StatItem = ({ icon, target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const totalFrames = duration / 16;
    const increment = target / totalFrames;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration]);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center text-center space-y-3 px-10 py-8"
    >
      <div className="text-blue-500">{icon}</div>
      <div className="text-4xl md:text-5xl font-bold text-white">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-black via-blue-950 to-black py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-gray-300 uppercase tracking-widest text-sm">
          Our Story in Numbers
        </h3>
        <p className="text-gray-500 mt-3">
          More than just words, our traction speaks for itself
        </p>

        {/* Stats Row */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-stretch">
          
          {/* Stat 1 */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-700">
            <StatItem
              icon={<Handshake size={42} />}
              target={115}
              label="Global co-builders"
            />
          </div>

          {/* Stat 2 */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-700">
            <StatItem
              icon={<Box size={42} />}
              target={3}
              label="Products in active development"
            />
          </div>

          {/* Stat 3 */}
          <div className="flex-1">
            <StatItem
              icon={<Users size={42} />}
              target={25000}
              label="Wait-listed users"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;