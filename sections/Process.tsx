
import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding your vision, target audience, and business goals through detailed research.",
    details: "We'll have a deep-dive call about your business, competition, and success metrics. This is where I ask the hard questions to make sure we're building the right thing."
  },
  {
    num: "02",
    title: "Strategy & Design",
    desc: "Creating a roadmap for design and development focused on conversion and user flow.",
    details: "I'll map out your user journey, create wireframes, and establish a design system. Clear communication at every step—no surprises, just collaboration."
  },
  {
    num: "03",
    title: "Build & Optimize",
    desc: "Crafting the pixel-perfect UI and building it with clean, high-performance code.",
    details: "Building with modern tech stack (React, TypeScript, Tailwind). Every line of code is written for maintainability and speed. Core Web Vitals optimized from day one."
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Testing across all devices, optimizing speed, and deploying your high-impact site.",
    details: "Comprehensive testing, deployment, and 30 days of post-launch support. Then we can discuss ongoing maintenance or feature development."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold uppercase tracking-widest text-sm"
            >
              Methodology
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-4 mt-4 text-black dark:text-white"
            >
              How I Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              A proven process for delivering exceptional results. Clear, collaborative, and focused on your success.
            </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="absolute top-20 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full bg-blue-600 dark:bg-blue-600/20 border-2 border-blue-600 flex items-center justify-center text-2xl font-bold text-white dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{step.title}</h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {step.desc}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-l-2 border-blue-600/30 pl-4">
                  {step.details}
                </p>

                {/* Connector Arrow for Mobile/Tablet */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:hidden mt-6 mb-6 text-3xl text-blue-600/30">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-blue-600/10 dark:bg-blue-600/5 border border-blue-600/20 rounded-xl">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-black dark:text-white mb-2">Clear Timeline</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              You'll know exactly when to expect deliverables. No vague timelines or moving goalposts.
            </p>
          </div>

          <div className="p-6 bg-blue-600/10 dark:bg-blue-600/5 border border-blue-600/20 rounded-xl">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="font-bold text-black dark:text-white mb-2">Constant Communication</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Regular updates, demo videos, and open feedback. You'll never be left wondering what's happening.
            </p>
          </div>

          <div className="p-6 bg-blue-600/10 dark:bg-blue-600/5 border border-blue-600/20 rounded-xl">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-bold text-black dark:text-white mb-2">Ship with Confidence</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Thoroughly tested, performance-optimized, and ready for production. Launch day is not scary.
            </p>
          </div>
        </motion.div>      </div>
    </section>
  );
};

export default Process;