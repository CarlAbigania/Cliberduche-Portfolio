import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({ src, alt, className = '', containerClassName = '', speed = 1 }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    let ctx = gsap.context(() => {
      // Parallax effect logic: image moves vertically relative to container scroll
      // A positive speed means it moves counter to scroll (classic parallax)
      gsap.fromTo(image, 
        { yPercent: -15 * speed },
        { 
          yPercent: 15 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom', // Start animating when top of container hits bottom of viewport
            end: 'bottom top',   // End animating when bottom of container hits top of viewport
            scrub: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      {/* 
        Image is sized significantly taller than the container (h-[130%]) 
        and offset (top-[-15%]) so that it has room to translate up and down 
        without revealing the background behind it. 
      */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`absolute top-[-15%] left-0 w-full h-[130%] object-cover max-w-none will-change-transform ${className}`}
      />
    </div>
  );
};

export default ParallaxImage;
