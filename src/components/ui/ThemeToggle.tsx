import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDarkMode, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 overflow-hidden ${
        isDarkMode
          ? "bg-neutral-800/80 hover:bg-neutral-700 text-purple-400"
          : "bg-purple-100 hover:bg-purple-200 text-purple-600"
      }`}
      aria-label="Toggle visual theme"
    >
      <motion.div
        key={isDarkMode ? "dark" : "light"}
        initial={{ y: 20, opacity: 0, rotate: -45 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -20, opacity: 0, rotate: 45 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
      </motion.div>
    </button>
  );
}
