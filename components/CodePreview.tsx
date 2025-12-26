
import React from 'react';
import { motion } from 'framer-motion';

const CodePreview: React.FC = () => {
  const projects = [
    { name: "E-Commerce Platform", metric: "3.2x", label: "Conversion Increase" },
    { name: "SaaS Dashboard", metric: "156%", label: "User Engagement" },
    { name: "Mobile App", metric: "4.8★", label: "App Rating" }
  ];

  return (
    <div className="space-y-4">
      {/* Main showcase card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
        <div className="relative bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-xl p-8">
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-500/20 rounded-full mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">Results</span>
            </motion.div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Proven Track Record</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I've helped 50+ brands transform their digital presence with high-converting experiences
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 text-center"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{project.metric}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{project.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Client trust badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 flex items-center gap-4"
      >
        <div className="flex -space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white dark:border-black flex items-center justify-center text-white font-bold text-sm"
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <div>
          <div className="text-sm font-bold text-black dark:text-white">Trusted by 50+ clients</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">From startups to enterprises</div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodePreview;
