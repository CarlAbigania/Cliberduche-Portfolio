import React, { useState, useEffect } from 'react';

const Sidebar = ({ onCollapsedChange }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showTextContent, setShowTextContent] = useState(true);

  // Notify parent when collapse state changes
  const toggleCollapsed = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    
    // When expanding, delay text appearance for smooth transition
    if (!newState) {
      setShowTextContent(false);
      setTimeout(() => setShowTextContent(true), 150);
    } else {
      setShowTextContent(true);
    }
    
    onCollapsedChange?.(newState);
  };

  const navigationLinks = [
    { id: 'hero', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About Us', icon: 'fa-info-circle' },
    { id: 'services', label: 'Services', icon: 'fa-cogs' },
    { id: 'process', label: 'Process Overview', icon: 'fa-tasks' },
    { id: 'rfq', label: 'RFQ Workflow', icon: 'fa-file-alt' },
    { id: 'equipment', label: 'Equipment Fleet', icon: 'fa-truck' },
    { id: 'projects', label: 'Projects', icon: 'fa-project-diagram' },
    { id: 'team', label: 'Our Team', icon: 'fa-users' },
    { id: 'compliance', label: 'Compliance & Safety', icon: 'fa-shield-alt' },
    { id: 'resources', label: 'Resources & Partners', icon: 'fa-link' },
    { id: 'blog', label: 'News & Blog', icon: 'fa-newspaper' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  useEffect(() => {
    // Use Intersection Observer for accurate and performant section detection
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = navigationLinks.map(link => link.id);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navigationLinks]);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Don't set activeSection immediately - let scroll listener handle it
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 shadow-2xl shadow-black/10 dark:shadow-black/30 z-30 overflow-hidden flex flex-col transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}>
        {/* Toggle Button */}
        <div className={`flex items-center px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 transition-all duration-300 ${
          isCollapsed ? 'justify-center' : 'justify-between'
        }`}>
          {!isCollapsed && (
            <h3 className={`text-xs font-bold text-primary dark:text-secondary uppercase tracking-widest transition-all duration-300 ${
              showTextContent ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'
            }`}>
              Navigation
            </h3>
          )}
          <button
            onClick={toggleCollapsed}
            className={`p-2.5 rounded-lg transition-all duration-300 text-primary dark:text-secondary active:scale-95 ${
              isCollapsed 
                ? 'hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 dark:hover:bg-gray-800 hover:scale-110' 
                : 'hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 dark:hover:bg-gray-800 hover:scale-110 ml-auto'
            }`}
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'} text-sm transition-transform duration-300`}></i>
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent dark:scrollbar-thumb-primary/50 p-3">
          <ul className="space-y-0.5">
            {navigationLinks.map((link, index) => (
              <li key={link.id}>
                <button
                  onMouseEnter={() => setHoveredItem(link.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full relative flex items-center gap-3 px-3 py-2.5 h-10 text-sm rounded-lg transition-all duration-200 group ${isCollapsed ? 'justify-center' : ''} ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 dark:shadow-primary/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-gray-800/50 hover:text-primary dark:hover:text-secondary'
                  }`}
                  title={isCollapsed ? link.label : ''}
                >
                  {/* Left Active Indicator */}
                  {activeSection === link.id && !isCollapsed && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-r-lg animate-pulse" style={{animationDuration: '2s'}}></div>
                  )}
                  
                  <i className={`fas ${link.icon} w-5 flex-shrink-0 text-center transition-all duration-300 ${
                    activeSection === link.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}></i>
                  {!isCollapsed && (
                    <span className={`font-medium flex-1 text-left whitespace-nowrap overflow-hidden transition-all duration-300 ${
                      showTextContent ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'
                    }`}>{link.label}</span>
                  )}
                  
                  {/* Collapsed State Tooltip */}
                  {isCollapsed && hoveredItem === link.id && (
                    <div className="absolute left-24 bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-3 rounded-lg whitespace-nowrap z-50 pointer-events-none animate-fadeIn">
                      {link.label}
                      <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700"></div>
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 p-4 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            {isCollapsed && (
              <div className="text-primary dark:text-secondary transition-all duration-300">
                <i className="fas fa-building text-lg"></i>
              </div>
            )}
            {!isCollapsed && (
              <span className={`text-xs font-bold text-center text-gray-900 dark:text-white tracking-wide leading-tight transition-all duration-300 ${
                showTextContent ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'
              }`}>
                Cliberduche Corp.
              </span>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
