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
    <section className="py-16 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-4">
            Trust & Social Proof
          </h2>
          <p className="text-gray text-lg">
            Trusted by industry leaders and valued partners
          </p>
          <span className="block w-20 h-1 bg-secondary absolute bottom-0 left-1/2 -translate-x-1/2 mt-6"></span>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-8 text-center">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray text-sm">Join our growing list of satisfied clients</p>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-8 text-center">
            Client Feedback
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 shadow-md relative"
              >
                <div className="text-gray italic mb-6 relative before:content-['\'] before:text-4xl before:text-secondary before:absolute before:-top-2 before:left-2">
                  {t.quote}
                </div>

                <div className="flex items-center mt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-primary font-semibold">{t.name}</h4>
                    <span className="text-gray text-sm">{t.role}</span>
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