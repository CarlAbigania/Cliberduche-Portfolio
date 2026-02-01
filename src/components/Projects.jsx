import React, { useState } from 'react';

const Projects = () => {
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
    <section id="projects" className="py-12 md:py-16 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h2 className="text-primary mb-4">Our Projects</h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">Selected highlights across commercial and industrial developments</p>
          <div className="section-title-underline"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => {
                setActiveFilter(filter.key);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary text-white border border-primary shadow-lg shadow-primary/30'
                  : 'bg-white text-dark border border-primary/20 hover:bg-primary hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" style={{ gridAutoRows: 'minmax(0, 1fr)' }}>
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="premium-card overflow-hidden flex flex-col min-h-[550px]"
            >
              <div
                className="h-48 bg-cover bg-center relative overflow-hidden group"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block w-fit px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full mb-4 uppercase">
                  {project.tag}
                </span>
                <h3 className="text-lg md:text-xl font-mont font-bold text-dark mb-3">{project.title}</h3>
                <p className="text-gray text-base mb-3 line-clamp-2">{project.desc}</p>
                <p className="text-primary text-sm font-semibold mb-4">{project.highlight}</p>
                <p className="text-dark font-semibold text-sm mb-6 flex-grow">
                  <strong>Location:</strong> {project.location}
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
          <div className="flex justify-center items-center gap-2 mb-12">
            <button
              onClick={(e) => {
                e.preventDefault();
                handlePreviousPage();
              }}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded text-sm font-semibold bg-white text-dark border border-primary/20 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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
                    ? 'bg-primary text-white border border-primary shadow-lg shadow-primary/30'
                    : 'bg-white text-dark border border-primary/20 hover:bg-primary hover:text-white'
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
              className="px-4 py-2 rounded text-sm font-semibold bg-white text-dark border border-primary/20 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="#rfq"
            className="btn-primary inline-block text-lg px-10 py-4"
          >
            Start Your Project
          </a>
        </div>

        {/* Case Study Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark pr-8">{selectedProject.title}</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-dark text-3xl font-light flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
                <div className="mb-8 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                  <img 
                    src={selectedProject.img} 
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-96 object-contain"
                  />
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-mont font-bold text-dark text-xl md:text-2xl mb-4">Project Overview</h4>
                    <p className="text-gray text-lg leading-relaxed">{selectedProject.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-mont font-bold text-dark text-base mb-2">Location</h4>
                      <p className="text-gray text-base">{selectedProject.location}</p>
                    </div>
                    <div>
                      <h4 className="font-mont font-bold text-dark text-base mb-2">Status</h4>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedProject.tag === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {selectedProject.tag}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mont font-bold text-dark text-xl md:text-2xl mb-4">Scope & Highlights</h4>
                    <p className="text-gray text-lg leading-relaxed">{selectedProject.highlight}</p>
                  </div>
                  {selectedProject.metrics && (
                    <div>
                      <h4 className="font-mont font-bold text-dark text-xl md:text-2xl mb-4">Project Metrics</h4>
                      <div className="grid grid-cols-3 gap-6 bg-light p-6 rounded-lg">
                        <div className="text-center">
                          <div className="text-3xl font-mont font-bold text-primary">{selectedProject.metrics.area}</div>
                          <div className="text-sm text-gray font-semibold mt-2">Area</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-mont font-bold text-primary">{selectedProject.metrics.duration}</div>
                          <div className="text-sm text-gray font-semibold mt-2">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-mont font-bold text-primary">{selectedProject.metrics.value}</div>
                          <div className="text-sm text-gray font-semibold mt-2">Value</div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bg-blue-50 border border-primary/20 rounded-lg p-6">
                    <h4 className="font-mont font-bold text-dark text-xl md:text-2xl mb-4">Case Study Details</h4>
                    <p className="text-gray text-base leading-relaxed">
                      This project demonstrates Cliberduche Corporation's expertise in {selectedProject.category.includes('ongoing') ? 'ongoing' : 'completed'} civil engineering works.
                      Our team utilized advanced equipment and followed strict safety protocols to deliver high-quality results within the specified timeline.
                      The project involved close collaboration with clients and stakeholders to ensure all requirements were met.
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="btn-dark py-3"
                  >
                    Close
                  </button>
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
