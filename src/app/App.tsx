import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CursorGlow from "../components/animations/CursorGlow";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Internship from "../components/sections/Internship";
import Research from "../components/sections/Research";
import Creator from "../components/sections/Creator";
import Timeline from "../components/sections/Timeline";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Synchronize CSS class with dark mode state on standard document level
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* Main Container */}
      <div
        id="app-container"
        className={`min-h-screen relative overflow-hidden transition-colors duration-500 font-sans ${
          isDarkMode ? "bg-[#0F0F14] text-white" : "bg-slate-50 text-neutral-900"
        }`}
      >
        {/* Interactive Cursor Glow Background overlay */}
        <CursorGlow isDarkMode={isDarkMode} />

        {/* Global Nav Header */}
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* Sections Scroll Flow */}
        <main className="relative z-10">
          <Hero isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
          <Internship isDarkMode={isDarkMode} />
          <Research isDarkMode={isDarkMode} />
          <Creator isDarkMode={isDarkMode} />
          <Timeline isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
        </main>

        {/* Creative Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
      
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </>
  );
}
