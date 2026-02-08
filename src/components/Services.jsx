import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MdTerrain, MdAgriculture, MdWorkHistory, MdHandyman, MdConstruction, MdPendingActions } from 'react-icons/md';

const Services = () => {
  // Refs for main sections
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const ctaRef = useScrollAnimation({ threshold: 0.2 });
  
  // Refs for individual service cards
  const service1Ref = useScrollAnimation({ threshold: 0.2 });
  const service2Ref = useScrollAnimation({ threshold: 0.2 });
  const service3Ref = useScrollAnimation({ threshold: 0.2 });
  const service4Ref = useScrollAnimation({ threshold: 0.2 });
  const service5Ref = useScrollAnimation({ threshold: 0.2 });
  const service6Ref = useScrollAnimation({ threshold: 0.2 });

  // Icon mapping
  const iconMap = {
    'fa-mountain': MdTerrain,
    'fa-tractor': MdAgriculture,
    'fa-hard-hat': MdWorkHistory,
    'fa-tools': MdHandyman,
    'fa-road': MdConstruction,
    'fa-clipboard-check': MdPendingActions,
  };

  const services = [
    { icon: 'fa-mountain', title: 'Backfill Sourcing', desc: 'Sub-base, aggregates, mixed soil, and boulders with lab-tested quality.' },
    { icon: 'fa-tractor', title: 'Land Development', desc: 'Clearing, cutting, leveling, and pipe laying for site readiness.' },
    { icon: 'fa-hard-hat', title: 'Site Management', desc: 'Professional field supervision aligned with safety and delivery targets.' },
    { icon: 'fa-tools', title: 'Equipment Leasing', desc: 'Dump trucks, bulldozers, excavators, compactors, and support units.' },
    { icon: 'fa-road', title: 'Civil Works', desc: 'Bridges, concrete roads, ripraps, drainage, and slope protection.' },
    { icon: 'fa-clipboard-check', title: 'Project Consultation', desc: 'Consultation for horizontal and vertical development projects.' },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-16 bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage: "linear-gradient(rgba(60, 60, 60, 0.72), rgba(60, 60, 60, 0.72)), url('https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12 scroll-fade-up" ref={titleRef}>
          <h2 className="text-white mb-4">Our Services</h2>
          <div className="section-title-underline"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const serviceRefs = [service1Ref, service2Ref, service3Ref, service4Ref, service5Ref, service6Ref];
            return (
              <div
                key={index}
                ref={serviceRefs[index]}
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl p-7 shadow-lg border border-white/60 dark:border-gray-700/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group scroll-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary text-5xl mb-8 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {iconMap[service.icon] && React.createElement(iconMap[service.icon])}
                </div>
                <h3 className="text-xl md:text-2xl font-mont font-bold mb-4 text-dark dark:text-white group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray dark:text-gray-400 text-base md:text-lg leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-14 scroll-fade-up" ref={ctaRef}>
          <a
            href="#rfq"
            className="btn-primary text-lg px-10 py-4 inline-block"
          >
            Get Your Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
