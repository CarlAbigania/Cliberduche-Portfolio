import React from 'react';

const CertificationsCompliance = () => {
  // Placeholder for certificate images until valid ones are identified
  const certificates = []; // Empty array for now

  return (
    <section id="certifications" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            Certifications & Compliance
          </h2>
          <p className="text-gray text-base">
            Our commitment to quality, safety, and environmental standards
          </p>
          {/* Underline */}
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-6 text-center">
            Certificate Gallery
          </h3>
          {certificates.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {certificates.map((src, index) => (
                <div key={index} className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-auto rounded cursor-pointer"
                    onClick={() => window.open(src, '_blank')}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 p-8 rounded-lg max-w-md mx-auto">
                <i className="fas fa-certificate text-4xl text-gray-400 mb-4"></i>
                <p className="text-gray-600">Certificate images will be added here once validated.</p>
              </div>
            </div>
          )}
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

export default CertificationsCompliance;