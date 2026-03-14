import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import { MdTerrain, MdAgriculture, MdWorkHistory, MdHandyman, MdConstruction, MdPendingActions, MdArrowForward } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const iconMap = {
    'fa-mountain': MdTerrain,
    'fa-tractor': MdAgriculture,
    'fa-hard-hat': MdWorkHistory,
    'fa-tools': MdHandyman,
    'fa-road': MdConstruction,
    'fa-clipboard-check': MdPendingActions,
  };

  const services = [
    { icon: 'fa-mountain', title: 'Backfill Sourcing', desc: 'Sub-base, aggregates, mixed soil, and boulders with lab-tested quality ensuring solid foundations.' },
    { icon: 'fa-tractor', title: 'Land Development', desc: 'Comprehensive clearing, cutting, leveling, and pipe laying for immediate site readiness.' },
    { icon: 'fa-hard-hat', title: 'Site Management', desc: 'Professional field supervision aligned with rigorous safety standards and delivery targets.' },
    { icon: 'fa-tools', title: 'Equipment Leasing', desc: 'Heavy-duty dump trucks, bulldozers, excavators, and compactors ready for deployment.' },
    { icon: 'fa-road', title: 'Civil Works', desc: 'Expert construction of bridges, concrete roads, ripraps, drainage, and slope protection.' },
    { icon: 'fa-clipboard-check', title: 'Project Consultation', desc: 'Strategic consultation and planning for extensive horizontal and vertical development.' },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Header Animation
        gsap.from('.gsap-service-header', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        });

        // Cards Stagger Animation
        gsap.from(cardsRef.current, {
          scrollTrigger: {
            trigger: '.gsap-services-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'back.out(1.2)',
        });

        // Parallax Background Orbs
        gsap.to('.gsap-service-orb-1', {
          y: 200,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
        gsap.to('.gsap-service-orb-2', {
          y: -150,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`relative py-24 md:py-32 lg:py-40 overflow-hidden transition-colors duration-700 ${
        isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
            isDarkMode 
              ? 'bg-[linear-gradient(to_bottom,rgba(3,7,18,0.8),rgba(3,7,18,0.95)),url("https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k=")]' 
              : 'bg-[linear-gradient(to_bottom,rgba(248,250,252,0.85),rgba(248,250,252,0.95)),url("https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k=")]'
          } bg-cover bg-center bg-fixed`} 
        />
        <div className={`gsap-service-orb-1 absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-screen filter blur-[120px] opacity-30 ${isDarkMode ? 'bg-indigo-600/40' : 'bg-blue-400/30'}`} />
        <div className={`gsap-service-orb-2 absolute bottom-[10%] -left-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-screen filter blur-[100px] opacity-20 ${isDarkMode ? 'bg-teal-600/40' : 'bg-cyan-400/30'}`} />
        <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${isDarkMode ? 'opacity-[0.05]' : 'opacity-[0.03]'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="gsap-service-header inline-flex items-center gap-3 mb-6">
          <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
            <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>OUR EXPERTISE</span>
            <div className={`w-12 h-1 bg-gradient-to-l rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
          </div>
          <h2 className={`gsap-service-header text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Comprehensive <br className="hidden sm:block" />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-400 to-indigo-400' : 'from-blue-600 via-cyan-500 to-blue-600'}`}>
               Civil Solutions
            </span>
          </h2>
          <p className={`gsap-service-header text-base sm:text-lg font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Delivering end-to-end land development, civil works, and heavy equipment leasing with unmatched precision and safety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="gsap-services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="group relative h-full"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  isDarkMode ? 'bg-indigo-500/20' : 'bg-blue-500/20'
                }`} />
                
                {/* Card Content */}
                <div className={`relative h-full flex flex-col p-6 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-white/80 border-gray-200 hover:bg-white shadow-xl shadow-blue-900/5'
                }`}>
                  
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 shadow-lg shadow-indigo-500/10' 
                      : 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10 shadow-lg shadow-blue-500/10'
                  }`}>
                    {Icon && <Icon className={`text-3xl ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`} />}
                  </div>

                  {/* Text */}
                  <div className="flex-grow">
                    <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed font-medium mb-6 ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-800'}`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Interactive Button */}
                  <div className="mt-auto pt-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      isDarkMode ? 'bg-white/5 group-hover:bg-indigo-500 text-white' : 'bg-slate-100 group-hover:bg-blue-600 text-slate-800 group-hover:text-white'
                    }`}>
                      <MdArrowForward className="text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                    <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-500 group-hover:text-indigo-300' : 'text-slate-400 group-hover:text-blue-600'
                    }`}>
                      Explore
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
