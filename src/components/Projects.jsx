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
    <section id="projects" className="py-16 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-mont font-semibold text-primary mb-2">Our Projects</h2>
          <p className="text-gray">Selected highlights across commercial and industrial developments</p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        {/* Interactive Project Map */}
        <ProjectMap projects={projects} onProjectClick={handleProjectClick} />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'bg-primary text-white border border-primary'
                  : 'bg-white text-dark border border-primary/20 hover:bg-primary hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md border border-primary/10 overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <div className="p-5">
                <span className="inline-block px-2 py-1 bg-secondary text-primary text-xs font-semibold rounded mb-2">
                  {project.tag}
                </span>
                <h3 className="font-mont font-semibold text-lg text-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.desc}</p>
                <p className="text-primary text-sm font-medium mb-2">{project.highlight}</p>
                <p className="text-dark font-medium text-sm mb-3">
                  <strong>Location:</strong> {project.location}
                </p>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-primary text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-mont font-semibold mb-4">Have a Similar Project?</h3>
            <p className="text-white/90 mb-6">Let's discuss how we can bring your vision to life with our proven expertise</p>
            <a
              href="#rfq"
              className="bg-secondary text-primary font-semibold py-3 px-8 rounded shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all inline-block"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* Case Study Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-mont font-semibold text-dark">{selectedProject.title}</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-dark text-2xl"
                  >
                    &times;
                  </button>
                </div>
                <div
                  className="h-64 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: `url(${selectedProject.img})` }}
                ></div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-dark">Project Overview</h4>
                    <p className="text-gray">{selectedProject.desc}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Location</h4>
                    <p className="text-gray">{selectedProject.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Scope & Highlights</h4>
                    <p className="text-gray">{selectedProject.highlight}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Status</h4>
                    <span className={`inline-block px-2 py-1 rounded text-sm font-medium ${
                      selectedProject.tag === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {selectedProject.tag}
                    </span>
                  </div>
                  {selectedProject.metrics && (
                    <div>
                      <h4 className="font-semibold text-dark">Project Metrics</h4>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{selectedProject.metrics.area}</div>
                          <div className="text-sm text-gray">Area</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{selectedProject.metrics.duration}</div>
                          <div className="text-sm text-gray">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{selectedProject.metrics.value}</div>
                          <div className="text-sm text-gray">Value</div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-dark">Case Study Details</h4>
                    <p className="text-gray">
                      This project demonstrates Cliberduche Corporation's expertise in {selectedProject.category.includes('ongoing') ? 'ongoing' : 'completed'} civil engineering works.
                      Our team utilized advanced equipment and followed strict safety protocols to deliver high-quality results within the specified timeline.
                      The project involved close collaboration with clients and stakeholders to ensure all requirements were met.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors"
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
