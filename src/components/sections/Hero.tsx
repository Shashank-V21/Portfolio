import React from "react";
import { ArrowRight, Download, Send, Sparkles, Code2, Play, Youtube, TrendingUp, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { heroData } from "../../data/portfolioData";
import { scrollToSection } from "../../utils/scroll";
import { generateResumePdf } from "../../utils/generateResumePdf";
import { useYouTubeLiveCount } from "../../hooks/useYouTubeLiveCount";
import heroImg from "../../assets/images/hero.jpg";

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const { formattedCount, isLoading, rawCount } = useYouTubeLiveCount();
  const [prevCount, setPrevCount] = React.useState(rawCount);
  const [isIncrementing, setIsIncrementing] = React.useState(false);

  React.useEffect(() => {
    if (rawCount > prevCount) {
      setIsIncrementing(true);
      const timer = setTimeout(() => setIsIncrementing(false), 800);
      setPrevCount(rawCount);
      return () => clearTimeout(timer);
    } else {
      setPrevCount(rawCount);
    }
  }, [rawCount, prevCount]);

  const handleScrollTo = (id: string) => {
    scrollToSection(id, 80);
  };

  const handleDownloadCV = () => {
    // Generate a beautiful simulated resume download event with toast notice
    const customToast = document.createElement("div");
    customToast.className = `fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl font-mono text-xs z-[9999] flex items-center gap-3 animate-bounce border ${
      isDarkMode ? "bg-[#1A1A24] text-purple-400 border-white/10" : "bg-white text-purple-600 border-purple-100"
    }`;
    customToast.innerHTML = `
      <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      <span>Preparing Shashank_V_Resume.pdf...</span>
    `;
    document.body.appendChild(customToast);

    setTimeout(() => {
      try {
        // Trigger actual high-fidelity PDF generation and download
        generateResumePdf();

        customToast.innerHTML = `
          <svg class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
          <span>Downloaded successfully!</span>
        `;
      } catch (err) {
        customToast.innerHTML = `
          <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          <span>Error generating resume. Try again.</span>
        `;
        console.error(err);
      }
      setTimeout(() => customToast.remove(), 2500);
    }, 1500);
  };

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6 md:px-12"
    >
      {/* Background gradients and meshes */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[120px] mix-blend-screen opacity-20 transition-colors duration-500 ${
          isDarkMode ? "bg-purple-600" : "bg-purple-400"
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full blur-[150px] mix-blend-screen opacity-10 transition-colors duration-500 ${
          isDarkMode ? "bg-indigo-600" : "bg-indigo-400"
        }`} />
        <div className={`absolute inset-0 opacity-40 transition-all duration-300 ${isDarkMode ? "grid-bg-dark" : "grid-bg-light"}`} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left text column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Subtle Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 transition-all border ${
              isDarkMode
                ? "bg-purple-500/10 border-purple-500/20 text-purple-300"
                : "bg-purple-50 border-purple-100 text-purple-700"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span>{heroData.tagline}</span>
          </motion.div>

          {/* User Name */}
          <motion.h1
            variants={itemVariants}
            className={`font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-indigo-600">
              {heroData.name}
            </span>
          </motion.h1>

          {/* User Role */}
          <motion.h2
            variants={itemVariants}
            className={`font-display font-semibold text-xl sm:text-2xl mt-4 transition-colors duration-300 ${
              isDarkMode ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            {heroData.role}
          </motion.h2>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg mt-6 leading-relaxed max-w-xl transition-colors duration-300 ${
              isDarkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {heroData.shortIntro}
          </motion.p>

          {/* Quick interactive features status */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 sm:gap-6 mt-6 font-mono text-[11px] sm:text-xs text-neutral-500"
          >
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Open to work</span>
            </div>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <button
              id="hero-projects-btn"
              onClick={() => handleScrollTo("#projects")}
              className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2.5 group cursor-pointer transition-all duration-300 ${
                isDarkMode
                  ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/25 border-t border-purple-300/30"
                  : "bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg shadow-neutral-900/25"
              }`}
            >
              {heroData.cta.projects}
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              id="hero-resume-btn"
              onClick={handleDownloadCV}
              className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2.5 cursor-pointer border transition-all duration-300 ${
                isDarkMode
                  ? "bg-neutral-900 hover:bg-neutral-800 border-white/5 text-neutral-200 hover:text-white"
                  : "bg-white hover:bg-neutral-50 border-purple-100 text-neutral-700 hover:text-neutral-950"
              }`}
            >
              <Download className="w-4.5 h-4.5" />
              {heroData.cta.resume}
            </button>
          </motion.div>
        </motion.div>

        {/* Right graphic column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="lg:col-span-12 xl:col-span-5 lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[4/5] flex items-center justify-center">
            {/* Ambient workspace glowing aura */}
            <div className="absolute w-72 h-72 rounded-full blur-[100px] opacity-25 -z-10 bg-gradient-to-tr from-purple-500 to-indigo-500" />
            
            {/* Custom Interactive Profile Image Frame */}
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className={`relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl border transition-all duration-300 p-2 ${
                isDarkMode 
                  ? "bg-[#0E0E14] border-white/10 shadow-black/60" 
                  : "bg-white border-purple-100 shadow-purple-900/10"
              }`}
            >
              {/* Inner container to clip image properly */}
              <div className="relative w-full h-full overflow-hidden rounded-[24px]">
                <img
                  src={heroImg}
                  alt="Shashank V portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating status tag */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5 select-none text-[10px] sm:text-xs font-mono font-medium text-white shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span>CREATOR / DEV</span>
                </div>
                
                {/* Bottom dark overlay with text */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-left flex flex-col pt-14">
                  <span className="text-white text-base sm:text-lg font-display font-semibold tracking-tight">Shashank V</span>
                  <span className="text-neutral-400 text-xs font-mono mt-0.5">@shashank_diaries</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
