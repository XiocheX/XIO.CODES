import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE = [
  {
    year: "2025 - Present",
    title: "CEO & Founder",
    company: "XIO Ltd NG",
    description: "Building and scaling XIO Ltd NG from Nigeria. Overseeing product strategy, technical architecture, and business growth. Focused on delivering high-impact solutions to clients globally.",
    achievements: ["Building product from ground up", "Team leadership", "Strategic direction"]
  },
  {
    year: "2024 - Present",
    title: "Senior Frontend Developer",
    company: "Trace-Farm & SignalPro",
    description: "Leading frontend architecture for multiple SaaS platforms. Implementing design systems, optimizing performance, and mentoring junior developers on best practices.",
    achievements: ["Design systems architecture", "Performance optimization", "Team mentoring"]
  },
  {
    year: "2021 - Present",
    title: "Full-Stack Developer & Student",
    company: "University of Jos (200L) & Self-Employed",
    description: "Pursuing studies at University of Jos while actively building products and serving clients globally. Balancing academic growth with hands-on development experience.",
    achievements: ["15+ client projects delivered", "Self-taught to professional", "Continuous learning"]
  },
  {
    year: "2021 - 2024",
    title: "Self-Taught Developer",
    company: "Learning & Building",
    description: "Intensive self-study journey into full-stack development. Built foundational skills through practical projects, open-source contributions, and real-world client work.",
    achievements: ["20+ projects shipped", "React, TypeScript, Node.js mastery", "Established client base"]
  }
];

const EXPERTISE = [
  {
    category: "Frontend",
    skills: ["React 19+", "TypeScript", "Tailwind CSS", "Framer Motion", "Performance Optimization"],
    icon: "⚡"
  },
  {
    category: "Full-Stack",
    skills: ["Node.js", "PostgreSQL", "API Design", "Real-time Systems", "Database Optimization"],
    icon: "🔧"
  },
  {
    category: "Product Thinking",
    skills: ["Conversion Optimization", "User Research", "Product Strategy", "Technical Leadership", "Scalability"],
    icon: "🎯"
  },
  {
    category: "Specializations",
    skills: ["SaaS Platforms", "Performance Audits", "Refactoring Legacy Code", "Design Systems", "Accessibility"],
    icon: "✨"
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm"
          >
            Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 mt-4 text-black dark:text-white"
          >
            Years of Proven Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Nigerian developer. Self-taught to CEO. Building products for global clients since 2021.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 border-l-2 border-blue-600/30 hover:border-blue-600 transition-colors"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2" />

                <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <span className="text-sm font-semibold text-blue-600">{exp.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <span key={i} className="text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-black dark:text-white"
          >
            Core Expertise
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERTISE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl"
              >
                <div className="text-3xl mb-3">{exp.icon}</div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-4">{exp.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
