import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import logo from '/images/logo2.png';
import { MdDownload, MdLightMode, MdNightlight } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  // Track scroll for header effect
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled past a small threshold
      setScrolled(window.scrollY > 50);
      
      // Footer visibility logic to hide header when at bottom
      const footer = document.getElementById('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        // If the footer is at least 50% visible in the viewport
        setHideHeader(rect.top < window.innerHeight && rect.bottom > window.innerHeight / 2);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    // Use SmoothScroll custom event for scroll-to-top
    window.dispatchEvent(
      new CustomEvent('smooth-scroll-set-target', { detail: 0 })
    );
    // Fallback for mobile: scroll directly
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  // Check if in hero section (not scrolled) in light mode
  const isHeroLightMode = !scrolled && !isDarkMode;

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-[45] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        hideHeader ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className={`w-full transition-all duration-500 ${
          scrolled
            ? 'py-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/20 dark:border-slate-800/50' 
            : 'py-4 bg-gradient-to-b from-black/40 to-transparent dark:from-slate-900/60'
        }`}>
          {/* Main Header Content */}
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 xl:px-12 flex items-center justify-between relative z-10">
            
            {/* Left Section: Logo & Company Info */}
            <button 
              onClick={handleLogoClick}
              className="group flex flex-row items-center gap-3 md:gap-4 min-w-0 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 bg-transparent border-none p-0"
              title="Back to top"
            >
              <div className="relative flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Cliberduche Logo" 
                  className={`transition-all duration-500 w-auto ${scrolled ? 'h-10' : 'h-12 md:h-14'}`}
                />
              </div>
              
              {/* Company name text logo */}
              <div className="flex flex-col justify-center text-left">
                <h1 className={`text-sm md:text-base font-black leading-tight tracking-wide transition-colors duration-300 ${
                  isHeroLightMode ? 'text-slate-900 drop-shadow-md' : 'text-slate-900 dark:text-white'
                }`}>
                  Cliberduche
                </h1>
                <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isHeroLightMode ? 'text-blue-700 drop-shadow-sm' : 'text-blue-600 dark:text-blue-400'
                }`}>
                  Corporation
                </p>
              </div>
            </button>

            {/* Right Section: CTA, Social, Dark Mode */}
            <div className="flex items-center gap-4 md:gap-6">
              
              {/* Group 1: Desktop Actions */}
              <div className="hidden md:flex flex-row items-center gap-6">
                 {/* Social Media Links */}
                 <div className="flex items-center gap-4">
                   <a
                     href="https://www.facebook.com/cliberduche"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`transition-all duration-300 hover:scale-125 hover:-translate-y-1 ${
                       isHeroLightMode ? 'text-slate-600 hover:text-blue-600 drop-shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                     }`}
                     title="Facebook"
                   >
                     <FaFacebook className="text-lg" />
                   </a>
                   <a
                     href="https://www.linkedin.com/company/cliberduche"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`transition-all duration-300 hover:scale-125 hover:-translate-y-1 ${
                       isHeroLightMode ? 'text-slate-600 hover:text-blue-600 drop-shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                     }`}
                     title="LinkedIn"
                   >
                     <FaLinkedin className="text-lg" />
                   </a>
                   <a
                     href="https://www.instagram.com/cliberduche"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`transition-all duration-300 hover:scale-125 hover:-translate-y-1 ${
                       isHeroLightMode ? 'text-slate-600 hover:text-blue-600 drop-shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                     }`}
                     title="Instagram"
                   >
                     <FaInstagram className="text-lg" />
                   </a>
                 </div>

                 {/* Divider */}
                 <div className={`w-px h-6 rounded-full ${isHeroLightMode ? 'bg-white/30' : 'bg-slate-300 dark:bg-slate-700'}`} />

                 {/* Download Portfolio Button */}
                 <a
                   href="/Company Profile 2026.pdf"
                   download="Cliberduche_Portfolio.pdf"
                   className={`group relative flex items-center gap-2 px-5 py-2.5 overflow-hidden rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 shadow-lg ${
                     isHeroLightMode
                       ? 'bg-blue-600/10 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-600/20 hover:border-blue-600 shadow-blue-900/10'
                       : 'bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-indigo-600 dark:to-purple-600 border border-transparent text-white shadow-blue-500/30'
                   }`}
                   title="Download Portfolio PDF"
                 >
                   <span className="relative z-10 flex items-center gap-2">
                     <MdDownload className={`text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110`} />
                     Download
                   </span>
                   {/* Hover Overlay */}
                   {!isHeroLightMode && (
                     <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   )}
                 </a>
              </div>

              {/* Group 2: Always Visible (Mobile + Desktop variants) */}
              
              {/* Divider (Mobile Only) */}
              <div className={`md:hidden w-px h-6 rounded-full ${isHeroLightMode ? 'bg-white/30' : 'bg-slate-300 dark:bg-slate-700'}`} />

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`relative overflow-hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 hover:scale-110 active:scale-90 shadow-sm ${
                  isHeroLightMode
                    ? 'bg-slate-100 text-slate-800 hover:bg-white hover:shadow-md border border-slate-200'
                    : isDarkMode
                    ? 'bg-slate-800 text-yellow-300 hover:bg-slate-700 hover:shadow-[0_0_15px_rgba(253,224,71,0.2)] border border-slate-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-md border border-slate-200'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {/* Icons inside the button */}
                <span className="relative z-10 flex justify-center items-center w-full h-full">
                  <MdLightMode className={`absolute transition-all duration-500 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
                  <MdNightlight className={`absolute transition-all duration-500 ${!isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50 text-slate-800'}`} />
                </span>
                {/* Background active ring */}
                <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 opacity-0 scale-50 hover:opacity-100 hover:scale-100 ${
                  isDarkMode ? 'border-yellow-400/50' : 'border-blue-500/50'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
