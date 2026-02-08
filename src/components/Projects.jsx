import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
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
  const itemsPerPage = 3;

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
    <section id="projects" className="py-12 md:py-16 bg-light dark:bg-gray-800/50">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h2 className="text-primary dark:text-blue-400 mb-4 scroll-fade-up" ref={titleRef}>Our Projects</h2>
          <p className="text-gray dark:text-gray-400 text-lg max-w-2xl mx-auto scroll-fade-up" ref={descRef}>Selected highlights across commercial and industrial developments</p>
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
                  : 'bg-white dark:bg-gray-800 text-dark dark:text-white border border-primary/20 dark:border-primary/30 hover:bg-primary hover:text-white hover:-translate-y-1'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" style={{ gridAutoRows: 'minmax(0, 1fr)' }}>
          {paginatedProjects.map((project, index) => (
            <div
              key={project.id}
              className="premium-card overflow-hidden flex flex-col min-h-[550px] hover:shadow-2xl transition-all duration-300 group"
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
                <p className="text-gray dark:text-gray-400 text-base mb-3 line-clamp-2">{project.desc}</p>
                <p className="text-primary dark:text-blue-400 text-sm font-semibold mb-4">{project.highlight}</p>
                <p className="text-dark dark:text-gray-400 font-semibold text-sm mb-6 flex-grow">
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
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-12 scroll-fade-up" ref={paginationRef}>
            <button
              onClick={(e) => {
                e.preventDefault();
                handlePreviousPage();
              }}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded text-sm font-semibold bg-white dark:bg-gray-800 text-dark dark:text-white border border-primary/20 dark:border-primary/30 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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
                    : 'bg-white dark:bg-gray-800 text-dark dark:text-white border border-primary/20 dark:border-primary/30 hover:bg-primary hover:text-white'
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
              className="px-4 py-2 rounded text-sm font-semibold bg-white dark:bg-gray-800 text-dark dark:text-white border border-primary/20 dark:border-primary/30 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center scroll-fade-up" ref={ctaRef}>
          <a
            href="#rfq"
            className="btn-primary inline-block text-lg px-10 py-4"
          >
            Start Your Project
          </a>
        </div>

        {/* Case Study Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleUp">
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white pr-8">{selectedProject.title}</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-dark dark:hover:text-white text-3xl font-light flex-shrink-0 transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="mb-8 rounded-xl overflow-hidden shadow-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <img 
                    src={selectedProject.img} 
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-96 object-contain"
                  />
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-mont font-bold text-dark dark:text-white text-xl md:text-2xl mb-4">Project Overview</h4>
                    <p className="text-gray dark:text-gray-400 text-lg leading-relaxed">{selectedProject.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-mont font-bold text-dark dark:text-white text-base mb-2">Location</h4>
                      <p className="text-gray dark:text-gray-400 text-base">{selectedProject.location || 'General Area'}</p>
                    </div>
                    <div>
                      <h4 className="font-mont font-bold text-dark dark:text-white text-base mb-2">Status</h4>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedProject.tag === 'Ongoing' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      }`}>
                        {selectedProject.tag}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mont font-bold text-dark dark:text-white text-xl md:text-2xl mb-4">Scope & Highlights</h4>
                    <p className="text-gray dark:text-gray-400 text-lg leading-relaxed">{selectedProject.highlight}</p>
                  </div>
                  {selectedProject.metrics && (
                    <div>
                      <h4 className="font-mont font-bold text-dark dark:text-white text-xl md:text-2xl mb-4">Project Metrics</h4>
                      <div className="grid grid-cols-3 gap-6 bg-light dark:bg-gray-700 p-6 rounded-lg">
                        <div className="text-center">
                          <div className="text-3xl font-mont font-bold text-primary dark:text-blue-400">{selectedProject.metrics.area}</div>
                          <div className="text-sm text-gray dark:text-gray-400 font-semibold mt-2">Area</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-mont font-bold text-primary dark:text-blue-400">{selectedProject.metrics.duration}</div>
                          <div className="text-sm text-gray dark:text-gray-400 font-semibold mt-2">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-mont font-bold text-primary dark:text-blue-400">{selectedProject.metrics.value}</div>
                          <div className="text-sm text-gray dark:text-gray-400 font-semibold mt-2">Value</div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-primary/20 dark:border-primary/30 rounded-lg p-6">
                    <h4 className="font-mont font-bold text-dark dark:text-white text-xl md:text-2xl mb-4">Case Study Details</h4>
                    <p className="text-gray dark:text-gray-400 text-base leading-relaxed">
                      This project demonstrates Cliberduche Corporation's expertise in {selectedProject.category.includes('ongoing') ? 'ongoing' : 'completed'} civil engineering works.
                      Our team utilized advanced equipment and followed strict safety protocols to deliver high-quality results within the specified timeline.
                      The project involved close collaboration with clients and stakeholders to ensure all requirements were met.
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-dark dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    Close
                  </button>
                  <a
                    href="#rfq"
                    onClick={closeModal}
                    className="btn-primary py-3"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
