"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "M.S. in Computer Science",
    specialization: "Artificial Intelligence",
    school: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    period: "Expected May 2027",
    gpa: "4.00",
    details: ["Advanced Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
  },
  {
    degree: "B.S. in Computer Science",
    specialization: "Honors, Dean's List",
    school: "University of Florida",
    location: "Gainesville, FL",
    period: "Dec 2024",
    gpa: "3.85",
    details: ["Software Engineering", "Data Structures & Algorithms", "Operating Systems", "Database Systems"],
  },
];

const experience = [
  {
    title: "AI Trainer / Researcher",
    company: "Outlier AI",
    period: "Jan 2026 – Jul 2026",
    location: "Remote",
    achievements: [
      "Evaluated AI-generated code across Python, Java, and Go, ensuring production-grade quality and adherence to best practices",
      "Tested mathematical algorithm accuracy and edge case handling in ML model outputs",
      "Triaged production errors and provided detailed feedback for model fine-tuning iterations",
      "Collaborated with ML engineers to improve code generation accuracy by 20%",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Deepa Electricals",
    period: "Jun 2025 – Dec 2025",
    location: "Hyderabad, India",
    achievements: [
      "Contracted to design and build a modern, high-performance Next.js commercial web application with interactive quote inquiry workflows",
      "Optimized MDM REST API endpoints, improving query efficiency by 15% through database indexing and caching strategies",
      "Built CI/CD pipeline using Bitbucket and Terraform for automated infrastructure provisioning on AWS",
      "Implemented comprehensive unit and integration testing suite, increasing code coverage from 60% to 85%",
      "Participated in Agile Scrum ceremonies and delivered sprint goals consistently",
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            Passionate about leveraging AI and cloud technologies to build scalable, intelligent systems
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-primary text-background"
                  : "bg-slate-850 text-slate-400 hover:text-primary"
              }`}
            >
              <GraduationCap className="w-5 h-5 inline-block mr-2" />
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "experience"
                  ? "bg-primary text-background"
                  : "bg-slate-850 text-slate-400 hover:text-primary"
              }`}
            >
              <Briefcase className="w-5 h-5 inline-block mr-2" />
              Experience
            </button>
          </div>

          {/* Education Tab */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glow-border bg-slate-850/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-850/70 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
                      <p className="text-lg text-secondary">{edu.specialization}</p>
                      <p className="text-slate-300 font-semibold">{edu.school}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <span className="text-primary font-bold text-lg">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.details.map((detail, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glow-border bg-slate-850/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-850/70 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-lg text-slate-300 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
