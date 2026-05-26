import React from "react";
import { Github, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = (targetElement as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="main-footer"
      className={`relative border-t py-12 px-6 md:px-12 transition-all duration-300 ${
        isDarkMode
          ? "bg-[#0B0B0F] border-white/5 text-neutral-400"
          : "bg-purple-50/50 border-purple-100/50 text-neutral-600"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Name and Tag */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center font-display font-bold text-white text-base">
              S
            </div>
            <span className={`font-display font-semibold transition-colors ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
              Shashank V
            </span>
          </div>
          <p className="text-xs font-mono text-neutral-500 mt-1 uppercase tracking-wider">
            Developer by logic, creator by passion.
          </p>
        </div>

        {/* Quick link lists */}
        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className={`transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-purple-600"}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className={`transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-purple-600"}`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "#projects")}
            className={`transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-purple-600"}`}
          >
            Projects
          </a>
          <a
            href="#creator"
            onClick={(e) => handleNavClick(e, "#creator")}
            className={`transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-purple-600"}`}
          >
            Creator
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={`transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-purple-600"}`}
          >
            Contact
          </a>
        </div>

        {/* Right Action Icons & Back to top button */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                isDarkMode 
                  ? "bg-neutral-900 border-white/5 text-neutral-400 hover:text-white hover:border-white/10" 
                  : "bg-white border-purple-100 text-neutral-600 hover:text-purple-600"
              }`}
              aria-label="GitHub Link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                isDarkMode 
                  ? "bg-neutral-900 border-white/5 text-indigo-400 hover:text-white hover:border-white/10" 
                  : "bg-white border-purple-100 text-neutral-600 hover:text-purple-600"
              }`}
              aria-label="LinkedIn Link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@shashank_diaries"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                isDarkMode 
                  ? "bg-neutral-900 border-white/5 text-red-500 hover:text-white hover:border-white/10" 
                  : "bg-white border-purple-100 text-neutral-600 hover:text-purple-600"
              }`}
              aria-label="YouTube Link"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
              isDarkMode
                ? "bg-neutral-900 border-white/5 text-purple-400 hover:bg-neutral-800"
                : "bg-white border-purple-100 text-purple-600 hover:bg-purple-100"
            }`}
            title="Scroll back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className={`text-center mt-8 pt-6 border-t font-mono text-[10px] leading-relaxed transition-all ${
        isDarkMode ? "border-white/5 text-neutral-600" : "border-purple-100 text-neutral-400"
      }`}>
        <span>© 2026 SHASHANK V. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
