import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';
import ModalPortal from './ModalPortal';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Magnet from './ui/Magnet';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const thumbnailScrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      img: 'images/mdi-project-2019.png',
      tag: 'Completed',
      title: 'MDI - Project 2019',
      desc: 'Civil engineering and infrastructure works.',
      location: '',
      highlight: 'Scope: MDI project development',
      category: ['completed'],
    },
    {
      id: 2,
      img: 'images/silang,cavite2021.png',
      tag: 'Completed',
      title: 'Silang, Cavite Project 2021',
      desc: 'Leveling and compaction, drainage, road network, riprap, bridge, rectification.',
      location: 'Silang, Cavite',
      highlight: 'Area: 18.3 hectares',
      category: ['completed'],
    },
    {
      id: 3,
      img: 'images/cbd-building2019.png',
      tag: 'Completed',
      title: 'CBD Building Project 2019',
      desc: 'Commercial building development and construction.',
      location: '',
      highlight: 'Scope: CBD building project',
      category: ['completed'],
    },
    {
      id: 4,
      img: 'images/mdi-mercator-holdings2025p1.png',
      tag: 'Completed',
      title: 'MDI - Mercator Holding Project 2025',
      desc: 'Embankment, diversion road, retaining wall, drainage, pavement, and infrastructure works.',
      location: 'Calamba, Laguna',
      highlight: 'Scope: embankment + roadworks + drainage + electrical',
      category: ['completed'],
      metrics: { area: '50 hectares', duration: '12 months', value: '₱25M' },
    },
    {
      id: 5,
      img: 'images/mdi-mercator-holdings.png',
      tag: 'Ongoing',
      title: 'MDI - Mercator Holdings Project',
      desc: 'Embankment, diversion road, retaining wall, drainage, pavement, and electrical post lights.',
      location: '',
      highlight: 'Scope: embankment + roadworks + drainage + electrical',
      category: ['ongoing'],
    },
    {
      id: 6,
      img: 'images/pier2-north-harbour.png',
      tag: 'Ongoing',
      title: 'Pier 2 North Harbour',
      desc: 'Reconstruction of bridge, pavement, lagoon, embankment, drainage, water & electrical works.',
      location: 'North Harbour, Manila',
      highlight: 'Scope: bridge + pavement + utilities',
      category: ['ongoing'],
    },
    {
      id: 7,
      img: 'images/wdv-phas4-tanza,cavite.png',
      tag: 'Ongoing',
      title: 'WDV Phase 4 Tanza, Cavite',
      desc: 'Retaining wall and perimeter fence construction for residential development.',
      location: 'Tanza, Cavite',
      highlight: 'Scope: retaining wall + perimeter fence',
      category: ['ongoing'],
    },
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [showModal, setShowModal] = useState(false);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'completed', label: 'Completed' },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const scrollThumbnails = (direction) => {
    if (thumbnailScrollRef.current) {
      const scrollAmount = 400;
      thumbnailScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className={cn(
      "py-24 md:py-32 relative overflow-hidden transition-colors duration-500",
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-12 h-1 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-indigo-400 to-teal-400' 
                : 'from-[#0099FF] to-[#CCFF00]'
            }`}></div>
            <span className={`text-sm font-bold tracking-widest ${
              isDarkMode 
                ? 'text-indigo-400' 
                : 'text-[#0099FF]'
            }`}>OUR PORTFOLIO</span>
            <div className={`w-12 h-1 bg-gradient-to-l ${
              isDarkMode 
                ? 'from-indigo-400 to-teal-400' 
                : 'from-[#0099FF] to-[#CCFF00]'
            }`}></div>
          </div>
          <h2 className={cn(
            "text-5xl md:text-6xl lg:text-7xl font-black mb-6",
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            Our Projects
          </h2>
          <p className={cn(
            "text-lg max-w-3xl mx-auto",
            isDarkMode 
              ? 'text-white/70' 
              : 'text-gray-700'
          )}>
            Browse through all our completed and ongoing projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveFilter(filter.key);
                setSelectedProject(filteredProjects[0] || projects[0]);
              }}
              className={cn(
                "px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300",
                activeFilter === filter.key
                  ? isDarkMode
                    ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                    : 'bg-[#0099FF] text-white shadow-lg shadow-[#0099FF]/30'
                  : isDarkMode
                    ? 'border border-white/10 bg-white/[0.08] text-white hover:border-[#6366f1]'
                    : 'border border-gray-300 bg-white/80 text-gray-900 hover:border-[#0099FF]'
              )}
            >
              {filter.label} ({filter.key === 'all' ? projects.length : projects.filter(p => p.category.includes(filter.key)).length})
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Project Spotlight */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
              "rounded-3xl overflow-hidden border backdrop-blur-xl mb-12 md:mb-16",
              isDarkMode
                ? 'border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent'
                : 'border-gray-300 bg-gradient-to-br from-white/80 to-gray-50/70'
            )}
          >
            <div className="grid md:grid-cols-2 gap-0 min-h-96 md:min-h-[500px]">
              {/* Featured Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.img})` }}
                >
                  <div className={cn(
                    "absolute inset-0",
                    isDarkMode
                      ? 'bg-gradient-to-r from-black/40 to-transparent'
                      : 'bg-gradient-to-r from-black/20 to-transparent'
                  )}></div>
                </div>
              </motion.div>

              {/* Featured Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={cn(
                  "p-8 md:p-12 flex flex-col justify-center relative z-10",
                  isDarkMode ? 'bg-slate-900/50' : 'bg-white/50'
                )}
              >
                <div className="inline-flex items-center gap-2 mb-4 w-fit">
                  <div className={cn(
                    "w-1 h-5 rounded-full",
                    isDarkMode
                      ? 'bg-gradient-to-b from-indigo-400 to-teal-400'
                      : 'bg-gradient-to-b from-[#0099FF] to-[#CCFF00]'
                  )}></div>
                  <span className={cn(
                    "text-xs font-bold uppercase tracking-widest",
                    isDarkMode ? 'text-indigo-400' : 'text-[#0099FF]'
                  )}>
                    Featured
                  </span>
                </div>

                <h2 className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight",
                  isDarkMode ? 'text-white' : 'text-gray-900'
                )}>
                  {selectedProject.title}
                </h2>

                <p className={cn(
                  "text-base md:text-lg mb-6",
                  isDarkMode ? 'text-white/70' : 'text-gray-700'
                )}>
                  {selectedProject.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <p className={cn(
                    "text-sm font-semibold",
                    isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                  )}>
                    ✓ {selectedProject.highlight}
                  </p>
                  {selectedProject.location && (
                    <p className={cn(
                      "text-sm font-semibold flex items-center gap-2",
                      isDarkMode ? 'text-white/60' : 'text-gray-600'
                    )}>
                      📍 {selectedProject.location}
                    </p>
                  )}
                </div>

                <Magnet padding={50} magnetStrength={8}>
                  <motion.button
                    onClick={() => handleProjectClick(selectedProject)}
                    className={cn(
                      "w-fit px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all",
                      isDarkMode
                        ? 'bg-[#6366f1] text-white hover:shadow-lg hover:shadow-[#6366f1]/30'
                        : 'bg-[#0099FF] text-white hover:shadow-lg hover:shadow-[#0099FF]/30'
                    )}
                  >
                    View Case Study
                  </motion.button>
                </Magnet>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Thumbnail Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <h3 className={cn(
              "text-lg md:text-xl font-black mb-6",
              isDarkMode ? 'text-white' : 'text-gray-900'
            )}>
              All Projects ({filteredProjects.length})
            </h3>

            {/* Carousel Container */}
            <div className="relative group">
              {/* Left Arrow */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollThumbnails('left')}
                className={cn(
                  "absolute -left-4 md:left-0 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100",
                  isDarkMode
                    ? 'bg-[#6366f1] hover:bg-[#818cf8] text-white'
                    : 'bg-[#0099FF] hover:bg-[#005fcc] text-white'
                )}
              >
                <MdChevronLeft className="text-2xl" />
              </motion.button>

              {/* Thumbnails Scroll */}
              <div
                ref={thumbnailScrollRef}
                className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
                style={{
                  scrollBehavior: 'smooth',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.button
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className={cn(
                      "relative flex-shrink-0 w-28 md:w-36 h-24 md:h-32 rounded-lg overflow-hidden border-2 transition-all duration-300 group/thumb",
                      selectedProject.id === project.id
                        ? isDarkMode
                          ? 'border-[#6366f1] shadow-lg shadow-[#6366f1]/50'
                          : 'border-[#0099FF] shadow-lg shadow-[#0099FF]/50'
                        : isDarkMode
                          ? 'border-white/10 hover:border-white/30'
                          : 'border-gray-300 hover:border-gray-400'
                    )}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                    />
                    <div className={cn(
                      "absolute inset-0",
                      isDarkMode
                        ? 'bg-gradient-to-b from-transparent to-black/60 group-hover/thumb:from-black/20 group-hover/thumb:to-black/70'
                        : 'bg-gradient-to-b from-transparent to-black/40 group-hover/thumb:from-black/10 group-hover/thumb:to-black/60'
                    )}></div>

                    {/* Thumbnail Status Badge */}
                    <div className="absolute top-1 right-1">
                      <span className={cn(
                        "inline-block px-2 py-1 rounded text-xs font-bold",
                        project.tag === 'Ongoing'
                          ? isDarkMode
                            ? 'bg-yellow-500/80 text-yellow-100'
                            : 'bg-yellow-500/80 text-white'
                          : isDarkMode
                            ? 'bg-green-500/80 text-green-100'
                            : 'bg-green-500/80 text-white'
                      )}>
                        {project.tag.split(' ')[0].charAt(0)}
                      </span>
                    </div>

                    {/* Title on Thumbnail */}
                    <div className="absolute bottom-1 left-1 right-1">
                      <p className="text-xs font-bold text-white line-clamp-1">
                        {project.title.split(' ').slice(0, 2).join(' ')}
                      </p>
                    </div>

                    {/* Active Indicator */}
                    {selectedProject.id === project.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 border-2 border-indigo-500 rounded-lg"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Right Arrow */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollThumbnails('right')}
                className={cn(
                  "absolute -right-4 md:right-0 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100",
                  isDarkMode
                    ? 'bg-[#6366f1] hover:bg-[#818cf8] text-white'
                    : 'bg-[#0099FF] hover:bg-[#005fcc] text-white'
                )}
              >
                <MdChevronRight className="text-2xl" />
              </motion.button>
            </div>

            {/* Scroll Indicator */}
            <p className={cn(
              "text-xs mt-4 text-center",
              isDarkMode ? 'text-white/50' : 'text-gray-500'
            )}>
              ← Scroll to browse all projects →
            </p>
          </motion.div>
        </div>

        {/* Case Study Modal */}
        <ModalPortal isOpen={showModal && !!selectedProject}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showModal ? 1 : 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={cn(
                "rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border",
                isDarkMode
                  ? 'border-white/10 bg-slate-900'
                  : 'bg-white border-gray-200 shadow-2xl'
              )}
            >
              {/* Header */}
              <div className={cn(
                "border-b p-6 md:p-10 transition-colors duration-500",
                isDarkMode
                  ? 'border-white/10 bg-gradient-to-r from-[#0099FF]/20 to-[#00CC99]/20'
                  : 'border-gray-200 bg-gradient-to-r from-[#0099FF]/10 to-[#CCFF00]/10'
              )}>
                <div className="flex justify-between items-start gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className={cn(
                      "text-2xl md:text-3xl font-black mb-3",
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    )}>
                      {selectedProject.title}
                    </h3>
                    <p className={cn(
                      "font-semibold text-base",
                      isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                    )}>
                      {selectedProject.highlight}
                    </p>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeModal}
                    className={cn(
                      "text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg transition-all",
                      isDarkMode
                        ? 'text-white/60 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    )}
                  >
                    ×
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 space-y-8">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 }}
                  className={cn(
                    "rounded-2xl overflow-hidden flex items-center justify-center border",
                    isDarkMode
                      ? 'border-white/10 bg-gradient-to-br from-slate-700 to-slate-800'
                      : 'border-gray-300 bg-gradient-to-br from-gray-200 to-gray-300'
                  )}
                >
                  <img 
                    src={selectedProject.img} 
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-80 object-contain p-4"
                  />
                </motion.div>

                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "w-1 h-6 rounded-full bg-gradient-to-b",
                      isDarkMode
                        ? 'from-indigo-400 to-teal-400'
                        : 'from-[#0099FF] to-[#CCFF00]'
                    )}></div>
                    <h4 className={cn(
                      "text-xl md:text-2xl font-black",
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    )}>Project Overview</h4>
                  </div>
                  <p className={cn(
                    "text-base md:text-lg leading-relaxed p-4 rounded-lg border",
                    isDarkMode
                      ? 'bg-white/5 text-white/80 border-white/10'
                      : 'bg-indigo-25 text-gray-800 border-indigo-200'
                  )}>
                    {selectedProject.desc}
                  </p>
                </motion.div>

                {/* Location & Status Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="grid grid-cols-2 gap-6"
                >
                  <div className={cn(
                    "p-4 rounded-lg border transition-colors duration-500",
                    isDarkMode
                      ? 'border-indigo-500 bg-slate-800'
                      : 'border-indigo-200 bg-indigo-50'
                  )}>
                    <h4 className={cn(
                      "text-xs font-bold uppercase tracking-wider mb-2",
                      isDarkMode ? 'text-white/60' : 'text-indigo-700'
                    )}>📍 Location</h4>
                    <p className={cn(
                      "text-base font-semibold",
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    )}>
                      {selectedProject.location || 'General Area'}
                    </p>
                  </div>
                  <div className={cn(
                    "p-4 rounded-lg border transition-colors duration-500",
                    isDarkMode
                      ? 'border-green-500 bg-slate-800'
                      : 'border-rose-200 bg-rose-50'
                  )}>
                    <h4 className={cn(
                      "text-xs font-bold uppercase tracking-wider mb-2",
                      isDarkMode ? 'text-white/60' : 'text-rose-700'
                    )}>✓ Status</h4>
                    <span className={cn(
                      "inline-block px-3 py-1 rounded-lg text-sm font-semibold",
                      selectedProject.tag === 'Ongoing'
                        ? isDarkMode
                          ? 'bg-yellow-500/20 border border-yellow-400/50 text-yellow-300'
                          : 'bg-yellow-400/20 border border-yellow-500/50 text-yellow-700'
                        : isDarkMode
                          ? 'bg-green-500/20 border border-green-400/50 text-green-300'
                          : 'bg-green-400/20 border border-green-500/50 text-green-700'
                    )}>
                      {selectedProject.tag}
                    </span>
                  </div>
                </motion.div>

                {/* Scope & Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "w-1 h-6 rounded-full bg-gradient-to-b",
                      isDarkMode
                        ? 'from-indigo-400 to-teal-400'
                        : 'from-[#0099FF] to-[#CCFF00]'
                    )}></div>
                    <h4 className={cn(
                      "text-xl md:text-2xl font-black",
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    )}>Scope & Highlights</h4>
                  </div>
                  <p className={cn(
                    "text-base md:text-lg leading-relaxed p-4 rounded-lg border-l-4",
                    isDarkMode
                      ? 'bg-white/5 text-white/80 border-indigo-400'
                      : 'bg-indigo-25 text-gray-800 border-indigo-600'
                  )}>
                    {selectedProject.highlight}
                  </p>
                </motion.div>

                {/* Metrics */}
                {selectedProject.metrics && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "w-1 h-6 rounded-full bg-gradient-to-b",
                        isDarkMode
                          ? 'from-purple-500 to-pink-500'
                          : 'from-[#0099FF] to-[#CCFF00]'
                      )}></div>
                      <h4 className={cn(
                        "text-xl md:text-2xl font-black",
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      )}>Project Metrics</h4>
                    </div>
                    <div className={cn(
                      "grid grid-cols-3 gap-6 p-6 rounded-lg border",
                      isDarkMode
                        ? 'border-white/10 bg-gradient-to-r from-indigo-500/10 to-teal-500/10'
                        : 'border-indigo-200 bg-gradient-to-r from-[#0099FF]/10 to-[#CCFF00]/10'
                    )}>
                      <div className="text-center">
                        <div className={cn(
                          "text-3xl font-black",
                          isDarkMode ? 'text-indigo-400' : 'text-[#0099FF]'
                        )}>
                          {selectedProject.metrics.area}
                        </div>
                        <div className={cn(
                          "text-xs font-semibold mt-2 uppercase tracking-widest",
                          isDarkMode ? 'text-white/60' : 'text-gray-600'
                        )}>Area</div>
                      </div>
                      <div className={cn(
                        "text-center border-l border-r",
                        isDarkMode ? 'border-white/10' : 'border-gray-300'
                      )}>
                        <div className={cn(
                          "text-3xl font-black",
                          isDarkMode ? 'text-indigo-400' : 'text-[#0099FF]'
                        )}>
                          {selectedProject.metrics.duration}
                        </div>
                        <div className={cn(
                          "text-xs font-semibold mt-2 uppercase tracking-widest",
                          isDarkMode ? 'text-white/60' : 'text-gray-600'
                        )}>Duration</div>
                      </div>
                      <div className="text-center">
                        <div className={cn(
                          "text-3xl font-black",
                          isDarkMode ? 'text-purple-400' : 'text-[#0099FF]'
                        )}>
                          {selectedProject.metrics.value}
                        </div>
                        <div className={cn(
                          "text-xs font-semibold mt-2 uppercase tracking-widest",
                          isDarkMode ? 'text-white/60' : 'text-gray-600'
                        )}>Value</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t flex justify-end gap-3 transition-colors duration-500"
                  style={{
                    borderTopColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#e5e7eb'
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeModal}
                    className={cn(
                      "px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all duration-300",
                      isDarkMode
                        ? 'bg-[#6366f1] text-white hover:shadow-lg hover:shadow-[#6366f1]/30'
                        : 'bg-[#0099FF] text-white hover:shadow-lg hover:shadow-[#0099FF]/30'
                    )}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </ModalPortal>
      </div>
    </section>
  );
};

export default Projects;
