import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';
import ModalPortal from './ModalPortal';
import { MdChevronLeft, MdChevronRight, MdClose, MdLocationOn, MdCheckCircle, MdInfoOutline } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const thumbnailScrollRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const featuredRef = useRef(null);
  const carouselRef = useRef(null);

  const projects = [
    {
      id: 1,
      img: 'images/mdi-project-2019.png',
      tag: 'Completed',
      title: 'MDI - Project 2019',
      desc: 'Comprehensive civil engineering and foundational infrastructure works.',
      location: 'Various Locations',
      highlight: 'Scope: Full-scale MDI project development and execution',
      category: ['completed'],
    },
    {
      id: 2,
      img: 'images/silang,cavite2021.png',
      tag: 'Completed',
      title: 'Silang, Cavite Project 2021',
      desc: 'Extensive leveling and compaction, drainage systems, road networks, riprap, and bridge rectification.',
      location: 'Silang, Cavite',
      highlight: 'Area: 18.3 hectares of extensive terrain modification',
      category: ['completed'],
    },
    {
      id: 3,
      img: 'images/cbd-building2019.png',
      tag: 'Completed',
      title: 'CBD Building Project 2019',
      desc: 'Premium commercial building development and structural construction.',
      location: 'Central Business District',
      highlight: 'Scope: High-rise CBD building project construction',
      category: ['completed'],
    },
    {
      id: 4,
      img: 'images/mdi-mercator-holdings2025p1.png',
      tag: 'Completed',
      title: 'MDI - Mercator Holding 2025',
      desc: 'Major embankment, diversion road construction, retaining walls, drainage, pavement, and infrastructure works.',
      location: 'Calamba, Laguna',
      highlight: 'Scope: Embankment + Roadworks + Drainage + Electrical setup',
      category: ['completed'],
      metrics: { area: '50 hectares', duration: '12 months', value: 'Prime Infrastructure' },
    },
    {
      id: 5,
      img: 'images/mdi-mercator-holdings.png',
      tag: 'Ongoing',
      title: 'MDI - Mercator Phase II',
      desc: 'Ongoing embankment, major diversion road expansion, retaining walls, comprehensive drainage, pavement, and electrical post lights installation.',
      location: 'Calamba, Laguna',
      highlight: 'Scope: Advanced Embankment + Roadworks + Utilities',
      category: ['ongoing'],
    },
    {
      id: 6,
      img: 'images/pier2-north-harbour.png',
      tag: 'Ongoing',
      title: 'Pier 2 North Harbour',
      desc: 'Critical reconstruction of port bridge, heavy-duty pavement, lagoon management, coastal embankment, sub-surface drainage, water & electrical works.',
      location: 'North Harbour, Manila',
      highlight: 'Scope: Structural Bridge + Port Pavement + Marine Utilities',
      category: ['ongoing'],
    },
    {
      id: 7,
      img: 'images/wdv-phas4-tanza,cavite.png',
      tag: 'Ongoing',
      title: 'WDV Phase 4 Tanza',
      desc: 'Extensive retaining wall and secure perimeter fence construction for massive residential development.',
      location: 'Tanza, Cavite',
      highlight: 'Scope: Structural Retaining Wall + Secure Perimeter Fence',
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

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header entrance
      gsap.from(headerRef.current.children, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Filter entrance
      if (filterRef.current) {
        gsap.from(filterRef.current, {
          scrollTrigger: {
            trigger: filterRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      // Featured Project entrance
      if (featuredRef.current) {
        gsap.from(featuredRef.current, {
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'back.out(1.1)',
        });
      }

      // Carousel entrance
      if (carouselRef.current) {
        gsap.from(carouselRef.current, {
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter, selectedProject]); // Re-run when layout elements might change

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const scrollThumbnails = (direction) => {
    if (thumbnailScrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 600 : 300;
      thumbnailScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`relative py-24 md:py-32 lg:py-40 overflow-hidden transition-colors duration-700 ${
        isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-20 transform translate-x-1/3 -translate-y-1/3 ${isDarkMode ? 'bg-indigo-600' : 'bg-blue-300'}`} />
        <div className={`absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[150px] opacity-20 transform -translate-x-1/3 translate-y-1/3 ${isDarkMode ? 'bg-purple-600' : 'bg-cyan-300'}`} />
        <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${isDarkMode ? 'opacity-[0.04]' : 'opacity-[0.03]'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
            <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>OUR PORTFOLIO</span>
            <div className={`w-12 h-1 bg-gradient-to-l rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured <br className="hidden sm:block" />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-400 to-indigo-400' : 'from-blue-600 via-cyan-500 to-blue-600'}`}>
               Projects
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Explore our track record of successful land development and civil engineering milestones.
          </p>
        </div>

        {/* Filter Buttons */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.key;
            const count = filter.key === 'all' ? projects.length : projects.filter(p => p.category.includes(filter.key)).length;
            
            return (
              <button
                key={filter.key}
                onClick={() => {
                  setActiveFilter(filter.key);
                  const newFiltered = filter.key === 'all' ? projects : projects.filter(p => p.category.includes(filter.key));
                  setSelectedProject(newFiltered[0] || projects[0]);
                }}
                className={`group relative px-6 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden ${
                  isActive
                    ? isDarkMode
                      ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-400 ring-offset-2 ring-offset-[#030712]'
                      : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-500 ring-offset-2 ring-offset-[#f8fafc]'
                    : isDarkMode
                      ? 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-300 shadow-sm'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {filter.label} <span className={`px-2 py-0.5 rounded-full text-[10px] ${isActive ? (isDarkMode ? 'bg-white/20' : 'bg-white/30') : (isDarkMode ? 'bg-white/10' : 'bg-slate-100')}`}>{count}</span>
                </span>
                {isActive && (
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[custom-shimmer_2s_infinite]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Project Spotlight */}
        {selectedProject && (
          <div ref={featuredRef} className="mb-20">
            <div className={`relative rounded-[2.5rem] overflow-hidden border backdrop-blur-xl group transition-all duration-700 ${
              isDarkMode ? 'bg-white/5 border-white/10 shadow-2xl shadow-black/50' : 'bg-white/80 border-gray-200 shadow-2xl shadow-blue-900/5'
            }`}>
              <div className="grid lg:grid-cols-12 gap-0 min-h-[500px] lg:min-h-[600px]">
                
                {/* Featured Image */}
                <div className="lg:col-span-7 relative overflow-hidden h-[350px] lg:h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${selectedProject.img})` }}
                  />
                  <div className={`absolute inset-0 ${
                    isDarkMode 
                      ? 'bg-gradient-to-t lg:bg-gradient-to-r from-[#030712] via-[#030712]/50 lg:via-[#030712]/20 to-transparent' 
                      : 'bg-gradient-to-t lg:bg-gradient-to-r from-white via-white/50 lg:via-white/20 to-transparent'
                  }`} />
                  
                  {/* Status Badge Over Image */}
                  <div className="absolute top-6 left-6 lg:top-8 lg:left-8 flex gap-3">
                     <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm ${
                        selectedProject.tag === 'Ongoing'
                          ? isDarkMode 
                              ? 'bg-yellow-500/20 border-yellow-400/50 text-yellow-300' 
                              : 'bg-yellow-100/90 border-yellow-400 text-yellow-800'
                          : isDarkMode 
                              ? 'bg-green-500/20 border-green-400/50 text-green-300' 
                              : 'bg-green-100/90 border-green-400 text-green-800'
                      }`}>
                        {selectedProject.tag}
                      </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10">
                  
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${isDarkMode ? 'from-indigo-400 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
                    <span className={`text-sm font-bold uppercase tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>
                      Featured Work
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-[1.1] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {selectedProject.title}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed mb-8 font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {selectedProject.desc}
                  </p>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-start gap-3">
                       <MdCheckCircle className={`text-xl mt-0.5 shrink-0 ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`} />
                       <p className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                         {selectedProject.highlight}
                       </p>
                    </div>
                    {selectedProject.location && (
                      <div className="flex items-center gap-3">
                         <MdLocationOn className={`text-xl shrink-0 ${isDarkMode ? 'text-purple-400' : 'text-cyan-600'}`} />
                         <p className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                           {selectedProject.location}
                         </p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleProjectClick(selectedProject)}
                    className={`group/btn relative w-fit px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm overflow-hidden transition-all duration-300 flex items-center gap-3 ${
                       isDarkMode 
                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1' 
                        : 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1'
                    }`}
                  >
                    <span className="relative z-10">Explore Case Study</span>
                    <MdChevronRight className="relative z-10 text-xl group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                  </button>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Carousel */}
        <div ref={carouselRef} className="relative pt-10 border-t border-white/5">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className={`text-xl sm:text-2xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Project Gallery
              </h3>
              <p className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                {filteredProjects.length} {activeFilter === 'all' ? 'Total' : activeFilter} Projects
              </p>
            </div>
            
            {/* Navigation Arrows (Desktop) */}
            <div className="hidden md:flex gap-3">
              <button 
                onClick={() => scrollThumbnails('left')}
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20' : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <MdChevronLeft className="text-2xl" />
              </button>
              <button 
                onClick={() => scrollThumbnails('right')}
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20' : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <MdChevronRight className="text-2xl" />
              </button>
            </div>
          </div>

          <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
            {/* Left fade mask */}
            <div className={`absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 pointer-events-none ${
              isDarkMode ? 'bg-gradient-to-r from-[#030712] to-transparent' : 'bg-gradient-to-r from-[#f8fafc] to-transparent'
            }`} />

            <div
              ref={thumbnailScrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-8 pt-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredProjects.map((project) => {
                const isSelected = selectedProject?.id === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`relative flex-shrink-0 w-48 sm:w-64 aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer snap-start transition-all duration-500 group ${
                      isSelected 
                        ? (isDarkMode ? 'ring-2 ring-indigo-500 ring-offset-4 ring-offset-[#030712] shadow-2xl shadow-indigo-500/30' : 'ring-2 ring-blue-500 ring-offset-4 ring-offset-[#f8fafc] shadow-2xl shadow-blue-500/30')
                        : 'hover:-translate-y-2 hover:shadow-xl ' + (isDarkMode ? 'hover:shadow-black/50' : 'hover:shadow-blue-900/10')
                    }`}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      isSelected 
                        ? (isDarkMode ? 'bg-indigo-900/40 mix-blend-multiply' : 'bg-blue-900/20 mix-blend-multiply')
                        : 'bg-black/40 group-hover:bg-black/20'
                    }`} />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                      <div className={`transition-all duration-500 ${isSelected ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                         <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 ${
                            project.tag === 'Ongoing'
                              ? 'bg-yellow-500/80 text-yellow-50 backdrop-blur-sm'
                              : 'bg-green-500/80 text-green-50 backdrop-blur-sm'
                          }`}>
                            {project.tag}
                          </span>
                        <h4 className="text-sm sm:text-base font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right fade mask */}
            <div className={`absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 pointer-events-none ${
              isDarkMode ? 'bg-gradient-to-l from-[#030712] to-transparent' : 'bg-gradient-to-l from-[#f8fafc] to-transparent'
            }`} />
          </div>
        </div>

        {/* Enhanced Case Study Modal */}
        <ModalPortal isOpen={showModal && !!selectedProject}>
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
             {/* Backdrop */}
             <div 
               className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-[fadeIn_0.3s_ease-out]" 
               onClick={closeModal}
             />
             
             {/* Modal Content */}
             <div className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[2rem] overflow-hidden shadow-2xl animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)] ${
                isDarkMode ? 'bg-[#0f172a] border border-white/10' : 'bg-white border border-slate-200'
             }`}>
                
                {/* Close Button - Floating */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all border border-white/10"
                >
                  <MdClose className="text-xl" />
                </button>

                {/* Modal Header Image */}
                <div className="relative h-48 sm:h-64 lg:h-80 shrink-0 bg-slate-900 border-b border-white/10">
                  <img 
                    src={selectedProject?.img} 
                    alt={selectedProject?.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:px-12">
                     <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md border ${
                        selectedProject?.tag === 'Ongoing'
                          ? 'bg-yellow-500/20 border-yellow-400/50 text-yellow-300'
                          : 'bg-green-500/20 border-green-400/50 text-green-300'
                      }`}>
                        {selectedProject?.tag}
                      </span>
                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                        {selectedProject?.title}
                     </h2>
                  </div>
                </div>

                {/* Modal Scrollable Body */}
                <div className={`flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12 scrollbar-thin ${
                  isDarkMode ? 'scrollbar-thumb-white/10 scrollbar-track-transparent' : 'scrollbar-thumb-slate-200 scrollbar-track-transparent'
                }`}>
                  
                  {/* Two Column Layout for Body */}
                  <div className="grid lg:grid-cols-3 gap-10">
                     
                     {/* Left Content (Overview & Scope) */}
                     <div className="lg:col-span-2 space-y-10">
                        <section>
                           <div className="flex items-center gap-3 mb-4">
                             <MdInfoOutline className={`text-2xl ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`} />
                             <h4 className={`text-xl sm:text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Project Overview</h4>
                           </div>
                           <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                             {selectedProject?.desc}
                           </p>
                        </section>

                        <section>
                           <div className="flex items-center gap-3 mb-4">
                             <MdCheckCircle className={`text-2xl ${isDarkMode ? 'text-teal-400' : 'text-cyan-600'}`} />
                             <h4 className={`text-xl sm:text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Scope of Work</h4>
                           </div>
                           <div className={`p-6 rounded-2xl border ${
                             isDarkMode ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                           }`}>
                             <p className="text-base sm:text-lg font-medium leading-relaxed">
                               {selectedProject?.highlight}
                             </p>
                           </div>
                        </section>
                     </div>

                     {/* Right Sidebar (Details & Metrics) */}
                     <div className="space-y-6">
                        {/* Location Card */}
                        <div className={`p-6 rounded-2xl border ${
                           isDarkMode ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
                        }`}>
                           <h5 className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>Location</h5>
                           <p className={`text-lg font-bold flex items-start gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                              <MdLocationOn className="text-xl mt-0.5 shrink-0" />
                              {selectedProject?.location || 'General Area'}
                           </p>
                        </div>

                        {/* Metrics Cards */}
                        {selectedProject?.metrics && Object.entries(selectedProject.metrics).map(([key, value]) => (
                           <div key={key} className={`p-6 rounded-2xl border flex flex-col justify-center items-center text-center ${
                             isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                           }`}>
                              <h5 className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{key}</h5>
                              <p className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{value}</p>
                           </div>
                        ))}
                     </div>
                  </div>
                </div>

             </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
            @keyframes custom-shimmer {
              100% { transform: translateX(100%); }
            }
          `}} />
        </ModalPortal>

      </div>
    </section>
  );
};

export default Projects;
