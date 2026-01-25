import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
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

  return (
    <>
      <header className={`bg-white dark:bg-gray-900 shadow-md shadow-primary/10 dark:shadow-primary/5 fixed top-0 z-50 transition-all duration-300 ${
        sidebarOpen ? 'left-64 right-0' : 'left-20 right-0'
      }`}>
        {/* Main Header */}
        <div className="max-w-container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left Section: Sidebar Toggle */}
          <div className="flex items-center gap-3">
            {/* Sidebar Toggle Button */}
            <button
              className="text-dark dark:text-white text-2xl hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              title="Toggle Sidebar"
            >
              <i className={`fas fa-${sidebarOpen ? 'times' : 'bars'}`}></i>
            </button>
          </div>

          {/* Right Section: Social Media, Dark Mode, Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Social Media Links */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://www.facebook.com/cliberduche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="https://www.twitter.com/cliberduche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
                title="Twitter"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/cliberduche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/cliberduche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://www.youtube.com/cliberduche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
                title="YouTube"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-dark dark:text-yellow-300 text-xl hover:text-primary dark:hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden text-dark dark:text-white text-2xl hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-ellipsis-v'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed top-[70px] left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transform transition-all duration-300 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="p-6 space-y-4 border-t border-gray-200 dark:border-gray-800">
            {/* Social Media Links (Mobile) */}
            <div>
              <h4 className="text-sm font-semibold text-dark dark:text-white mb-3">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a
                  href="https://www.twitter.com/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a
                  href="https://www.instagram.com/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a
                  href="https://www.youtube.com/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all"
                >
                  <i className="fab fa-youtube text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

Header.defaultProps = {
  sidebarOpen: false,
  setSidebarOpen: () => {},
};

export default Header;
