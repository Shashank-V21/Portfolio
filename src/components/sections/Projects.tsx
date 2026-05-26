import React from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, ArrowRight, BookOpen, Bot, Layers, Cpu, CloudLightning } from "lucide-react";
import { projectsData } from "../../data/portfolioData";
import { scrollToSection } from "../../utils/scroll";

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  // Returns custom visual badges for the project
  const getProjectIconBadge = (id: string) => {
    switch (id) {
      case "price-vision-ai":
        return <Bot className="w-5 h-5 text-purple-400" />;
      case "ai-smart-mirror":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "deepfake-detection":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case "grama-urja":
        return <CloudLightning className="w-5 h-5 text-amber-400" />;
      default:
        return null;
    }
  };

  const handleScrollToResearch = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("#research", 85);
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute bottom-1/3 left-10 w-[350px] h-[350px] rounded-full blur-[140px] mix-blend-screen opacity-10 transition-colors ${
          isDarkMode ? "bg-indigo-600" : "bg-purple-100"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-purple-500 mb-2 font-bold"
          >
            Featured Projects
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
            Featured Solutions
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Project Layout (Alternating full width rows) */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            
            // Generate clean, highly specific case study metrics
            const getProjectHighlights = (id: string) => {
              switch (id) {
                case "price-vision-ai":
                  return [
                    "Multimodal product identity alignments leveraging CLIP & BLIP encoders",
                    "Real-time catalogs extraction & cross-storefront vector match pipeline",
                    "Cached search routes via FastAPI + Redis, yielding sub-200ms latency"
                  ];
                case "ai-smart-mirror":
                  return [
                    "Deep local facial recognition with high recall profile loader",
                    "Fully offline hands-free English NLP processing engine on hardware",
                    "Synchronized widget data stream integrating OpenWeather & Google Calendar"
                  ];
                case "deepfake-detection":
                  return [
                    "High accuracy frame-by-frame Convolutional Neural Network (CNN) pipeline",
                    "Pixel anomaly validation tracking artificial compression/generative traces",
                    "Configurable alert thresholds for enterprise media screening pipelines"
                  ];
                case "grama-urja":
                  return [
                    "Crowdsensing database structure serving remote rural regions",
                    "Lightweight instant Firebase outage alert distribution pipeline",
                    "Demonstrated 18% improvement in South India crop/irrigation grid times"
                  ];
                default:
                  return [];
              }
            };

            const highlights = getProjectHighlights(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-3xl border p-6 sm:p-8 shadow-lg transition-all ${
                  isDarkMode 
                    ? "bg-neutral-900/40 border-white/5 hover:border-purple-500/10 shadow-black/30" 
                    : "bg-white border-purple-100 hover:border-purple-500/15 shadow-purple-500/5"
                }`}
              >
                {/* Visual Mock / Picture Column (Alternating Order on Desktop) */}
                <div className={`col-span-1 lg:col-span-5 rounded-2xl overflow-hidden relative group min-h-[220px] sm:min-h-[280px] lg:min-h-auto border ${
                  isDarkMode ? "border-white/5" : "border-purple-100"
                } ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-900/10 to-transparent z-10 opacity-75 group-hover:opacity-60 transition-opacity" />
                  <img
                    src={project.image}
                    alt={`${project.title} case snapshot`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Category overlay label */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 p-2 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-white/10 text-white font-mono text-[9px]">
                    {getProjectIconBadge(project.id)}
                    <span className="font-semibold tracking-wider font-sans uppercase">
                      {project.id.replace(/-/g, ' ')}
                    </span>
                  </div>
                </div>

                {/* Case Study Story Details Side */}
                <div className={`col-span-1 lg:col-span-7 flex flex-col justify-between h-full py-2 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}>
                  <div>
                    <span className="text-[10px] font-mono text-purple-500 uppercase tracking-widest font-bold block mb-1.5">
                      Case Study
                    </span>
                    <h3 className={`font-display font-extrabold text-2xl sm:text-3xl mb-3 tracking-tight transition-colors ${
                      isDarkMode ? "text-neutral-100" : "text-neutral-900"
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mb-6 transition-colors ${
                      isDarkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                      {project.description}
                    </p>

                    {/* Bullet Highlights representing engineering results */}
                    <div className="space-y-2.5 mb-6">
                      <span className={`font-semibold block text-xs uppercase tracking-wider ${isDarkMode ? "text-neutral-300" : "text-neutral-800"}`}>
                        Implementation Outcomes
                      </span>
                      {highlights.map((hlt, hidx) => (
                        <div key={hidx} className="flex gap-2.5 items-start text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0" />
                          <span className={isDarkMode ? "text-neutral-400 font-normal" : "text-neutral-600 font-normal"}>
                            {hlt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider font-mono ${
                            isDarkMode
                              ? "bg-purple-950/20 text-purple-300 border border-purple-500/10"
                              : "bg-purple-50/60 text-purple-700 border border-purple-100"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links and interactive items with refined names */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800/10 dark:border-white/5 text-xs sm:text-sm font-semibold">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 transition-colors p-1 rounded ${
                            isDarkMode ? "text-neutral-300 hover:text-white" : "text-neutral-700 hover:text-purple-700"
                          }`}
                        >
                          <Github className="w-4 h-4" />
                          <span>Code Repository</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-purple-500 hover:text-purple-400 p-1 rounded"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Interactive Demo</span>
                        </a>
                      )}

                      {project.researchPaper && (
                        <a
                          href={project.researchPaper}
                          onClick={handleScrollToResearch}
                          className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 p-1 rounded"
                        >
                          <BookOpen className="w-4 h-4 text-purple-500" />
                          <span>View Research</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
