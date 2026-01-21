import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 w-14 h-14 
        bg-gradient-to-br from-primary to-accent text-white rounded-full 
        shadow-lg shadow-primary/40 flex items-center justify-center 
        opacity-0 invisible transition-all duration-300 
        z-50 hover:shadow-xl hover:shadow-primary/60 hover:-translate-y-2
        ${isVisible ? 'opacity-100 visible' : ''}
      `}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up text-lg"></i>
    </button>
  );
};

export default BackToTopButton;
