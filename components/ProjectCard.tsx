
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-[#0A0A0A] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 transition-all hover:border-blue-600 dark:hover:border-blue-500/30 shadow-lg hover:shadow-2xl dark:hover:shadow-blue-500/20"
    >
      {/* Image Container */}
      <div className="aspect-video overflow-hidden relative bg-gray-200 dark:bg-gray-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Tech Stack Tags */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <motion.span 
              key={tech} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="px-3 py-1 bg-blue-600 dark:bg-blue-600/80 backdrop-blur-md border border-blue-400 dark:border-blue-400/50 rounded-full text-[10px] font-bold text-white shadow-lg"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 relative z-10">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>

        {/* Case Study Toggle */}
        {(project.problem || project.solution || project.outcome) && (
          <motion.button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 flex items-center gap-2"
          >
            {showDetails ? 'Hide' : 'View'} case study
            <motion.svg
              animate={{ rotate: showDetails ? 180 : 0 }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.button>
        )}

        {/* Case Study Details */}
        <AnimatePresence>
          {showDetails && (project.problem || project.solution || project.outcome) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 space-y-4 pb-6 border-b border-gray-200 dark:border-white/10"
            >
              {project.problem && (
                <div>
                  <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                    The Problem
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div>
                  <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.solution}
                  </p>
                </div>
              )}
              {project.outcome && (
                <div>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
                    Outcome
                  </p>
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    {project.outcome}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 border-t border-gray-300 dark:border-white/10">
          <motion.a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 p-3 bg-gray-100 dark:bg-white/5 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg transition-colors text-gray-800 dark:text-white font-bold text-sm flex items-center justify-center gap-2 group/btn"
          >
            <svg className="w-4 h-4 group-hover/btn:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>
          {project.liveUrl !== "#" && (
            <motion.a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 p-3 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 rounded-lg transition-colors text-white font-bold text-sm flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-blue-600/50"
            >
              <svg className="w-4 h-4 group-hover/btn:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              <span className="hidden sm:inline">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Background Overlay on Hover */}
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 dark:group-hover:bg-blue-500/10 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
