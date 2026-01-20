import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-mont font-semibold text-primary mb-2">Our Projects</h2>
          <p className="text-gray">Selected highlights across commercial and industrial developments</p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

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
                <p className="text-dark font-medium text-sm">
                  <strong>Location:</strong> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
