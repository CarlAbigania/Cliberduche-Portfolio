import React from 'react';

const EquipmentFleet = () => {
  const fleet = [
    { label: 'Dump Trucks', value: '9 units', desc: '8,000–12,500 kg capacities' },
    { label: 'Compactors', value: '2 units', desc: '10–12 tons' },
    { label: 'Bulldozers', value: '1 unit', desc: 'Caterpillar DSH' },
    { label: 'Motor Grader', value: '1 unit', desc: 'Mitsubishi MG 130' },
    { label: 'Backhoes / Excavators', value: '3 units', desc: '0.98–1.2 cu.m.' },
    { label: 'Support Units', value: '5 units', desc: 'Tower lights & container vans' },
  ];

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            Equipment & Fleet
          </h2>
          <p className="text-gray text-base md:text-lg">
            Modern equipment assets supporting large-scale site development
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">{item.label}</p>
              <p className="text-2xl font-mont font-semibold text-primary">{item.value}</p>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentFleet;
