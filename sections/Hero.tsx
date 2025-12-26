
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodePreview from '../components/CodePreview';

const skills = ["Landing Pages", "UI Development", "Smooth Animations", "Performance Optimization"];

const Hero: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-white dark:bg-black">
      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">Nigeria-Based • Available for Global Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-black dark:text-white">
            Build faster. <span className="text-blue-600">Ship smarter.</span>
          </h1>

          <div className="h-12 mb-8 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={skills[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium"
              >
                {skills[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-xl">
            I'm a Nigeria-based developer building high-performance web applications for founders and teams worldwide. From landing pages to complex SaaS platforms, I deliver results that convert.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 group transition-all shadow-lg hover:shadow-blue-600/50 cursor-pointer"
            >
              Start a Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </motion.button>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 text-black dark:text-white border border-gray-300 dark:border-white/10 rounded-xl font-bold flex items-center justify-center transition-all cursor-pointer"
            >
              View My Work
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-black dark:text-white">50+</span>
              <span className="text-xs text-gray-600 dark:text-gray-500 uppercase tracking-wider">Projects Done</span>
            </div>
            <div className="w-[1px] h-10 bg-gray-300 dark:bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">100%</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Client Smiles</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block"
        >
          <CodePreview />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/10 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
