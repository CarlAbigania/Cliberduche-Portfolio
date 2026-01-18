import React from 'react';

const CoreValues = () => {
  const values = [
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
    <section className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">Our Core Values</h2>
          <p className="text-gray text-lg">The foundation of everything we do</p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:-translate-y-2"
            >
              <div className="text-primary text-5xl mb-6">
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-mont font-semibold mb-4">{value.title}</h3>
              <p className="text-dark text-base leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
