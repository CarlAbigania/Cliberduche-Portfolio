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
      ? "border border-indigo-500/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl shadow-indigo-500/20"
      : "border border-gray-200 bg-white shadow-xl shadow-blue-900/5";

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
    <section id="about" ref={containerRef} className={`relative rounded-t-[40px] md:rounded-t-[60px] transition-colors duration-700 ${
      isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
    }`}>
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-t-[40px] md:rounded-t-[60px]">
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

      {/* Narrative Section with Sticky Sidebar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column (Sticky Sidebar) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-6">
               <div className="inline-flex items-center gap-3">
                 <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-teal-400' : 'from-blue-600 to-cyan-500'}`} />
                 <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>THE STORY</span>
               </div>
               <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                 A Legacy <br className="hidden lg:block"/>of Excellence
               </h2>
               <p className={`text-lg font-medium leading-relaxed max-w-md ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                 From our humble beginnings to becoming a trusted leader in land development and civil works across CALABARZON.
               </p>
            </div>
          </div>

          {/* Right Column (Scrolling Narrative) */}
          <div className="lg:col-span-7 space-y-32">
            
            {/* Journey Block */}
            <div className="gsap-journey-container space-y-12">
               <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} border-b ${isDarkMode ? 'border-white/10' : 'border-slate-200'} pb-4`}>
                 Key Milestones
               </h3>
               <div className={`space-y-12 border-l-2 border-dashed ml-3 pl-8 md:pl-10 relative ${isDarkMode ? 'border-indigo-500/30' : 'border-blue-500/30'}`}>
                 {highlights.map((item, i) => (
                   <div key={i} className="gsap-journey relative">
                     <div className={`absolute -left-[42px] md:-left-[50px] top-1 w-5 h-5 rounded-full border-4 ${isDarkMode ? 'bg-[#030712] border-indigo-400' : 'bg-[#f8fafc] border-blue-500'}`} />
                     <p className={`text-lg md:text-xl leading-relaxed font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                       {item}
                     </p>
                   </div>
                 ))}
               </div>
            </div>

            {/* Mission & Vision Block */}
            <div className="space-y-20">
              {missionVision.map((item, idx) => (
                <div key={idx} className="gsap-mission relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>
                       {idx === 0 ? <MdAutoAwesome /> : <MdRemoveRedEye />}
                    </div>
                    <h3 className={`text-3xl lg:text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`text-lg md:text-xl leading-relaxed font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Values Block */}
            <div className="gsap-values-container space-y-12">
               <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'} border-b ${isDarkMode ? 'border-white/10' : 'border-slate-200'} pb-4`}>
                 What Drives Us
               </h3>
               <div className="space-y-12">
                 {coreValues.map((value, i) => (
                   <div key={i} className="gsap-value flex flex-col sm:flex-row gap-6 items-start">
                     <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center shadow-lg ${isDarkMode ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                       {value.reactIcon && React.createElement(value.reactIcon, { className: "text-3xl" })}
                     </div>
                     <div>
                       <h4 className={`text-2xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{value.title}</h4>
                       <p className={`text-lg leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>{value.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;