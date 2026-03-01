import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import AOS from "aos"
import "aos/dist/aos.css"
import Footer from "./components/Footer"

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

        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App