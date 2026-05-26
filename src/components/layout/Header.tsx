import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Github, Linkedin, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "../ui/ThemeToggle";
import { useActiveSection } from "../../hooks/useActiveSection";
import { scrollToSection } from "../../utils/scroll";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Internship", href: "#internship" },
  { label: "Research", href: "#research" },
  { label: "Creator", href: "#creator" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navItems, 120);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(href, 80);
  };

  return (
    <nav
      id="main-nav-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? "bg-[#0F0F14]/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-white/80 backdrop-blur-md border-b border-purple-100 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between lg:justify-center">
        {/* Brand Logo Removed */}
        <div className="shrink-0 lg:hidden" />

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          <ul className="flex items-center gap-0.5 xl:gap-1.5 mr-2 xl:mr-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2.5 xl:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? isDarkMode
                        ? "text-purple-400 font-semibold"
                        : "text-purple-600 font-semibold"
                      : isDarkMode
                      ? "text-neutral-400 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-950"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2.5 xl:left-4 right-2.5 xl:right-4 h-[2px] bg-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-neutral-800/10 dark:bg-white/10 mx-1 xl:mx-2" />

          {/* Theme Toggle & CTA Buttons */}
          <div className="flex items-center gap-2 xl:gap-4">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 group transition-all duration-300 whitespace-nowrap ${
                isDarkMode
                  ? "bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/10"
                  : "bg-neutral-900 hover:bg-neutral-800 text-white shadow-md shadow-neutral-900/10"
              }`}
            >
              Let’s Connect
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Mobile Nav Right: Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
              isDarkMode
                ? "bg-neutral-900/80 hover:bg-neutral-800 border-white/5 text-white"
                : "bg-white/80 hover:bg-neutral-50 border-purple-100 text-neutral-900"
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-[73px] left-0 right-0 z-40 shadow-xl overflow-hidden pointer-events-auto border-b lg:hidden transition-colors duration-300 ${
              isDarkMode
                ? "bg-[#0F0F14]/98 border-white/5"
                : "bg-white/98 border-purple-100"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block py-3 px-4 rounded-xl text-base font-semibold transition-all ${
                        activeSection === item.href.substring(1)
                          ? "bg-purple-500/10 text-purple-500"
                          : isDarkMode
                          ? "text-neutral-300 hover:bg-neutral-800/50 hover:text-white"
                          : "text-neutral-700 hover:bg-purple-50/50 hover:text-neutral-950"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="h-[1px] bg-neutral-800/10 dark:bg-white/10" />

              <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isDarkMode ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-400" : "bg-neutral-100 hover:bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isDarkMode ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-400" : "bg-neutral-100 hover:bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/@shashank_diaries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isDarkMode ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-400" : "bg-neutral-100 hover:bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-center font-semibold flex items-center justify-center gap-2"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
