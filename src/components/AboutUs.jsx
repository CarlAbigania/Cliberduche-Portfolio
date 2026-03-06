import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';
import { MdVerified, MdSecurity, MdRecycling, MdGroupWork, MdStars, MdPeopleOutline, MdAutoAwesome, MdRemoveRedEye } from 'react-icons/md';
import CardSwap, { Card } from './ui/CardSwap';
import { cn } from '../utils/cn';

const AboutUs = () => {
  const { isDarkMode } = useTheme();

  // Scroll animation refs
  const overviewRef = useScrollAnimation({ threshold: 0.2 });
  const featuresRef = useScrollAnimation({ threshold: 0.2 });
  const milestonesRef = useScrollAnimation({ threshold: 0.2 });
  const missionRef = useScrollAnimation({ threshold: 0.2 });
  const visionRef = useScrollAnimation({ threshold: 0.2 });
  const valuesRef = useScrollAnimation({ threshold: 0.2 });

  const features = [
    { icon: 'fa-check', title: 'Quality Materials', reactIcon: MdVerified },
    { icon: 'fa-shield-alt', title: 'Safety First', reactIcon: MdSecurity },
    { icon: 'fa-leaf', title: 'Eco-Friendly', reactIcon: MdRecycling },
    { icon: 'fa-handshake', title: 'Client Focused', reactIcon: MdGroupWork },
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
      icon: 'fa-award',
      title: 'Quality',
      reactIcon: MdStars,
      desc: 'Ensuring projects are of high quality and paired with local standards to be competitive in the national and local market scene.',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Safety',
      reactIcon: MdSecurity,
      desc: 'Ensuring safety at work site, safety of projects and safety of personnel through rigorous safety practices before and after execution of projects.',
    },
    {
      icon: 'fa-handshake',
      title: 'Integrity',
      reactIcon: MdPeopleOutline,
      desc: 'Ensuring compliance with existing laws covering the construction industry, reliable workforce and our timely delivery of projects.',
    },
  ];

  const [expandedMission, setExpandedMission] = React.useState([false, false]);
  const toggleMission = (i) => {
    setExpandedMission(prev => {
      const copy = [...prev];
      copy[i] = !copy[i];
      return copy;
    });
  };

  return (
    <section id="about" className="relative">
      {/* Company Overview Section - Enhanced */}
      <div className={`relative py-24 md:py-32 border-b transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black border-white/5' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              ref={overviewRef}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <div className={`w-12 h-1 bg-gradient-to-r ${
                    isDarkMode
                      ? 'from-indigo-400 to-teal-400'
                      : 'from-[#0099FF] to-[#CCFF00]'
                  }`}></div>
                  <span className={`text-sm font-bold tracking-widest ${
                    isDarkMode 
                      ? 'text-indigo-400' 
                      : 'text-indigo-600'
                  }`}>ABOUT US</span>
                </div>
                <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${
                  isDarkMode 
                    ? 'text-white' 
                    : 'text-gray-900'
                }`}>
                  Building <br />
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode
                      ? 'from-indigo-400 via-blue-400 to-teal-400'
                      : 'from-[#0052CC] to-[#66AA00]'
                  }`}>
                    Tomorrow
                  </span>
                  <br />
                  Today
                </h2>
              </div>
              <p className={`text-lg leading-relaxed max-w-md ${
                isDarkMode 
                  ? 'text-white/70' 
                  : 'text-gray-700'
              }`}>
                Cliberduche Corporation is a full-scale land development and civil works contractor serving CALABARZON and beyond with unwavering commitment to quality and safety.
              </p>
              <div className={`pt-8 space-y-4 border-l-2 pl-6 ${
                isDarkMode
                  ? 'border-indigo-500/30'
                  : 'border-indigo-300'
              }`}>
                <p className={isDarkMode ? 'text-white/80' : 'text-gray-800'}>
                  <span className={`font-bold ${isDarkMode ? 'text-[#6366f1]' : 'text-[#0099FF]'}`}>Established 2018</span> - Registered with SEC
                </p>
                <p className={`italic ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                  "CLIBERDUCHE represents: <span className={isDarkMode ? 'text-[#6366f1]' : 'text-[#0099FF]'}>CLImaco, BERonilla, PiaDUCHE</span>"
                </p>
              </div>
            </motion.div>

            {/* Right - CardSwap animated feature cards */}
            <div className="relative h-96">
              <CardSwap
                width={420}
                height={260}
                cardDistance={40}
                verticalDistance={50}
                delay={3500}
                pauseOnHover={true}
              >
                {features.map((feat, i) => (
                  <Card key={i}>
                    <div className={`flex flex-col gap-3 p-6 w-full h-full rounded-2xl backdrop-blur-xl ${
                      isDarkMode
                        ? 'border border-white/10 bg-gradient-to-br from-indigo-500/10 to-teal-500/10'
                        : 'border border-gray-300 bg-gradient-to-br from-white to-[#E0F7FA]'
                    }`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-indigo-500/30 to-teal-500/30'
                          : 'bg-gradient-to-br from-[#B3E5FC]/60 to-[#A5D6A7]/60'
                      }`}>
                        {feat.reactIcon && React.createElement(feat.reactIcon, { className: `text-xl ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}` })}
                      </div>
                      <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feat.title}</h3>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights Section - Timeline style */}
      <div className={`relative py-24 md:py-32 border-b transition-colors duration-500 ${
        isDarkMode
          ? 'bg-black border-white/5'
          : 'bg-slate-100 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            ref={milestonesRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="space-y-16"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className={`text-sm font-bold tracking-widest ${
                  isDarkMode 
                    ? 'text-rose-400' 
                    : 'text-rose-600'
                }`}>KEY MILESTONES</span>
                <div className={`w-8 h-1 bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-rose-500 to-orange-500'
                    : 'from-rose-600 to-orange-600'
                }`}></div>
              </div>
              <h2 className={`text-5xl md:text-6xl font-black ${
                isDarkMode 
                  ? 'text-white' 
                  : 'text-gray-900'
              }`}>
                Our Journey
              </h2>
            </div>

            <div className="space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 md:gap-12 items-start group cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform ${
                      isDarkMode
                        ? 'bg-gradient-to-br from-indigo-500 to-teal-500 text-white'
                        : 'bg-gradient-to-br from-[#0052CC] to-[#66AA00] text-white'
                    }`}>
                      {i + 1}
                    </div>
                    {i < highlights.length - 1 && (
                      <div className={`w-1 h-20 mt-4 ${
                        isDarkMode
                          ? 'bg-gradient-to-b from-teal-500/50 to-transparent'
                          : 'bg-gradient-to-b from-[#0052CC]/50 to-transparent'
                      }`}></div>
                    )}
                  </div>
                  <div className="pt-2 flex-1 pb-8">
                    <p className={`text-lg leading-relaxed group-hover:transition-colors ${
                      isDarkMode
                        ? 'text-white/80 group-hover:text-white'
                        : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision - Large Typography */}
      <div className={`relative py-24 md:py-32 border-b transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black border-white/5'
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {missionVision.map((item, idx) => (
              <motion.div
                key={idx}
                ref={idx === 0 ? missionRef : visionRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="space-y-6"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-indigo-500/30 to-teal-500/30'
                          : 'bg-gradient-to-br from-[#0052CC]/30 to-[#66AA00]/30'
                      }`}>
                        {idx === 0 ? <MdAutoAwesome className={isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} /> : <MdRemoveRedEye className={isDarkMode ? 'text-rose-400' : 'text-rose-600'} />}
                      </div>
                      <h3 className={`text-3xl md:text-4xl font-black ${
                        isDarkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }`}>{item.title}</h3>
                    </div>
                    <p id={`mission-text-${idx}`} className={cn(
                      "text-lg leading-relaxed transition-all duration-300 max-w-3xl",
                      !expandedMission[idx] && "line-clamp-3",
                      isDarkMode 
                        ? 'text-white/75' 
                        : 'text-gray-700'
                    )}>
                      {item.desc}
                    </p>
                    <button
                      onClick={() => toggleMission(idx)}
                      className={`mt-6 inline-flex items-center gap-2 font-semibold transition-colors group ${
                        isDarkMode
                          ? 'text-[#6366f1] hover:text-[#818cf8]'
                          : 'text-[#0099FF] hover:text-[#005fcc]'
                      }`}
                      aria-expanded={expandedMission[idx]}
                      aria-controls={`mission-text-${idx}`}
                    >
                      <span>{expandedMission[idx] ? 'Show less' : 'Read more'}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values - Asymmetric Layout */}
      <div className={`relative py-24 md:py-32 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-black'
          : 'bg-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="space-y-20"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                  <div className={`w-12 h-1 bg-gradient-to-r ${
                    isDarkMode
                      ? 'from-indigo-400 to-teal-400'
                      : 'from-[#0099FF] to-[#CCFF00]'
                  }`}></div>
                <span className={`text-sm font-bold tracking-widest ${
                  isDarkMode
                    ? 'text-indigo-400'
                    : 'text-purple-600'
                }`}>OUR VALUES</span>
              </div>
              <h2 className={`text-5xl md:text-6xl font-black ${
                isDarkMode 
                  ? 'text-white' 
                  : 'text-gray-900'
              }`}>
                What Drives Us
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {coreValues.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className="group relative"
                  style={{
                    marginTop: i === 1 ? '40px' : i === 2 ? '80px' : '0'
                  }}
                >
                  <div className={`absolute inset-0 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-indigo-500/10 to-teal-500/10'
                      : 'bg-gradient-to-br from-[#0052CC]/10 to-[#66AA00]/10'
                  }`}></div>
                  <div className={`relative p-8 md:p-10 rounded-3xl border backdrop-blur-xl ${
                    isDarkMode
                      ? 'border-white/5 bg-gradient-to-br from-indigo-500/5 to-teal-500/5'
                      : 'border-gray-300 bg-gradient-to-br from-[#0052CC]/10 to-[#66AA00]/10'
                  }`}>
                    <div className="flex flex-col gap-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-indigo-500/20 to-teal-500/20'
                          : 'bg-gradient-to-br from-[#0052CC]/20 to-[#66AA00]/20'
                      }`}>
                        {value.reactIcon && React.createElement(value.reactIcon, { className: `text-2xl ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}` })}
                      </div>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-black mb-3 ${
                          isDarkMode 
                            ? 'text-white' 
                            : 'text-gray-900'
                        }`}>{value.title}</h3>
                        <p className={`leading-relaxed text-base ${
                          isDarkMode
                            ? 'text-white/70'
                            : 'text-gray-700'
                        }`}>{value.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;