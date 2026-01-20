import React from 'react';

const ComplianceSafety = () => {
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

  const safetyCommitments = [
    'Provide a safe and healthy work environment for all employees and partners.',
    'Ensure supervisors are accountable for health and safety under their supervision.',
    'Maintain safe machinery and equipment, with strict compliance to work procedures.',
    'Provide adequate training for every worker to protect health and safety.',
    'Make health and safety an integral part of every activity and decision.',
  ];

  return (
    <section id="compliance" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            Compliance & Safety
          </h2>
          <p className="text-gray text-base">
            Legal compliance, certifications, and unwavering safety commitment
          </p>
          {/* Underline */}
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Compliance Registrations */}
          <div>
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-8">
              Government Registrations & Permits
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {complianceItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-primary/10 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <p className="text-dark font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Commitment */}
          <div>
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-8">
              Safety Commitment
            </h3>
            <div className="bg-white border border-primary/10 rounded-xl p-6 shadow-md mb-6">
              <p className="text-gray leading-relaxed mb-4">
                CLIBERDUCHE CORPORATION is vitally interested in its employees' health and safety.
                Protecting employees from injury or occupational disease is a major, continuing
                objective. As President, I personally promise that every reasonable precaution will be
                taken to protect our workers. Hiring experienced Safety Officers and maintaining strict
                safety practices before, during, and after project execution is a core commitment.
              </p>
              <p className="text-gray leading-relaxed">
                Commitment to health and safety must form an integral part of this organization from
                the president to the workers. Signed November 2018.
              </p>
            </div>

            <div className="bg-light border border-primary/10 rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-mont font-semibold text-dark mb-4">
                Safety Principles
              </h4>
              <ul className="space-y-3">
                {safetyCommitments.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary"></span>
                    <span className="text-gray text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Gallery */}
        <div>
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
        <div className="mt-12">
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

export default ComplianceSafety;