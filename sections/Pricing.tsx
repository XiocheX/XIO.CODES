
import React from 'react';
import { motion } from 'framer-motion';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  const handleGetStarted = (tierName: string, tierPrice: string) => {
    // Store pricing tier in sessionStorage
    sessionStorage.setItem('selectedTier', JSON.stringify({ name: tierName, price: tierPrice }));
    // Scroll to contact form
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black dark:text-white">Fair & Transparent <span className="text-blue-600 dark:text-blue-500">Pricing</span></h2>
          <p className="text-gray-600 dark:text-gray-400 mb-3">Choose the package that best fits your project stage. No hidden fees, just high-quality code.</p>
          <div className="inline-block text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2">
            💡 <span className="ml-2">Prices are estimations based on general market rates—final costs may differ based on your specific project requirements.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl flex flex-col h-full border ${
                tier.recommended 
                  ? 'bg-blue-50 dark:bg-blue-600/5 border-blue-400 dark:border-blue-500 ring-2 ring-blue-500/20 dark:ring-blue-500/20' 
                  : 'bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/10'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-blue-600 dark:text-blue-500">{tier.price}</span>
                  <span className="text-gray-600 dark:text-gray-500 text-sm">/project</span>
                </div>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  handleGetStarted(tier.name, tier.price);
                }}
                className={`w-full py-4 rounded-xl font-bold text-center transition-all cursor-pointer ${
                  tier.recommended 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-black dark:text-white'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
