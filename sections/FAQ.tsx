import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "Timeline depends on scope. A landing page takes 3-5 days. A multi-page site with custom interactions: 7-14 days. Full web applications: 3-8 weeks depending on complexity. During discovery, we'll nail down an exact timeline and stick to it."
  },
  {
    id: 2,
    question: "What does the discovery phase look like?",
    answer: "We start with a 1-2 hour call to understand your business goals, target audience, and success metrics. I'll ask questions about your competitors, existing pain points, and what 'done' looks like for you. Then I'll send a project brief outline and timeline. No surprises, just clarity."
  },
  {
    id: 3,
    question: "Do you offer ongoing support or maintenance?",
    answer: "Yes. After launch, you can hire me for bug fixes, feature updates, or performance optimization on an hourly basis. Some clients do monthly retainers for continuous improvement. We can discuss what makes sense for your situation."
  },
  {
    id: 4,
    question: "Can you work with existing or messy codebases?",
    answer: "Absolutely. I specialize in taking over legacy projects, refactoring them, and making them maintainable. I've handled everything from tangled React code to poorly structured backends. We can either fix it incrementally or rebuild sections strategically."
  },
  {
    id: 5,
    question: "What if I'm not sure what I need yet?",
    answer: "That's normal. Let's start with a consultation call (no charge). We'll map out your vision, discuss options, and I'll send a proposal. Sometimes the best projects start fuzzy and get clear through conversation. I'm comfortable helping you think through the technical side."
  },
  {
    id: 6,
    question: "What's your tech stack? Can you work with my stack?",
    answer: "I specialize in React, TypeScript, Node.js, and modern web technologies. But I'm adaptable. If you need work in a different framework, we can discuss it. Most of the time, the core principles translate—clean code, performance, user experience. I won't force my stack on you."
  },
  {
    id: 7,
    question: "How do you handle communication and feedback?",
    answer: "Clear, frequent, and documented. You'll get regular updates—either via Slack, email, or demo videos depending on your preference. No radio silence. If you have feedback, we iterate quickly. You're never left guessing about progress."
  },
  {
    id: 8,
    question: "What types of work do you take on?",
    answer: "Freelance projects, contract work, and advisory roles. I'm not currently looking for full-time employment, but I'm open to interesting product opportunities or equity arrangements with early-stage founders. Let's talk about what you need."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm"
          >
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 mt-4 text-black dark:text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Everything you need to know before getting started.
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-white/5"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-left"
              >
                <h3 className="font-bold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.svg
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 dark:border-white/10"
                  >
                    <p className="px-6 py-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 bg-blue-600 dark:bg-blue-600/20 border border-blue-600/30 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-blue-100 dark:text-blue-200 mb-4">
            Let's chat. I'm here to answer anything about your project.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Start a conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
