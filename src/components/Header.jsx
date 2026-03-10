import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import logo from '/images/logo2.png';
import { MdDownload, MdLightMode, MdNightlight, MdMenu, MdClose } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  // Track scroll for header effect
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled past hero section (full viewport height)
      setScrolled(window.scrollY > window.innerHeight);
      // Footer visibility logic
      const footer = document.getElementById('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        // If the footer is at least 50% visible in the viewport
        setHideHeader(rect.top < window.innerHeight && rect.bottom > window.innerHeight / 2);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    // Use SmoothScroll custom event for scroll-to-top
    window.dispatchEvent(
      new CustomEvent('smooth-scroll-set-target', { detail: 0 })
    );
    // Fallback for mobile: scroll directly and close menu if open
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }, 0);
  };

  // Check if in hero section (not scrolled) in light mode
  const isHeroLightMode = !scrolled && !isDarkMode;

  return (
    <>
      {!hideHeader && (
        <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 h-16 ${
          scrolled || mobileMenuOpen
            ? 'bg-white dark:bg-slate-900 shadow-lg dark:shadow-xl dark:shadow-black/30' 
            : 'bg-transparent'
        }`}>
          {/* Main Header Content */}
          <div className="max-w-container mx-auto px-4 sm:px-6 h-full flex items-center justify-between relative z-10">
            
            {/* Left Section: Logo & Company Info */}
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-4 min-w-0 cursor-pointer hover:opacity-80 transition-opacity duration-300 bg-transparent border-none p-0"
              title="Back to top"
            >
              <div className="relative flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Cliberduche Logo" 
                  className="h-12 w-auto"
                />
              </div>
              
              {/* Company name (hidden on mobile) */}
              <div className="hidden md:flex flex-col justify-center">
                <h1 className={`text-sm font-bold leading-none ${isHeroLightMode ? 'text-white' : 'text-gray-900 dark:text-white'}`}>Cliberduche</h1>
                <p className={`text-xs font-semibold ${isHeroLightMode ? 'text-blue-300' : 'text-primary dark:text-blue-400'}`}>Corporation</p>
              </div>
            </button>

            {/* Right Section: CTA, Social, Dark Mode, Mobile Menu */}
            <div className="flex items-center gap-5">
              {/* Group 1: Download Button */}
              <div className="flex items-center gap-3">
                {/* Download Portfolio Button (Desktop) */}
                <a
                  href="/Company Profile 2026.pdf"
                  download="Cliberduche_Portfolio.pdf"
                  className={`hidden md:inline-flex items-center gap-2 px-4 py-2 border-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isHeroLightMode
                      ? 'border-blue-300 text-blue-300 hover:bg-blue-400 hover:text-white'
                      : 'border-primary text-primary dark:text-blue-400 dark:border-blue-400 hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-white'
                  }`}
                  title="Download Portfolio PDF"
                >
                  <MdDownload className="text-sm" />
                  Download
                </a>
              </div>

              {/* Divider 1 */}
              <div className={`hidden md:block w-px h-6 ${isHeroLightMode ? 'bg-white/30' : 'bg-black/30 dark:bg-slate-500'}`}></div>

              {/* Group 2: Social Media Links (Desktop) */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="https://www.facebook.com/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${isHeroLightMode ? 'text-blue-300 hover:text-white' : 'text-gray-600 dark:text-white hover:text-primary dark:hover:text-blue-400'}`}
                  title="Facebook"
                >
                  <FaFacebook className="text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${isHeroLightMode ? 'text-blue-300 hover:text-white' : 'text-gray-600 dark:text-white hover:text-primary dark:hover:text-blue-400'}`}
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-sm" />
                </a>
                <a
                  href="https://www.instagram.com/cliberduche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${isHeroLightMode ? 'text-blue-300 hover:text-white' : 'text-gray-600 dark:text-white hover:text-primary dark:hover:text-blue-400'}`}
                  title="Instagram"
                >
                  <FaInstagram className="text-sm" />
                </a>
              </div>

              {/* Divider 2 */}
              <div className={`hidden md:block w-px h-6 ${isHeroLightMode ? 'bg-white/30' : 'bg-black/30 dark:bg-slate-500'}`}></div>

              {/* Group 3: Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`text-lg transition-all duration-300 hover:scale-110 p-2 rounded-lg border border-transparent ${
                  isHeroLightMode
                    ? 'text-yellow-300 hover:text-yellow-200 hover:bg-white/10'
                    : isDarkMode
                    ? 'text-gray-600 dark:text-yellow-300 hover:text-primary dark:hover:text-yellow-400 dark:hover:bg-slate-800'
                    : 'text-gray-600 hover:text-primary hover:bg-white'
                }`}
                title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              >
                {isDarkMode ? <MdLightMode /> : <MdNightlight />}
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden text-xl transition-all duration-300 hover:scale-110 p-2 rounded-lg ${
                  isHeroLightMode
                    ? 'text-white hover:text-blue-300 hover:bg-white/10'
                    : 'text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary dark:hover:bg-slate-800'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <MdClose /> : <MdMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg dark:shadow-xl dark:shadow-black/40 border-b border-gray-200 dark:border-slate-800 transform transition-all duration-300 backdrop-blur-md ${
              mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
            }`}
          >
            <div className="p-6 space-y-4">
              {/* Mobile Download Portfolio Button */}
              <a
                href="/Company Profile 2026.pdf"
                download="Cliberduche_Portfolio.pdf"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-primary text-primary dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300 text-center"
              >
                <MdDownload />
                Download Portfolio
              </a>

              {/* Mobile Social Media Links */}
              <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
                <h4 className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider mb-4">Follow Us</h4>
                <div className="flex items-center gap-5">
                  <a
                    href="https://www.facebook.com/cliberduche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-white hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 text-lg"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cliberduche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-white hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 text-lg"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/cliberduche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-white hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 text-lg"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
