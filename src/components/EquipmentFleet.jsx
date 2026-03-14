import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';
import { MdLocalShipping, MdBuild, MdConstruction, MdExtension, MdDirections, MdLightbulb, MdChevronRight, MdSettings } from 'react-icons/md';
import ParallaxImage from './ui/ParallaxImage';

gsap.registerPlugin(ScrollTrigger);

const EquipmentFleet = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sidebarRef = useRef(null);
  const displayRef = useRef(null);
  
  const [activeCategory, setActiveCategory] = useState('dump-trucks');
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // Icon mapping for fleet types
  const iconMap = {
    'dump-trucks': MdLocalShipping,
    'compactors': MdConstruction,
    'bulldozers': MdBuild,
    'motor-grader': MdExtension,
    'backhoes': MdDirections,
    'support': MdLightbulb,
  };

  // Equipment categories with detailed items
  const categories = {
    'dump-trucks': {
      label: 'Dump Trucks',
      icon: MdLocalShipping,
      items: [
        { id: 1, model: 'FUSO / 2006', plate: 'CAG5249', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 2, model: 'ISUZU / 2005', plate: 'CAG2259', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 3, model: 'ISUZU / 2021', plate: 'NFJ3086', capacity: '10,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 4, model: 'MITSUBISHI / 2023', plate: 'CBS4575', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 5, model: 'FUSO / 2006', plate: 'CAL1933', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 6, model: 'SINOTRUK / 2021', plate: 'NGL9390', capacity: '12,500 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 7, model: 'SINOTRUK / 2020', plate: 'NGR3512', capacity: '8,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 8, model: 'MITSUBISHI / 2019', plate: 'NFZ7288', capacity: '10,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 9, model: 'FUSO / 2021', plate: 'NII8356', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
      ]
    },
    'compactors': {
      label: 'Compactors',
      icon: MdConstruction,
      items: [
        { id: 1, model: 'Caterpillar 2016', capacity: '10 tons', units: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmhzlLZY2vWvFCdYKlf9AZ9klutf-4h7KAg&s' },
        { id: 2, model: 'Volvo', capacity: '12 tons', units: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmhzlLZY2vWvFCdYKlf9AZ9klutf-4h7KAg&s' },
      ]
    },
    'bulldozers': {
      label: 'Bulldozers',
      icon: MdBuild,
      items: [
        { id: 1, model: 'Caterpillar DSH - 2007', capacity: 'Heavy duty', units: '1', image: 'https://cdn.britannica.com/42/124942-050-5057EA58/Bulldozer.jpg' },
      ]
    },
    'motor-grader': {
      label: 'Motor Grader',
      icon: MdExtension,
      items: [
        { id: 1, model: 'Mitsubishi - MG 130', capacity: 'Precision grading', units: '1', image: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20171009-37324-16812' },
      ]
    },
    'backhoes': {
      label: 'Backhoes / Excavators',
      icon: MdDirections,
      items: [
        { id: 1, model: 'Volvo - Excavator - 2012', capacity: '1.2 cu.m.', units: '1', image: 'https://res.cloudinary.com/dsfzcj5qk/image/upload/v1712765646/biggest-backhoes/biggest-backhoes-in-the-world.jpg' },
        { id: 2, model: 'Caterpillar - 2018 - 320 E', capacity: '0.98 cu.m.', units: '1', image: 'https://res.cloudinary.com/dsfzcj5qk/image/upload/v1712765646/biggest-backhoes/biggest-backhoes-in-the-world.jpg' },
        { id: 3, model: 'Caterpillar - 2016 - 320 E', capacity: '0.98 cu.m.', units: '1', image: 'https://res.cloudinary.com/dsfzcj5qk/image/upload/v1712765646/biggest-backhoes/biggest-backhoes-in-the-world.jpg' },
      ]
    },
    'support': {
      label: 'Support Units',
      icon: MdLightbulb,
      items: [
        { id: 1, model: 'Tower Light', units: '3', capacity: 'High-power lighting', image: 'https://files01.pna.gov.ph/ograph/2020/11/10/container-vans.jpg' },
        { id: 2, model: 'Container Van', units: '2', capacity: 'Storage & transport', image: 'https://files01.pna.gov.ph/ograph/2020/11/10/container-vans.jpg' },
      ]
    },
  };

  const categoryList = Object.entries(categories).map(([key, value]) => ({ key, ...value }));
  const currentCategory = categories[activeCategory];
  const currentItem = currentCategory?.items[activeItemIndex] || currentCategory?.items[0];

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

        // Sidebar Stagger Animation
        gsap.from('.gsap-fleet-category', {
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          x: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.2)',
        });

        // Main Display Animation
        gsap.from(displayRef.current, {
          scrollTrigger: {
            trigger: displayRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          x: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate display content change when category or item changes
  useEffect(() => {
    if (displayRef.current) {
      gsap.fromTo(displayRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeCategory, activeItemIndex]);


  return (
    <section 
      id="equipment" 
      ref={sectionRef}
      className={`relative py-24 md:py-32 lg:py-40 overflow-hidden transition-colors duration-700 ${
        isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {!isDarkMode && (
          <>
            <div className="absolute top-1/4 -left-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[120px] opacity-20 bg-blue-300" />
            <div className="absolute bottom-1/4 -right-[10%] w-[35vw] h-[35vw] rounded-full mix-blend-screen filter blur-[100px] opacity-20 bg-cyan-300" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
            <span className={`text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2 ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>
              <MdSettings className="text-lg animate-spin-slow" />
              EQUIPMENT & FLEET
            </span>
            <div className={`w-12 h-1 bg-gradient-to-l rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Modern <br className="hidden sm:block" />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-400 to-indigo-400' : 'from-blue-600 via-cyan-500 to-blue-600'}`}>
               Heavy Fleet
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            State-of-the-art equipment assets supporting large-scale site development and civil engineering demands.
          </p>
        </div>

        {/* Interactive Equipment Browser */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar Category List */}
          <div ref={sidebarRef} className="lg:w-1/3 xl:w-1/4">
            <ul className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide snap-x">
              {categoryList.map((cat) => {
                const isActive = activeCategory === cat.key;
                const Icon = cat.icon;
                return (
                  <li key={cat.key} className="gsap-fleet-category shrink-0 lg:shrink snap-start">
                    <button
                      onClick={() => {
                        setActiveCategory(cat.key);
                        setActiveItemIndex(0);
                      }}
                      className={`group w-full flex items-center justify-between gap-4 px-6 py-4 lg:py-5 rounded-2xl font-bold transition-all duration-300 border backdrop-blur-md ${
                        isActive
                          ? isDarkMode
                            ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)] scale-[1.02] lg:scale-105'
                            : 'bg-blue-600/10 text-blue-700 border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.1)] scale-[1.02] lg:scale-105'
                          : isDarkMode
                            ? 'bg-white/[0.03] text-slate-400 border-white/5 hover:bg-white/[0.06] hover:text-slate-200'
                            : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-800 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isActive 
                            ? (isDarkMode ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30')
                            : (isDarkMode ? 'bg-white/5 text-slate-500 group-hover:bg-white/10 group-hover:text-slate-300' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-blue-600')
                        }`}>
                          <Icon className="text-xl" />
                        </div>
                        <span className="text-sm tracking-wide whitespace-nowrap">{cat.label}</span>
                      </div>
                      <MdChevronRight className={`hidden lg:block text-xl transition-all ${
                        isActive 
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0'
                      }`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Main Equipment Display */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div ref={displayRef} className={`rounded-[2rem] p-6 sm:p-8 lg:p-10 border backdrop-blur-xl transition-all duration-500 ${
              isDarkMode ? 'bg-white/5 border-white/10 shadow-2xl shadow-black/50' : 'bg-white/80 border-gray-200 shadow-2xl shadow-blue-900/5'
            }`}>
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Image & Display Area */}
                <div className="w-full lg:w-[55%]">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group bg-slate-900 pointer-events-none">
                    <ParallaxImage
                      src={currentItem?.image}
                      alt={currentItem?.model}
                      containerClassName="absolute inset-0 w-full h-full"
                      className="transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      speed={0.6}
                    />
                    
                    {/* Gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                    
                    {/* Floating Info inside Image Box */}
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                       <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-2 backdrop-blur-md border ${
                          isDarkMode ? 'bg-indigo-500/30 border-indigo-400/50 text-indigo-200' : 'bg-blue-600/80 border-blue-400/50 text-white'
                       }`}>
                         {currentCategory.label}
                       </span>
                       <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-lg">
                          {currentItem?.model}
                       </h3>
                    </div>
                  </div>
                </div>

                {/* Details & Selector Area */}
                <div className="w-full lg:w-[45%] flex flex-col pt-2 lg:pt-4">
                  
                  {/* Equipment Specifications */}
                  <div className="mb-10 lg:mb-12">
                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-6 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      Specifications
                    </h4>
                    
                    <div className="space-y-3">
                      {currentItem?.capacity && (
                        <div className={`p-3 sm:p-4 rounded-xl flex items-center justify-between border ${
                          isDarkMode ? 'bg-indigo-500/5 border-indigo-500/10' : 'bg-blue-50 border-blue-100'
                        }`}>
                          <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Capacity</span>
                          <span className={`text-sm font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{currentItem.capacity}</span>
                        </div>
                      )}
                      {currentItem?.plate && (
                        <div className={`p-3 sm:p-4 rounded-xl flex items-center justify-between border ${
                          isDarkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                        }`}>
                          <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Plate No.</span>
                          <span className={`text-sm font-bold font-mono ${isDarkMode ? 'text-indigo-300' : 'text-blue-700'}`}>{currentItem.plate}</span>
                        </div>
                      )}
                      {currentItem?.units && (
                        <div className={`p-3 sm:p-4 rounded-xl flex items-center justify-between border ${
                          isDarkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                        }`}>
                          <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Available Units</span>
                          <span className={`text-sm font-black ${isDarkMode ? 'text-teal-400' : 'text-cyan-600'}`}>{currentItem.units}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Unit Selector Grid */}
                  <div className="mt-auto">
                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span>Select Unit</span>
                      <span className="text-xs bg-slate-500/10 px-2 py-1 rounded-md">{currentCategory.items.length} units</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCategory.items.map((item, idx) => {
                        const isItemSelected = activeItemIndex === idx;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveItemIndex(idx)}
                            className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 border ${
                              isItemSelected
                                ? isDarkMode
                                  ? 'bg-indigo-500 text-white border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                                  : 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                                : isDarkMode
                                  ? 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
                                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
                            }`}
                          >
                            {item.plate || `Unit 0${idx + 1}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default EquipmentFleet;
