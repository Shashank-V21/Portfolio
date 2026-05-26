import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Zap, 
  Smartphone, 
  Cloud, 
  Brain, 
  ShieldCheck, 
  X, 
  Printer, 
  Award, 
  FileCheck,
  CheckCircle2
} from "lucide-react";

interface InternshipProps {
  isDarkMode: boolean;
}

export default function Internship({ isDarkMode }: boolean | any) {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const contributions = [
    {
      title: "Grama Urja Development",
      desc: "Developed Grama Urja, an Android application focused on energy-related rural digital solutions.",
      icon: Zap,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      title: "Jetpack Compose UI",
      desc: "Built highly responsive, declaring-driven native Android UI using Kotlin and Jetpack Compose.",
      icon: Smartphone,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Firebase integrations",
      desc: "Integrated scalable backend services and explored robust Firebase-based database workflows.",
      icon: Cloud,
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10"
    },
    {
      title: "UI/UX & Debugging Flows",
      desc: "Implemented clean interaction flows, thorough debugger profiling, and iterative feature refinement.",
      icon: Sparkles,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Generative AI Systems",
      desc: "Explored advanced Generative AI tools and SDKs utilizing Google AI Studio and Google Cloud Labs environments.",
      icon: Brain,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      title: "Industry Best Practices",
      desc: "Guided app lifecycle from prototyping to deployment-ready, maintaining standard testing and optimization.",
      icon: ShieldCheck,
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10"
    }
  ];

  const techBadges = [
    "Kotlin",
    "Jetpack Compose",
    "Android Studio",
    "Firebase",
    "Google AI Studio",
    "Google Cloud Labs",
    "UI/UX Design"
  ];

  const handlePrint = () => {
    const printContent = document.getElementById("certificate-document");
    if (!printContent) return;
    const originalContent = document.body.innerHTML;
    
    // Simple inline print window implementation matching style standards
    const windowUrl = "about:blank";
    const uniqueName = new Date().getTime().toString();
    const printWindow = window.open(windowUrl, uniqueName, "left=50,top=50,width=900,height=900,toolbar=0,scrollbars=1,status=0");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Shashank V - Internship Certificate Mx26INT03641</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Inter:wght@400;500;650;800&family=Mrs+Saint+Delafield&family=Playfair+Display:ital,wght@0,600;1,400&family=Fira+Code:wght@400;650&display=swap');
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                font-family: 'Inter', sans-serif;
              }
              .letter-container {
                max-width: 800px;
                margin: 0 auto;
                padding: 40px;
                background: white;
                color: #111827;
              }
            </style>
          </head>
          <body class="bg-white">
            <div class="letter-container">
              ${printContent.innerHTML}
            </div>
            <script>
              window.onload = function() {
                window.print();
                setTimeout(function() { window.close(); }, 500);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section
      id="internship"
      className="relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-300"
    >
      {/* Absolute ambient backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full blur-[130px] mix-blend-screen opacity-5 transition-colors ${
          isDarkMode ? "bg-amber-600" : "bg-purple-100"
        }`} />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-purple-500 mb-2 font-bold"
          >
            Professional Experience
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
            Internship Highlight
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Featured Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 md:p-12 rounded-3xl border transition-all ${
            isDarkMode 
              ? "bg-neutral-900/40 border-white/5 hover:border-purple-500/10 shadow-2xl" 
              : "bg-white border-purple-100 hover:border-purple-500/15 shadow-xl shadow-purple-500/5"
          }`}
        >
          {/* Main info header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-neutral-800/10 dark:border-white/5">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 w-16 h-16 shadow-inner">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider mb-2 uppercase ${
                  isDarkMode ? "bg-purple-500/10 text-purple-400" : "bg-purple-50 text-purple-700 border border-purple-100/50"
                }`}>
                  <Sparkles className="w-3 h-3 animate-spin duration-3000" /> Active Term
                </span>
                <h3 className={`font-display font-extrabold text-2xl md:text-3xl tracking-tight leading-tight ${
                  isDarkMode ? "text-neutral-100" : "text-neutral-900"
                }`}>
                  Android App Development using Generative AI Intern
                </h3>
                <p className={`text-base font-semibold mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}>
                  <span>MindMatrix.io</span>
                  <span className="text-neutral-600 dark:text-neutral-500">•</span>
                  <span className="flex items-center gap-1 text-sm font-normal text-neutral-500">
                    <MapPin className="w-3.5 h-3.5" /> HSR Layout, Bengaluru
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs font-bold shrink-0 self-start lg:self-center">
              <div className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border ${
                isDarkMode 
                  ? "bg-neutral-800/40 border-white/5 text-neutral-300" 
                  : "bg-purple-50 border-purple-100 text-purple-700"
              }`}>
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>2026 (Final Semester)</span>
              </div>
            </div>
          </div>

          {/* Description & Impact Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="md:col-span-2 space-y-6">
              <h4 className={`font-display font-bold text-lg tracking-tight ${
                isDarkMode ? "text-neutral-200" : "text-neutral-800"
              }`}>
                Role Overview & Key Contributions
              </h4>
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}>
                Worked on real-world Android application development focused on rural energy management and smart digital solutions using modern Android technologies.
              </p>

              {/* Achievements Column lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contributions.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-2xl border transition-all ${
                        isDarkMode 
                          ? "bg-neutral-900/40 border-white/5 hover:border-white/10" 
                          : "bg-neutral-50 border-neutral-100 hover:border-purple-100"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className={`p-1.5 rounded-lg ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h5 className={`font-semibold text-xs leading-none ${isDarkMode ? "text-neutral-200" : "text-neutral-800"}`}>
                          {item.title}
                        </h5>
                      </div>
                      <p className={`text-[11px] leading-relaxed ${isDarkMode ? "text-neutral-500" : "text-neutral-600"}`}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Side tools & tech panel */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className={`font-display font-semibold text-sm tracking-widest uppercase mb-3 ${
                  isDarkMode ? "text-neutral-400" : "text-neutral-500"
                }`}>
                  Core Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techBadges.map((badge) => (
                    <span
                      key={badge}
                      className={`px-3 py-1 rounded-xl text-[10px] font-bold font-mono tracking-wider ${
                        isDarkMode
                          ? "bg-neutral-800/80 text-neutral-300 hover:text-white"
                          : "bg-purple-50 border border-purple-100 text-purple-700"
                      }`}
                    >
                      #{badge.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-5 rounded-2xl border flex flex-col gap-4 ${
                isDarkMode ? "bg-neutral-950 border-white/5" : "bg-purple-50/30 border-purple-100/45"
              }`}>
                <div>
                  <h4 className={`font-display font-semibold text-xs tracking-widest uppercase mb-3 ${
                    isDarkMode ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    Credential Verification
                  </h4>
                  <div className="space-y-2 text-[11px] font-sans">
                    <div className="flex justify-between items-center py-1 border-b border-neutral-800/10 dark:border-white/5">
                      <span className="text-neutral-500 font-mono text-[9px] uppercase">Letter ID</span>
                      <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">Mx26INT03641</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-neutral-800/10 dark:border-white/5">
                      <span className="text-neutral-500 font-mono text-[9px] uppercase">Evaluation</span>
                      <span className="font-bold text-green-500 uppercase tracking-wider text-[9px] bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                        EXCELLENT
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-neutral-800/10 dark:border-white/5">
                      <span className="text-neutral-500 font-mono text-[9px] uppercase">Issued Date</span>
                      <span className={`font-medium ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>17th May, 2026</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-neutral-800/10 dark:border-white/5">
                      <span className="text-neutral-500 font-mono text-[9px] uppercase">USN Details</span>
                      <span className="font-mono text-neutral-800 dark:text-neutral-300">1VA23CS408</span>
                    </div>
                    <div className="flex justify-between items-start py-1">
                      <span className="text-neutral-500 font-mono text-[9px] uppercase shrink-0">College</span>
                      <span className={`text-right font-medium leading-tight max-w-[130px] ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                        Sai Vidya Institute of Technology
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800/10 dark:border-white/5">
                  <div className="text-[9px] text-neutral-500 font-mono uppercase mb-1">Director Signatory</div>
                  <div className={`font-semibold text-xs ${isDarkMode ? "text-neutral-200" : "text-neutral-800"}`}>Sujit Kumar</div>
                  <div className="text-[10px] text-neutral-500">Founder & Director, CL Infotech</div>
                </div>

                {/* View Certificate CTA Button */}
                <button
                  onClick={() => setIsCertificateOpen(true)}
                  className={`block w-full text-center py-2.5 rounded-xl text-[11px] font-extrabold tracking-wider font-sans uppercase transition-all shadow-md flex items-center justify-center gap-2 border ${
                    isDarkMode 
                      ? "bg-purple-600 hover:bg-purple-500 text-white border-purple-500/20 shadow-purple-900/15" 
                      : "bg-purple-600 hover:bg-purple-700 text-white border-purple-700 shadow-purple-100"
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>VIEW COMPLETION LETTER</span>
                </button>


              </div>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Certificate Viewer Popup Modal */}
      <AnimatePresence>
        {isCertificateOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-neutral-950/80 backdrop-blur-md overflow-y-auto"
          >
            {/* Modal outer shield container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[95vh] flex flex-col rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl"
            >
              
              {/* Modal controls bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-neutral-900 text-neutral-200">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-purple-400" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">MindMatrix Official Credential System</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono font-medium transition-colors"
                    title="Print / Save PDF"
                  >
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">Print / Save PDF</span>
                  </button>
                  <button
                    onClick={() => setIsCertificateOpen(false)}
                    className="p-1 px-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors text-neutral-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Printable Digital Certificate Content container */}
              <div className="overflow-y-auto flex-1 bg-neutral-200/65 p-3 sm:p-6 md:p-10 text-neutral-900 text-left relative flex justify-center">
                
                {/* Visual replica paper styled box */}
                <div 
                  id="certificate-document"
                  className="w-full max-w-3xl bg-white p-6 sm:p-10 md:p-14 relative shadow-lg text-neutral-900 font-sans leading-relaxed flex flex-col justify-between min-h-[1000px] border border-neutral-300"
                  style={{ contentVisibility: "auto" }}
                >
                  
                  {/* Outer violet thin border box (from PDF header to footer) */}
                  <div className="absolute inset-4 rounded-[22px] border border-[#6b21a8]/35 pointer-events-none z-0" />
                  
                  {/* Inner Watermark Logo watermark background */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04] select-none z-0">
                    <div className="relative w-96 h-96 flex items-center justify-center">
                      {/* CSS concentric curved arcs matching physical watermark */}
                      <span className="font-display font-black text-6xl text-purple-950 tracking-widest text-center uppercase leading-none">
                        MIND<br />MATRIX
                      </span>
                    </div>
                  </div>

                  {/* Document Contents */}
                  <div className="relative z-10 p-2 sm:p-4">
                    
                    {/* Top Header layout containing Logo & Contact details */}
                    <div className="flex flex-row justify-between items-start gap-4 pb-4 mb-8">
                      {/* Logo Frame */}
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                          {/* CSS concentric curved arcs matching physical print logo */}
                          <div className="absolute top-0 w-full h-full rounded-full border-t-[4px] border-[#8b5cf6] transform -rotate-[30deg]" />
                          <div className="absolute top-1 w-[85%] h-[85%] rounded-full border-t-[3.5px] border-[#6d28d9] transform rotate-[15deg]" />
                          <div className="absolute top-2 w-[70%] h-[70%] rounded-full border-t-[3px] border-[#b91c1c] transform -rotate-[45deg]" />
                          <div className="absolute bottom-2 w-2.5 h-2.5 bg-[#4c1d95] rounded-full" />
                        </div>
                        <div className="flex flex-col leading-none">
                          <span className="font-display font-black text-2xl tracking-tight text-[#1a1c23] uppercase">MindMatrix</span>
                        </div>
                      </div>

                      {/* Official contact block on right with grey icons */}
                      <div className="text-right text-[10px] sm:text-[11px] text-neutral-500 font-sans space-y-1.5 pt-1">
                        <div className="flex items-center justify-end gap-1 font-semibold text-neutral-800">
                          <a href="https://mindmatrix.io" target="_blank" rel="noreferrer" className="hover:text-purple-700 transition-colors">https://mindmatrix.io</a>
                          <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        </div>
                        <div className="flex items-center justify-end gap-1">
                          <span>+91 80 49748471</span>
                          <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div className="flex items-center justify-end gap-1">
                          <span>contact@mindmatrix.io</span>
                          <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                      </div>
                    </div>

                    {/* Document Title exactly matching PDF */}
                    <div className="text-center mb-8">
                      <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-neutral-900 uppercase">
                        INTERNSHIP COMPLETION LETTER
                      </h3>
                    </div>

                    {/* Exact Verbatim content from the PDF image */}
                    <div className="space-y-4 font-sans text-xs sm:text-[13px] text-neutral-800 leading-relaxed text-justify">
                      <p>
                        <strong>MindMatrix</strong>, an MoU partner of <strong>Visvesvaraya Technological University (VTU)</strong>, has successfully conducted the internship program titled <em className="text-neutral-950 font-bold not-italic">"Android App Development using Generative AI"</em>, announced on the VTU internship portal.
                      </p>

                      <p>
                        The internship was conducted in <strong>online</strong> mode from <strong>2nd February 2026 to 18th May 2026</strong>, in accordance with <strong>industry-standard processes and practices followed</strong> by MindMatrix.
                      </p>

                      <p>
                        During the internship, the student was exposed to industry-aligned learning and hands-on practice in the following areas:
                      </p>

                      {/* Areas List exact text */}
                      <ol className="list-decimal pl-5 space-y-2 text-neutral-800">
                        <li>
                          Android application development using <strong>Kotlin</strong> and <strong>Jetpack Compose</strong>
                        </li>
                        <li>
                          Hands-on experience with <strong>Android Studio</strong>, <strong>Google Cloud Labs</strong>, and <strong>Google AI Studio</strong> to explore <strong>GenAI capabilities</strong> in application development
                        </li>
                        <li>
                          <strong>UI/UX design</strong>, application prototyping, feature development, followed by <strong>debugging and iterative enhancements</strong>
                        </li>
                        <li>
                          <strong>Project-based learning</strong> involving <strong>Firebase integration</strong>, testing, and standard <strong>Android development workflows</strong>
                        </li>
                      </ol>

                      <p className="pt-2">
                        The following student was enrolled in the internship program through the VTU internship portal, and is subject to verification and validation by the respective college.
                      </p>

                      {/* Credentials Block precisely formatted with bold keys */}
                      <div className="my-5 space-y-1 bg-neutral-50/20 p-1 border-transparent text-neutral-900 font-sans text-xs sm:text-[13px] max-w-lg">
                        <div className="grid grid-cols-12 gap-1 py-0.5">
                          <span className="col-span-3 font-semibold text-neutral-900">Name:</span>
                          <span className="col-span-9 font-medium text-neutral-850">Shashank V</span>
                        </div>
                        <div className="grid grid-cols-12 gap-1 py-0.5">
                          <span className="col-span-3 font-semibold text-neutral-900">USN:</span>
                          <span className="col-span-9 font-mono font-bold text-neutral-850">1VA23CS408</span>
                        </div>
                        <div className="grid grid-cols-12 gap-1 py-0.5 md:items-start">
                          <span className="col-span-3 font-semibold text-neutral-900">College Name:</span>
                          <span className="col-span-9 font-medium text-neutral-850">Sai Vidya institute of technology</span>
                        </div>
                      </div>

                      <p className="pt-1">
                        The student's performance during the internship was evaluated based on <strong>continuous participation, task completion, and overall engagement on the online platform MindMatrix.io</strong>. Detailed performance metrics as per internship program coordinators' judgement is provided in the attached annexure.
                      </p>

                      <p>
                        The intern's overall performance during the internship was assessed based on the prescribed evaluation criteria and rated as <strong className="font-black text-neutral-950">EXCELLENT</strong> / Very Good / Good / Satisfactory / Needs Improvement
                      </p>

                      <p>
                        This evaluation is for internship assessment only and does not carry direct academic marks.
                      </p>

                      <p>
                        The internship completion letter is issued at the student's request, based on records available with MindMatrix, without any risk or liability to the organization or its authorized signatories.
                      </p>

                      <p>
                        We wish the student the very best in their future academic and professional endeavors.
                      </p>

                      <p className="text-[11px] text-neutral-500 italic pt-1">
                        Disclaimer: For official use by authorized Internship Coordinators of the respective college only.
                      </p>
                    </div>

                    {/* bottom sign area */}
                    <div className="mt-10 flex flex-row justify-between items-end gap-6 text-xs sm:text-[13px] text-neutral-800 relative">
                      
                      {/* Left: Signature of Director Sujit Kumar verbatim */}
                      <div className="space-y-1">
                        {/* Replicated handwritten signature svg */}
                        <div className="h-10 flex items-center mb-1">
                          <svg className="h-9 text-[#1e1b4b]" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 25 C30 10, 40 40, 60 20 C70 10, 80 50, 100 25 C110 15, 120 40, 140 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M40 30 C70 30, 90 28, 120 29" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            <text x="5" y="47" fontFamily="'Brush Script MT', cursive, sans-serif" fontWeight="bold" fontSize="22" fill="#1e1b4b" opacity="0.8">Sujit Kumar</text>
                          </svg>
                        </div>
                        <div className="font-bold text-[#111827]">Sujit Kumar</div>
                        <div className="font-semibold text-[#1a1c23]">Founder and Director,</div>
                        <div className="text-neutral-500 text-[11px]">
                          <a href="https://mindmatrix.io" target="_blank" rel="noreferrer" className="underline hover:text-purple-700">MindMatrix.io</a>
                        </div>
                        <div className="text-neutral-500 text-[11px]">CL Infotech Pvt. Ltd.</div>
                      </div>

                      {/* Right: metadata reference */}
                      <div className="space-y-1 font-sans text-neutral-850 text-right text-xs sm:text-[13px]">
                        <div><strong>Date:</strong> 17th May, 2026</div>
                        <div><strong>Letter ID:</strong> Mx26INT03641</div>
                        <div className="pt-2 text-[11px] text-[#4f46e5]">
                          <a href="https://lms.mindmatrix.io" target="_blank" rel="noreferrer" className="underline hover:text-indigo-800">
                            To verify, visit https://lms.mindmatrix.io/
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Replicating the rounded outer baseline banner frame */}
                  <div className="relative z-10 pt-4 mt-8 border-t border-neutral-150 text-neutral-500 text-[10px] sm:text-[11px] font-sans leading-relaxed text-center">
                    <span className="block font-semibold text-[#6b21a8]/80 text-[11px] uppercase tracking-wider mb-1">CL Infotech Pvt. Ltd.</span>
                    <span className="text-neutral-550">
                      #651, Kiran Arcade, 4th Floor, 13th Cross, 27th Main Road, 1st Sector, HSR Layout, Bangalore - 560102 • Email: contact@mindmatrix.io • Ph.: +91 96115 46444
                    </span>
                  </div>

                </div>

              </div>
              
              {/* Modal base controls footer */}
              <div className="px-6 py-4 bg-neutral-900 border-t border-white/5 flex justify-end gap-3">
                <button
                  onClick={() => setIsCertificateOpen(false)}
                  className="px-5 py-2 rounded-xl text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 text-xs font-semibold transition-all font-mono uppercase"
                >
                  Close Viewer
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


