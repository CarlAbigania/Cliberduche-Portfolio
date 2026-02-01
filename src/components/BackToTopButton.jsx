import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
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
      className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-accent text-white rounded-full shadow-xl shadow-primary/40 flex items-center justify-center z-50 hover:shadow-2xl hover:shadow-primary/60 hover:-translate-y-2 transition-all duration-300 active:scale-95 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <i className="fas fa-arrow-up text-lg"></i>
    </button>
  );
};

export default BackToTopButton;
