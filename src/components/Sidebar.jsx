import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MdHome, MdInfoOutline, MdBuild, MdChecklist, MdNoteAlt, MdLocalShipping, MdFolderOpen, MdPeople, MdShield, MdLink, MdEmail, MdMenu, MdClose } from 'react-icons/md';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [bubblePos, setBubblePos] = useState({ xPx: 32, y: 32 }); // xPx: pixels from left, y: pixels from bottom
  const [isDragging, setIsDragging] = useState(false);
  const [hasMovedSingnificantly, setHasMovedSignificantly] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const bubbleRef = useRef(null);
  const dragPosRef = useRef({ xPx: 32, y: 32 }); // Track position during drag without re-render
  const dragStartRef = useRef({ x: 0, y: 0 });

  const DRAG_THRESHOLD = 5; // Pixels threshold to distinguish click from drag

  // Icon mapping for navigation links
  const iconMap = {
    'fa-home': MdHome,
    'fa-info-circle': MdInfoOutline,
    'fa-cogs': MdBuild,
    'fa-tasks': MdChecklist,
    'fa-file-alt': MdNoteAlt,
    'fa-truck': MdLocalShipping,
    'fa-project-diagram': MdFolderOpen,
    'fa-users': MdPeople,
    'fa-shield-alt': MdShield,
    'fa-link': MdLink,
    'fa-envelope': MdEmail,
  };

  const navigationLinks = [
    { id: 'hero', label: 'Home', icon: 'fa-home' },
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setHasMovedSignificantly(false);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    dragPosRef.current = { xPx: parseFloat(bubbleRef.current.style.left || 32), y: parseFloat(bubbleRef.current.style.bottom || 32) };
    
    // Remove transition during drag
    bubbleRef.current.style.transition = 'none';
    
    // Attach listeners immediately
    document.addEventListener('mousemove', onMouseMoveHandler);
    document.addEventListener('mouseup', onMouseUpHandler);
  };

  const onMouseMoveHandler = useCallback((e) => {
    if (!dragStartRef.current || !bubbleRef.current) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Update position directly without state
    if (distance > DRAG_THRESHOLD) {
      let newX = dragPosRef.current.xPx + deltaX;
      newX = Math.max(0, Math.min(newX, window.innerWidth - 64));

      let newY = dragPosRef.current.y - deltaY;
      // Prevent bubble from overlapping header (64px) + margin (32px)
      newY = Math.max(32, Math.min(newY, window.innerHeight - 160));

      bubbleRef.current.style.left = `${newX}px`;
      bubbleRef.current.style.bottom = `${newY}px`;
    }
  }, []);

  const onMouseUpHandler = useCallback(() => {
    // Remove listeners immediately
    document.removeEventListener('mousemove', onMouseMoveHandler);
    document.removeEventListener('mouseup', onMouseUpHandler);
    
    setIsDragging(false);
    
    // Get final position
    const finalX = parseFloat(bubbleRef.current?.style.left || 32);
    const finalY = parseFloat(bubbleRef.current?.style.bottom || 32);
    
    // Check if it was a drag or just a click
    const wasDrag = Math.abs(finalX - dragPosRef.current.xPx) > DRAG_THRESHOLD || 
                    Math.abs(finalY - dragPosRef.current.y) > DRAG_THRESHOLD;
    
    if (wasDrag) {
      // Re-enable transition for snap animation
      bubbleRef.current.style.transition = 'all 0.3s ease-out';
      
      // Snap to nearest side
      const midpoint = window.innerWidth / 2;
      const isCloserToLeft = finalX < midpoint;
      const targetX = isCloserToLeft ? 32 : window.innerWidth - 96;
      
      // Ensure Y position respects header constraint
      const constrainedY = Math.max(32, Math.min(finalY, window.innerHeight - 160));
      
      setIsSnapping(true);
      setBubblePos({ xPx: targetX, y: constrainedY });
      dragPosRef.current = { xPx: targetX, y: constrainedY };
      
      setTimeout(() => setIsSnapping(false), 300);
    } else {
      // It was just a click
      // Re-enable transition
      bubbleRef.current.style.transition = 'all 0.3s ease-out';
      
      setIsMenuOpen(prev => !prev);
      // Sync position with state
      setBubblePos({ xPx: finalX, y: finalY });
    }
    
    setHasMovedSignificantly(false);
  }, []);

  // Initialize and update bubble position when snapping
  useEffect(() => {
    if (bubbleRef.current) {
      bubbleRef.current.style.left = `${bubblePos.xPx}px`;
      bubbleRef.current.style.bottom = `${bubblePos.y}px`;
      dragPosRef.current = { ...bubblePos };
    }
  }, [bubblePos]);

  // Initialize bubble position on mount
  useEffect(() => {
    if (bubbleRef.current) {
      bubbleRef.current.style.left = '32px';
      bubbleRef.current.style.bottom = '32px';
    }
  }, []);

  // Cleanup event listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', onMouseMoveHandler);
      document.removeEventListener('mouseup', onMouseUpHandler);
    };
  }, [onMouseMoveHandler, onMouseUpHandler]);

  return (
    <>
      {/* Floating Bubble Button */}
      <button
        ref={bubbleRef}
        onMouseDown={handleMouseDown}
        className={`hidden md:flex fixed w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 dark:shadow-primary/50 z-40 items-center justify-center active:scale-95 ${
          isDragging ? 'cursor-grabbing no-transition' : 'cursor-grab transition-all duration-300 hover:scale-110'
        } ${
          isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
        title="Open Navigation (Draggable)"
      >
        {isMenuOpen ? <MdClose className="text-xl transition-transform duration-300 rotate-90" /> : <MdMenu className="text-xl transition-transform duration-300" />}
      </button>

      {/* Navigation Modal Overlay - No overlay effect */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Left Sidebar Navigation - Floating */}
      <div
        className={`hidden md:block fixed left-8 top-20 h-[calc(100vh-120px)] w-72 bg-white/25 dark:bg-slate-800/30 rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/50 overflow-hidden z-40 transition-all duration-300 border border-gray-200/60 dark:border-slate-700/60 backdrop-blur-md ${
          isMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-96 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary via-primary to-accent text-white p-6 flex items-center justify-between sticky top-0 z-10 shadow-lg shadow-primary/30 dark:shadow-black/40">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <MdMenu className="text-white" />
            </div>
            <h3 className="text-lg font-mont font-bold tracking-wide">Navigation</h3>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <MdClose className="text-lg" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="overflow-y-auto h-[calc(100vh-120px)] scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-gray-100 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800/50 backdrop-blur-md bg-white/10 dark:bg-slate-800/10">
          <ul className="space-y-2 p-5">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <button
                  onMouseEnter={() => setHoveredItem(link.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-primary via-primary to-accent text-white shadow-lg shadow-primary/50 dark:shadow-black/40 scale-105 origin-left'
                      : 'text-gray-700 dark:text-white hover:bg-primary/20 dark:hover:bg-slate-600/60 hover:text-primary dark:hover:text-blue-400 hover:shadow-md hover:shadow-primary/10 dark:hover:shadow-black/20'
                  }`}
                >
                  {/* Background animation */}
                  
                  {/* Icon */}
                  <div className={`relative flex-shrink-0 w-5 h-5 flex items-center justify-center transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'scale-125 text-white' 
                      : 'text-gray-600 dark:text-gray-100 group-hover:scale-125 group-hover:text-primary dark:group-hover:text-blue-400'
                  }`}>
                    {iconMap[link.icon] && React.createElement(iconMap[link.icon])}
                  </div>
                  
                  {/* Label */}
                  <span className={`font-medium flex-1 text-left transition-all duration-300 ${
                    activeSection === link.id ? 'text-white' : 'text-gray-700 dark:text-gray-100'
                  }`}>{link.label}</span>
                  
                  {/* Active indicator dot */}
                  {activeSection === link.id && (
                    <div className="relative flex-shrink-0 w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-white/50 animate-pulse"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </>
  );
};

export default Sidebar;
