"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  Mail,
  Send,
  Linkedin,
  FileText,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ContributorPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    email: "",
    telegram: "",
    linkedin: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
  if (!form.email || !form.telegram || !form.linkedin) {
    toast.error("Please complete all fields.");
    return;
  }

  toast.success("Thanks for joining the contributor program!");

  console.log("Contributor Form:", form);

  setIsOpen(false);
};

  const handleLearnMore = () => {
    window.open(
      "https://docs.google.com/document/d/1q52w-WEGKbJ1mqRIIlIzDwlLYnsGDUDkrTDQYfsD8cs/edit",
      "_blank"
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-[28px] bg-gradient-to-r from-slate-100 via-sky-200 to-cyan-400 p-6 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute right-5 top-5 rounded-full bg-cyan-400/80 p-2 text-white hover:bg-cyan-500 transition"
        >
          <X size={18} />
        </button>

        {/* Headline */}
        <h2 className="mt-4 text-center text-4xl font-semibold text-black">
          Build with Us
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-center text-gray-700 leading-8 text-lg">
          Optimus PRO is powered by builders, creators,
          and early believers.
        </p>

        <p className="mt-3 text-center text-gray-700 leading-8 text-lg">
          Join our Contributor Program and help shape
          the future of
          <span className="font-semibold text-cyan-700">
            {" "}AI × Blockchain.
          </span>
        </p>

        {/* FORM */}
        <div className="mt-8 space-y-4">
          
          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-full bg-white/80 py-3 pl-12 pr-4 text-gray-800 placeholder:text-gray-500 outline-none"
            />
          </div>

          {/* Telegram */}
          <div className="relative">
            <Send
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              name="telegram"
              placeholder="Enter telegram username"
              value={form.telegram}
              onChange={handleChange}
              className="w-full rounded-full bg-white/80 py-3 pl-12 pr-4 text-gray-800 placeholder:text-gray-500 outline-none"
            />
          </div>

          {/* LinkedIn */}
          <div className="relative">
            <Linkedin
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              name="linkedin"
              placeholder="Enter linkedin profile"
              value={form.linkedin}
              onChange={handleChange}
              className="w-full rounded-full bg-white/80 py-3 pl-12 pr-4 text-gray-800 placeholder:text-gray-500 outline-none"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 space-y-3">
          
          {/* Primary */}
          <button
            onClick={handleSubmit}
            className=" cursor-pointer w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 py-4 text-lg font-medium text-white shadow-lg transition hover:scale-[1.02]"
          >
            Become a Contributor
          </button>

          {/* Secondary */}
          <button
            onClick={handleLearnMore}
            className="cursor-pointer w-full rounded-full border border-white/70 bg-white/30 py-4 text-lg font-medium text-gray-800 backdrop-blur-sm transition hover:bg-white/40 flex items-center justify-center gap-2"
          >
            Learn More
            <FileText size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}