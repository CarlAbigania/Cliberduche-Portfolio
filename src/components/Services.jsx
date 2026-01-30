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
      className="py-12 md:py-16 bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(8, 55, 124, 0.82), rgba(8, 55, 124, 0.82)), url('https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h2 className="text-white mb-4">Our Services</h2>
          <div className="section-title-underline"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-md rounded-xl p-7 shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
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
        <div className="text-center mt-14">
          <a
            href="#rfq"
            className="btn-primary text-lg px-10 py-4"
          >
            Get Your Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
