import { useState, useEffect } from 'react';

/**
 * Custom hook to track the loading progress of all images and fonts on the page.
 * It waits for the DOM to be populated, then gathers all `<img>` elements and tracks
 * their `load` and `error` events alongside `document.fonts.ready`.
 * 
 * @returns {number} progress - An integer from 0 to 100 representing the loading percentage.
 */
export function useAssetLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let images = [];
    let loadedCount = 0;
    let totalAssets = 0;

    const updateProgress = () => {
      if (!isMounted) return;
      loadedCount++;
      const currentProgress = totalAssets > 0 ? Math.floor((loadedCount / totalAssets) * 100) : 100;
      setProgress((prev) => Math.max(prev, currentProgress));
    };

    const trackAssets = () => {
      if (!isMounted) return;
      
      // Select all images currently mounted in the hidden/rendering DOM
      images = Array.from(document.images);
      
      // We count each image, plus 1 for fonts yielding the total assets to wait for
      totalAssets = images.length + 1;

      // Track fonts
      document.fonts.ready.then(() => {
        updateProgress();
      }).catch(() => {
        updateProgress(); // fallback on error
      });

      // Track Images
      if (images.length === 0) {
        // If there are no images, we only wait for fonts
        // progress will be handled by the fonts.ready promise
      } else {
        images.forEach((img) => {
          if (img.complete) {
            updateProgress();
          } else {
            img.addEventListener('load', updateProgress, { once: true });
            img.addEventListener('error', updateProgress, { once: true });
          }
        });
      }
    };

    // Small timeout to allow React components to mount their <img> tags into the DOM
    // before we query document.images. We wait for next tick.
    const timeoutId = setTimeout(trackAssets, 100);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      images.forEach((img) => {
        img.removeEventListener('load', updateProgress);
        img.removeEventListener('error', updateProgress);
      });
    };
  }, []);

  return progress;
}
