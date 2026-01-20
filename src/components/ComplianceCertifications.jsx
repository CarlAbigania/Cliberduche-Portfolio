import React from 'react';

const ComplianceCertifications = () => {
  const complianceItems = [
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
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            Compliance & Certifications
          </h2>
          <p className="text-gray text-base">
            Fully registered, compliant, and certified for quality operations
          </p>
          {/* Underline */}
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        {/* Compliance Registrations */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-8 text-center">
            Government Registrations & Permits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-sm border border-primary/10 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                  <i className="fas fa-check"></i>
                </div>
                <p className="text-dark font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-6 text-center">
            Certificate Gallery
          </h3>
          <div className="text-center py-12">
            <div className="bg-gray-100 p-8 rounded-lg max-w-md mx-auto">
              <i className="fas fa-certificate text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">Certificate images will be added here once validated.</p>
            </div>
          </div>
        </div>

        {/* Document Downloads */}
        <div>
          <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-6 text-center">
            Document Downloads
          </h3>
          <div className="flex justify-center">
            <a
              href="/Company Profile 2026.pdf"
              download="Company_Profile_2026.pdf"
              className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              <i className="fas fa-download"></i>
              Download Company Profile PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCertifications;