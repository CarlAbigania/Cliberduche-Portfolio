import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '../hooks/useTheme';
import { ArrowRight } from 'lucide-react';

const Hero = ({ revealContent = true }) => {
  const { isDarkMode } = useTheme();
  const heroRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtextRef = useRef(null);
  const badgeRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);
  const orbsRef = useRef([]);

  useEffect(() => {
    if (!revealContent) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Initial state
      gsap.set([title1Ref.current, title2Ref.current, subtextRef.current], { y: 120, opacity: 0 });
      gsap.set(badgeRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(buttonsRef.current.children, { y: 40, opacity: 0 });
      gsap.set(scrollRef.current, { opacity: 0 });

      // Animation Sequence
      tl.to(badgeRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.5)",
        delay: 0.1
      })
      .to([title1Ref.current, title2Ref.current], {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.15,
      }, "-=0.8")
      .to(subtextRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }, "-=1.0")
      .to(buttonsRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
      }, "-=0.8")
      .to(scrollRef.current, {
        opacity: 1,
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
            x: i === 0 ? 60 : -60,
            y: i === 0 ? 40 : -50,
            duration: 10 + i * 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
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
          animation: custom-shimmer 2s infinite;
        }
        .bg-gradient-animate {
          background-size: 200% auto;
          animation: gradient-pan 4s linear infinite;
        }
        @keyframes gradient-pan {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
      `}} />

      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: isDarkMode 
              ? `linear-gradient(to bottom, rgba(3, 7, 18, 0.5), rgba(3, 7, 18, 1)), url('/images/compony provided/office.jpg') center/cover no-repeat` 
              : `linear-gradient(to bottom, rgba(248, 250, 252, 0.7), rgba(248, 250, 252, 1)), url('/images/compony provided/office.jpg') center/cover no-repeat`,
          }}
        />
        
        {/* Abstract Glowing Orbs */}
        {revealContent && (
          <>
            <div
              ref={el => orbsRef.current[0] = el}
              className={`absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-screen filter blur-[100px] sm:blur-[140px] opacity-40 ${
                isDarkMode ? 'bg-indigo-600/60' : 'bg-blue-400/50'
              }`}
            />
            <div
              ref={el => orbsRef.current[1] = el}
              className={`absolute bottom-[10%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[160px] opacity-30 ${
                isDarkMode ? 'bg-purple-600/50' : 'bg-cyan-400/50'
              }`}
            />
          </>
        )}
      </div>

      <div className={`absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${
        isDarkMode ? 'opacity-[0.05]' : 'opacity-[0.03]'
      }`} />

      {/* Main Content */}
      {revealContent && (
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <div ref={badgeRef} className="mb-8 sm:mb-10">
            <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border backdrop-blur-md shadow-2xl transition-colors duration-500 hover:scale-105 ${
              isDarkMode
                ? 'bg-white/5 border-white/10 text-slate-200 shadow-indigo-900/20 hover:bg-white/10'
                : 'bg-black/5 border-black/10 text-slate-800 shadow-blue-900/10 hover:bg-black/10'
            }`}>
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isDarkMode ? 'bg-indigo-400' : 'bg-blue-500'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${
                  isDarkMode ? 'bg-indigo-500' : 'bg-blue-600'
                }`}></span>
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                Founded 2018 • CALABARZON
              </span>
            </div>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[5rem] font-black tracking-[-0.02em] leading-[1.1] mb-6 flex flex-col items-center drop-shadow-sm">
            <div className="overflow-hidden pb-1 w-full">
              <div ref={title1Ref} className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                Building the
              </div>
            </div>
            <div className="overflow-hidden pb-4 sm:pb-6 w-full">
              <div ref={title2Ref} className="flex flex-wrap justify-center gap-[0.2em] leading-[1.1]">
                <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>Future</span>
                <span className={`bg-clip-text text-transparent bg-gradient-to-r bg-gradient-animate ${
                  isDarkMode
                    ? 'from-indigo-400 via-purple-400 to-indigo-400'
                    : 'from-blue-600 via-cyan-500 to-blue-600'
                }`}>
                  Together
                </span>
              </div>
            </div>
          </h1>

          <div className="overflow-hidden max-w-3xl mx-auto mb-10 px-2 mt-2">
            <p
              ref={subtextRef}
              className={`text-base sm:text-lg md:text-xl leading-relaxed font-medium ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Comprehensive backfill sourcing, land development, and civil works solutions you can trust. Excellence engineered from the ground up.
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4">
            <a
              href="#projects"
              className={`group relative px-8 py-4 w-full sm:w-auto rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-xl ${
                isDarkMode
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400 shadow-indigo-900/30'
                  : 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/30'
              }`}
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              {/* Button hover shimmer */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </a>
            
            <a
              href="https://drive.google.com/drive/folders/1QFFNjs4s6DDpD4ncV1n4AXV5HPU7MMxk?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`group px-8 py-4 w-full sm:w-auto rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 border-2 ${
                isDarkMode
                  ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                  : 'border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              <span>Project Archives</span>
            </a>
          </div>

        </div>
      )}

      {/* Scroll Indicator */}
      {revealContent && (
        <div
          ref={scrollRef}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className={`text-[9px] sm:text-[11px] font-bold tracking-[0.3em] uppercase ${
            isDarkMode ? 'text-slate-500' : 'text-slate-400'
          }`}>
            Scroll Explore
          </span>
          <div className={`w-7 h-11 sm:w-8 sm:h-14 rounded-full border-2 flex justify-center p-1.5 ${
            isDarkMode ? 'border-slate-700' : 'border-slate-300'
          }`}>
            <div className={`scroll-dot w-1.5 h-3 sm:h-4 rounded-full ${
              isDarkMode ? 'bg-indigo-500' : 'bg-blue-500'
            }`} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
