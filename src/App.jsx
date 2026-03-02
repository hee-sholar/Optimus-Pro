"use client"

import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import Footer from "./components/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

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

        {/* Only ONE route */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App