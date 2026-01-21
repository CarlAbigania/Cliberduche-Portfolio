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
    <section id="compliance" className="py-16 md:py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title mb-20">
          <h2 className="text-primary mb-4">
            Compliance & Safety
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Legal compliance, certifications, and unwavering safety commitment
          </p>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Compliance Registrations */}
          <div>
            <h3 className="text-3xl md:text-4xl font-mont font-bold text-dark mb-10">
              Government Registrations & Permits
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {complianceItems.map((item, index) => (
                <div
                  key={index}
                  className="premium-card p-5 flex items-center gap-4 hover:border-secondary/50"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/30">
                    <i className="fas fa-check-circle text-sm"></i>
                  </div>
                  <p className="text-dark font-semibold text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Commitment */}
          <div>
            <h3 className="text-3xl md:text-4xl font-mont font-bold text-dark mb-10">
              Safety Commitment
            </h3>
            <div className="premium-card border-l-4 border-secondary p-10 mb-8">
              <p className="text-gray text-lg leading-relaxed mb-6">
                CLIBERDUCHE CORPORATION is vitally interested in its employees' health and safety.
                Protecting employees from injury or occupational disease is a major, continuing
                objective. As President, I personally promise that every reasonable precaution will be
                taken to protect our workers. Hiring experienced Safety Officers and maintaining strict
                safety practices before, during, and after project execution is a core commitment.
              </p>
              <p className="text-gray text-lg leading-relaxed">
                Commitment to health and safety must form an integral part of this organization from
                the president to the workers. Signed November 2018.
              </p>
            </div>

            <div className="premium-card border-l-4 border-secondary p-10">
              <h4 className="text-2xl font-mont font-bold text-dark mb-6">
                Safety Principles
              </h4>
              <ul className="space-y-4">
                {safetyCommitments.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-2 h-3 w-3 rounded-full bg-secondary flex-shrink-0"></span>
                    <span className="text-gray text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Gallery */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-mont font-bold text-dark mb-12 text-center">
            Certificate Gallery
          </h3>
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-16 rounded-xl max-w-2xl mx-auto border-2 border-primary/20">
              <i className="fas fa-certificate text-6xl text-primary/30 mb-6"></i>
              <p className="text-gray text-lg">Certificate images will be added here once validated.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComplianceSafety;