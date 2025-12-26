import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Experience from './sections/Experience';
import Engagement from './sections/Engagement';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ProjectCalculator from './components/ProjectCalculator';
import FloatingSocials from './components/FloatingSocials';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-white dark:bg-black min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[999] bg-white dark:bg-black flex flex-col items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            <motion.div 
              className="w-20 h-20 border-t-2 border-blue-600 border-r-2 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-blue-600 font-mono tracking-widest text-sm uppercase"
            >
              Building the experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <FloatingSocials />

      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Experience />
        <Skills />
        <Process />
        <Engagement />
        <div className="container mx-auto px-6 py-20">
          <ProjectCalculator />
        </div>
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
