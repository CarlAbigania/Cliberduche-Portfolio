import React from 'react';

const Services = () => {
  const services = [
    { icon: 'fa-mountain', title: 'Backfill Sourcing', desc: 'Providing the best quality backfill materials as specified by clients including sub-base, aggregates and boulders.' },
    { icon: 'fa-tractor', title: 'Land Development', desc: 'Comprehensive land development including clearing, cutting, leveling, RCP and PVC pipe laying.' },
    { icon: 'fa-hard-hat', title: 'Site Management', desc: 'Professional site management ensuring projects are completed on time and within budget.' },
    { icon: 'fa-tools', title: 'Equipment Leasing', desc: 'Heavy equipment leasing including dump trucks, bulldozers, excavators, compactors and more.' },
    { icon: 'fa-road', title: 'Civil Works', desc: 'Building bridges, concrete roads, gutters, ripraps, easement, and slope protection projects.' },
    { icon: 'fa-clipboard-check', title: 'Project Consultation', desc: 'Expert project management consultation for both horizontal and vertical construction projects.' },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-white">Our Services</h2>
          <p className="text-white mt-2">Comprehensive construction and development solutions</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-primary text-4xl mb-6 flex items-center justify-center">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-mont font-semibold mb-3 text-dark">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
