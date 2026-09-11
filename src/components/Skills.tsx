"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Cloud, Wrench, Database, Layers, Terminal as TerminalIcon } from "lucide-react";

const skillCategories = [
  {
    id: "all",
    label: "All",
    icon: Layers,
  },
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
  },
  {
    id: "frameworks",
    label: "Frameworks & Cloud",
    icon: Cloud,
  },
  {
    id: "tools",
    label: "Developer Tools",
    icon: Wrench,
  },
];

const skills = [
  { name: "Python", category: "languages", level: 95 },
  { name: "Go", category: "languages", level: 85 },
  { name: "Java", category: "languages", level: 90 },
  { name: "C++", category: "languages", level: 80 },
  { name: "TypeScript", category: "languages", level: 88 },
  { name: "SQL", category: "languages", level: 92 },
  { name: "Spring Boot", category: "frameworks", level: 85 },
  { name: "Flask", category: "frameworks", level: 90 },
  { name: "React", category: "frameworks", level: 92 },
  { name: "Next.js", category: "frameworks", level: 88 },
  { name: "Angular", category: "frameworks", level: 75 },
  { name: "Pandas", category: "frameworks", level: 93 },
  { name: "PySpark", category: "frameworks", level: 80 },
  { name: "AWS EC2", category: "frameworks", level: 85 },
  { name: "GCP Compute Engine", category: "frameworks", level: 87 },
  { name: "Docker", category: "frameworks", level: 90 },
  { name: "Terraform", category: "frameworks", level: 82 },
  { name: "PostgreSQL", category: "tools", level: 88 },
  { name: "MySQL", category: "tools", level: 90 },
  { name: "MongoDB", category: "tools", level: 85 },
  { name: "Git", category: "tools", level: 95 },
  { name: "GitHub", category: "tools", level: 93 },
  { name: "Jenkins", category: "tools", level: 80 },
  { name: "Jira", category: "tools", level: 85 },
  { name: "Linux", category: "tools", level: 92 },
  { name: "Bash", category: "tools", level: 88 },
  { name: "Nginx", category: "tools", level: 83 },
  { name: "REST APIs", category: "tools", level: 94 },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            A comprehensive toolkit spanning languages, frameworks, cloud platforms, and DevOps
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? "bg-primary text-background shadow-lg shadow-primary/30"
                      : "bg-slate-850 text-slate-400 hover:text-primary hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glow-border bg-slate-850/50 backdrop-blur-sm p-5 rounded-xl hover:bg-slate-850/70 transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-slate-400 font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.02 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-slate-850/50 backdrop-blur-sm rounded-xl border border-slate-800">
              <Database className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className="text-slate-400 text-sm">
                PostgreSQL, MySQL, MongoDB, PySpark for scalable data pipelines
              </p>
            </div>
            <div className="text-center p-6 bg-slate-850/50 backdrop-blur-sm rounded-xl border border-slate-800">
              <Cloud className="w-12 h-12 text-secondary mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-slate-400 text-sm">
                AWS, GCP, Docker, Terraform, CI/CD automation
              </p>
            </div>
            <div className="text-center p-6 bg-slate-850/50 backdrop-blur-sm rounded-xl border border-slate-800">
              <TerminalIcon className="w-12 h-12 text-accent mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Agile & Scrum</h3>
              <p className="text-slate-400 text-sm">
                Git, GitHub, Jira, sprint planning, code reviews
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
