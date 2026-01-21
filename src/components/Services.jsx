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
      className="py-16 md:py-20 bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(8, 55, 124, 0.82), rgba(8, 55, 124, 0.82)), url('https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-white mb-4">Our Services</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">Integrated services from sourcing to execution</p>
          <div className="block w-20 h-1 bg-secondary mx-auto mt-6 rounded"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-md rounded-xl p-10 shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group"
            >
              <div className="text-primary text-5xl mb-8 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-mont font-bold mb-4 text-dark">{service.title}</h3>
              <p className="text-gray text-base md:text-lg leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 md:p-16 max-w-3xl mx-auto border border-white/30">
            <h3 className="text-3xl md:text-4xl font-mont font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-white/90 mb-10 text-lg">Get a customized quote for your land development or civil works needs</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#rfq"
                className="btn-primary"
              >
                Request Quote
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

export default Services;
