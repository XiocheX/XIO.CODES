
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCalculator: React.FC = () => {
  const [pages, setPages] = useState(1);
  const [complexity, setComplexity] = useState(1); // 1: Simple, 2: Interactive, 3: Advanced
  const [hasCMS, setHasCMS] = useState(false);

  const basePrice = 250;
  const pagePrice = 100;
  const complexityMultiplier = [1, 1.5, 2.5];
  const cmsPrice = 200;

  const estimatedTotal = Math.round((basePrice + (pages - 1) * pagePrice) * complexityMultiplier[complexity - 1] + (hasCMS ? cmsPrice : 0));

  return (
    <div className="max-w-4xl mx-auto glass rounded-3xl p-8 border border-blue-500/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-2">Project Estimator</h3>
          <p className="text-gray-400 text-sm mb-8">Get a rough idea of the investment for your custom solution.</p>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Number of Pages: {pages}</label>
              <input 
                type="range" min="1" max="10" step="1" 
                value={pages} 
                onChange={(e) => setPages(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">UI Complexity</label>
              <div className="flex gap-2">
                {['Simple', 'Dynamic', 'Experimental'].map((label, idx) => (
                  <button
                    key={label}
                    onClick={() => setComplexity(idx + 1)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                      complexity === idx + 1 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="cms" 
                checked={hasCMS} 
                onChange={(e) => setHasCMS(e.target.checked)}
                className="w-5 h-5 rounded border-white/10 bg-white/5 accent-blue-600"
              />
              <label htmlFor="cms" className="text-sm font-medium text-gray-300">Need a CMS (Content Management System)?</label>
            </div>
          </div>
        </div>

        <div className="bg-black/50 p-8 rounded-2xl border border-white/5 text-center flex flex-col justify-center">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Estimated Investment</span>
          <motion.div 
            key={estimatedTotal}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black text-blue-500 mb-4"
          >
            ${estimatedTotal}
          </motion.div>
          <p className="text-xs text-gray-500 mb-8">*Actual quote may vary based on specific requirements.</p>
          <a href="#contact" className="bg-white text-black py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">Get Precise Quote</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCalculator;
