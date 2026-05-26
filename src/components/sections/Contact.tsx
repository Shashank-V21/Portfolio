import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, Github, Linkedin, Youtube, CheckCircle } from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSucceeded, setSubmitSucceeded] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.msg || !formData.name) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/shashank.v0074@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.msg,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSucceeded(true);
        setFormData({ name: "", email: "", msg: "" });

        // Create a nice floating toast inside the application block
        const toastEl = document.createElement("div");
        toastEl.className = `fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl font-mono text-xs z-[9999] flex items-center gap-3 border ${
          isDarkMode ? "bg-neutral-900 text-purple-400 border-white/10" : "bg-white text-purple-600 border-purple-100"
        }`;
        toastEl.innerHTML = `
          <svg class="h-4 w-4 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Message delivered directly to Shashank!</span>
        `;
        document.body.appendChild(toastEl);
        setTimeout(() => {
          toastEl.classList.add("opacity-0");
          setTimeout(() => toastEl.remove(), 400);
        }, 3000);

        // Clean success banner after 5 seconds
        setTimeout(() => setSubmitSucceeded(false), 5000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      
      const toastEl = document.createElement("div");
      toastEl.className = `fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl font-mono text-xs z-[9999] flex items-center gap-3 border bg-red-500/10 text-red-500 border-red-500/20`;
      toastEl.innerHTML = `
        <span>Could not complete transmission. Please try again!</span>
      `;
      document.body.appendChild(toastEl);
      setTimeout(() => {
        toastEl.classList.add("opacity-0");
        setTimeout(() => toastEl.remove(), 400);
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute bottom-0 left-[20%] w-[350px] h-[350px] rounded-full blur-[140px] mix-blend-screen opacity-10 transition-colors ${
          isDarkMode ? "bg-purple-600" : "bg-purple-200"
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
            className="font-mono text-xs uppercase tracking-widest text-purple-500 mb-2 font-bold"
          >
            Say Hello
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
            Start A Conversation
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Box Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Side Info Cards Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              isDarkMode ? "bg-neutral-900/40 border-white/5" : "bg-white border-purple-100"
            }`}>
              <h3 className={`font-display font-semibold text-xl mb-4 ${
                isDarkMode ? "text-neutral-100" : "text-neutral-900"
              }`}>
                Opportunities & Network
              </h3>
              
              <p className={`whitespace-pre-line text-sm leading-relaxed mb-6 ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}>
                {"I am actively seeking full stack developer job opportunities, internships, and collaboration projects.\n\nI enjoy building solutions involving strong logic, machine learning workflows, and modern UI/UX design.\n\nIf you're hiring or looking to collaborate, feel free to reach out."}
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col font-sans text-xs">
                    <span className="text-neutral-500 font-mono uppercase tracking-wider text-[10px]">Direct Email</span>
                    <a
                      href="mailto:shashank.v0074@gmail.com"
                      className={`font-semibold hover:underline ${isDarkMode ? "text-neutral-200" : "text-neutral-800"}`}
                    >
                      shashank.v0074@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Circle Links */}
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              isDarkMode ? "bg-neutral-900/40 border-white/5" : "bg-white border-purple-100"
            }`}>
              <h4 className={`font-display font-semibold text-base mb-4 ${
                isDarkMode ? "text-neutral-100" : "text-neutral-900"
              }`}>
                Digital Channels
              </h4>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 group transition-all duration-300 pointer-events-auto ${
                    isDarkMode 
                      ? "bg-neutral-950/40 border-white/5 hover:border-purple-500/30 hover:bg-neutral-900" 
                      : "bg-purple-50/20 border-purple-100 hover:border-purple-500/30 hover:bg-purple-50"
                  }`}
                  title="GitHub Profile"
                >
                  <Github className={`w-5 h-5 transition-transform group-hover:scale-110 ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`} />
                  <span className="text-[10px] font-mono text-neutral-500">GITHUB</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 group transition-all duration-300 pointer-events-auto ${
                    isDarkMode 
                      ? "bg-neutral-950/40 border-white/5 hover:border-purple-500/30 hover:bg-neutral-900" 
                      : "bg-purple-50/20 border-purple-100 hover:border-purple-500/30 hover:bg-purple-50"
                  }`}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono text-neutral-500">LINKEDIN</span>
                </a>

                <a
                  href="https://youtube.com/@shashank_diaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 group transition-all duration-300 pointer-events-auto ${
                    isDarkMode 
                      ? "bg-neutral-950/40 border-white/5 hover:border-red-500/30 hover:bg-neutral-900" 
                      : "bg-purple-50/20 border-purple-100 hover:border-red-500/30 hover:bg-purple-50"
                  }`}
                  title="YouTube Diaries"
                >
                  <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono text-neutral-500">YOUTUBE</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 p-6 sm:p-10 rounded-3xl border ${
              isDarkMode ? "bg-neutral-900/50 border-white/5" : "bg-white border-purple-100 shadow-xl shadow-purple-500/5"
            }`}
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  Your Name*
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    isDarkMode
                      ? "bg-neutral-950/80 border-white/5 text-white focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 outline-none"
                      : "bg-purple-50/20 border-purple-100 text-neutral-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                  }`}
                  placeholder="e.g. John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  Email Address*
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    isDarkMode
                      ? "bg-neutral-950/80 border-white/5 text-white focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 outline-none"
                      : "bg-purple-50/20 border-purple-100 text-neutral-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                  }`}
                  placeholder="e.g. example@company.com"
                />
              </div>

              {/* Message Area */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-msg" className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  Your Message*
                </label>
                <textarea
                  id="contact-msg"
                  name="msg"
                  required
                  rows={4}
                  value={formData.msg}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all resize-none ${
                    isDarkMode
                      ? "bg-neutral-950/80 border-white/5 text-white focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 outline-none"
                      : "bg-purple-50/20 border-purple-100 text-neutral-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                  }`}
                  placeholder="What would you like to discuss today?"
                />
              </div>

              {/* Submit Button */}
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md ${
                  isSubmitting
                    ? "bg-purple-600/50 cursor-not-allowed text-white/50"
                    : isDarkMode
                    ? "bg-purple-600 hover:bg-purple-500 cursor-pointer text-white shadow-lg shadow-purple-600/20"
                    : "bg-neutral-900 hover:bg-neutral-800 cursor-pointer text-white shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <AnimatePresence>
                {submitSucceeded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-sans flex items-center gap-2.5 justify-center"
                  >
                    <CheckCircle className="w-4.5 h-4.5 shrink-0" />
                    <span>Message sent! Thank you for reaching out.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
