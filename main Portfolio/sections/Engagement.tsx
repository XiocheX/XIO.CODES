import React from 'react';
import { motion } from 'framer-motion';

const ENGAGEMENT_TYPES = [
  {
    id: 1,
    title: "Freelance / Contract Work",
    description: "Project-based work. You own the project brief, I own the execution. Perfect for MVP launches, landing pages, or feature sprints.",
    icon: "🚀",
    ideal: "Best for: Startups, agencies needing extra hands, one-off projects",
    timeline: "1-8 weeks",
    engagement: "Flexible"
  },
  {
    id: 2,
    title: "Technical Advisory",
    description: "I review your codebase, propose architecture improvements, or mentor your team on best practices. No hands-on coding required.",
    icon: "🧠",
    ideal: "Best for: Founders making technical decisions, teams needing external validation",
    timeline: "Ongoing",
    engagement: "Part-time"
  },
  {
    id: 3,
    title: "Ongoing Support & Retainer",
    description: "Monthly commitment for continuous improvements, bug fixes, performance optimization, or new features. I'm your technical partner.",
    icon: "🛠️",
    ideal: "Best for: SaaS companies, growing startups with active products",
    timeline: "Month-to-month",
    engagement: "5-20 hrs/week"
  },
  {
    id: 4,
    title: "Full-time Product Role",
    description: "I'm open to interesting equity arrangements or full-time product-focused roles with early-stage founders building something meaningful.",
    icon: "🎯",
    ideal: "Best for: Seed-stage founders with product vision",
    timeline: "Long-term",
    engagement: "Full-time"
  }
];

const Engagement: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 mt-4 text-black dark:text-white"
          >
            Engagement Types
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Clear on the types of work I take. Pick what fits your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGAGEMENT_TYPES.map((type, idx) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{type.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                {type.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {type.description}
              </p>

              {/* Details Grid */}
              <div className="space-y-4 pb-6 border-b border-gray-200 dark:border-white/10">
                <div>
                  <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                    Ideal For
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {type.ideal}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Timeline
                    </p>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {type.timeline}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Engagement
                    </p>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {type.engagement}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-6 py-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Get in touch →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Not sure which option is right? Let's talk about your situation.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-600/50"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Engagement;
