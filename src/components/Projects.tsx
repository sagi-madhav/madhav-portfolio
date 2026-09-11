"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X, Play } from "lucide-react";

const categories = ["All", "AI/ML", "Full-Stack", "IoT/Cloud"];

const projects = [
  {
    id: 1,
    title: "Requestify",
    category: "Full-Stack",
    tags: ["Python", "TypeScript", "Flask", "React", "MySQL", "GCP", "Nginx", "Stripe API"],
    shortDescription: "Full-stack DJ and audience interaction platform with real-time playlist management",
    fullDescription: "A comprehensive web application enabling seamless DJ-audience interaction. Features include secure authentication, real-time playlist management with Spotify API integration, payment processing via Stripe, and automated deployment on GCP Compute Engine with Nginx reverse proxy.",
    architecture: [
      "Backend: Flask REST API with JWT authentication",
      "Frontend: React with TypeScript and modern hooks",
      "Database: MySQL with normalized schema design",
      "Infrastructure: GCP Compute Engine with automated deployment",
      "Payment: Stripe integration for song requests",
      "CI/CD: Automated testing and deployment pipeline",
    ],
    achievements: [
      "Reduced API response time by 30% through query optimization",
      "Implemented secure payment processing handling $10k+ in transactions",
      "Built scalable architecture supporting 500+ concurrent users",
    ],
    github: "https://github.com/madhavsagi/requestify",
    live: "https://requestify.app",
  },
  {
    id: 2,
    title: "Machine Learning Trading System",
    category: "AI/ML",
    tags: ["Python", "Reinforcement Learning", "Q-Learning", "Pandas", "NumPy"],
    shortDescription: "Event-driven market simulator with RL-based trading agents",
    fullDescription: "A sophisticated algorithmic trading system leveraging reinforcement learning to make autonomous trading decisions. Implements Q-Learning agents trained on historical market data with event-driven architecture for real-time decision making.",
    architecture: [
      "Event-Driven: Asynchronous market data processing",
      "RL Engine: Q-Learning with epsilon-greedy exploration",
      "Feature Engineering: Multi-variable technical indicators (RSI, MACD, Bollinger Bands)",
      "Backtesting: Historical simulation with transaction costs",
      "Optimization: Grid search for hyperparameter tuning",
      "Validation: K-fold cross-validation to prevent overfitting",
    ],
    achievements: [
      "Achieved 18% annual return on backtested strategies",
      "Reduced execution latency by 40% through event-driven architecture",
      "Prevented overfitting through rigorous cross-validation",
    ],
    github: "https://github.com/madhavsagi/ml-trading",
    live: null,
  },
  {
    id: 3,
    title: "Real-Time IoT Sign Language Translator",
    category: "IoT/Cloud",
    tags: ["ESP32", "C++", "Python", "AWS EC2", "OpenCV", "MediaPipe", "Bash"],
    shortDescription: "Edge-to-cloud low-latency sign language recognition system",
    fullDescription: "An end-to-end IoT system capturing hand gestures via ESP32 camera module, processing video streams on AWS EC2 with computer vision models, and delivering real-time translations through an interactive web interface.",
    architecture: [
      "Edge Device: ESP32 with camera module for video capture",
      "Cloud Processing: AWS EC2 instance with OpenCV and MediaPipe",
      "Vision Pipeline: Hand landmark detection and gesture classification",
      "Automation: Bash scripts for automated EC2 provisioning",
      "Web Interface: Real-time video streaming with WebSockets",
      "Latency Optimization: Edge preprocessing and efficient encoding",
    ],
    achievements: [
      "Achieved <200ms end-to-end latency for gesture recognition",
      "Automated EC2 deployment reducing setup time from 30min to 2min",
      "93% accuracy on ASL alphabet classification",
    ],
    github: "https://github.com/madhavsagi/iot-sign-language",
    live: null,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            Building intelligent systems that bridge full-stack engineering, cloud architecture, and machine learning
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-primary text-background shadow-lg shadow-primary/30"
                    : "bg-slate-850 text-slate-400 hover:text-primary hover:bg-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="glow-border bg-slate-850/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-850/70 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <Play className="w-6 h-6 text-slate-500 group-hover:text-primary transition-colors" />
                </div>

                <p className="text-slate-300 mb-4 line-clamp-2">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full text-xs border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 bg-slate-800/80 text-slate-400 rounded-full text-xs">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-850 border border-primary/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold text-primary mb-2">{selectedProject.title}</h2>
              <p className="text-slate-300 mb-6">{selectedProject.fullDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary mb-3">Architecture & Implementation</h3>
                <ul className="space-y-2">
                  {selectedProject.architecture.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedProject.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <span className="text-primary mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-slate-800 text-foreground font-semibold rounded-lg hover:bg-slate-700 transition-all flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
