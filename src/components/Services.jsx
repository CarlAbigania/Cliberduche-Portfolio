import React from 'react';

const Services = () => {
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
      className="py-20 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-white">Our Services</h2>
          <p className="text-white mt-2">Integrated services from sourcing to execution</p>
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
