import React from "react";
import { motion } from "motion/react";
import { aboutData } from "../../data/portfolioData";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-purple-500 mb-2 font-bold"
          >
            Introduction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Profile Image & Brand Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm aspect-square sm:aspect-[4/5] rounded-[24px] overflow-hidden group">
              {/* Outer decorative elegant border frame */}
              <div className="absolute inset-0 border border-purple-500/10 rounded-[24px] z-10 pointer-events-none group-hover:border-purple-500/20 transition-colors" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

              {/* Real profile image placeholder with no-referrer */}
              <img
                src={aboutData.profileImage}
                alt="Shashank V portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />


            </div>

            {/* Quick quote box removed per user request */}
          </motion.div>

          {/* Statistics Grid & Bio Section Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            <h3 className={`font-display font-semibold text-2xl mb-4 ${
              isDarkMode ? "text-neutral-100" : "text-neutral-800"
            }`}>
              Developer by Logic, Creator by Passion
            </h3>
            
            <p className={`text-base leading-relaxed mb-8 transition-colors whitespace-pre-line ${
              isDarkMode ? "text-neutral-400" : "text-neutral-600"
            }`}>
              {aboutData.bio}
            </p>

            {/* Structured Stats Section */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aboutData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all hover:scale-[1.01] hover:border-purple-500/20 ${
                    isDarkMode ? "bg-neutral-900/50 border-white/5" : "bg-white border-purple-100/70"
                  }`}
                >
                  <div className="font-display font-bold text-3xl text-purple-500 mb-1">
                    {stat.value}
                  </div>
                  <div className={`text-sm font-semibold mb-1 ${isDarkMode ? "text-neutral-200" : "text-neutral-800"}`}>
                    {stat.label}
                  </div>
                  <div className={`text-xs ${isDarkMode ? "text-neutral-500" : "text-neutral-500"}`}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
