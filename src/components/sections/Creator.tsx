import React, { useState } from "react";
import { motion } from "motion/react";
import { Play, Youtube, Film } from "lucide-react";
import { creatorJourneyVideos } from "../../data/portfolioData";
import { useYouTubeLiveCount } from "../../hooks/useYouTubeLiveCount";

interface CreatorProps {
  isDarkMode: boolean;
}

export default function Creator({ isDarkMode }: CreatorProps) {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const { formattedCount, isLoading } = useYouTubeLiveCount();

  // Return custom colors for category tabs
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Vlog":
        return "bg-purple-500/10 text-purple-400 border-purple-500/25";
      case "Challenge":
        return "bg-amber-500/10 text-amber-500 border-amber-500/25";
      case "Food Review":
        return "bg-rose-500/10 text-rose-500 border-rose-500/25";
      default:
        return "bg-neutral-500/10 text-neutral-400";
    }
  };

  return (
    <section
      id="creator"
      className="relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0 animate-pulse">
        <div className={`absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full blur-[140px] mix-blend-screen opacity-10 transition-colors ${
          isDarkMode ? "bg-red-600" : "bg-red-300"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-red-500 mb-2 font-bold"
          >
            Beyond Coding
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
            Shashank Diaries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${
              isDarkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            It allows me to express creativity, connect with people, and capture moments beyond technology.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-red-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Channel Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-6 sm:p-8 rounded-3xl border mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden ${
            isDarkMode 
              ? "bg-neutral-900/40 border-white/5" 
              : "bg-red-50/20 border-red-100"
          }`}
        >
          {/* Subtle logo backwater */}
          <div className="absolute right-0 bottom-0 opacity-5 scale-150 pointer-events-none translate-x-12 translate-y-12">
            <Youtube className="w-96 h-96 text-red-500" />
          </div>

          <div className="flex items-center gap-5 z-10">
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-600/35">
              <Youtube className="w-7 h-7" />
            </div>
            <div>
              <h3 className={`font-display font-medium text-lg sm:text-xl transition-colors ${
                isDarkMode ? "text-white" : "text-neutral-950"
              }`}>
                Shashank Diaries
              </h3>
              <p className={`text-xs sm:text-sm max-w-xl ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}>
                Passionate about YouTube content creation, including daily vlogs, challenge videos, and food reviews that showcase creativity and real-life experiences.
              </p>
            </div>
          </div>

          <a
            href="https://youtube.com/@shashank_diaries"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-semibold text-sm flex items-center gap-2 tracking-wide transition-all duration-300 shadow-md hover:shadow-lg shadow-red-600/10 z-10 shrink-0"
          >
            <span>Visit Channel</span>
            <Film className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Video Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creatorJourneyVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between group h-full ${
                isDarkMode 
                  ? "bg-neutral-900/60 border-white/5" 
                  : "bg-white border-red-100 shadow-lg shadow-red-500/5"
              }`}
            >
              {/* Image Frame or Interactive YouTube Iframe */}
              <div className="relative aspect-[16/9] w-full bg-black overflow-hidden shrink-0">
                {playingVideoId === video.id ? (
                  /* YouTube Embed Iframe */
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  /* Animated Thumbnail with Play Button Overlay */
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes("maxresdefault.jpg")) {
                          target.src = target.src.replace("maxresdefault.jpg", "hqdefault.jpg");
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center z-10">
                      <button
                        onClick={() => setPlayingVideoId(video.id)}
                        className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 active:bg-red-700 hover:scale-110 active:scale-95 text-white flex items-center justify-center shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                        aria-label="Play video preview inline"
                      >
                        <Play className="w-6 h-6 fill-white ml-1" />
                      </button>
                    </div>
                  </>
                )}
                
                {/* Duration indicator tag on overlay */}
                <div className="absolute bottom-3 right-3 z-20 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                  {video.duration}
                </div>
              </div>

              {/* Text Meta Container */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Category Pill */}
                  <div className="flex gap-2 items-center mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getCategoryColor(video.category)}`}>
                      {video.category}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">{video.publishedDate}</span>
                  </div>

                  {/* Title */}
                  <h4 className={`font-display font-semibold text-base mb-3 leading-snug transition-colors ${
                    isDarkMode ? "text-neutral-100 group-hover:text-red-400" : "text-neutral-950 group-hover:text-red-600"
                  }`}>
                    {video.title}
                  </h4>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
