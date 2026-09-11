"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Mail, Linkedin, Github, MapPin, ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "Software Engineer",
  "AI & Machine Learning Developer",
  "Georgia Tech M.S. CS (AI) Student",
  "Full-Stack Cloud Architect",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Name */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold glow-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Madhav Sagi
          </motion.h1>

          {/* Dynamic Role */}
          <div className="h-16 flex items-center justify-center">
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl gradient-text font-semibold"
            >
              {roles[currentRole]}
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            M.S. CS (AI) Student @ Georgia Tech | Software Engineer bridging
            Full-Stack Systems, Cloud Architecture, and Machine Learning
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Tampa, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:sscholarssagi@gmail.com" className="hover:text-primary transition-colors">
                sscholarssagi@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              Explore Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 glow-border bg-slate-850/50 backdrop-blur-sm text-primary font-semibold rounded-lg hover:bg-slate-800 transition-all hover:scale-105"
            >
              Get in Touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border border-slate-700 bg-slate-850/30 backdrop-blur-sm text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center justify-center gap-6 pt-6"
          >
            <a
              href="https://linkedin.com/in/madhav-sagi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/madhavsagi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-500 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
