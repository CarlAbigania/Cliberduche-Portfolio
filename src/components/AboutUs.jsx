import React from 'react';

const AboutUs = () => {
  const features = [
    { icon: 'fa-check', title: 'Quality Materials', desc: 'High-quality backfill and aggregates' },
    { icon: 'fa-shield-alt', title: 'Safety First', desc: 'Committed to highest safety standards' },
    { icon: 'fa-leaf', title: 'Eco-Friendly', desc: 'Sustainable development practices' },
    { icon: 'fa-handshake', title: 'Client Focused', desc: 'Dedicated to customer satisfaction' },
  ];

  const highlights = [
    'Established in 2018 and registered with the Securities and Exchange Commission on November 28, 2018.',
    'CLIBERDUCHE represents the founders\' surnames: CLImaco, BERonilla, PiaDUCHE.',
    'Now led by the founder\'s spouse and brother as directors, focused on long-term growth.',
  ];

  const missionVision = [
    {
      title: 'Mission',
      desc: 'We are a responsible land development company that provides high-quality backfill materials for land development projects and other infrastructures. We support sustainable land development by adhering to environmental regulations and deliver excellent value to our partner communities, investors, employees, and stakeholders.',
    },
    {
      title: 'Vision',
      desc: 'To be a highly respected, world-class natural resource land development company committed to international standards in land development operations and environmental conservation, and to convert land development sites into future commercial and housing projects.',
    },
  ];

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
    <section id="about" className="py-16 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            About Cliberduche Corporation
          </h2>
          <p className="text-gray text-base">
            One-stop shop for backfill sourcing, land development, and civil works since 2018
          </p>
          {/* Underline */}
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        {/* Company Overview */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark">
                Company Overview
              </h3>
              <p className="text-gray leading-relaxed">
                Cliberduche Corporation is a full-scale land development and civil works contractor
                serving CALABARZON and beyond. We supply high-quality backfill materials (sub-base,
                aggregates, mixed soil, and boulders), execute site development, and deliver civil
                works with a compliance-led, safety-first approach.
              </p>
              <p className="text-gray leading-relaxed">
                Established in 2018 and registered with the SEC on November 28, 2018, we operate as
                a one-stop shop with in-house assets and a network of qualified professionals.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-md shadow-primary/30">
                      <i className={`fas ${feat.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{feat.title}</h4>
                      <p className="text-gray text-sm">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-mont font-semibold text-dark mb-4">Key Milestones</h4>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-3 w-3 rounded-full bg-secondary"></span>
                    <span className="text-gray text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">
              Mission & Vision
            </h3>
            <p className="text-gray text-base md:text-lg">
              Guiding principles that shape our work and long-term direction
            </p>
            <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {missionVision.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-primary/10 rounded-xl p-8 shadow-md"
              >
                <h4 className="text-2xl font-mont font-semibold text-primary mb-4">
                  {item.title}
                </h4>
                <p className="text-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-primary mb-2">Key Statistics</h3>
            <p className="text-gray">Our capabilities at a glance</p>
            <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-primary/10 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gray mb-3">Years in Operation</p>
              <p className="text-2xl font-mont font-semibold text-primary">2018–Present</p>
              <p className="text-sm text-gray mt-3">Registered November 28, 2018</p>
            </div>
            <div className="border border-primary/10 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gray mb-3">Backfill Resources</p>
              <p className="text-2xl font-mont font-semibold text-primary">22.2M+ cu.m.</p>
              <p className="text-sm text-gray mt-3">Calamba + Silang sites combined</p>
            </div>
            <div className="border border-primary/10 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gray mb-3">Coverage</p>
              <p className="text-2xl font-mont font-semibold text-primary">CALABARZON+</p>
              <p className="text-sm text-gray mt-3">Laguna, Cavite, and beyond</p>
            </div>
            <div className="border border-primary/10 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gray mb-3">Service Scope</p>
              <p className="text-2xl font-mont font-semibold text-primary">One-Stop Shop</p>
              <p className="text-sm text-gray mt-3">Backfill to civil works</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">Our Core Values</h3>
            <p className="text-gray text-lg">The foundation of everything we do</p>
            <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2"
              >
                <div className="text-primary text-5xl mb-6">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h4 className="text-xl md:text-2xl font-mont font-semibold mb-4">{value.title}</h4>
                <p className="text-dark text-base leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-mont font-semibold mb-4">Partner with Cliberduche Corporation</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Experience our commitment to quality, safety, and timely delivery. Let's discuss your project needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#rfq"
                className="bg-secondary text-primary font-semibold py-3 px-8 rounded shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all"
              >
                Get Free Quote
              </a>
              <a
                href="mailto:cliberduche.corp@yahoo.com"
                className="border-2 border-white/60 text-white bg-white/10 hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded transition-all"
              >
                Email Us
              </a>
              <a
                href="tel:+63495466107"
                className="border-2 border-white/60 text-white bg-white/10 hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded transition-all"
              >
                Call +63 49 546-6107
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;