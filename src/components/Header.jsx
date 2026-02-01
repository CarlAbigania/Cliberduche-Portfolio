import React, { useState, useEffect } from 'react';
import logo from '/images/logo2.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Track scroll for header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 h-16 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg shadow-primary/10 dark:shadow-primary/15'
          : 'bg-white/95 dark:bg-gray-900/95 shadow-md shadow-primary/5 dark:shadow-primary/10'
      } border-b border-gray-200 dark:border-gray-700 backdrop-blur-md`}>
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60"></div>
        
        {/* Subtle bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        {/* Main Header Content */}
        <div className="max-w-container mx-auto px-4 sm:px-6 h-full flex items-center justify-between relative z-10">
          
          {/* Left Section: Logo & Company Info */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative flex items-center justify-center">
              <img 
                src={logo} 
                alt="Cliberduche Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Company name (hidden on mobile) */}
            <div className="hidden md:flex flex-col justify-center">
              <h1 className="text-sm font-bold text-gray-900 dark:text-white leading-none">Cliberduche</h1>
              <p className="text-xs text-primary dark:text-blue-400 font-semibold">Corporation</p>
            </div>
          </div>

          {/* Right Section: CTA, Social, Dark Mode, Mobile Menu */}
          <div className="flex items-center gap-5">
            {/* Group 1: Download Button */}
            <div className="flex items-center gap-3">
              {/* Download Portfolio Button (Desktop) */}
              <a
                href="/Company Profile 2026.pdf"
                download="Cliberduche_Portfolio.pdf"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary dark:text-blue-400 dark:border-blue-400 text-sm font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                title="Download Portfolio PDF"
              >
                <i className="fas fa-download text-sm"></i>
                Download
              </a>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block w-px h-6 bg-primary/50 dark:bg-primary/70"></div>

            {/* Group 2: Social Media Links (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.facebook.com/cliberduche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/cliberduche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/cliberduche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block w-px h-6 bg-primary/50 dark:bg-primary/70"></div>

            {/* Group 3: Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-yellow-400 text-lg transition-all duration-300 hover:scale-110"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl transition-all duration-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 transform transition-all duration-300 backdrop-blur-md ${
            mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          }`}
        >
          <div className="p-6 space-y-4">
            {/* Mobile Download Portfolio Button */}
            <a
              href="/Company Profile 2026.pdf"
              download="Cliberduche_Portfolio.pdf"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-primary text-primary dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 text-center"
            >
              <i className="fas fa-download"></i>
              Download Portfolio
            </a>

            {/* Mobile Contact Button */}
            <button
              onClick={handleContactClick}
              className="w-full px-4 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 text-center"
            >
              Get in Touch
            </button>

            {/* Mobile Social Media Links */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.facebook.com/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110 text-lg"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110 text-lg"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110 text-lg"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {
  sidebarOpen: false,
  setSidebarOpen: () => {},
};

export default Header;
