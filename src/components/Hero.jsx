import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { ArrowRight } from 'lucide-react';

const Hero = ({ revealContent = true }) => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-500 ${
        isDarkMode ? 'bg-slate-950' : 'bg-gray-50'
      }`}
      style={{
        background: isDarkMode
          ? `linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.90) 50%, rgba(15, 23, 42, 0.92) 100%), url('/images/compony provided/office.jpg') fixed center/cover no-repeat`
          : `linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(241, 245, 249, 0.65) 50%, rgba(248, 250, 252, 0.7) 100%), url('/images/compony provided/office.jpg') fixed center/cover no-repeat`,
      }}
    >
      {/* Animated SVG Lines Background - Only show when revealContent is true */}
      {revealContent && (
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1400 800" fill="none" preserveAspectRatio="xMidYMid slice">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.path
                key={i}
                d={`M-${500 - i * 30} -${300 + i * 20}C-${500 - i * 30} -${300 + i * 20} -${300 - i * 30} ${400 - i * 20} ${400 - i * 30} ${600 - i * 20}C${1200 - i * 30} ${800 - i * 20} ${1400 - i * 30} ${1200 - i * 20} ${1400 - i * 30} ${1200 - i * 20}`}
                stroke={isDarkMode ? (i % 2 === 0 ? '#0099FF' : '#CCFF00') : (i % 2 === 0 ? '#0052CC' : '#66AA00')}
                strokeWidth={2}
                initial={{ pathLength: 0.3, opacity: 0.5 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.5, 0.15, 0.5],
                  pathOffset: [0, 1, 0],
                }}
                transition={{
                  duration: 25 + Math.random() * 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </svg>
        </div>
      )}

      {/* Content */}
      {revealContent && (
        <>
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Subtle Badge */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                    : 'bg-white/40 border border-gray-800/20 hover:bg-white/60 hover:border-gray-800/30 backdrop-blur-sm'
                }`}>
                  <div className={`h-2 w-2 rounded-full animate-pulse ${
                    isDarkMode ? 'bg-[#CCFF00]' : 'bg-[#66AA00]'
                  }`}></div>
                  <span className={`text-sm font-medium tracking-wide ${
                    isDarkMode ? 'text-white/70' : 'text-gray-800/80'
                  }`}>Founded 2018 • CALABARZON</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={itemVariants} className="mb-10">
                <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
                style={!isDarkMode ? { textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' } : {}}
                >
                  Civil Works
                  <br />
                  <span className={`bg-clip-text text-transparent ${
                    isDarkMode
                      ? 'bg-[#6366f1]'
                      : 'bg-[#0099FF]'
                  }`} style={{ WebkitTextFillColor: isDarkMode ? '#6366f1' : '#0099FF', background: 'none' }}>
                    Made Simple
                  </span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                variants={itemVariants}
                className={`text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide font-medium ${
                  isDarkMode ? 'text-white/70' : 'text-gray-800/85'
                }`}
                style={!isDarkMode ? { textShadow: '0 1px 4px rgba(0, 0, 0, 0.12)' } : {}}
              >
                Comprehensive backfill sourcing, land development, and civil works solutions you can trust.
              </motion.p>

              {/* Call to Action - Restored Two Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                <a
                  href="#projects"
                  className={`group px-10 py-4 font-bold text-lg rounded-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center ${
                    isDarkMode
                      ? 'bg-[#6366f1] hover:bg-[#818cf8] text-white hover:shadow-lg hover:shadow-[#6366f1]/40'
                      : 'bg-[#0099FF] hover:bg-[#005fcc] text-white hover:shadow-lg hover:shadow-[#0099FF]/50 font-semibold'
                  }`}
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1QFFNjs4s6DDpD4ncV1n4AXV5HPU7MMxk?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group px-10 py-4 font-bold text-lg rounded-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center ${
                    isDarkMode
                      ? 'border border-white/20 hover:border-[#CCFF00] text-white hover:bg-white/5'
                      : 'border-2 border-gray-800/40 hover:border-[#0052CC] text-gray-800 hover:bg-white/40 hover:text-gray-900 font-semibold'
                  }`}
                >
                  Archives
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Down Arrow Animation */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <svg className={`w-5 h-5 ${isDarkMode ? 'text-white/40' : 'text-gray-800/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Hero;
