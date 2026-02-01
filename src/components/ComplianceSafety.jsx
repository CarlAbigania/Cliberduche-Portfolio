import React, { useState } from 'react';

const ComplianceSafety = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const complianceItems = [
    { name: 'Securities and Exchange Commission (SEC)', image: 'images/permits/securities-and-exchange-commision.png', icon: 'fa-file-contract' },
    { name: 'Bureau of Internal Revenue (BIR)', image: 'images/permits/BIR.png', icon: 'fa-receipt' },
    { name: 'Social Security System (SSS)', image: 'images/permits/SSS.png', icon: 'fa-id-card' },
    { name: 'PhilHealth', image: 'images/permits/philhealth.png', icon: 'fa-hospital' },
    { name: 'Pag-IBIG Fund', image: 'images/permits/pagibig-fund.png', icon: 'fa-home' },
    { name: "Mayor's Permit 2026", image: 'images/permits/mayors2026.png', icon: 'fa-stamp' },
    { name: 'Fire Safety Inspection Permit', image: 'images/permits/fire-safety-inspection.png', icon: 'fa-fire' },
    { name: 'Sanitary Permit', image: 'images/permits/sanitary.png', icon: 'fa-shield-alt' },
    { name: 'PCAB License', image: 'images/permits/pcab-license.png', icon: 'fa-certificate' },
    { name: 'Insurance Certificate & Guarantee', image: 'images/permits/insurance-certificate.png', icon: 'fa-lock' },
    { name: 'Environmental Compliance Certificate (ECC)', image: 'images/permits/ECC.png', icon: 'fa-leaf' },
  ];

  const safetyCommitments = [
    'Provide a safe and healthy work environment for all employees and partners.',
    'Ensure supervisors are accountable for health and safety under their supervision.',
    'Maintain safe machinery and equipment, with strict compliance to work procedures.',
    'Provide adequate training for every worker to protect health and safety.',
    'Make health and safety an integral part of every activity and decision.',
  ];

  return (
    <section id="compliance" className="py-12 md:py-16 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h2 className="text-primary mb-4">
            Compliance & Safety
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Legal compliance, certifications, and unwavering safety commitment
          </p>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Compliance Registrations */}
          <div>
            <h3 className="text-3xl md:text-4xl font-mont font-bold text-dark mb-10">
              Government Registrations & Permits
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {complianceItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCert(item)}
                  className="premium-card p-5 flex items-center gap-4 hover:border-secondary/50 hover:shadow-lg hover:bg-blue-50/30 transition-all duration-300 cursor-pointer text-left group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/30 group-hover:scale-110 transition-transform">
                    <i className={`fas ${item.icon} text-sm`}></i>
                  </div>
                  <p className="text-dark font-semibold text-base flex-1">{item.name}</p>
                  <i className="fas fa-external-link-alt text-primary/60 group-hover:text-primary text-xs"></i>
                </button>
              ))}
            </div>
          </div>

          {/* Safety Commitment */}
          <div>
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark mb-6">
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

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-2xl font-mont font-bold text-dark">{selectedCert.name}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-dark text-3xl font-light transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="w-full h-auto object-contain max-h-[60vh]"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0e7ff" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%236366f1"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="btn-dark py-2 px-6"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ComplianceSafety;