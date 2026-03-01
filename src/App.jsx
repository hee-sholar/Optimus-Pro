"use client"

import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import Footer from "./components/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import ConnectSection from "./pages/ConnectSection"
import CommunitySection from "./pages/CommunitySection"
import BigPicture from "./pages/BigPicture"
import IndustrySection from "./pages/IndustrySection"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#050B1A] via-[#0A1F44] to-[#00C2FF]/20 text-white overflow-x-hidden">
        <Navbar />

        {/* Add top padding to avoid overlapping with fixed navbar */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<BigPicture />} />
            <Route path="/community" element={<CommunitySection/>} />
            <Route path="/company" element={<IndustrySection />} />
            <Route path="/contact" element={<ConnectSection />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App