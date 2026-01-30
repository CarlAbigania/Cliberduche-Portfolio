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
    <section id="about" className="py-12 md:py-16 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title mb-12">
          <h2 className="text-primary mb-4">
            About Cliberduche Corporation
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto">
            One-stop shop for backfill sourcing, land development, and civil works since 2018
          </p>
          {/* Underline */}
          <div className="section-title-underline"></div>
        </div>

        {/* Company Overview */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark">
                Company Overview
              </h3>
              <p className="text-gray text-lg leading-relaxed">
                Cliberduche Corporation is a full-scale land development and civil works contractor
                serving CALABARZON and beyond. We supply high-quality backfill materials (sub-base,
                aggregates, mixed soil, and boulders), execute site development, and deliver civil
                works with a compliance-led, safety-first approach.
              </p>
              <p className="text-gray text-lg leading-relaxed">
                Established in 2018 and registered with the SEC on November 28, 2018, we operate as
                a one-stop shop with in-house assets and a network of qualified professionals.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent text-white rounded-lg flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                      <i className={`fas ${feat.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark text-lg">{feat.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="premium-card p-8 md:p-10">
              <h4 className="text-xl md:text-2xl font-mont font-bold text-dark mb-4">Key Milestones</h4>
              <ul className="space-y-6">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-2 h-3 w-3 rounded-full bg-secondary flex-shrink-0"></span>
                    <span className="text-gray text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark">
              Mission & Vision
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {missionVision.map((item, index) => (
              <div
                key={index}
                className="premium-card p-6 md:p-10 border-l-4 border-secondary"
              >
                <h4 className="text-xl md:text-2xl font-mont font-bold text-dark mb-4">
                  {item.title}
                </h4>
                <p id={`mission-desc-${index}`} className={`text-gray text-base md:text-lg leading-tight ${expanded[index] ? '' : 'clamp-4'}`}>
                  {item.desc}
                </p>
                <button
                  onClick={() => toggleExpanded(index)}
                  aria-expanded={expanded[index]}
                  aria-controls={`mission-desc-${index}`}
                  className="mt-3 inline-block text-secondary font-semibold hover:text-accent focus:outline-none"
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
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="premium-card p-10 text-center"
              >
                <div className="text-primary text-6xl mb-8 h-20 flex items-center justify-center">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h4 className="text-xl md:text-2xl font-mont font-bold text-dark mb-4">{value.title}</h4>
                <p className="text-dark text-base md:text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 md:p-16 max-w-4xl mx-auto shadow-premium">
            <h3 className="text-2xl md:text-3xl font-mont font-bold mb-6">Partner with Cliberduche Corporation</h3>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
              Experience our commitment to quality, safety, and timely delivery. Let's discuss your project needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:cliberduche.corp@yahoo.com"
                className="btn-secondary"
              >
                Email Us
              </a>
              <a
                href="tel:+63495466107"
                className="btn-secondary"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;