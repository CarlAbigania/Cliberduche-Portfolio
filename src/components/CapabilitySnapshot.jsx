import React from 'react';

const CapabilitySnapshot = () => {
  const stats = [
    {
      label: 'Years in Operation',
      value: '2018–Present',
      note: 'Registered November 28, 2018',
    },
    {
      label: 'Backfill Resources',
      value: '22.2M+ cu.m.',
      note: 'Calamba + Silang sites combined',
    },
    {
      label: 'Coverage',
      value: 'CALABARZON+',
      note: 'Laguna, Cavite, and beyond',
    },
    {
      label: 'Service Scope',
      value: 'One-Stop Shop',
      note: 'Backfill to civil works',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">{item.label}</p>
              <p className="text-2xl font-mont font-semibold text-primary">{item.value}</p>
              <p className="text-sm text-gray-600 mt-2">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitySnapshot;
