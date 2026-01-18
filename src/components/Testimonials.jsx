import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Cliberduche Corporation delivered exceptional quality in our land development project. Their attention to detail and commitment to safety was outstanding.',
      name: 'John Smith',
      role: 'Project Manager, ABC Construction',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      quote: 'Professional team with modern equipment. They completed our civil works project ahead of schedule and within budget.',
      name: 'Maria Garcia',
      role: 'Operations Director, XYZ Developers',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      quote: 'Reliable backfill sourcing and expert consultation. Cliberduche is our go-to partner for all construction needs.',
      name: 'Robert Chen',
      role: 'CEO, Metro Builders Inc.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray text-lg">
            What our clients say about our work
          </p>
          <span className="block w-20 h-1 bg-secondary absolute bottom-0 left-1/2 -translate-x-1/2 mt-6"></span>
        </div>

        {/* Testimonials Grid */}
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
    </section>
  );
};

export default Testimonials;
