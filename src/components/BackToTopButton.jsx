import React from 'react';
import { MdArrowUpward } from 'react-icons/md';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="w-12 h-12 bg-secondary text-primary rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-secondary/40 transition-all duration-300 active:scale-95 hover:scale-110 font-semibold"
      aria-label="Back to top"
      title="Back to top"
    >
      <MdArrowUpward className="text-lg" />
    </button>
  );
};

export default BackToTopButton;
