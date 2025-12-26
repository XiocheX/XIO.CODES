import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Philip took our poorly performing SaaS dashboard and turned it into a fast, intuitive product. The performance improvements alone reduced load times by 60%. He understood our product roadmap and built with scalability in mind.",
    author: "Sarah Chen",
    role: "Founder, Analytics Platform",
    outcome: "60% faster load times, better user retention"
  },
  {
    id: 2,
    quote: "We needed a landing page that actually converted. Philip built us something clean, fast, and optimized for conversions. Our CAC dropped 35% within the first month. He communicated every step and delivered on time.",
    author: "Marcus Williams",
    role: "CEO, B2B SaaS",
    outcome: "35% reduction in customer acquisition cost"
  },
  {
    id: 3,
    quote: "Had a messy React codebase and Philip reorganized it completely. The refactoring made it maintainable for our team. Features that took weeks now take days. He's a rare developer who actually cares about code quality.",
    author: "Priya Patel",
    role: "Tech Lead, Ed-Tech Startup",
    outcome: "80% faster feature development after refactor"
  },
  {
    id: 4,
    quote: "Philip handled our entire product redesign and rebuild. No confusion, clear timeline, delivered exactly what we asked for. Most importantly, he understood our business and made smart technical choices that paid off.",
    author: "James Reynolds",
    role: "Founder, Design Agency",
    outcome: "Shipped full redesign on time, zero bugs at launch"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm"
          >
            Social Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 mt-4 text-black dark:text-white"
          >
            Trusted by Founders & Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Real results from real clients. Each testimonial includes measurable outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-800 dark:text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{testimonial.role}</p>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Result: {testimonial.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
