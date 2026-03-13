import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import { MdOutlineDescription, MdOutlineAssessment, MdOutlineScience, MdOutlineEventNote, MdOutlineLocalShipping, MdOutlineConstruction, MdOutlineFactCheck } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const ProcessOverview = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const pathRef = useRef(null);

  const steps = [
    {
      title: 'Material Order & P.O.',
      desc: 'Customer request initiates the process. A signed Purchase Order and coordinated down payment secure the required volume.',
      icon: MdOutlineDescription,
    },
    {
      title: 'Sourcing Strategy',
      desc: 'We determine capacity requirements and strategically source the exact volume and aggregate size needed for the project.',
      icon: MdOutlineAssessment,
    },
    {
      title: 'Laboratory Testing',
      desc: 'Rigorous testing by a reputable material testing company ensures quality. Client approval is secured before proceeding.',
      icon: MdOutlineScience,
    },
    {
      title: 'Scheduling & Survey',
      desc: 'Delivery schedules are optimized to avoid traffic constraints, concurrent with comprehensive pre-delivery site safety inspections.',
      icon: MdOutlineEventNote,
    },
    {
      title: 'Volume Check & Delivery',
      desc: 'Post-inspection, logistics commence. Fleet vehicles are pre-measured and labeled to guarantee precise volume delivery.',
      icon: MdOutlineLocalShipping,
    },
    {
      title: 'Spreading & Compaction',
      desc: 'Heavy machinery spreads backfill in precise 0.40m layers, achieving the strict 15% site-determined compaction rate.',
      icon: MdOutlineConstruction,
    },
    {
      title: 'Final Certification',
      desc: 'A joint ocular inspection with client engineers verifies completion, followed by final comprehensive reporting.',
      icon: MdOutlineFactCheck,
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current.children, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Connecting Path Animation
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        
        gsap.to(pathRef.current, {
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
          strokeDashoffset: 0,
          ease: 'none',
        });
      }

      // Individual Steps Animation
      const stepElements = gsap.utils.toArray('.gsap-process-step');
      stepElements.forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.2)',
          delay: i % 2 === 0 ? 0 : 0.2, // Stagger left/right slightly
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`relative py-24 md:py-32 lg:py-40 overflow-hidden transition-colors duration-700 ${
        isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 transform translate-x-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-indigo-600' : 'bg-cyan-300'}`} />
        <div className={`absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 transform -translate-x-1/2 translate-y-1/2 ${isDarkMode ? 'bg-purple-600' : 'bg-blue-300'}`} />
        <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${isDarkMode ? 'opacity-[0.04]' : 'opacity-[0.03]'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
           <div className="inline-flex items-center gap-3 mb-6">
            <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-cyan-500 to-blue-600'}`} />
             <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDarkMode ? 'text-indigo-400' : 'text-cyan-600'}`}>Standard Operating Procedure</span>
             <div className={`w-12 h-1 bg-gradient-to-l rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-cyan-500 to-blue-600'}`} />
           </div>
           <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
             Operational <br className="hidden sm:block" />
             <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-400 to-indigo-400' : 'from-cyan-500 via-blue-600 to-cyan-500'}`}>
                Process
             </span>
           </h2>
           <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
             A meticulously structured workflow (MQP) designed to guarantee maximum quality, stringent safety, and absolute precision.
           </p>
         </div>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto" ref={stepsContainerRef}>
          
          {/* Animated Connecting SVG Line (Visible on Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 overflow-hidden">
            {/* Background static line */}
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-white/5' : 'bg-slate-200'} rounded-full`} />
            {/* Animated drawing line */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
               <line 
                 ref={pathRef}
                 x1="50%" y1="0" x2="50%" y2="100%" 
                 stroke={isDarkMode ? 'url(#gradient-dark)' : 'url(#gradient-light)'} 
                 strokeWidth="4" 
                 strokeLinecap="round"
               />
               <defs>
               <linearGradient id="gradient-dark" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#6366f1" /> {/* indigo-500 */}
                 <stop offset="100%" stopColor="#a855f7" /> {/* purple-500 */}
               </linearGradient>
                 <linearGradient id="gradient-light" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#06b6d4" /> {/* cyan-500 */}
                   <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
                 </linearGradient>
               </defs>
            </svg>
          </div>

          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              return (
                <div key={index} className={`gsap-process-step relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 flex flex-col items-center">
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-[3px] shadow-xl backdrop-blur-md transition-transform duration-500 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-[#020617] border-indigo-500/60 shadow-indigo-500/25 text-indigo-300' 
                        : 'bg-white border-cyan-500/50 shadow-cyan-500/20 text-cyan-600'
                    }`}>
                      <span className="font-black text-lg md:text-xl">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-start md:pl-16 lg:pl-20' : 'md:justify-end md:pr-16 lg:pr-20'}`}>
                    <div className={`relative group w-full max-w-[420px] p-6 sm:p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/15' 
                        : 'bg-white/80 border-slate-200 hover:bg-white hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/5'
                    }`}>
                      
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 rounded-[2rem] blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 -z-10 ${
                         isDarkMode ? 'bg-indigo-500/15' : 'bg-cyan-500/10'
                      }`} />

                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                          isDarkMode ? 'bg-white/5 text-indigo-300' : 'bg-slate-50 text-cyan-600'
                        }`}>
                          <Icon className="text-2xl" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            {step.title}
                          </h3>
                          <p className={`text-sm sm:text-base leading-relaxed font-medium ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-800'}`}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
