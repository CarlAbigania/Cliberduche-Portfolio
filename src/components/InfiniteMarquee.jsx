import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';

gsap.registerPlugin(ScrollTrigger);

const InfiniteMarquee = ({ 
  text = "CIVIL ENGINEERING • LAND DEVELOPMENT • HEAVY EQUIPMENT • ", 
  speed = 1,
  direction = 1 // 1 for left, -1 for right
}) => {
  const { isDarkMode } = useTheme();
  const marqueeRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // We animate the xPercent from 0 to -100 for a continuous loop
    let xPercent = 0;
    
    // Set the overall animation loop
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    tl.to([text1Ref.current, text2Ref.current], {
      xPercent: -100,
      duration: 20 / speed,
      ease: "none"
    });

    // Make it dynamic based on scroll velocity
    ScrollTrigger.create({
      trigger: document.body,
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        // self.getVelocity() returns the scroll speed
        // We calculate a multiplier extending the default animation speed
        const velocity = self.getVelocity();
        // Base speed is 1. We scale up to ~4x speed on fast scrolls.
        const speedMultiplier = 1 + Math.min(Math.abs(velocity / 1000), 4);
        
        // Tween the timeScale of our timeline dynamically
        gsap.to(tl, {
          timeScale: speedMultiplier,
          duration: 0.2, // Smooth transition back to normal speed
          ease: "power1.out",
          overwrite: true
        });
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.refresh());
    };
  }, [speed]);

  return (
    <div 
      className={`relative w-full overflow-hidden flex items-center py-6 sm:py-8 lg:py-10 border-y select-none transition-colors duration-700 ${
        isDarkMode 
          ? 'bg-[#030712] border-white/5' 
          : 'bg-[#f8fafc] border-slate-200'
      }`}
    >
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <div ref={text1Ref} className="flex shrink-0 px-4">
           {/* Solid Text */}
           <span className={`text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter pr-8 ${
             isDarkMode ? 'text-white' : 'text-slate-900'
           }`}>
             {text}
           </span>
           {/* Outlined "Stroke" Text for contrast */}
           <span className={`text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-transparent text-stroke pr-8 ${
             isDarkMode ? 'text-stroke-white' : 'text-stroke-black'
           }`}>
             {text}
           </span>
        </div>
        
        {/* Exact Duplicate for seamless looping */}
        <div ref={text2Ref} className="flex shrink-0 px-4">
           {/* Solid Text */}
           <span className={`text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter pr-8 ${
             isDarkMode ? 'text-white' : 'text-slate-900'
           }`}>
             {text}
           </span>
           {/* Outlined "Stroke" Text for contrast */}
           <span className={`text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-transparent text-stroke pr-8 ${
             isDarkMode ? 'text-stroke-white' : 'text-stroke-black'
           }`}>
             {text}
           </span>
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
