
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-black tracking-tight text-black dark:text-white">
              XIO<span className="text-blue-600 dark:text-blue-500">.CODES</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">Nigeria-based. Globally focused. Systems-first engineering.</p>
          </div>

          <div className="flex gap-8">
            <a href="mailto:Philipocheekele@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">Email</a>
            <a href="https://wa.me/2348081680736" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">WhatsApp</a>
            <a href="https://github.com/XiocheX" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">GitHub</a>
            <a href="https://linkedin.com/in/philip-moche" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
            <a href="https://x.com/Xi_oche" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">X</a>
          </div>

          <div className="text-gray-500 dark:text-gray-400 text-xs font-mono">
            &copy; {new Date().getFullYear()} XIO.CODES. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
