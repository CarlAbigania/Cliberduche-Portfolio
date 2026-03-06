import React, { useState, useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md';

const BackToTopButton = ({ threshold = 300, showAtBottom = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const atBottom = showAtBottom && scrollY + winHeight >= docHeight - 100;

      setIsVisible(scrollY > threshold || atBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, showAtBottom]);

  const scrollToTop = () => {
    window.dispatchEvent(
      new CustomEvent('smooth-scroll-set-target', { detail: 0 })
    );
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-secondary text-primary rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-secondary/40 transition-all duration-300 active:scale-95 hover:scale-110 font-semibold z-50 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <MdArrowUpward className="text-lg" />
    </button>
  );
};

export default BackToTopButton;