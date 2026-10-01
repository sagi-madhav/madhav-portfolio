"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

type Command = {
  input: string;
  output: string[];
};

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about      - Learn more about Madhav",
    "  skills     - View technical skills",
    "  projects   - See featured projects",
    "  contact    - Get contact information",
    "  education  - View educational background",
    "  experience - View work experience",
    "  clear      - Clear terminal",
  ],
  about: [
    "Madhav Sagi",
    "M.S. CS (AI) Student @ Georgia Tech",
    "Software Engineer specializing in Full-Stack Development,",
    "Cloud Architecture, and Machine Learning.",
    "",
    "Passionate about building scalable, intelligent systems",
    "that solve real-world problems.",
  ],
  skills: [
    "Languages:",
    "  Python, Go, Java, C++, TypeScript, SQL",
    "",
    "Frameworks & Libraries:",
    "  Spring Boot, Flask, React, Next.js, Pandas, PySpark",
    "",
    "Cloud & Infrastructure:",
    "  AWS EC2, GCP Compute Engine, Docker, Terraform",
    "",
    "Tools:",
    "  Git, GitHub, Jenkins, Jira, Linux, Bash, Nginx",
  ],
  projects: [
    "Featured Projects:",
    "",
    "1. Deepa Electricals (Full-Stack / Contract)",
    "   Contracted commercial website & automated quote platform",
    "   Stack: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Resend",
    "",
    "2. Requestify (Full-Stack)",
    "   DJ-audience interaction platform with real-time features",
    "   Stack: Python, TypeScript, Flask, React, MySQL, GCP",
    "",
    "3. ML Trading System (AI/ML)",
    "   Reinforcement learning-based algorithmic trading",
    "   Stack: Python, Q-Learning, Pandas, Event-Driven Architecture",
    "",
    "4. IoT Sign Language Translator (IoT/Cloud)",
    "   Edge-to-cloud real-time gesture recognition",
    "   Stack: ESP32, Python, AWS EC2, OpenCV, MediaPipe",
  ],
  contact: [
    "Get in touch:",
    "  Email:    sscholarssagi@gmail.com",
    "  LinkedIn: linkedin.com/in/madhav-sagi/",
    "  GitHub:   github.com/madhavsagi",
    "  Location: Tampa, FL",
  ],
  education: [
    "Education:",
    "",
    "M.S. in Computer Science (AI Specialization)",
    "  Georgia Institute of Technology",
    "  Expected May 2027 | GPA: 4.00",
    "",
    "B.S. in Computer Science (Honors, Dean's List)",
    "  University of Florida",
    "  Dec 2024 | GPA: 3.85",
  ],
  experience: [
    "Work Experience:",
    "",
    "AI Trainer / Researcher @ Outlier AI",
    "  Jan 2026 – Jul 2026 | Remote",
    "  • Evaluated AI-generated code (Python, Java, Go)",
    "  • Improved model accuracy by 20%",
    "",
    "Software Development Engineer Intern @ Deepa Electricals",
    "  Jun 2025 – Dec 2025 | Hyderabad, India",
    "  • Contracted to design & build modern Next.js commercial web application",
    "  • Optimized REST APIs (+15% efficiency)",
    "  • Built CI/CD pipeline with Terraform",
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output: [
        "Welcome to Madhav's Interactive Terminal!",
        "Type 'help' to see available commands.",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[trimmedCmd] || [
      `Command not found: ${trimmedCmd}`,
      "Type 'help' to see available commands.",
    ];

    setHistory([...history, { input: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  const handlePresetCommand = (cmd: string) => {
    handleCommand(cmd);
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <section id="terminal" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Interactive Terminal</span>
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            Explore my profile through a command-line interface
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Preset Command Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {["help", "about", "skills", "projects", "contact"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handlePresetCommand(cmd)}
                  className="px-4 py-2 bg-slate-850 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-primary transition-all text-sm font-mono border border-slate-700"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glow-border bg-slate-950 rounded-xl overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 ml-4 text-slate-400 text-sm">
                  <TerminalIcon className="w-4 h-4" />
                  <span className="font-mono">madhav@portfolio:~$</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div
                ref={terminalRef}
                onClick={() => inputRef.current?.focus({ preventScroll: true })}
                className="p-4 font-mono text-sm h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 cursor-text"
              >
                {history.map((cmd, index) => (
                  <div key={index} className="mb-4">
                    <div className="text-primary">
                      <span className="text-secondary">madhav@portfolio</span>
                      <span className="text-slate-500">:</span>
                      <span className="text-primary-light">~</span>
                      <span className="text-slate-500">$ </span>
                      <span className="text-foreground">{cmd.input}</span>
                    </div>
                    <div className="text-slate-300 mt-1">
                      {cmd.output.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex items-center">
                  <span className="text-secondary">madhav@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-primary-light">~</span>
                  <span className="text-slate-500">$ </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-foreground ml-2 caret-primary"
                  />
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
