import { useEffect, useRef } from 'react';

/**
 * Custom hook for triggering animations when elements enter the viewport
 * Animations trigger once and are permanent (non-reversible)
 * Uses Intersection Observer API for optimal performance
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1), default 0.2
 * @param {string} options.rootMargin - Margin around viewport, default '0px'
 * @returns {Object} - { ref } reference to attach to animated element
 */
export const useScrollAnimation = (options = {}) => {
  const { 
    threshold = 0.2, 
    rootMargin = '0px 0px -50px 0px'
  } = options;

  const ref = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          element.classList.add('in-view');
          hasTriggered.current = true;
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Trigger immediately if element is already in viewport
    const rect = element.getBoundingClientRect();
    const isInViewport = (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );

    if (isInViewport) {
      element.classList.add('in-view');
      hasTriggered.current = true;
    }

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return ref;
};

export default useScrollAnimation;
