import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../hooks/useTheme';
import ModalPortal from './ModalPortal';
import { MdVerified, MdReceipt, MdDocumentScanner, MdLocalHospital, MdHouse, MdWorkspacePremium, MdLocalFireDepartment, MdVerifiedUser, MdEco, MdClose, MdSecurity } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const ComplianceSafety = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mapRef = useRef(null);
  const commitmentsRef = useRef(null);

  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Blueprint map: all certificates as hotspots with coordinates
  const complianceHotspots = [
    { name: 'SEC Registration', full: 'Securities and Exchange Commission', image: 'images/permits/securities-and-exchange-commision.png', reactIcon: MdDocumentScanner, x: 20, y: 30 },
    { name: 'BIR Certificate', full: 'Bureau of Internal Revenue', image: 'images/permits/BIR.png', reactIcon: MdReceipt, x: 38, y: 25 },
    { name: 'SSS Compliance', full: 'Social Security System', image: 'images/permits/SSS.png', reactIcon: MdVerified, x: 68, y: 28 },
    { name: 'PhilHealth', full: 'PhilHealth Insurance', image: 'images/permits/philhealth.png', reactIcon: MdLocalHospital, x: 28, y: 58 },
    { name: 'Pag-IBIG Fund', full: 'Home Development Mutual Fund', image: 'images/permits/pagibig-fund.png', reactIcon: MdHouse, x: 48, y: 75 },
    { name: "Mayor's Permit", full: "Local Government Mayor's Permit 2026", image: 'images/permits/mayors2026.png', reactIcon: MdWorkspacePremium, x: 82, y: 38 },
    { name: 'Fire Safety', full: 'Fire Safety Inspection Permit', image: 'images/permits/fire-safety-inspection.png', reactIcon: MdLocalFireDepartment, x: 22, y: 85 },
    { name: 'Sanitary Permit', full: 'Health & Sanitary Permit', image: 'images/permits/sanitary.png', reactIcon: MdVerifiedUser, x: 62, y: 85 },
    { name: 'PCAB License', full: 'Philippine Contractors Accreditation Board', image: 'images/permits/pcab-license.png', reactIcon: MdWorkspacePremium, x: 78, y: 65 },
    { name: 'Insurance & Guarantee', full: 'Insurance Certificate & Guarantee', image: 'images/permits/insurance-certificate.png', reactIcon: MdVerifiedUser, x: 58, y: 48 },
    { name: 'ECC Certificate', full: 'Environmental Compliance Certificate', image: 'images/permits/ECC.png', reactIcon: MdEco, x: 82, y: 85 },
  ];

  const safetyCommitments = [
    { title: 'Safe Environment', desc: 'Providing a secure & healthy workspace for all.' },
    { title: 'Accountability', desc: 'Supervisors are strictly accountable for site safety.' },
    { title: 'Maintained Assets', desc: 'Strict compliance in machinery & equipment upkeep.' },
    { title: 'Continuous Training', desc: 'Adequate safety & operational training for every worker.' },
    { title: 'Core Value', desc: 'Health & safety is integral to every decision made.' },
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

      // Interactive Map Animation
      gsap.from(mapRef.current, {
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.05)',
      });

      // Hotspots Stagger Animation
      gsap.from('.gsap-hotspot', {
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'back.out(2)',
      });

      // Commitments Animation
      gsap.from('.gsap-commitment', {
        scrollTrigger: {
          trigger: commitmentsRef.current,
          start: 'top 95%', // Trigger even earlier
          once: true, // Only play once so they don't get stuck fading out
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="compliance" 
      ref={sectionRef}
      className={`relative py-24 md:py-32 lg:py-40 overflow-hidden transition-colors duration-700 ${
        isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-20 transform translate-x-1/3 -translate-y-1/3 ${isDarkMode ? 'bg-indigo-600' : 'bg-blue-300'}`} />
        <div className={`absolute bottom-0 left-0 w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 transform -translate-x-1/3 translate-y-1/3 ${isDarkMode ? 'bg-purple-600' : 'bg-cyan-300'}`} />
        <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${isDarkMode ? 'opacity-[0.05]' : 'opacity-[0.03]'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
             <div className={`w-12 h-1 bg-gradient-to-r rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
             <span className={`text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2 ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>
               <MdSecurity className="text-xl" />
               Compliance & Safety
             </span>
             <div className={`w-12 h-1 bg-gradient-to-l rounded-full ${isDarkMode ? 'from-indigo-500 to-purple-400' : 'from-blue-600 to-cyan-500'}`} />
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Unwavering <br className="hidden sm:block" />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 via-purple-400 to-indigo-400' : 'from-blue-600 via-cyan-500 to-blue-600'}`}>
               Commitment
            </span>
          </h2>
          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Strict adherence to legal compliance, industry certifications, and the highest safety standards.
          </p>
        </div>

        {/* Blueprint Interactive Map */}
        <div ref={mapRef} className={`relative rounded-[2.5rem] p-4 sm:p-8 lg:p-12 mb-20 md:mb-32 border backdrop-blur-xl transition-all duration-700 ${
           isDarkMode ? 'bg-white/5 border-white/10 shadow-2xl shadow-black/50' : 'bg-white/80 border-slate-200 shadow-2xl shadow-blue-900/5'
        }`}>
          
          <div className="text-center mb-6 lg:mb-8">
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Credentials & Permits</h3>
            <p className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Interactive Certification Map</p>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-slate-900 rounded-[1.5rem] overflow-hidden border border-white/10 shadow-inner">
             {/* Blueprint Grid SVG */}
             <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="0.5" opacity="0.45"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
             </svg>
             
             {/* Glowing Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 mix-blend-overlay" />

             {/* Hotspots */}
             {complianceHotspots.map((item, idx) => {
               const Icon = item.reactIcon;
               const isHovered = hoveredIndex === idx;
               return (
                 <div
                   key={idx}
                   className="gsap-hotspot absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block"
                   style={{ left: `${item.x}%`, top: `${item.y}%` }}
                   onMouseEnter={() => setHoveredIndex(idx)}
                   onMouseLeave={() => setHoveredIndex(null)}
                   onClick={() => setSelectedCert(item)}
                 >
                   <button className="relative group p-2 outline-none">
                     {/* Pulse Ring */}
                     <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                        isDarkMode ? 'bg-indigo-400/40' : 'bg-cyan-400/60'
                     }`} />
                     
                     {/* Core Button */}
                     <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 backdrop-blur-md transition-all duration-300 group-hover:scale-110 shadow-lg ${
                        isDarkMode 
                          ? 'bg-slate-800/80 border-indigo-500/60 text-indigo-300 group-hover:bg-indigo-500 group-hover:text-slate-900' 
                          : 'bg-white/90 border-cyan-500/50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-transparent'
                     }`}>
                       <Icon className="text-xl sm:text-2xl" />
                     </div>

                     {/* Tooltip Overlay */}
                     <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-48 p-3 rounded-xl backdrop-blur-xl border shadow-2xl transition-all duration-300 pointer-events-none origin-bottom ${
                        isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
                     } ${
                        isDarkMode ? 'bg-slate-900/95 border-white/10' : 'bg-white/95 border-slate-200'
                     }`}>
                       <p className={`text-xs font-bold text-center leading-tight mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.full}</p>
                       <p className={`text-[10px] text-center font-medium uppercase tracking-wider ${isDarkMode ? 'text-indigo-300' : 'text-cyan-600'}`}>Click to View</p>
                     </div>
                   </button>
                 </div>
               );
             })}

             {/* Mobile List View fallback */}
             <div className="absolute inset-0 overflow-y-auto p-4 sm:hidden bg-slate-900/90 backdrop-blur-sm z-20">
               <div className="flex flex-col gap-3">
                 {complianceHotspots.map((item, idx) => {
                   const Icon = item.reactIcon;
                   return (
                     <button
                       key={idx}
                       onClick={() => setSelectedCert(item)}
                       className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 text-left active:bg-white/10 transition-colors"
                     >
                       <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                         <Icon className="text-xl" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-white leading-tight">{item.full}</p>
                         <p className="text-xs text-indigo-300 mt-0.5">Tap to view</p>
                       </div>
                     </button>
                   );
                 })}
               </div>
             </div>

          </div>
        </div>

         {/* Safety Commitments Grid */}
         <div ref={commitmentsRef}>
            <div className="text-center mb-10 lg:mb-12">
             <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Safety Priorities</h3>
             <p className={`text-sm sm:text-base font-medium max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Our holistic approach to ensuring the well-being of our team and partners.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 auto-rows-fr">
             {safetyCommitments.map((item, idx) => (
               <div 
                 key={idx}
                 className={`gsap-commitment group relative p-6 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${
                    isDarkMode 
                     ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-indigo-500/30 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]' 
                     : 'bg-white/80 border-slate-200 hover:bg-white hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)]'
                 }`}
               >
                 {/* Number indicator */}
                 <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 text-3xl sm:text-4xl font-black opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${
                   isDarkMode ? 'text-white' : 'text-slate-900'
                 }`}>
                   0{idx + 1}
                 </div>
                 
                 <div className="flex-1">
                   <h4 className={`text-lg sm:text-xl font-bold mb-3 relative z-10 pr-8 ${isDarkMode ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-blue-700'} transition-colors duration-300`}>
                     {item.title}
                   </h4>
                   <p className={`text-sm leading-relaxed font-medium relative z-10 ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-800'} transition-colors duration-300`}>
                     {item.desc}
                   </p>
                 </div>
 
                 {/* Bottom decorative highlight */}
                 <div className={`absolute bottom-0 left-6 right-6 sm:left-8 sm:right-8 h-1 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                   isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-400' : 'bg-gradient-to-r from-blue-600 to-cyan-500'
                 }`} />
               </div>
             ))}
           </div>
         </div>

        {/* Enhanced Certificate Modal */}
        <ModalPortal isOpen={!!selectedCert}>
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
             {/* Backdrop */}
             <div 
               className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-[fadeIn_0.3s_ease-out]" 
               onClick={() => setSelectedCert(null)}
             />
             
             {/* Modal Content */}
             <div className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[2rem] overflow-hidden shadow-2xl animate-[scaleUp_0.4s_cubic-bezier(0.16,1,0.3,1)] ${
                isDarkMode ? 'bg-[#0f172a] border border-white/10' : 'bg-white border border-slate-200'
             }`}>
                
                {/* Header */}
                <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {selectedCert?.name}
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {selectedCert?.full}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20' 
                        : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <MdClose className="text-xl" />
                  </button>
                </div>

                {/* Body - Image Viewer */}
                <div className={`flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center ${
                  isDarkMode ? 'bg-[#030712]' : 'bg-slate-100'
                }`}>
                  <div className={`w-full h-full rounded-2xl flex items-center justify-center overflow-hidden border p-2 sm:p-4 ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-inner'
                  }`}>
                    <img 
                      src={selectedCert?.image} 
                      alt={selectedCert?.name}
                      className="max-w-full max-h-[60vh] object-contain rounded-xl"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect fill="#1e293b" width="800" height="600"/><text fill="#94a3b8" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Official Document Preview</text></svg>';
                      }}
                    />
                  </div>
                </div>

             </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes scaleUp { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          `}} />
        </ModalPortal>

      </div>
    </section>
  );
};

export default ComplianceSafety;