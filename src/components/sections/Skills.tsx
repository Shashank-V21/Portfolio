import React, { useState } from "react";
import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { skillCategories } from "../../data/portfolioData";

interface SkillsProps {
  isDarkMode: boolean;
}

// Robust mapping of string names to actual Lucide component objects
function renderSkillIcon(iconName: string) {
  switch (iconName) {
    case "Brain":
      return <LucideIcons.Brain className="w-5 h-5 text-purple-400" />;
    case "Cpu":
      return <LucideIcons.Cpu className="w-5 h-5 text-violet-400" />;
    case "Eye":
      return <LucideIcons.Eye className="w-5 h-5 text-indigo-400" />;
    case "GitMerge":
      return <LucideIcons.GitMerge className="w-5 h-5 text-cyan-400" />;
    case "Box":
      return <LucideIcons.Box className="w-5 h-5 text-blue-400" />;
    case "Workflow":
      return <LucideIcons.Waypoints className="w-5 h-5 text-fuchsia-400" />;
    case "Atom":
      return <LucideIcons.Atom className="w-5 h-5 text-purple-500" />;
    case "Zap":
      return <LucideIcons.Zap className="w-5 h-5 text-amber-500" />;
    case "Palette":
      return <LucideIcons.Palette className="w-5 h-5 text-emerald-400" />;
    case "FileCode":
      return <LucideIcons.FileCode className="w-5 h-5 text-neutral-400" />;
    case "Server":
      return <LucideIcons.Server className="w-5 h-5 text-indigo-500" />;
    case "FileCode2":
      return <LucideIcons.Code2 className="w-5 h-5 text-blue-500" />;
    case "Coffee":
      return <LucideIcons.Coffee className="w-5 h-5 text-amber-700" />;
    case "Terminal":
      return <LucideIcons.Terminal className="w-5 h-5 text-green-400" />;
    case "Database":
      return <LucideIcons.Database className="w-5 h-5 text-blue-500" />;
    case "Activity":
      return <LucideIcons.Activity className="w-5 h-5 text-red-500" />;
    case "Layers":
      return <LucideIcons.Layers className="w-5 h-5 text-purple-400" />;
    case "Cloud":
      return <LucideIcons.Cloud className="w-5 h-5 text-sky-400" />;
    case "HardDrive":
      return <LucideIcons.Microchip className="w-5 h-5 text-rose-400" />;
    case "BarChart3":
      return <LucideIcons.BarChart3 className="w-5 h-5 text-emerald-500" />;
    case "GitBranch":
      return <LucideIcons.GitBranch className="w-5 h-5 text-orange-400" />;
    case "Sliders":
      return <LucideIcons.Sliders className="w-5 h-5 text-violet-500" />;
    case "Network":
      return <LucideIcons.Network className="w-5 h-5 text-indigo-400" />;
    case "Binary":
      return <LucideIcons.Binary className="w-5 h-5 text-cyan-500" />;
    case "Blocks":
      return <LucideIcons.Blocks className="w-5 h-5 text-purple-500" />;
    case "Waypoints":
      return <LucideIcons.Workflow className="w-5 h-5 text-fuchsia-400" />;
    default:
      return <LucideIcons.Terminal className="w-5 h-5 text-neutral-400" />;
  }
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categoriesList = ["All", ...skillCategories.map((c) => c.name)];

  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === activeTab);

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-300"
    >
      {/* Soft spotlight backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/2 right-[10%] w-[350px] h-[350px] rounded-full blur-[130px] mix-blend-screen opacity-10 transition-colors ${
          isDarkMode ? "bg-purple-600" : "bg-purple-300"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-purple-500 mb-2 font-bold"
          >
            My Stack
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
            Technical Competence
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoriesList.map((category) => (
            <button
              key={category}
              id={`tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === category
                  ? isDarkMode
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 border-t border-purple-400/20"
                    : "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                  : isDarkMode
                  ? "bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 border border-white/5"
                  : "bg-white hover:bg-purple-50/50 text-neutral-600 border border-purple-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className={`font-display font-semibold text-lg sm:text-xl mb-6 flex items-center gap-3 ${
                isDarkMode ? "text-neutral-200" : "text-neutral-800"
              }`}>
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                {category.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`group relative p-4 rounded-2xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      isDarkMode
                        ? "bg-neutral-900/40 border-white/5 hover:border-purple-500/30 hover:bg-neutral-900/60"
                        : "bg-white border-purple-100 hover:border-purple-500/30 hover:bg-purple-50/10"
                    }`}
                  >
                    {/* Glowing point backing */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-radial-gradient from-purple-500/5 to-transparent blur-md -z-10" />

                    {/* Skill Icon */}
                    <div className="w-11 h-11 rounded-xl bg-purple-500/5 group-hover:bg-purple-500/10 flex items-center justify-center mb-3 transition-colors shrink-0">
                      {renderSkillIcon(skill.iconName)}
                    </div>

                    {/* Skill Name */}
                    <span className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                      isDarkMode ? "text-neutral-300 group-hover:text-white" : "text-neutral-700 group-hover:text-purple-600"
                    }`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
