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
            One-stop shop for backfill sourcing, land development, and civil works since 2018
          </p>
          {/* Underline */}
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text & Features */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark">
              Company Overview
            </h3>
            <p className="text-gray leading-relaxed">
              Cliberduche Corporation is a full-scale land development and civil works contractor
              serving CALABARZON and beyond. We supply high-quality backfill materials (sub-base,
              aggregates, mixed soil, and boulders), execute site development, and deliver civil
              works with a compliance-led, safety-first approach.
            </p>
            <p className="text-gray leading-relaxed">
              Established in 2018 and registered with the SEC on November 28, 2018, we operate as
              a one-stop shop with in-house assets and a network of qualified professionals.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-md shadow-primary/30">
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
            <div className="rounded-xl border border-primary/10 bg-white p-3 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="About Cliberduche"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
