import React, { useState, useEffect } from 'react';

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
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 z-40 w-64 overflow-y-auto pt-20 md:pt-24 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <nav className="p-6">
          <h3 className="text-lg font-bold text-dark dark:text-white mb-6 px-3">
            Navigation
          </h3>
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-primary text-white shadow-md'
                      : 'text-dark dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-gray-800'
                  }`}
                >
                  <i className={`fas ${link.icon} w-5 text-center`}></i>
                  <span className="font-medium text-sm">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
