import React, { useState, useEffect, useRef, useCallback } from 'react';

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
        className={`fixed w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 z-40 flex items-center justify-center active:scale-95 ${
          isDragging ? 'cursor-grabbing no-transition' : 'cursor-grab transition-all duration-300 hover:scale-110'
        } ${
          isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
        title="Open Navigation (Draggable)"
      >
        <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-xl transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
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
        className={`fixed left-8 top-20 h-[calc(100vh-120px)] w-72 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 rounded-2xl shadow-2xl shadow-black/25 dark:shadow-black/50 overflow-hidden z-40 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 ${
          isMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-96 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary via-primary to-accent text-white p-6 flex items-center justify-between sticky top-0 z-10 shadow-lg shadow-primary/20 dark:shadow-primary/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <i className="fas fa-bars text-white"></i>
            </div>
            <h3 className="text-lg font-mont font-bold tracking-wide">Navigation</h3>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="overflow-y-auto h-[calc(100vh-120px)] scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800/30">
          <ul className="space-y-2 p-5">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <button
                  onMouseEnter={() => setHoveredItem(link.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-primary via-primary to-accent text-white shadow-lg shadow-primary/40 dark:shadow-primary/20 scale-105 origin-left'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 dark:hover:bg-gray-800/40 hover:text-primary dark:hover:text-secondary hover:shadow-md hover:shadow-primary/10'
                  }`}
                >
                  {/* Background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className={`relative flex-shrink-0 w-5 h-5 flex items-center justify-center transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'scale-125 text-white' 
                      : 'text-gray-600 dark:text-gray-400 group-hover:scale-125 group-hover:text-primary dark:group-hover:text-secondary'
                  }`}>
                    <i className={`fas ${link.icon}`}></i>
                  </div>
                  
                  {/* Label */}
                  <span className={`font-medium flex-1 text-left transition-all duration-300 ${
                    activeSection === link.id ? 'text-white' : 'text-gray-700 dark:text-gray-300'
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
