import React from 'react';

const Compliance = () => {
  const items = [
    'Securities and Exchange Commission (SEC)',
    'Bureau of Internal Revenue (BIR)',
    'Social Security System (SSS)',
    'PhilHealth',
    'Pag-IBIG Fund',
    "Mayor's Permit 2025",
    'Fire Safety Inspection Permit',
    'Sanitary Permit',
    'PCAB License',
    'Environmental Compliance Certificate (ECC)',
    'Insurance Certificate & Guarantee',
  ];

  return (
    <section id="compliance" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            Compliance & Registrations
          </h2>
          <p className="text-gray text-base md:text-lg">
            Fully registered and compliant with government and regulatory requirements
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <i className="fas fa-check"></i>
              </div>
              <p className="text-dark font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
