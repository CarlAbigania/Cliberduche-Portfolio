import React from 'react';

const About = () => {
  const features = [
    { icon: 'fa-check', title: 'Quality Materials', desc: 'High-quality backfill and aggregates' },
    { icon: 'fa-shield-alt', title: 'Safety First', desc: 'Committed to highest safety standards' },
    { icon: 'fa-leaf', title: 'Eco-Friendly', desc: 'Sustainable development practices' },
    { icon: 'fa-handshake', title: 'Client Focused', desc: 'Dedicated to customer satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            About Our Company
          </h2>
          <p className="text-gray text-base">
            Providing excellence in construction and land development since 2018
          </p>
          {/* Underline */}
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text & Features */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark">
              Our Story
            </h3>
            <p className="text-gray leading-relaxed">
              Cliberduche Corporation was established in 2018, born out of the dream to provide
              the best for family without leaving the country...
            </p>
            <p className="text-gray leading-relaxed">
              Our name CLIBERDUCHE stands for the surnames of our founders: CLImaco, BERonilla,
              and PiaDUCHE...
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
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

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="About Cliberduche"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
