import React from 'react';

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">
            Our Resources
          </h2>
          <p className="text-gray text-base md:text-lg">
            Substantial material reserves and modern equipment fleet
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              number: '20M+',
              label: 'Cubic Meters',
              desc: 'Backfilling materials at Calamba site',
            },
            {
              number: '2.2M+',
              label: 'Cubic Meters',
              desc: 'Backfilling materials at Silang site',
            },
            {
              number: '14+',
              label: 'Heavy Equipment',
              desc: 'Modern fleet including excavators, bulldozers, compactors',
            },
            {
              number: '9+',
              label: 'Dump Trucks',
              desc: 'Various capacities from 8,000 to 12,500 kg',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md text-center border border-primary/10 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-dark">{stat.label}</h3>
              <p className="text-gray text-sm mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Land Development Sites */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-mont font-semibold text-primary">
            Land Development Sites
          </h3>
        </div>

        <div className="space-y-8">
          {/* Calamba Site */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
            <h4 className="text-xl md:text-2xl font-semibold text-dark mb-3">
              Calamba City Site
            </h4>
            <p>
              <strong>Coordinates:</strong> 14°08'32.0"N 121°09'37.0"E
            </p>
            <p>
              <strong>Address:</strong> 45R6+V4J Calamba, Laguna
            </p>
            <p>
              <strong>Capacity:</strong> Approximately 20 million cubic meters of
              backfilling materials
            </p>
            <p>
              Covering 7 lots with a total volume of 19,580,004.6 cubic meters of
              excess backfill materials (Jastifias).
            </p>
          </div>

          {/* Silang Site */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
            <h4 className="text-xl md:text-2xl font-semibold text-dark mb-3">
              Silang, Cavite Site
            </h4>
            <p>
              <strong>Coordinates:</strong> 14°15'02"N 120°59'12"E
            </p>
            <p>
              <strong>Address:</strong> Sabutan, 7X2P+6MF Silang, Cavite
            </p>
            <p>
              <strong>Capacity:</strong> Approximately 2.2 million cubic meters of
              backfilling materials
            </p>
            <p>
              Covering 5 lots with a total volume of 2,241,000 cubic meters of
              excess backfill materials (Sitikis).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
