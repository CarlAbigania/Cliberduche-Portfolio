import React from 'react';

const AboutUs = () => {
  const features = [
    { icon: 'fa-check', title: 'Quality Materials' },
    { icon: 'fa-shield-alt', title: 'Safety First' },
    { icon: 'fa-leaf', title: 'Eco-Friendly' },
    { icon: 'fa-handshake', title: 'Client Focused' },
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

  // Local state for expanding/collapsing Mission & Vision descriptions
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
      desc: 'Ensuring projects are of high quality and paired with local standards to be competitive in the national and local market scene.',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Safety',
      desc: 'Ensuring safety at work site, safety of projects and safety of personnel through rigorous safety practices before and after execution of projects.',
    },
    {
      icon: 'fa-handshake',
      title: 'Integrity',
      desc: 'Ensuring compliance with existing laws covering the construction industry, reliable workforce and our timely delivery of projects.',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title mb-12">
          <h2 className="text-primary dark:text-blue-400 mb-4">
            About Cliberduche Corporation
          </h2>
          <p className="text-gray dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            One-stop shop for backfill sourcing, land development, and civil works since 2018
          </p>
          {/* Underline */}
          <div className="section-title-underline"></div>
        </div>

        {/* Company Overview */}
        <div className="mb-12 fade-in-up">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white fade-in-left">
                Company Overview
              </h3>
              <p className="text-gray dark:text-gray-400 text-lg leading-relaxed fade-in-left" style={{ animationDelay: '0.1s' }}>
                Cliberduche Corporation is a full-scale land development and civil works contractor
                serving CALABARZON and beyond. We supply high-quality backfill materials (sub-base,
                aggregates, mixed soil, and boulders), execute site development, and deliver civil
                works with a compliance-led, safety-first approach.
              </p>
              <p className="text-gray dark:text-gray-400 text-lg leading-relaxed fade-in-left" style={{ animationDelay: '0.2s' }}>
                Established in 2018 and registered with the SEC on November 28, 2018, we operate as
                a one-stop shop with in-house assets and a network of qualified professionals.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-5 group fade-in-up scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent text-white rounded-lg flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/50 dark:shadow-primary/50 dark:group-hover:shadow-primary/70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <i className={`fas ${feat.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark dark:text-white text-lg group-hover:text-secondary transition-colors">{feat.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="premium-card p-8 md:p-10 fade-in-right">
              <h4 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-4">Key Milestones</h4>
              <ul className="space-y-6">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="mt-2 h-3 w-3 rounded-full bg-gradient-to-br from-secondary to-accent flex-shrink-0 shadow-md shadow-secondary/50"></span>
                    <span className="text-gray dark:text-gray-400 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white fade-in-up">
              Mission & Vision
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {missionVision.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-primary/10 p-6 md:p-10 border-l-4 border-secondary fade-in-up scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  {index === 0 ? <i className="fas fa-bullseye text-secondary"></i> : <i className="fas fa-eye text-secondary"></i>}
                  {item.title}
                </h4>
                <p id={`mission-desc-${index}`} className={`text-gray dark:text-gray-400 text-base md:text-lg leading-relaxed ${expanded[index] ? '' : 'clamp-4'}`}>
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
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white fade-in-up">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="premium-card p-10 text-center fade-in-up scale-in hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="text-secondary dark:text-green-400 text-6xl mb-8 h-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 float-animation">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h4 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-4 hover:text-secondary transition-colors">{value.title}</h4>
                <p className="text-gray dark:text-gray-400 text-base md:text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;