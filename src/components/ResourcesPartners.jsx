import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import { MdHandshake, MdLocationOn, MdPhone, MdPerson, MdCheckCircle, MdBusiness } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const ResourcesPartners = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const sitesRef = useRef(null);
  const suppliersRef = useRef(null);

  const stats = [
    { number: '20M+', label: 'Cubic Meters', desc: 'Backfilling materials at Calamba site' },
    { number: '2.2M+', label: 'Cubic Meters', desc: 'Backfilling materials at Silang site' },
    { number: '14+', label: 'Heavy Equipment', desc: 'Modern fleet including excavators & dozers' },
    { number: '9+', label: 'Dump Trucks', desc: 'Various capacities from 8,000 to 12,500 kg' },
  ];

  const sites = [
    {
      title: 'Calamba City Site',
      image: '/images/land-development-site1.png',
      coords: '14°08\'32.0"N 121°09\'37.0"E',
      address: '45R6+V4J Calamba, Laguna',
      capacity: '20M+ cubic meters',
      desc: 'Covering 7 lots with a total volume of 19,580,004.6 cubic meters of excess backfill materials (Jastifias).'
    },
    {
      title: 'Silang, Cavite Site',
      image: '/images/land-development-site2.png',
      coords: '14°15\'02"N 120°59\'12"E',
      address: 'Sabutan, 7X2P+6MF Silang, Cavite',
      capacity: '2.2M+ cubic meters',
      desc: 'Covering 5 lots with a total volume of 2,241,000 cubic meters of excess backfill materials (Sitikis).'
    }
  ];

  const suppliers = [
    {
      company: 'D.E. Abesamis Builders, Inc.',
      address: '427 Maryland Compound, Mayapa, Calamba',
      contact: '0968-853-0826',
      person: 'Mr. Danilo Abesamis',
      supply: 'Aggregates',
    },
    {
      company: 'Jeff San Luis Enterprises',
      address: 'Sta. Cruz, Laguna',
      contact: '0917-529-2654',
      person: 'Mr. Jeff San Luis',
      supply: 'Heavy Equipment',
    },
    {
      company: 'Citicon',
      address: 'LIIP Ave, Biñan, Laguna',
      contact: '0922-821-0268',
      person: 'Ms. Elma Olfindo',
      supply: 'Ready-mix concrete',
    },
    {
      company: 'Prea Enterprises',
      address: 'Greenheights Vill., Parañaque',
      contact: '0998-325-6300',
      person: 'Ms. Jesette Reyes',
      supply: 'AC Units & Office Supplies',
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

      // Stats Counters Animation
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.2)',
        });
      }

      // Sites Animation
      if (sitesRef.current) {
        gsap.from('.gsap-site-card', {
          scrollTrigger: {
            trigger: sitesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          x: (i) => (i % 2 === 0 ? -50 : 50),
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        });
      }

      // Suppliers Animation
      if (suppliersRef.current) {
        gsap.from('.gsap-supplier-card', {
          scrollTrigger: {
            trigger: suppliersRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.1)',
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="resources" 
      ref={sectionRef}
      className={`relative pt-24 md:pt-32 pb-0 overflow-hidden transition-colors duration-700 ${
        isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 transform -translate-x-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-indigo-600' : 'bg-blue-300'}`} />
        <div className={`absolute bottom-1/3 right-0 w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 transform translate-x-1/2 ${isDarkMode ? 'bg-purple-600' : 'bg-cyan-300'}`} />
        <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${isDarkMode ? 'opacity-[0.04]' : 'opacity-[0.03]'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
             <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
             <span className={`text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2 ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>
               <MdHandshake className="text-xl" />
               Assets & Network
             </span>
             <div className={`w-12 h-1 bg-gradient-to-l rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Resources & <br className="hidden sm:block" />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-400 to-indigo-400' : 'from-blue-600 via-cyan-500 to-blue-600'}`}>
               Partners
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Combining immense local resources with specialized supplier networks to achieve project success.
          </p>
        </div>

        {/* Floating Stats Bar */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20 lg:mb-24">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`group relative p-6 sm:p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center ${
                 isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]' 
                  : 'bg-white border-slate-200 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)]'
              }`}
            >
              <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-3 ${
                isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400' : 'text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500'
              }`}>
                {stat.number}
              </h3>
              <p className={`text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{stat.label}</p>
              <div className={`w-8 h-1 rounded-full mb-3 ${isDarkMode ? 'bg-indigo-500/30' : 'bg-blue-600/30'}`} />
              <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Development Sites */}
        <div ref={sitesRef} className="mb-20 lg:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className={`text-2xl sm:text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Land Development Sites</h3>
            <div className={`h-[1px] flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`} />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             {sites.map((site, index) => (
               <div key={index} className={`gsap-site-card relative group rounded-[2.5rem] overflow-hidden border ${isDarkMode ? 'border-white/10 bg-[#0f172a]' : 'border-slate-200 bg-white shadow-2xl shadow-blue-900/5'}`}>
                 
                 {/* Image Split */}
                 <div className="relative h-56 sm:h-72 overflow-hidden bg-slate-900">
                    <img 
                      src={site.image} 
                      alt={site.title}
                      className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <h4 className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">{site.title}</h4>
                    </div>
                 </div>

                 {/* Content Split */}
                 <div className="p-6 sm:p-8 relative z-10 flex flex-col justify-between h-auto">
                    <div className="space-y-4 mb-6">
                       <div className="flex items-start gap-4">
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isDarkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-blue-50 text-blue-600'}`}>
                           <MdLocationOn className="text-xl" />
                         </div>
                         <div>
                           <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Location & Coordinates</p>
                           <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{site.address}</p>
                           <p className={`text-xs font-mono mt-1 ${isDarkMode ? 'text-indigo-300' : 'text-blue-600'}`}>{site.coords}</p>
                         </div>
                       </div>
                       
                       <div className="flex items-start gap-4">
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isDarkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-cyan-50 text-cyan-600'}`}>
                           <MdCheckCircle className="text-xl" />
                         </div>
                         <div>
                           <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Total Capacity</p>
                           <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{site.capacity}</p>
                         </div>
                       </div>
                    </div>

                    <div className={`p-4 sm:p-5 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                       <p className={`text-xs sm:text-sm leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                         {site.desc}
                       </p>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Supplier Network */}
        <div ref={suppliersRef} className="mb-20 lg:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className={`text-2xl sm:text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Supplier Network</h3>
            <div className={`h-[1px] flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suppliers.map((supplier, idx) => (
              <div 
                key={idx}
                className={`gsap-supplier-card group relative p-6 rounded-[2rem] border backdrop-blur-md transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                   isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)]' 
                    : 'bg-white/80 border-slate-200 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(37,99,235,0.05)]'
                }`}
              >
                 {/* Top Label */}
                 <div className="mb-4">
                   <span className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest ${
                      isDarkMode ? 'bg-indigo-500/20 text-indigo-300' : 'bg-blue-50 text-blue-700'
                   }`}>
                     {supplier.supply}
                   </span>
                 </div>
                 
                 <h4 className={`text-lg font-black mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                   {supplier.company}
                 </h4>

                 <div className="space-y-3 mt-auto">
                   <div className="flex items-start gap-3">
                     <MdLocationOn className={`shrink-0 mt-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                     <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{supplier.address}</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <MdPerson className={`shrink-0 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                     <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{supplier.person}</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <MdPhone className={`shrink-0 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                     <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{supplier.contact}</p>
                   </div>
                 </div>

                 {/* Hover Glow */}
                 <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${
                    isDarkMode ? 'bg-gradient-to-br from-indigo-500/5 to-purple-500/5' : 'bg-gradient-to-br from-blue-500/5 to-cyan-500/5'
                 }`} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative Bottom Graphic replacing the rigid clip-path */}
      <div className="relative w-full h-[100px] sm:h-[150px] lg:h-[200px] overflow-hidden">
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full h-full preserve-3d" 
          preserveAspectRatio="none"
        >
          <path 
            fill={isDarkMode ? '#0f172a' : '#0099FF'} 
            fillOpacity="1" 
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,85.3C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ResourcesPartners;