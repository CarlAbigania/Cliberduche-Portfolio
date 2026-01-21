import React, { useState } from 'react';

const ProjectMap = ({ projects, onProjectClick }) => {
  // Simple map with markers for project locations
  const locations = {
    'Calamba, Laguna': { x: 45, y: 55 },
    'Tanza, Cavite': { x: 35, y: 45 },
    'Silang, Cavite': { x: 30, y: 50 },
    'North Harbour, Manila': { x: 50, y: 40 },
    'Sta. Rosa, Laguna': { x: 40, y: 50 },
    'Dasmariñas, Cavite': { x: 32, y: 48 },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-mont font-semibold text-dark mb-4 text-center">Project Locations Map</h3>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1559628376-f2b5d2e5c6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Luzon Map"
          className="w-full h-64 object-cover rounded-lg"
        />
        {projects.map((project) => {
          const loc = locations[project.location];
          if (!loc) return null;
          return (
            <button
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md hover:w-6 hover:h-6 transition-all"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              title={project.title}
            ></button>
          );
        })}
      </div>
      <p className="text-center text-gray text-sm mt-2">Click on markers to view project details</p>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      img: 'images/36.png',
      tag: 'Ongoing',
      title: 'MDI - Mercator Holdings Project 2026',
      desc: 'Embankment, diversion road, retaining wall, drainage, pavement, and electrical post lights.',
      location: 'Calamba, Laguna',
      highlight: 'Scope: embankment + roadworks + drainage + electrical',
      category: ['ongoing', 'laguna'],
      metrics: { area: '50 hectares', duration: '12 months', value: '₱25M' },
    },
    {
      id: 2,
      img: 'images/43.png',
      tag: 'Ongoing',
      title: 'WDV Phase 4 Tanza, Cavite 2026',
      desc: 'Retaining wall and perimeter fence construction for residential development.',
      location: 'Tanza, Cavite',
      highlight: 'Scope: retaining wall + perimeter fence',
      category: ['ongoing', 'cavite'],
    },
    {
      id: 3,
      img: 'images/37.png',
      tag: 'Completed',
      title: 'Silang, Cavite Project 2021',
      desc: 'Leveling and compaction, drainage, road network, riprap, bridge, rectification.',
      location: 'Silang, Cavite',
      highlight: 'Area: 18.3 hectares',
      category: ['completed', 'cavite'],
    },
    {
      id: 4,
      img: 'images/42.png',
      tag: 'Ongoing',
      title: 'Pier 2 North Harbour 2026',
      desc: 'Reconstruction of bridge, pavement, lagoon, embankment, drainage, water & electrical works.',
      location: 'North Harbour, Manila',
      highlight: 'Scope: bridge + pavement + utilities',
      category: ['ongoing'],
    },
    {
      id: 5,
      img: 'images/39.png',
      tag: 'Completed',
      title: 'Residential Development Laguna 2023',
      desc: 'Land preparation and infrastructure development for residential project.',
      location: 'Sta. Rosa, Laguna',
      highlight: 'Site development & infrastructure',
      category: ['completed', 'laguna'],
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tag: 'Ongoing',
      title: 'Commercial Complex Cavite 2025',
      desc: 'Site development and civil works for commercial building.',
      location: 'Dasmariñas, Cavite',
      highlight: 'Civil works & site readiness',
      category: ['ongoing', 'cavite'],
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'completed', label: 'Completed' },
    { key: 'cavite', label: 'Cavite' },
    { key: 'laguna', label: 'Laguna' },
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
    <section id="projects" className="py-16 md:py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title mb-20">
          <h2 className="text-primary mb-4">Our Projects</h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">Selected highlights across commercial and industrial developments</p>
          <div className="section-title-underline"></div>
        </div>

        {/* Interactive Project Map */}
        <ProjectMap projects={projects} onProjectClick={handleProjectClick} />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="premium-card overflow-hidden"
            >
              <div
                className="h-64 bg-cover bg-center relative overflow-hidden group"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full mb-4 uppercase">
                  {project.tag}
                </span>
                <h3 className="font-mont font-bold text-lg md:text-xl text-dark mb-3">{project.title}</h3>
                <p className="text-gray text-base mb-3 line-clamp-2">{project.desc}</p>
                <p className="text-primary text-sm font-semibold mb-4">{project.highlight}</p>
                <p className="text-dark font-semibold text-sm mb-6">
                  <strong>Location:</strong> {project.location}
                </p>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="w-full btn-dark py-2 text-base"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-24">
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
                  <h3 className="text-3xl md:text-4xl font-mont font-bold text-dark pr-8">{selectedProject.title}</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-dark text-3xl font-light flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
                <div
                  className="h-80 bg-cover bg-center rounded-xl mb-8 shadow-md"
                  style={{ backgroundImage: `url(${selectedProject.img})` }}
                ></div>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-mont font-bold text-dark text-xl mb-3">Project Overview</h4>
                    <p className="text-gray text-lg leading-relaxed">{selectedProject.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-mont font-bold text-dark text-lg mb-2">Location</h4>
                      <p className="text-gray text-base">{selectedProject.location}</p>
                    </div>
                    <div>
                      <h4 className="font-mont font-bold text-dark text-lg mb-2">Status</h4>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedProject.tag === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {selectedProject.tag}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mont font-bold text-dark text-xl mb-3">Scope & Highlights</h4>
                    <p className="text-gray text-lg leading-relaxed">{selectedProject.highlight}</p>
                  </div>
                  {selectedProject.metrics && (
                    <div>
                      <h4 className="font-mont font-bold text-dark text-xl mb-6">Project Metrics</h4>
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
                    <h4 className="font-mont font-bold text-dark text-xl mb-3">Case Study Details</h4>
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
