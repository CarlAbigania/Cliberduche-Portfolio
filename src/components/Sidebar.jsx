import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');

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
    { id: 'trust', label: 'Trust & Social Proof', icon: 'fa-star' },
    { id: 'resources', label: 'Resources & Partners', icon: 'fa-link' },
    { id: 'blog', label: 'News & Blog', icon: 'fa-newspaper' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map(link => link.id);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= window.scrollY + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 shadow-2xl shadow-black/10 dark:shadow-black/30 z-30 overflow-hidden flex flex-col">
        {/* Navigation Section */}
        <nav className="flex-1 overflow-y-auto scrollbar-hide p-4">
          <div className="mb-6">
            <h3 className="text-xs font-bold text-primary dark:text-secondary uppercase tracking-wider px-3 mb-4">
              Navigation
            </h3>
          </div>
          
          <ul className="space-y-1">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 dark:shadow-primary/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-gray-800/50 hover:text-primary dark:hover:text-secondary'
                  }`}
                >
                  <i className={`fas ${link.icon} w-5 text-center transition-all duration-200 ${
                    activeSection === link.id ? 'scale-110' : ''
                  }`}></i>
                  <span className="font-medium flex-1 text-left">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center opacity-100">
            Cliberduche
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
