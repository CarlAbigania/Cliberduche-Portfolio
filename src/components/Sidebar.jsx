import React, { useState, useEffect } from 'react';
import logo from '/images/logo.png';

const Sidebar = ({ isOpen, onClose }) => {
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
      onClose?.();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 shadow-2xl shadow-black/10 dark:shadow-black/30 transition-all duration-300 z-40 overflow-hidden flex flex-col ${
          isOpen ? 'w-64 translate-x-0' : 'w-20 translate-x-0'
        }`}
      >
        {/* Logo Section */}
        <div className={`relative bg-gradient-to-br from-primary via-primary to-accent transition-all duration-300 overflow-hidden ${
          isOpen ? 'py-6 px-4' : 'py-4 px-2'
        }`}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
          </div>

          {/* Logo Container */}
          <div className="relative flex items-center justify-center">
            <div className={`flex items-center justify-center rounded-lg transition-all duration-300 ${
              isOpen 
                ? 'bg-white/10 backdrop-blur-md p-3 ring-1 ring-white/20' 
                : 'bg-white/10 backdrop-blur-md p-2 ring-1 ring-white/20'
            }`}>
              <img 
                src={logo} 
                alt="Cliberduche Logo" 
                className={`transition-all duration-300 drop-shadow-lg ${
                  isOpen ? 'h-11 w-auto' : 'h-7 w-auto'
                }`}
              />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 dark:via-primary/40"></div>

        {/* Navigation Section */}
        <nav className={`flex-1 overflow-y-auto scrollbar-hide transition-all duration-300 ${
          isOpen ? 'p-4' : 'p-2'
        }`}>
          {isOpen && (
            <div className="mb-6">
              <h3 className="text-xs font-bold text-primary dark:text-secondary uppercase tracking-wider px-3 mb-4">
                Navigation
              </h3>
            </div>
          )}
          
          <ul className={`space-y-1 transition-all duration-300 ${isOpen ? '' : ''}`}>
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center rounded-lg transition-all duration-200 ${
                    isOpen 
                      ? 'gap-3 px-3 py-2.5 text-sm' 
                      : 'gap-0 px-2 py-2.5 justify-center'
                  } ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 dark:shadow-primary/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-gray-800/50 hover:text-primary dark:hover:text-secondary'
                  }`}
                  title={!isOpen ? link.label : ''}
                >
                  <i className={`fas ${link.icon} w-5 text-center transition-all duration-200 ${
                    activeSection === link.id ? 'scale-110' : ''
                  }`}></i>
                  {isOpen && (
                    <span className="font-medium flex-1 text-left">{link.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section */}
        <div className={`border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 transition-all duration-300 ${
          isOpen ? 'p-4' : 'p-2'
        }`}>
          <p className={`text-gray-500 dark:text-gray-400 transition-all duration-300 ${
            isOpen 
              ? 'text-xs text-center opacity-100' 
              : 'text-0 opacity-0 h-0'
          }`}>
            Cliberduche
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
