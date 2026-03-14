import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import { MdGroups, MdChevronLeft, MdChevronRight } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const MeetOurTeam = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const navRef = useRef(null);
  
  const [currentDeptIndex, setCurrentDeptIndex] = useState(0);

  const departments = [
    {
      name: 'Executive Management',
      members: [
        {
          name: 'Rolando Climaco',
          position: 'President / CEO',
          bio: 'Founder and visionary leader overseeing all company operations.',
          image: '/images/employee/rolando.webp',
        },
      ],
    },
    {
      name: 'HR & Admin Department',
      members: [
        {
          name: 'Ofelia Macaldo',
          position: 'HR Admin & Legal - Head',
          bio: 'Oversees legal matters, contracts, employee management, and HR operations.',
          image: '/images/employee/ofelia.webp',
        },
        {
          name: 'Ian Climaco',
          position: 'HR Officer',
          bio: 'Manages employee records, hiring, benefits, and compliance matters.',
          image: null,
        },
      ],
    },
    {
      name: 'Finance & Accounting Department',
      members: [
        {
          name: 'Mabel Climaco',
          position: 'Vice President',
          bio: 'Leads financial strategy and oversees accounting operations.',
          image: '/images/employee/maria.webp',
        },
        {
          name: 'Ma. Cristina Dino',
          position: 'Accounting Head',
          bio: 'Manages bookkeeping, financial records, permits, and tax compliance.',
          image: '/images/employee/cristina.webp',
        },
      ],
    },
    {
      name: 'Procurement Department',
      members: [
        {
          name: 'Benilda Padilla',
          position: 'Purchasing Head',
          bio: 'Directs material sourcing, supplier negotiations, and quality assurance.',
          image: '/images/employee/benilda.webp',
        },
        {
          name: 'Ivan Climaco',
          position: 'Purchasing Officer',
          bio: 'Manages procurement operations and supplier coordination.',
          image: null,
        },
      ],
    },
    {
      name: 'Safety & Logistics Department',
      members: [
        {
          name: 'Rolisdio Climaco',
          position: 'AMO, Site Supervisor & Safety Officer',
          bio: 'Oversees logistics operations, site safety, and workplace compliance.',
          image: '/images/employee/rolisdio.webp',
        },
        {
          name: 'Edgardo Canicon',
          position: 'Material Handler & Records',
          bio: 'Manages warehouse operations, inventory control, and material distribution.',
          image: null,
        },
      ],
    },
    {
      name: 'Engineering Department',
      members: [
        {
          name: 'Engr. Genesis De Guzman',
          position: 'Project Manager',
          bio: 'Leads project planning, technical design, and engineering solutions.',
          image: '/images/employee/genesis.webp',
        },
        {
          name: 'Katleen Mae Martinez',
          position: 'QA/QC Engineer',
          bio: 'Ensures quality assurance and quality control across all projects.',
          image: '/images/employee/katleen.webp',
        },
        {
          name: 'Persues Sarte',
          position: 'Site Engineer',
          bio: 'Provides on-site technical support and oversees project implementation.',
          image: null,
        },
      ],
    },
  ];

  const handlePrevDept = () => {
    setCurrentDeptIndex((prev) => (prev === 0 ? departments.length - 1 : prev - 1));
  };

  const handleNextDept = () => {
    setCurrentDeptIndex((prev) => (prev === departments.length - 1 ? 0 : prev + 1));
  };

  const currentDepartment = departments[currentDeptIndex];

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
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

        // Navigation & Indicators Animation
        gsap.from(navRef.current, {
          scrollTrigger: {
            trigger: navRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });

        // Member Cards Stagger Animation (Initial Load)
        if (cardsRef.current) {
          gsap.from(cardsRef.current.children, {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.2)',
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Department Transition Animation
  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' }
      );
    }
  }, [currentDeptIndex]);


  return (
    <section 
      id="team" 
      ref={sectionRef}
      className={`relative py-24 md:py-32 lg:py-40 overflow-hidden transition-colors duration-700 ${
        isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-0 right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[150px] opacity-20 transform translate-x-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-indigo-600' : 'bg-blue-300'}`} />
        <div className={`absolute bottom-0 left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-20 transform -translate-x-1/2 translate-y-1/2 ${isDarkMode ? 'bg-purple-600' : 'bg-cyan-300'}`} />
        <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${isDarkMode ? 'opacity-[0.04]' : 'opacity-[0.03]'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
            <span className={`text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2 ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>
              <MdGroups className="text-xl" />
              Leadership
            </span>
            <div className={`w-12 h-1 bg-gradient-to-l rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Meet Our <br className="hidden sm:block" />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-400 to-indigo-400' : 'from-blue-600 via-cyan-500 to-blue-600'}`}>
               Team
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Experienced professionals dedicated to executing your vision with precision and expertise.
          </p>
        </div>

        {/* Department Navigation */}
        <div ref={navRef} className="flex flex-col items-center mb-16">
          <div className={`inline-flex items-center gap-3 sm:gap-5 p-2 rounded-full border backdrop-blur-md mb-6 ${
             isDarkMode ? 'bg-white/5 border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.1)]' : 'bg-white/80 border-slate-200 shadow-sm'
          }`}>
            <button
              onClick={handlePrevDept}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500 hover:text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <MdChevronLeft className="text-xl sm:text-2xl" />
            </button>
            <h3 className={`text-lg sm:text-xl font-black w-56 sm:w-64 text-center tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {currentDepartment.name}
            </h3>
            <button
              onClick={handleNextDept}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500 hover:text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <MdChevronRight className="text-xl sm:text-2xl" />
            </button>
          </div>

          {/* Department Dots */}
          <div className="flex gap-2">
             {departments.map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentDeptIndex(index)}
                 className={`transition-all duration-500 rounded-full h-1.5 ${
                    index === currentDeptIndex
                      ? (isDarkMode ? 'w-8 bg-indigo-500' : 'w-8 bg-blue-600')
                      : (isDarkMode ? 'w-2 bg-white/20 hover:bg-white/40' : 'w-2 bg-slate-300 hover:bg-slate-400')
                 }`}
                 aria-label={`Go to department ${index + 1}`}
               />
             ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div 
          ref={cardsRef}
          className="flex flex-wrap justify-center gap-8 lg:gap-10"
        >
          {currentDepartment.members.map((member, index) => (
            <div
              key={index}
              className={`group relative w-full sm:w-[300px] rounded-[2rem] p-6 sm:p-8 mt-12 transition-all duration-500 hover:-translate-y-2 border backdrop-blur-xl flex flex-col items-center ${
                 isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/20' 
                  : 'bg-white border-slate-200 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10'
              }`}
            >
              {/* Profile Image - Overlapping Top */}
              <div className={`absolute -top-12 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110 ${
                 isDarkMode ? 'border-[#030712] shadow-xl shadow-black/50 bg-[#1e293b]' : 'border-[#f8fafc] shadow-xl shadow-blue-900/10 bg-slate-100'
              }`}>
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <MdGroups className={`text-4xl sm:text-5xl opacity-50 ${isDarkMode ? 'text-indigo-400' : 'text-blue-400'}`} />
                  </div>
                )}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDarkMode ? 'bg-indigo-500/20' : 'bg-blue-500/20 mix-blend-multiply'}`} />
              </div>

              {/* Card Content */}
              <div className="mt-14 sm:mt-16 text-center w-full flex-grow flex flex-col">
                <h4 className={`text-lg sm:text-xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {member.name}
                </h4>
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? 'bg-indigo-500/20 text-indigo-300' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {member.position}
                  </span>
                </div>
                <div className={`w-full h-[1px] mb-4 ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`} />
                <p className={`text-xs sm:text-sm leading-relaxed font-medium pb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {member.bio}
                </p>
              </div>
              
              {/* Decorative Corner */}
              <div className={`absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-tl-[1.5rem] rounded-br-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${
                 isDarkMode ? 'bg-gradient-to-br from-indigo-500 to-purple-500' : 'bg-gradient-to-br from-blue-500 to-cyan-500'
              }`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetOurTeam;