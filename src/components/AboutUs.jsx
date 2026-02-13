import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useThreeParticles, particleShapes3D } from '../hooks/useThreeParticles';
import { MdVerified, MdSecurity, MdRecycling, MdGroupWork, MdStars, MdPeopleOutline, MdAutoAwesome, MdRemoveRedEye } from 'react-icons/md';

const AboutUs = () => {
  // 3D particle animation background
  const { canvasRef } = useThreeParticles({
    particleCount: 1500,
    particleColor: '#3b82f6',
    getTargetPositions: particleShapes3D.cLiberducheInfinityLogo,
  });

  // Individual refs for scroll animations
  const titleRef = useScrollAnimation({ threshold: 0.3 });
  const headingRef = useScrollAnimation({ threshold: 0.2 });
  const para1Ref = useScrollAnimation({ threshold: 0.2 });
  const para2Ref = useScrollAnimation({ threshold: 0.2 });
  const feat1Ref = useScrollAnimation({ threshold: 0.2 });
  const feat2Ref = useScrollAnimation({ threshold: 0.2 });
  const feat3Ref = useScrollAnimation({ threshold: 0.2 });
  const feat4Ref = useScrollAnimation({ threshold: 0.2 });
  const milestonesRef = useScrollAnimation({ threshold: 0.2 });
  const milestone1Ref = useScrollAnimation({ threshold: 0.2 });
  const milestone2Ref = useScrollAnimation({ threshold: 0.2 });
  const milestone3Ref = useScrollAnimation({ threshold: 0.2 });
  const missionTitleRef = useScrollAnimation({ threshold: 0.2 });
  const mission1Ref = useScrollAnimation({ threshold: 0.2 });
  const mission2Ref = useScrollAnimation({ threshold: 0.2 });
  const valuesTitleRef = useScrollAnimation({ threshold: 0.2 });
  const value1Ref = useScrollAnimation({ threshold: 0.2 });
  const value2Ref = useScrollAnimation({ threshold: 0.2 });
  const value3Ref = useScrollAnimation({ threshold: 0.2 });

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

  const [expanded, setExpanded] = React.useState(() => missionVision.map(() => false));
  const toggleExpanded = (i) => setExpanded((prev) => {
    const copy = [...prev];
    copy[i] = !copy[i];
    return copy;
  });

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

  return (
    <section id="about" className="py-12 md:py-16 bg-white dark:bg-gray-900 relative overflow-hidden" style={{ position: 'relative', zIndex: 15 }}>
      {/* 3D Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />

      <div className="max-w-container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="section-title mb-12 scroll-fade-up" ref={titleRef}>
          <h2 className="text-primary dark:text-blue-400 mb-4">
            About Cliberduche Corporation
          </h2>
          <p className="text-gray dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            One-stop shop for backfill sourcing, land development, and civil works since 2018
          </p>
          <div className="section-title-underline"></div>
        </div>

        {/* Company Overview */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white scroll-fade-left" ref={headingRef}>
                Company Overview
              </h3>
              <p className="text-gray dark:text-gray-400 text-lg leading-relaxed scroll-fade-up" ref={para1Ref}>
                Cliberduche Corporation is a full-scale land development and civil works contractor
                serving CALABARZON and beyond. We supply high-quality backfill materials (sub-base,
                aggregates, mixed soil, and boulders), execute site development, and deliver civil
                works with a compliance-led, safety-first approach.
              </p>
              <p className="text-gray dark:text-gray-400 text-lg leading-relaxed scroll-fade-up" ref={para2Ref}>
                Established in 2018 and registered with the SEC on November 28, 2018, we operate as
                a one-stop shop with in-house assets and a network of qualified professionals.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {features.map((feat, i) => {
                  const refs = [feat1Ref, feat2Ref, feat3Ref, feat4Ref];
                  return (
                    <div key={i} className="flex items-center gap-5 group scroll-scale" ref={refs[i]}>
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent text-white rounded-lg flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/50 dark:shadow-primary/50 dark:group-hover:shadow-primary/70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {feat.reactIcon && React.createElement(feat.reactIcon, { className: 'text-lg' })}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark dark:text-white text-lg group-hover:text-secondary transition-colors">{feat.title}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              {/* Key Milestones */}
              <div className="premium-card p-8 md:p-10 scroll-fade-right" ref={milestonesRef}>
                <h4 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-4">Key Milestones</h4>
                <ul className="space-y-6">
                  {highlights.map((item, index) => {
                    const refs = [milestone1Ref, milestone2Ref, milestone3Ref];
                    return (
                      <li key={index} className="flex items-start gap-4 scroll-fade-up" ref={refs[index]}>
                        <span className="mt-2 h-3 w-3 rounded-full bg-gradient-to-br from-secondary to-accent flex-shrink-0 shadow-md shadow-secondary/50"></span>
                        <span className="text-gray dark:text-gray-400 text-base leading-relaxed">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white scroll-fade-up" ref={missionTitleRef}>
              Mission & Vision
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {missionVision.map((item, index) => {
              const refs = [mission1Ref, mission2Ref];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-primary/10 p-6 md:p-10 border-l-4 border-secondary dark:bg-gray-800 scroll-rotate"
                  ref={refs[index]}
                >
                  <h4 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-4 flex items-center justify-start gap-3">
                    {index === 0 ? <MdAutoAwesome className="text-secondary" /> : <MdRemoveRedEye className="text-secondary" />}
                    {item.title}
                  </h4>
                  <p id={`mission-desc-${index}`} className={`text-gray dark:text-gray-400 text-base md:text-lg leading-relaxed text-left ${expanded[index] ? '' : 'clamp-4'}`}>
                    {item.desc}
                  </p>
                  <button
                    onClick={() => toggleExpanded(index)}
                    aria-expanded={expanded[index]}
                    aria-controls={`mission-desc-${index}`}
                    className="mt-3 inline-block text-secondary dark:text-green-400 font-semibold hover:text-accent dark:hover:text-green-300 focus:outline-none underline-animate transition-colors"
                  >
                    {expanded[index] ? 'Show less' : 'Read more'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white scroll-fade-up" ref={valuesTitleRef}>Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreValues.map((value, i) => {
              const refs = [value1Ref, value2Ref, value3Ref];
              return (
                <div
                  key={i}
                  className="premium-card p-10 text-center hover:shadow-xl hover:-translate-y-2 scroll-scale"
                  ref={refs[i]}
                >
                  <div className="text-secondary dark:text-green-400 text-6xl mb-8 h-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    {value.reactIcon && React.createElement(value.reactIcon)}
                  </div>
                  <h4 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-4 hover:text-secondary transition-colors">{value.title}</h4>
                  <p className="text-gray dark:text-gray-400 text-base md:text-lg leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;