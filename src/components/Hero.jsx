import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import { ArrowRight } from 'lucide-react';
import Magnet from './ui/Magnet';
import SplitTextReveal from './ui/SplitTextReveal';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ revealContent = true }) => {
  const { isDarkMode } = useTheme();
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const badgeRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);
  const orbsRef = useRef([]);

  useEffect(() => {
    if (!revealContent) return;

    let ctx = gsap.context(() => {
      // Advanced Background Zoom and Parallax
      gsap.to(bgRef.current, {
        scale: 1.3,
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing
        }
      });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Initial state
      gsap.set([badgeRef.current, subtextRef.current, ctaRef.current, scrollRef.current], {
        y: 60,
        opacity: 0,
        rotateX: 15,
        transformPerspective: 1000
      });

      // Animation Sequence
      tl.to(badgeRef.current, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        delay: 0.2
      })
      .to(subtextRef.current, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
      }, "-=0.2")
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
      }, "-=0.9")
      .to(scrollRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.5,
      }, "-=0.6");

      // Continuous bounce for scroll indicator
      gsap.to(scrollRef.current.querySelector('.scroll-dot'), {
        y: 16,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Ambient orbs subtle movement
      orbsRef.current.forEach((orb, i) => {
        if (orb) {
          gsap.to(orb, {
            x: i === 0 ? 80 : -80,
            y: i === 0 ? 60 : -60,
            duration: 12 + i * 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      });

      // Central Content Shrink on Scroll (Parallax Depth Effect)
      gsap.to(containerRef.current, {
        scale: 0.85,
        opacity: 0.2,
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, [revealContent]);

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center transition-colors duration-700 ${
        isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
      }`}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: custom-shimmer 2.5s infinite;
        }
      `}} />

      {/* Background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          ref={bgRef}
          className="absolute inset-[-10%] transition-opacity duration-1000 scale-[1.1]"
          style={{
            background: isDarkMode 
              ? `linear-gradient(to bottom, rgba(3, 7, 18, 0.7) 0%, rgba(3, 7, 18, 0.95) 100%), url('/images/compony provided/office.jpg') center/cover no-repeat` 
              : `linear-gradient(to bottom, rgba(248, 250, 252, 0.8) 0%, rgba(248, 250, 252, 0.98) 100%), url('/images/compony provided/office.jpg') center/cover no-repeat`,
          }}
        />
        
        {/* Abstract Glowing Orbs */}
        {revealContent && (
          <>
            <div
              ref={el => orbsRef.current[0] = el}
              className={`absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full mix-blend-screen filter blur-[120px] opacity-40 ${
                isDarkMode ? 'bg-indigo-600/50' : 'bg-blue-400/40'
              }`}
            />
            <div
              ref={el => orbsRef.current[1] = el}
              className={`absolute bottom-[0%] -right-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen filter blur-[140px] opacity-30 ${
                isDarkMode ? 'bg-purple-600/40' : 'bg-cyan-400/40'
              }`}
            />
          </>
        )}
      </div>

      <div className={`absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] ${
        isDarkMode ? 'opacity-[0.08]' : 'opacity-[0.05]'
      }`} />

      {/* Main Content */}
      {revealContent && (
        <div ref={containerRef} className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-12 sm:mt-0">
          
          {/* Badge */}
          <div ref={badgeRef} className="mb-8 max-w-full px-4">
            <div className={`inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full border backdrop-blur-md shadow-2xl transition-colors duration-500 ${
              isDarkMode
                ? 'bg-white/5 border-white/10 text-indigo-300 shadow-indigo-900/20'
                : 'bg-white/60 border-blue-200/50 text-blue-700 shadow-blue-900/10'
            }`}>
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isDarkMode ? 'bg-indigo-400' : 'bg-blue-500'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 ${
                  isDarkMode ? 'bg-indigo-500' : 'bg-blue-600'
                }`}></span>
              </span>
              <span className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase text-center">
                Official Company Portfolio <br className="xs:hidden" /> <span className="hidden xs:inline">•</span> Founded 2018
              </span>
            </div>
          </div>

          {/* Typography */}
          <div className="flex flex-col items-center justify-center mb-8 relative px-2 w-full">
            <h1 className="flex flex-col items-center font-black leading-[1.05] tracking-tight drop-shadow-sm w-full">
              <div className="overflow-hidden pb-2 w-full flex justify-center">
                <SplitTextReveal 
                  text="Building the"
                  className={`block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 sm:mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                  delay={0.5}
                  stagger={0.05}
                  triggerRef={containerRef}
                />
              </div>
              <div className="overflow-hidden pb-4 w-full flex justify-center">
                <SplitTextReveal 
                  text="Future"
                  className={`block text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] uppercase tracking-[-0.04em] ${
                    isDarkMode 
                      ? 'text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-indigo-400' 
                      : 'text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700'
                  }`}
                  delay={0.8}
                  stagger={0.08}
                  triggerRef={containerRef}
                />
              </div>
              <div className="overflow-hidden pb-2 w-full flex justify-center">
                <SplitTextReveal 
                  text="Together."
                  className={`block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] italic tracking-[-0.02em] font-serif ${
                    isDarkMode ? 'text-indigo-400' : 'text-blue-600'
                  }`}
                  delay={1.1}
                  stagger={0.06}
                  triggerRef={containerRef}
                />
              </div>
            </h1>
          </div>

          {/* Subtext */}
          <div className="max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-12 px-2 sm:px-4">
            <p
              ref={subtextRef}
              className={`text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Comprehensive backfill sourcing, land development, and civil works solutions. 
              Delivering excellence engineered from the ground up since 2018.
            </p>
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="flex justify-center w-full px-4">
            <Magnet padding={60} magnetStrength={4}>
              <a
                href="#projects"
                data-cursor="EXPLORE"
                className={`group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 w-full sm:w-auto rounded-full font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all duration-500 overflow-hidden shadow-2xl flex items-center justify-center gap-2 sm:gap-3 ${
                  isDarkMode
                    ? 'bg-white text-[#030712] hover:bg-indigo-50 shadow-white/10 hover:shadow-white/20 hover:-translate-y-1'
                    : 'bg-slate-900 text-white hover:bg-blue-900 shadow-slate-900/20 hover:shadow-blue-900/30 hover:-translate-y-1'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Work
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
            </Magnet>
          </div>

        </div>
      )}

      {/* Scroll Indicator */}
      {revealContent && (
        <div
          ref={scrollRef}
          className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 opacity-0 cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className={`text-[7px] sm:text-[8px] lg:text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:text-indigo-400 ${
            isDarkMode ? 'text-slate-500' : 'text-slate-400'
          }`}>
            Scroll Explore
          </span>
          <div className={`w-5 h-8 sm:w-6 sm:h-10 lg:w-7 lg:h-12 rounded-full border-2 flex justify-center p-1 sm:p-1.5 ${
            isDarkMode ? 'border-indigo-500/30' : 'border-blue-500/30'
          }`}>
            <div className={`scroll-dot w-1 h-1.5 sm:h-2 lg:h-3 rounded-full ${
              isDarkMode ? 'bg-indigo-400' : 'bg-blue-500'
            }`} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
