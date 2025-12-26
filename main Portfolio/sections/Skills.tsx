
import React from 'react';
import { motion } from 'framer-motion';

interface TechStack {
  category: string;
  technologies: string;
  description: string;
}

const TECH_STACKS: TechStack[] = [
  {
    category: "FRONTEND SYSTEMS",
    technologies: "Next.js 15 · React 19 · TypeScript 5 · WebGL / Three.js · GSAP",
    description: "Purpose-driven interfaces built for speed, motion, and long-term maintainability.\nAnimation is intentional. Architecture is opinionated. Performance is non-negotiable."
  },
  {
    category: "BACKEND LOGIC",
    technologies: "Node.js · Python · PostgreSQL · GraphQL · REST",
    description: "Clean application logic and predictable APIs that frontend systems can trust.\nNo spaghetti. Clear boundaries. Data flows where it should."
  },
  {
    category: "INFRASTRUCTURE",
    technologies: "Docker · AWS · CI/CD · Linux · Nginx",
    description: "Production awareness baked in.\nSystems are designed to deploy cleanly, scale calmly, and fail gracefully."
  }
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-white/50 dark:bg-black/50" />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-sm">Technical Foundation</span>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">TECHNOLOGY</h2>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-500 dark:text-gray-500">UNDER THE HOOD</h2>
            </div>
          </div>
        </div>

        {/* Tech Stacks Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TECH_STACKS.map((stack, idx) => (
            <motion.div
              key={stack.category}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-8 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-300 dark:border-white/10 hover:border-blue-600 dark:hover:border-blue-500/30 transition-all duration-300">
                {/* Category Label */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
                    {stack.category}
                  </h3>
                  <div className="text-xs font-mono text-gray-700 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                    {stack.technologies}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-blue-600/20 dark:bg-blue-500/20 mb-6" />

                {/* Description */}
                <p className="text-sm text-gray-800 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {stack.description}
                </p>
              </div>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-blue-600/0 dark:bg-blue-500/0 group-hover:bg-blue-600/5 dark:group-hover:bg-blue-500/5 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center pt-8 border-t border-gray-300 dark:border-white/5"
        >
          <p className="text-sm text-gray-600 dark:text-gray-500 italic font-mono">
            Powered by modern systems. Hardened for reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
