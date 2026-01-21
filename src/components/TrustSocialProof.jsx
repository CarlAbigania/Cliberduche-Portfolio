import React from 'react';

const TrustSocialProof = () => {
  const clients = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/150x80/083774/FFFFFF?text=Client+1' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/150x80/083774/FFFFFF?text=Client+2' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/150x80/083774/FFFFFF?text=Client+3' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/150x80/083774/FFFFFF?text=Client+4' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/150x80/083774/FFFFFF?text=Client+5' },
    { name: 'Client 6', logo: 'https://via.placeholder.com/150x80/083774/FFFFFF?text=Client+6' },
  ];

  const testimonials = [
    {
      quote: 'Cliberduche Corporation delivered reliable backfill materials with verified testing and consistent delivery schedules.',
      name: 'Project Manager',
      role: 'Residential Development Partner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      quote: 'Their team handled site development and civil works with safety and compliance as a priority from start to finish.',
      name: 'Operations Lead',
      role: 'Industrial Project Client',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      quote: 'We value their one-stop-shop capability and clear communication throughout project execution.',
      name: 'Procurement Head',
      role: 'Commercial Development Client',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title mb-20">
          <h2 className="text-primary mb-4">
            Trust & Social Proof
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Trusted by industry leaders and valued partners
          </p>
          <div className="section-title-underline"></div>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-mont font-bold text-dark mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="premium-card p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-14 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray text-lg font-medium">Join our growing list of satisfied clients</p>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl md:text-4xl font-mont font-bold text-dark mb-14 text-center">
            Client Feedback
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="premium-card p-10 relative"
              >
                <div className="text-gray text-lg italic mb-8 leading-relaxed relative pl-4">
                  <span className="text-secondary text-4xl absolute -top-2 -left-2 opacity-50">"</span>
                  {t.quote}
                </div>

                <div className="flex items-center mt-8 pt-8 border-t border-gray-200">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 flex-shrink-0 ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="text-dark font-mont font-bold">{t.name}</h4>
                    <span className="text-gray text-sm font-medium">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSocialProof;