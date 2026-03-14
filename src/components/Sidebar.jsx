import React, { useState, useEffect, useRef } from 'react';
import { 
  MdHome, MdInfoOutline, MdBuild, MdChecklist, MdNoteAlt, 
  MdLocalShipping, MdFolderOpen, MdPeople, MdShield, MdLink, MdMenu, MdClose 
} from 'react-icons/md';
import gsap from 'gsap';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);
  const mobileMenuRef = useRef(null);
  const desktopSidebarRef = useRef(null);

  // Icon mapping for navigation links
  const iconMap = {
    'fa-home': MdHome,
    'fa-info-circle': MdInfoOutline,
    'fa-cogs': MdBuild,
    'fa-project-diagram': MdFolderOpen,
    'fa-truck': MdLocalShipping,
    'fa-tasks': MdChecklist,
    'fa-users': MdPeople,
    'fa-shield-alt': MdShield,
    'fa-link': MdLink,
  };

  const navigationLinks = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About Us', icon: 'fa-info-circle' },
    { id: 'services', label: 'Services', icon: 'fa-cogs' },
    { id: 'projects', label: 'Projects', icon: 'fa-project-diagram' },
    { id: 'equipment', label: 'Equipment Fleet', icon: 'fa-truck' },
    { id: 'process', label: 'Process Overview', icon: 'fa-tasks' },
    { id: 'team', label: 'Our Team', icon: 'fa-users' },
    { id: 'compliance', label: 'Compliance & Safety', icon: 'fa-shield-alt' },
    { id: 'resources', label: 'Resources & Partners', icon: 'fa-link' },
  ];

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const triggerPoint = scrollY + viewportHeight * 0.4; // 40% from top

      // If at absolute top, it's home
      if (scrollY < viewportHeight * 0.2) {
        setActiveSection('home');
        ticking = false;
        return;
      }

      let currentActiveId = 'home'; // Fallback
      
      // Find the last section that has its top edge scrolled past the trigger point
      for (let i = 0; i < navigationLinks.length; i++) {
        const id = navigationLinks[i].id;
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const topAbsolute = rect.top + scrollY;
          if (topAbsolute <= triggerPoint) {
            currentActiveId = id;
          }
        }
      }

      setActiveSection(currentActiveId);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Periodically check in case React Suspense resolves while not scrolling
    const interval = setInterval(() => {
      updateActiveSection();
    }, 1000);

    // Initial check
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Handle Mobile Menu Animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          clipPath: 'circle(150% at calc(100% - 3.5rem) calc(100% - 3.5rem))', // Open from bottom right
          duration: 0.8,
          ease: 'power3.inOut',
          pointerEvents: 'auto',
          display: 'flex'
        });
        
        // Stagger links in
        gsap.fromTo('.mobile-nav-item', 
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.2)', delay: 0.2 }
        );
      } else {
        gsap.to('.mobile-nav-item', {
          y: -20, opacity: 0, duration: 0.3, stagger: 0.02, ease: 'power2.in'
        });
        
        gsap.to(mobileMenuRef.current, {
          clipPath: 'circle(0% at calc(100% - 3.5rem) calc(100% - 3.5rem))', // Close to bottom right
          duration: 0.6,
          ease: 'power3.inOut',
          pointerEvents: 'none',
          delay: 0.2, // Wait for links to fade
          onComplete: () => {
             // Reset styles to avoid issues on re-open
             gsap.set('.mobile-nav-item', { clearProps: 'all' });
          }
        });
      }
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (id) => {
    // If clicking home, scroll directly to top 0 because the section is sticky
    // and its getBoundingClientRect might be misleading.
    if (id === 'home' || id === 'hero') {
      setIsMobileMenuOpen(false);
      window.dispatchEvent(
        new CustomEvent('smooth-scroll-set-target', { detail: 0 })
      );
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // Close menu if on mobile
      setIsMobileMenuOpen(false);

      // Get the element's position relative to the top of the document
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const targetY = rect.top + scrollTop;
      
      // Dispatch custom event for SmoothScroll
      window.dispatchEvent(
        new CustomEvent('smooth-scroll-set-target', { detail: targetY })
      );
      
      // Fallback: scroll directly (especially for mobile)
      setTimeout(() => {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <>
      {/* =========================================
          DESKTOP SIDEBAR (Visible xl and up) 
          A sleek, expanding glass pill on the left
      ========================================= */}
      <div 
        ref={desktopSidebarRef}
        onMouseEnter={() => setIsDesktopExpanded(true)}
        onMouseLeave={() => setIsDesktopExpanded(false)}
        className={`hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col z-50 
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 
        shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden py-4
        ${isDesktopExpanded ? 'w-64 px-4' : 'w-16 px-0 items-center'}
        `}
      >
        <div className="flex flex-col gap-2 w-full">
          {navigationLinks.map((link) => {
            const Icon = iconMap[link.icon];
            const isActive = activeSection === link.id;
            
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative group flex items-center h-12 rounded-xl transition-all duration-300 w-full
                  ${isDesktopExpanded ? 'px-4 justify-start' : 'justify-center'}
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-600/90 to-cyan-500/90 dark:from-indigo-600/90 dark:to-purple-500/90 shadow-lg' 
                    : 'hover:bg-white/10 dark:hover:bg-white/5'}
                `}
                title={!isDesktopExpanded ? link.label : ''}
              >
                {/* Active Indicator Line (when collapsed) */}
                {!isDesktopExpanded && isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                )}

                {/* Icon */}
                <Icon className={`flex-shrink-0 text-xl transition-colors duration-300 
                  ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-indigo-400'}
                `} />
                
                {/* Label (Only show when expanded) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 whitespace-nowrap
                    ${isDesktopExpanded ? 'w-auto opacity-100 ml-4' : 'w-0 opacity-0 ml-0'}
                  `}
                >
                  <span className={`text-sm font-semibold tracking-wide
                    ${isActive ? 'text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-indigo-400'}
                  `}>
                    {link.label}
                  </span>
                </div>
                
                {/* Hover Tooltip (when collapsed) */}
                {!isDesktopExpanded && (
                   <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                     {link.label}
                     {/* Tooltip triangle */}
                     <div className="absolute top-1/2 -translate-y-1/2 -left-1 border-4 border-transparent border-r-slate-900 dark:border-r-white" />
                   </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================
          MOBILE / TABLET NAVIGATION (Below xl) 
      ========================================= */}
      
      {/* Floating Action Button (FAB) for Mobile Configured at Bottom Right */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="xl:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full z-[60] flex items-center justify-center 
        bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-indigo-600 dark:to-purple-600 
        text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] dark:shadow-[0_10px_25px_rgba(79,70,229,0.4)]
        transition-transform duration-300 hover:scale-105 active:scale-95"
        aria-label="Toggle navigation menu"
      >
        <div className="relative w-6 h-6 flex justify-center items-center">
          <MdMenu className={`absolute text-2xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 scale-50 rotate-180' : 'opacity-100 scale-100 rotate-0'}`} />
          <MdClose className={`absolute text-2xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'}`} />
        </div>
      </button>

      {/* Full Screen Curved Menu Overlay */}
      <nav 
        ref={mobileMenuRef}
        className="xl:hidden fixed inset-0 z-[55] flex-col justify-center px-8 sm:px-16 
        bg-white/95 dark:bg-[#030712]/95 backdrop-blur-2xl"
        style={{ clipPath: 'circle(0% at calc(100% - 3.5rem) calc(100% - 3.5rem))', display: 'none' }} // Initial state hidden
      >
        <div className="flex flex-col gap-2 max-w-sm mx-auto w-full w-full">
          {/* Header */}
          <div className="mobile-nav-item mb-8">
             <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-indigo-400 mb-2">Navigation</h3>
             <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent dark:from-indigo-500" />
          </div>

          <ul className="flex flex-col gap-2 w-full">
            {navigationLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const isActive = activeSection === link.id;
              
              return (
                <li key={link.id} className="mobile-nav-item w-full">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`group w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300
                      ${isActive 
                        ? 'bg-blue-50 dark:bg-indigo-500/20 border border-blue-200 dark:border-indigo-500/30' 
                        : 'hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent'}
                    `}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
                      ${isActive ? 'bg-blue-600 text-white dark:bg-indigo-600' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-white group-hover:bg-slate-200 dark:group-hover:bg-white/10'}
                    `}>
                      <Icon className="text-xl" />
                    </div>
                    
                    <span className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300
                      ${isActive ? 'text-blue-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}
                    `}>
                      {link.label}
                    </span>
                    
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-blue-500 dark:bg-indigo-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
