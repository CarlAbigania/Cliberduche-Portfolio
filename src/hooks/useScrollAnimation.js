import { useEffect, useRef } from 'react';

/**
 * Custom hook for triggering animations when elements enter the viewport
 * Uses Intersection Observer API for optimal performance
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1), default 0.2
 * @param {string} options.rootMargin - Margin around viewport, default '0px'
 * @param {boolean} options.triggerOnce - Only trigger once, default false (reversible)
 * @returns {Object} - { ref, isVisible }
 */
export const useScrollAnimation = (options = {}) => {
  const { 
    threshold = 0.2, 
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false 
  } = options;

  const ref = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if already triggered and triggerOnce is enabled
    if (triggerOnce && hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('in-view');
          hasTriggered.current = true;

          // Only unobserve if triggerOnce is true
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          // Remove animation class when element leaves viewport (reversible)
          if (!triggerOnce) {
            element.classList.remove('in-view');
          }
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
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
};

export default useScrollAnimation;
