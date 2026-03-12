import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import {
  MdVerified,
  MdSecurity,
  MdRecycling,
  MdGroupWork,
  MdStars,
  MdPeopleOutline,
  MdAutoAwesome,
  MdRemoveRedEye,
} from 'react-icons/md';
import CardSwap, { Card } from './ui/CardSwap';
import { cn } from '../utils/cn';
import SplitTextReveal from './ui/SplitTextReveal';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);

  // Responsive card dimensions for CardSwap
  const [cardWidth, setCardWidth] = useState(420);
  const [cardHeight, setCardHeight] = useState(260);
  const [cardDistance, setCardDistance] = useState(40);
  const [verticalDistance, setVerticalDistance] = useState(50);
  const [contentSize, setContentSize] = useState('lg'); // 'sm' | 'md' | 'lg'

  useEffect(() => {
    const updateCardSize = () => {
      const width = window.innerWidth;
      let newWidth, sizeLevel;

      if (width < 640) {
        newWidth = 250; 
        sizeLevel = 'sm';
      } else if (width < 1024) {
        newWidth = 300; 
        sizeLevel = 'md';
      } else {
        newWidth = 420; 
        sizeLevel = 'lg';
      }

      const scale = newWidth / 420;
      setCardWidth(newWidth);
      setCardHeight(Math.round(260 * scale));
      setCardDistance(Math.round(40 * scale));
      setVerticalDistance(Math.round(50 * scale));
      setContentSize(sizeLevel);
    };

    updateCardSize();
    window.addEventListener('resize', updateCardSize);
    return () => window.removeEventListener('resize', updateCardSize);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro section animations
      const introElements = gsap.utils.toArray('.gsap-intro');
      introElements.forEach((el, idx) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          delay: idx * 0.1,
          ease: "easeOut"
        });
      });

      // Journey Timeline
      const timelinePoints = gsap.utils.toArray('.gsap-journey');
      gsap.from(timelinePoints, {
        scrollTrigger: {
          trigger: '.gsap-journey-container',
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Mission & Vision
      const missionCards = gsap.utils.toArray('.gsap-mission');
      missionCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          scale: 0.95,
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out"
        });
      });

      // Values Stagger
      const values = gsap.utils.toArray('.gsap-value');
      gsap.from(values, {
        scrollTrigger: {
          trigger: '.gsap-values-container',
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });

      // Parallax Orbs and Background Zoom
      gsap.to('.gsap-orb-1', {
        y: 150,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
      gsap.to('.gsap-orb-2', {
        y: -150,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
      // Global background subtle scale across the section
      gsap.to('.about-bg-layer', {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: 'Quality Materials',
      reactIcon: MdVerified,
      image: 'https://www.shutterstock.com/image-illustration/construction-materials-tools-indoors-walls-600nw-2464204581.jpg',
    },
    {
      title: 'Safety First',
      reactIcon: MdSecurity,
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20220924/pngtree-safety-first-caution-work-warning-photo-image_14747062.jpg',
    },
    {
      title: 'Eco-Friendly',
      reactIcon: MdRecycling,
      image: 'https://media.istockphoto.com/id/1502289160/photo/global-sustainable-environment-concept-esg-net-zero-eco-co2-carbon-human-hand-holding-green.jpg?s=612x612&w=0&k=20&c=Q9F-Q7dDBOrNj5Cd9jjjw-0ioRSJBTM4YacK9xctFP8=',
    },
    {
      title: 'Client Focused',
      reactIcon: MdGroupWork,
      image: 'https://png.pngtree.com/thumb_back/fw800/background/20250323/pngtree-modern-client-focus-with-futuristic-block-text-direction-and-fast-priority-photo-photo-image_70143188.webp',
    },
  ];

  const highlights = [
    'Established in 2018 and registered with the Securities and Exchange Commission on November 28, 2018.',
    'CLIBERDUCHE represents the founders\' surnames: CLImaco, BERonilla, PiaDUCHE.',
    'Now led by the founder\'s spouse and brother as directors, focused on long-term growth.',
  ];

  const missionVision = [
    {
      title: 'Mission',
      desc: 'We are a responsible land development company that provides highquality backfill materials for land development projects and other infrastructures, including but not limited to sub-base materials like aggregates, mixed soil, and boulders. We support sustainable land development by adhering to the existing environmental regulations of the Philippines. We provide jobs for fellow Filipinos, which significantly contributes to boosting our country\'s economy. We are also keen to deliver excellent value to our partner communities, investors, employees, and other stakeholders.',
    },
    {
      title: 'Vision',
      desc: 'Our vision is to be a highly respected, world-class natural resource land development company committed to adhering to international standards in land development operations and environmental conservation, sustainable projects that cover converting land development sites into other useful and economic projects in the future, thus converting land development projects to future commercial and housing projects.',
    },
  ];

  const coreValues = [
    {
      title: 'Quality',
      reactIcon: MdStars,
      desc: 'Ensuring projects are of high quality and paired with local standards to be competitive in the national and local market scene.',
    },
    {
      title: 'Safety',
      reactIcon: MdSecurity,
      desc: 'Ensuring safety at work site, safety of projects and safety of personnel through rigorous safety practices before and after execution of projects.',
    },
    {
      title: 'Integrity',
      reactIcon: MdPeopleOutline,
      desc: 'Ensuring compliance with existing laws covering the construction industry, reliable workforce and our timely delivery of projects.',
    },
  ];

  const [expandedMission, setExpandedMission] = useState([false, false]);
  const toggleMission = (i) => {
    setExpandedMission((prev) => {
      const copy = [...prev];
      copy[i] = !copy[i];
      return copy;
    });
  };

  const getCardContentClasses = () => {
    const base = "flex flex-col justify-between w-full h-full rounded-2xl backdrop-blur-xl transition-all duration-300";
    const theme = isDarkMode
      ? "border border-white/10 bg-white/5 shadow-2xl shadow-black/50"
      : "border border-gray-200 bg-white/60 shadow-xl shadow-blue-900/5";

    let sizing = contentSize === 'sm' ? "p-3" : contentSize === 'md' ? "p-4" : "p-6";
    return `${base} ${theme} ${sizing}`;
  };

  const getIconContainerClasses = () => {
    const base = "rounded-xl flex items-center justify-center mb-2";
    const theme = isDarkMode
      ? "bg-gradient-to-br from-indigo-500/20 to-teal-500/20"
      : "bg-gradient-to-br from-blue-500/10 to-cyan-500/10";
    let sizing = contentSize === 'sm' ? "w-8 h-8" : contentSize === 'md' ? "w-10 h-10" : "w-12 h-12";
    return `${base} ${theme} ${sizing}`;
  };

  const getIconClasses = () => {
    return `${isDarkMode ? "text-indigo-400" : "text-blue-600"} ${contentSize === 'sm' ? "text-base" : contentSize === 'md' ? "text-lg" : "text-xl"}`;
  };

  const getTitleClasses = () => {
    return `font-bold ${isDarkMode ? "text-white" : "text-slate-900"} ${contentSize === 'sm' ? "text-xs" : "text-sm"}`;
  };

  const getImageHeight = () => {
    return contentSize === 'sm' ? "60px" : contentSize === 'md' ? "80px" : "100px";
  };

  return (
    <section id="about" ref={containerRef} className={`relative overflow-hidden transition-colors duration-700 ${
      isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
    }`}>
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="about-bg-layer absolute inset-[-10%] w-[120%] h-[120%]">
          <div className={`gsap-orb-1 absolute top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[120px] opacity-30 ${isDarkMode ? 'bg-indigo-600/50' : 'bg-blue-400/40'}`} />
          <div className={`gsap-orb-2 absolute top-[60%] -right-[10%] w-[35vw] h-[35vw] rounded-full mix-blend-screen filter blur-[100px] opacity-20 ${isDarkMode ? 'bg-teal-600/40' : 'bg-cyan-400/30'}`} />
          <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${isDarkMode ? 'opacity-[0.03]' : 'opacity-[0.04]'}`} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 border-b border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8">
            <div className="gsap-intro inline-flex items-center gap-3">
              <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-teal-400' : 'from-blue-600 to-cyan-500'}`} />
              <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>ABOUT US</span>
            </div>
            
            <h2 className="gsap-intro flex flex-col font-black leading-[1.1] tracking-tight w-full">
              <div className="overflow-hidden pb-1">
                 <SplitTextReveal
                    text="Building"
                    className={`block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                    stagger={0.05}
                    delay={0.1}
                 />
              </div>
              <div className="overflow-hidden pb-1">
                 <SplitTextReveal
                    text="Tomorrow"
                    className={`block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-400 to-indigo-400' : 'from-blue-600 via-cyan-500 to-blue-600'}`}
                    stagger={0.06}
                    delay={0.4}
                 />
              </div>
              <div className="overflow-hidden pb-1">
                 <SplitTextReveal
                    text="Today."
                    className={`block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                    stagger={0.05}
                    delay={0.8}
                 />
              </div>
            </h2>
            
            <p className={`gsap-intro text-base sm:text-lg md:text-xl leading-relaxed max-w-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Cliberduche Corporation is a full-scale land development and civil works contractor serving CALABARZON with unwavering commitment to quality and safety.
            </p>
            
            <div className={`gsap-intro pt-6 mt-4 border-l-2 pl-6 ${isDarkMode ? 'border-indigo-500/30' : 'border-blue-500/30'}`}>
              <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                <span className={isDarkMode ? 'text-indigo-400' : 'text-blue-600'}>Established 2018</span> - SEC Registered
              </p>
              <p className={`mt-2 italic ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                "CLIBERDUCHE represents: <span className={isDarkMode ? 'text-indigo-300' : 'text-blue-500'}>CLImaco, BERonilla, PiaDUCHE</span>"
              </p>
            </div>
          </div>

          <div className="gsap-intro relative flex justify-center w-full h-full min-h-[400px]">
             {/* Magnetic Wrapper on CardSwap container for subtle interaction */}
             <div className="interactive w-full flex justify-center">
               <CardSwap
                  width={cardWidth}
                height={cardHeight}
                cardDistance={cardDistance}
                verticalDistance={verticalDistance}
                delay={3500}
                pauseOnHover={false}
              >
                {features.map((feat, i) => (
                  <Card key={i}>
                    <div className={`card-body ${getCardContentClasses()}`}>
                      <div>
                        <div className={getIconContainerClasses()}>
                          {feat.reactIcon && React.createElement(feat.reactIcon, { className: getIconClasses() })}
                        </div>
                        <h3 className={getTitleClasses()}>{feat.title}</h3>
                      </div>
                      <img
                        src={feat.image}
                        alt={feat.title}
                        className="w-full object-cover rounded-xl mt-4 grayscale hover:grayscale-0 transition-all duration-500"
                        style={{ height: getImageHeight() }}
                      />
                    </div>
                  </Card>
                ))}
               </CardSwap>
             </div>
          </div>
        </div>
      </div>

      {/* Highlights / Journey */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="gsap-journey-container space-y-16">
            <div className="text-center">
              <span className={`inline-block mb-4 text-sm font-bold tracking-[0.2em] uppercase ${isDarkMode ? 'text-teal-400' : 'text-cyan-600'}`}>KEY MILESTONES</span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Our Journey</h2>
            </div>
            
            <div className="space-y-8 lg:space-y-12 pl-4 sm:pl-0 border-l lg:border-none border-white/10 ml-4 sm:ml-0 overflow-hidden">
              {highlights.map((item, i) => (
                <div key={i} className="gsap-journey flex flex-col sm:flex-row gap-6 sm:gap-8 items-start relative group cursor-pointer pl-6 sm:pl-0">
                  <div className="absolute left-[-24px] sm:relative sm:left-0 top-1 sm:top-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform shadow-xl ${
                      isDarkMode ? 'bg-indigo-500 text-white shadow-indigo-500/20' : 'bg-blue-600 text-white shadow-blue-500/20'
                    }`}>
                      {i + 1}
                    </div>
                  </div>
                  <div className={`flex-1 p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 ${
                    isDarkMode ? 'bg-white/5 border-white/10 group-hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10' : 'bg-white border-gray-200 group-hover:shadow-xl hover:border-blue-200'
                  }`}>
                    <p className={`text-base sm:text-lg leading-relaxed font-medium ${isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {missionVision.map((item, idx) => (
            <div key={idx} className={`gsap-mission relative p-8 md:p-12 rounded-3xl border overflow-hidden group ${
              isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-xl shadow-blue-900/5'
            }`}>
              <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40 ${
                isDarkMode ? (idx === 0 ? 'bg-indigo-500' : 'bg-teal-500') : (idx === 0 ? 'bg-blue-500' : 'bg-cyan-500')
              }`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                    isDarkMode ? 'bg-white/10 border border-white/10' : 'bg-slate-50 border border-slate-200'
                  }`}>
                    {idx === 0 ? <MdAutoAwesome className={`text-2xl ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`} /> : <MdRemoveRedEye className={`text-2xl ${isDarkMode ? 'text-teal-400' : 'text-cyan-600'}`} />}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                </div>
                
                <p id={`mission-text-${idx}`} className={cn(
                  'text-base md:text-lg leading-relaxed font-medium transition-all duration-500',
                  !expandedMission[idx] && 'line-clamp-4',
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                )}>
                  {item.desc}
                </p>
                
                <button
                  onClick={() => toggleMission(idx)}
                  className={`mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm transition-colors group/btn ${
                    isDarkMode ? 'text-white hover:text-indigo-400' : 'text-slate-900 hover:text-blue-600'
                  }`}
                  aria-expanded={expandedMission[idx]}
                  aria-controls={`mission-text-${idx}`}
                >
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">{expandedMission[idx] ? 'Show less' : 'Read more'}</span>
                    <span className="inline-block absolute left-0 top-0 transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-indigo-400">{expandedMission[idx] ? 'Show less' : 'Read more'}</span>
                  </span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="gsap-values-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className={`inline-block mb-4 text-sm font-bold tracking-[0.2em] uppercase ${isDarkMode ? 'text-purple-400' : 'text-indigo-600'}`}>OUR VALUES</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>What Drives Us</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {coreValues.map((value, i) => (
            <div key={i} className="gsap-value group relative" style={{ marginTop: window.innerWidth > 768 ? (i === 1 ? '40px' : i === 2 ? '80px' : '0') : '0' }}>
               <div className={`absolute inset-0 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  isDarkMode ? 'bg-indigo-500/20' : 'bg-blue-500/20'
                }`} />
               <div className={`relative h-full p-8 md:p-10 rounded-3xl border backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-2 ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-xl shadow-blue-900/5'
               }`}>
                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    isDarkMode ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10'
                 }`}>
                   {value.reactIcon && React.createElement(value.reactIcon, { className: `text-3xl ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}` })}
                 </div>
                 <h3 className={`text-xl lg:text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{value.title}</h3>
                 <p className={`text-sm lg:text-base leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>{value.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;