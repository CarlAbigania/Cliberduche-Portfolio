import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';
import { MdTerrain, MdAgriculture, MdWorkHistory, MdHandyman, MdConstruction, MdPendingActions, MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Services = () => {
  const { isDarkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const containerRef = useRef(null);
  const lastScrollRef = useRef(0);

  // Icon mapping
  const iconMap = {
    'fa-mountain': MdTerrain,
    'fa-tractor': MdAgriculture,
    'fa-hard-hat': MdWorkHistory,
    'fa-tools': MdHandyman,
    'fa-road': MdConstruction,
    'fa-clipboard-check': MdPendingActions,
  };

  const services = [
    { icon: 'fa-mountain', title: 'Backfill Sourcing', desc: 'Sub-base, aggregates, mixed soil, and boulders with lab-tested quality.' },
    { icon: 'fa-tractor', title: 'Land Development', desc: 'Clearing, cutting, leveling, and pipe laying for site readiness.' },
    { icon: 'fa-hard-hat', title: 'Site Management', desc: 'Professional field supervision aligned with safety and delivery targets.' },
    { icon: 'fa-tools', title: 'Equipment Leasing', desc: 'Dump trucks, bulldozers, excavators, compactors, and support units.' },
    { icon: 'fa-road', title: 'Civil Works', desc: 'Bridges, concrete roads, ripraps, drainage, and slope protection.' },
    { icon: 'fa-clipboard-check', title: 'Project Consultation', desc: 'Consultation for horizontal and vertical development projects.' },
  ];

  // Get visible cards indices
  const getVisibleCards = () => {
    const prev = (activeIndex - 1 + services.length) % services.length;
    const curr = activeIndex;
    const next = (activeIndex + 1) % services.length;
    return { prev, curr, next };
  };

  // Handle scroll within carousel
  useEffect(() => {
    const handleWheel = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        
        const now = Date.now();
        if (now - lastScrollRef.current > 600) {
          if (e.deltaY > 0) {
            // Scroll down - move to next card
            setActiveIndex((prev) => (prev + 1) % services.length);
            setScrollDirection(1);
          } else {
            // Scroll up - move to previous card
            setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
            setScrollDirection(-1);
          }
          lastScrollRef.current = now;
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [services.length]);

  const visibleCards = getVisibleCards();

  return (
    <section
      id="services"
      className={cn(
        "py-12 md:py-20 relative overflow-hidden transition-colors duration-500",
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute blur-3xl rounded-full opacity-20",
          isDarkMode
            ? 'bg-indigo-600'
            : 'bg-indigo-300'
        )} style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }}></div>
        <div className={cn(
          "absolute blur-3xl rounded-full opacity-15",
          isDarkMode
            ? 'bg-rose-600'
            : 'bg-rose-300'
        )} style={{ width: '500px', height: '500px', bottom: '-150px', left: '-100px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-12 h-1 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-indigo-500 to-rose-500' 
                : 'from-indigo-600 to-rose-600'
            }`}></div>
            <span className={`text-sm font-bold tracking-widest ${
              isDarkMode 
                ? 'text-indigo-400' 
                : 'text-indigo-600'
            }`}>WHAT WE OFFER</span>
            <div className={`w-12 h-1 bg-gradient-to-l ${
              isDarkMode 
                ? 'from-indigo-500 to-rose-500' 
                : 'from-indigo-600 to-rose-600'
            }`}></div>
          </div>
          <h2 className={cn(
            "text-5xl md:text-6xl lg:text-7xl font-black mb-6",
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            Our Services
          </h2>
          <p className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto",
            isDarkMode 
              ? 'text-white/70' 
              : 'text-gray-700'
          )}>
            Scroll to explore our comprehensive solutions
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative h-96 md:h-[28rem] lg:h-96 mb-12 md:mb-20"
        >
          {/* Cards Container - Shows all three */}
          <div className="relative w-full h-full flex items-center justify-center gap-4 md:gap-6 px-4">
            {/* Left Card */}
            <div className="w-1/4 md:w-1/3 h-full flex-shrink-0">
              <motion.div
                key={`left-${visibleCards.prev}`}
                initial={{ opacity: 0.6, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 0.8 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                className="h-full"
              >
                <div className={cn(
                  "h-full p-6 rounded-3xl border backdrop-blur-xl",
                  isDarkMode
                    ? 'border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent'
                    : 'border-gray-300 bg-gradient-to-br from-white/80 to-gray-50/70'
                )}>
                  <div className="relative z-10 flex flex-col h-full gap-4">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center",
                      isDarkMode
                        ? 'bg-gradient-to-br from-indigo-500/20 to-rose-500/20 text-indigo-300'
                        : 'bg-gradient-to-br from-indigo-100 to-rose-100 text-indigo-600'
                    )}>
                      {iconMap[services[visibleCards.prev].icon] && React.createElement(iconMap[services[visibleCards.prev].icon], { className: 'text-2xl' })}
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        "text-lg font-bold",
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      )}>
                        {services[visibleCards.prev].title}
                      </h3>
                      <p className={cn(
                        "text-xs leading-relaxed line-clamp-2",
                        isDarkMode ? 'text-white/60' : 'text-gray-600'
                      )}>
                        {services[visibleCards.prev].desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center Card */}
            <div className="w-full md:w-1/3 h-full flex-shrink-0">
              <motion.div
                key={`center-${visibleCards.curr}`}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                className="h-full cursor-pointer group"
              >
                <div className={cn(
                  "h-full p-8 md:p-10 rounded-3xl border backdrop-blur-xl transition-all duration-300",
                  "hover:shadow-2xl",
                  isDarkMode
                    ? 'border-indigo-500/50 bg-gradient-to-br from-white/[0.12] to-transparent hover:border-rose-500/50 hover:shadow-indigo-500/30'
                    : 'border-indigo-400 bg-gradient-to-br from-white/90 to-gray-100/70 hover:border-rose-400 hover:shadow-indigo-400/30'
                )}>
                  {/* Gradient overlay */}
                  <div className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl",
                    isDarkMode
                      ? 'bg-gradient-to-br from-indigo-500/15 to-rose-500/15'
                      : 'bg-gradient-to-br from-indigo-300/15 to-rose-300/15'
                  )} style={{ pointerEvents: 'none' }}></div>

                  <div className="relative z-10 flex flex-col h-full gap-6">
                    {/* Icon */}
                    <motion.div
                      animate={{ scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300",
                        isDarkMode
                          ? 'bg-gradient-to-br from-indigo-500/30 to-rose-500/30 text-indigo-300'
                          : 'bg-gradient-to-br from-indigo-200 to-rose-200 text-indigo-700'
                      )}
                    >
                      {iconMap[services[visibleCards.curr].icon] && React.createElement(iconMap[services[visibleCards.curr].icon], { className: 'text-4xl' })}
                    </motion.div>

                    {/* Title & Description */}
                    <div className="flex-1">
                      <h3 className={cn(
                        "text-3xl md:text-4xl font-black mb-3 transition-all duration-300",
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      )}>
                        {services[visibleCards.curr].title}
                      </h3>

                      <p className={cn(
                        "leading-relaxed text-base md:text-lg transition-opacity duration-300",
                        isDarkMode ? 'text-white/75' : 'text-gray-700'
                      )}>
                        {services[visibleCards.curr].desc}
                      </p>
                    </div>

                    {/* Accent line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8 }}
                      className={cn(
                        "h-1 rounded-full bg-gradient-to-r",
                        isDarkMode
                          ? 'from-indigo-500 to-rose-500'
                          : 'from-indigo-600 to-rose-600'
                      )}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Card */}
            <div className="w-1/4 md:w-1/3 h-full flex-shrink-0">
              <motion.div
                key={`right-${visibleCards.next}`}
                initial={{ opacity: 0.6, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 0.8 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                className="h-full"
              >
                <div className={cn(
                  "h-full p-6 rounded-3xl border backdrop-blur-xl",
                  isDarkMode
                    ? 'border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent'
                    : 'border-gray-300 bg-gradient-to-br from-white/80 to-gray-50/70'
                )}>
                  <div className="relative z-10 flex flex-col h-full gap-4">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center",
                      isDarkMode
                        ? 'bg-gradient-to-br from-indigo-500/20 to-rose-500/20 text-indigo-300'
                        : 'bg-gradient-to-br from-indigo-100 to-rose-100 text-indigo-600'
                    )}>
                      {iconMap[services[visibleCards.next].icon] && React.createElement(iconMap[services[visibleCards.next].icon], { className: 'text-2xl' })}
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        "text-lg font-bold",
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      )}>
                        {services[visibleCards.next].title}
                      </h3>
                      <p className={cn(
                        "text-xs leading-relaxed line-clamp-2",
                        isDarkMode ? 'text-white/60' : 'text-gray-600'
                      )}>
                        {services[visibleCards.next].desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Indicators */}
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <motion.button
            onClick={() => setActiveIndex((prev) => (prev - 1 + services.length) % services.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-3 rounded-full transition-all duration-300",
              isDarkMode
                ? 'bg-white/10 hover:bg-indigo-500/30 text-white'
                : 'bg-gray-300 hover:bg-indigo-200 text-gray-900'
            )}
          >
            <MdChevronLeft className="text-2xl" />
          </motion.button>

          {/* Dots/Progress */}
          <div className="flex gap-2">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                animate={{
                  scale: index === activeIndex ? 1.2 : 1,
                  opacity: index === activeIndex ? 1 : 0.5,
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-indigo-500 to-rose-500 w-8'
                      : 'bg-gradient-to-r from-indigo-600 to-rose-600 w-8'
                    : isDarkMode
                      ? 'bg-white/30 w-2'
                      : 'bg-gray-400 w-2'
                )}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <motion.button
            onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-3 rounded-full transition-all duration-300",
              isDarkMode
                ? 'bg-white/10 hover:bg-indigo-500/30 text-white'
                : 'bg-gray-300 hover:bg-indigo-200 text-gray-900'
            )}
          >
            <MdChevronRight className="text-2xl" />
          </motion.button>
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <p className={cn(
            "text-sm font-semibold tracking-widest",
            isDarkMode ? 'text-white/50' : 'text-gray-600'
          )}>
            {activeIndex + 1} / {services.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
