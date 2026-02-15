import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';
import ModalPortal from './ModalPortal';

const Projects = () => {
  const { isDarkMode } = useTheme();
  // Refs for animations
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const descRef = useScrollAnimation({ threshold: 0.2 });
  const filtersRef = useScrollAnimation({ threshold: 0.2 });
  const paginationRef = useScrollAnimation({ threshold: 0.2 });
  const ctaRef = useScrollAnimation({ threshold: 0.2 });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Handle responsive items per page
  React.useEffect(() => {
    const handleResize = () => {
      // Desktop (>= 1024px): 3 items per page
      // Tablet (640px - 1023px): 4 items per page
      // Mobile (< 640px): 3 items per page
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset page when filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

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

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

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
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 md:py-16 bg-white dark:bg-slate-900 relative overflow-hidden" style={{ position: 'relative', zIndex: 15 }}>
      {/* Decorative background element - bottom-left */}
      <div className="absolute bottom-0 -left-5 w-[450px] h-48 bg-amber-100 dark:bg-amber-950 -skew-x-12 pointer-events-none" />
      <div className="max-w-container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h2 className="text-primary dark:text-blue-400 mb-4 scroll-fade-up" ref={titleRef}>Our Projects</h2>
          <p className="text-gray dark:text-gray-100 text-lg max-w-2xl mx-auto scroll-fade-up" ref={descRef}>Selected highlights across commercial and industrial developments</p>
          <div className="section-title-underline"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 scroll-fade-up" ref={filtersRef}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => {
                setActiveFilter(filter.key);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-primary to-accent text-white border border-primary shadow-lg shadow-primary/30 hover:shadow-secondary/50'
                  : 'bg-white dark:bg-slate-800/80 text-dark dark:text-white border border-primary/20 dark:border-slate-700/60 hover:bg-primary hover:text-white hover:-translate-y-1 dark:hover:bg-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridAutoRows: 'minmax(0, 1fr)' }}>
          {paginatedProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800/80 overflow-hidden flex flex-col min-h-[550px] rounded-xl shadow-lg dark:shadow-xl dark:shadow-black/50 dark:border dark:border-slate-700/60 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-black/60 transition-all duration-300 group"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <div
                className="h-48 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20 group-hover:from-black/20 group-hover:via-black/20 group-hover:to-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white font-mont font-bold text-sm bg-black/50 px-4 py-2 rounded-lg">Click to view details</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 transition-all duration-300 ${
                  project.tag === 'Ongoing' 
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' 
                    : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                }`}>
                  {project.tag}
                </span>
                <h3 className="text-lg md:text-xl font-mont font-bold text-dark dark:text-white mb-3 group-hover:text-secondary transition-colors">{project.title}</h3>
                <p className="text-gray dark:text-gray-100 text-base mb-3 line-clamp-2">{project.desc}</p>
                <p className="text-primary dark:text-green-400 text-sm font-semibold mb-4">{project.highlight}</p>
                <p className="text-dark dark:text-gray-100 font-semibold text-sm mb-6 flex-grow">
                  <strong>Location:</strong> {project.location || 'General Area'}
                </p>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="w-full btn-dark py-2 text-base mt-auto"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 scroll-fade-up mt-12" ref={paginationRef}>
            <button
              onClick={(e) => {
                e.preventDefault();
                handlePreviousPage();
              }}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded text-sm font-semibold bg-white dark:bg-slate-800/80 text-dark dark:text-white border border-primary/20 dark:border-slate-700/60 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
                className={`px-3 py-2 rounded text-sm font-semibold transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-primary to-accent text-white border border-primary shadow-lg shadow-primary/30'
                    : 'bg-white dark:bg-slate-800/80 text-dark dark:text-white border border-primary/20 dark:border-slate-700/60 hover:bg-primary hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={(e) => {
                e.preventDefault();
                handleNextPage();
              }}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded text-sm font-semibold bg-white dark:bg-slate-800/80 text-dark dark:text-white border border-primary/20 dark:border-slate-700/60 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
            </button>
          </div>

        {/* Case Study Modal */}
        <ModalPortal isOpen={showModal && !!selectedProject}>
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-slate-800/95 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleUp border border-primary/10 dark:border-slate-700/60">
              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-slate-700/50 dark:to-slate-700/30 border-b border-primary/10 dark:border-slate-700/60 p-8 md:p-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white">{selectedProject?.title}</h3>
                    <p className="text-primary dark:text-green-400 font-semibold text-sm mt-2">{selectedProject?.highlight}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-primary dark:text-green-400 hover:bg-primary/10 dark:hover:bg-green-400/10 hover:text-primary dark:hover:text-green-400 text-3xl font-light flex-shrink-0 transition-all w-10 h-10 flex items-center justify-center rounded-lg"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Project Image */}
                <div className="mb-10 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border border-primary/5 dark:border-primary/10">
                  <img 
                    src={selectedProject?.img} 
                    alt={selectedProject?.title}
                    className="w-full h-auto max-h-96 object-contain p-4"
                  />
                </div>

                <div className="space-y-8">
                  {/* Overview Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                      <h4 className="font-mont font-bold text-dark dark:text-white text-xl md:text-2xl">Project Overview</h4>
                    </div>
                    <p className="text-gray dark:text-gray-100 text-lg leading-relaxed bg-white/40 dark:bg-slate-700/30 p-4 rounded-lg">{selectedProject?.desc}</p>
                  </div>

                  {/* Location & Status */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-light dark:bg-slate-700/40 p-4 rounded-lg border border-primary/10 dark:border-slate-700/60">
                      <h4 className="font-mont font-bold text-dark dark:text-white text-sm uppercase tracking-wider mb-2">📍 Location</h4>
                      <p className="text-gray dark:text-gray-100 text-base font-semibold">{selectedProject?.location || 'General Area'}</p>
                    </div>
                    <div className="bg-light dark:bg-slate-700/40 p-4 rounded-lg border border-primary/10 dark:border-slate-700/60">
                      <h4 className="font-mont font-bold text-dark dark:text-white text-sm uppercase tracking-wider mb-2">✓ Status</h4>
                      <span className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                        selectedProject?.tag === 'Ongoing' ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700' : 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700'
                      }`}>
                        {selectedProject?.tag}
                      </span>
                    </div>
                  </div>

                  {/* Scope & Highlights */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                      <h4 className="font-mont font-bold text-dark dark:text-white text-xl md:text-2xl">Scope & Highlights</h4>
                    </div>
                    <p className="text-gray dark:text-gray-100 text-lg leading-relaxed bg-white/40 dark:bg-slate-700/30 p-4 rounded-lg border-l-4 border-primary dark:border-blue-400">{selectedProject?.highlight}</p>
                  </div>

                  {/* Metrics */}
                  {selectedProject?.metrics && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                        <h4 className="font-mont font-bold text-dark dark:text-white text-xl md:text-2xl">Project Metrics</h4>
                      </div>
                      <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-slate-700/30 dark:to-slate-700/20 p-6 rounded-lg border border-primary/10 dark:border-slate-700/60">
                        <div className="text-center">
                          <div className="text-3xl font-mont font-bold text-primary dark:text-blue-400">{selectedProject?.metrics?.area}</div>
                          <div className="text-xs text-gray dark:text-gray-100 font-semibold mt-2 uppercase tracking-widest">Area</div>
                        </div>
                        <div className="text-center border-l border-r border-primary/20 dark:border-slate-700/60">
                          <div className="text-3xl font-mont font-bold text-primary dark:text-blue-400">{selectedProject?.metrics?.duration}</div>
                          <div className="text-xs text-gray dark:text-gray-100 font-semibold mt-2 uppercase tracking-widest">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-mont font-bold text-primary dark:text-blue-400">{selectedProject?.metrics?.value}</div>
                          <div className="text-xs text-gray dark:text-gray-100 font-semibold mt-2 uppercase tracking-widest">Value</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Case Study Details */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-slate-700/30 dark:to-slate-700/20 border-l-4 border-primary dark:border-blue-400 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">📋</span>
                      <h4 className="font-mont font-bold text-dark dark:text-white text-lg">Case Study Details</h4>
                    </div>
                    <p className="text-gray dark:text-gray-100 text-base leading-relaxed">
                      This project demonstrates Cliberduche Corporation's expertise in {selectedProject?.category?.includes('ongoing') ? 'ongoing' : 'completed'} civil engineering works.
                      Our team utilized advanced equipment and followed strict safety protocols to deliver high-quality results within the specified timeline.
                      The project involved close collaboration with clients and stakeholders to ensure all requirements were met.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-10 pt-8 border-t border-primary/10 dark:border-slate-700/60 flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalPortal>
      </div>
    </section>
  );
};

export default Projects;
