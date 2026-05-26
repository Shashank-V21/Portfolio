import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Code, Award, CheckCircle2, Target, Calendar, Sparkles, Youtube, Briefcase, Lightbulb } from "lucide-react";
import { timelineData } from "../../data/portfolioData";

interface TimelineProps {
  isDarkMode: boolean;
}

export default function Timeline({ isDarkMode }: TimelineProps) {
  // Map type to icons
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case "project":
        return <Code className="w-5 h-5 text-indigo-400" />;
      case "innovation":
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case "achievement":
        return <Award className="w-5 h-5 text-cyan-400" />;
      case "certification":
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case "youtube":
        return <Youtube className="w-5 h-5 text-red-500" />;
      case "internship":
        return <Briefcase className="w-5 h-5 text-amber-500" />;
      case "goal":
        return <Target className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-neutral-400" />;
    }
  };

  // Map type to background glowing points
  const getTimelineMarkerColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-purple-500 shadow-purple-500/50";
      case "project":
        return "bg-indigo-500 shadow-indigo-500/50";
      case "innovation":
        return "bg-amber-500 shadow-amber-500/50";
      case "achievement":
        return "bg-cyan-500 shadow-cyan-500/50";
      case "certification":
        return "bg-emerald-500 shadow-emerald-500/50";
      case "youtube":
        return "bg-red-500 shadow-red-500/50";
      case "internship":
        return "bg-amber-500 shadow-amber-500/50";
      case "goal":
        return "bg-rose-500 shadow-rose-500/50";
      default:
        return "bg-neutral-500 shadow-neutral-500/50";
    }
  };

  return (
    <section
      id="timeline"
      className="relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full blur-[120px] mix-blend-screen opacity-5 transition-colors ${
          isDarkMode ? "bg-purple-600" : "bg-purple-100"
        }`} />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-purple-500 mb-2 font-bold"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Milestones & Goals
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-8 sm:pl-10 ml-2 border-l border-neutral-800/15 dark:border-white/5 space-y-12">
          
          {/* Animated Glowing Vertical Line Overlay */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-purple-500 via-cyan-500 to-rose-500 opacity-60" />

          {timelineData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Outer Glowing Bullet point connector */}
              <div className="absolute -left-[41px] sm:-left-[45px] top-1.5 z-20 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-35 ${getTimelineMarkerColor(item.type)}`}></span>
                  <span className={`relative inline-flex rounded-full h-5 w-5 border-2 border-slate-50 dark:border-[#0F0F14] shadow-md ${getTimelineMarkerColor(item.type)}`} />
                  <span className="absolute w-2 h-2 rounded-full bg-white top-1.5 left-1.5 scale-75" />
                </span>
              </div>

              {/* Box card */}
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                isDarkMode 
                  ? "bg-neutral-900/40 border-white/5 hover:border-purple-500/10 shadow-xl" 
                  : "bg-white border-purple-100 hover:border-purple-500/15 shadow-xl shadow-purple-500/5"
              }`}>
                {/* Year Indicator & Icon Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${
                      isDarkMode ? "bg-neutral-800/60" : "bg-purple-50 border border-purple-100"
                    }`}>
                      {getTimelineIcon(item.type)}
                    </div>
                    <div>
                      <h3 className={`font-display font-semibold text-lg leading-tight ${
                        isDarkMode ? "text-neutral-100" : "text-neutral-900"
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs mt-0.5 font-semibold ${isDarkMode ? "text-purple-400/80" : "text-purple-600"}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Year Tag */}
                  <span className={`self-start sm:self-center px-4 py-1 rounded-xl text-xs font-bold font-mono border ${
                    isDarkMode
                      ? "bg-purple-950/20 text-purple-300 border-purple-500/20"
                      : "bg-purple-50 text-purple-700 border-purple-100"
                  }`}>
                    {item.year}
                  </span>
                </div>

                {/* Description details */}
                <p className={`text-sm leading-relaxed mb-4 ${
                  isDarkMode ? "text-neutral-400" : "text-neutral-600"
                }`}>
                  {item.description}
                </p>

                {/* Tag List Container */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-wider ${
                          isDarkMode
                            ? "bg-neutral-800 text-neutral-400"
                            : "bg-neutral-100 text-neutral-500"
                        }`}
                      >
                        #{tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
