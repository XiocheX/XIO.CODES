
import React from 'react';
import { motion } from 'framer-motion';

const FloatingSocials: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-6 z-[100] flex flex-col gap-4">
      {/* Email Button */}
      <motion.a
        href="mailto:Philipocheekele@gmail.com"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-600 dark:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all group relative"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Send Email
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/2348081680736"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#20BA5C] transition-all group relative"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.996-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.147 1.411 4.75 1.412 5.432 0 9.854-4.422 9.855-9.854 0-2.628-1.024-5.1-2.885-6.961s-4.332-2.884-6.961-2.884c-5.433 0-9.855 4.422-9.856 9.854-.001 1.745.453 3.441 1.316 4.907l-1.099 4.01 4.103-1.076z" />
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1 bg-[#25D366] text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* X (Twitter) Button */}
      <motion.a
        href="https://x.com/Xi_oche"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all group relative"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.832 6.694H2.882l7.605-8.701-8.175-11.199h6.716l4.882 6.467 5.545-6.467zM11.41 13.968l-.635-.873-5.046-6.835h2.17l3.842 5.216.635.873 5.303 7.197h-2.17l-4.099-5.578z" />
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Follow on X
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingSocials;
