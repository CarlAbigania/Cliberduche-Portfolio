import React from 'react';
const logo = '/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 md:pt-24 pb-8">
      <div className="max-w-container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-mont font-bold mb-6 pb-4 border-b-2 border-secondary">
              CLIBERDUCHE CORP.
            </h3>
            <p className="text-gray-400 leading-relaxed text-base">
              One-stop shop for backfill sourcing, land development, and civil works with a safety-first, compliance-led approach since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-mont font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {['Home', 'About', 'Story', 'Mission & Vision', 'Services', 'Resources', 'Suppliers', 'Projects', 'Equipment', 'Safety', 'Compliance', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`}
                    className="hover:text-secondary transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-mont font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              {['Backfill Sourcing', 'Land Development', 'Site Management', 'Equipment Leasing', 'Civil Works'].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="hover:text-secondary transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-mont font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              {['facebook-f', 'linkedin-in', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Connect with us on social media</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-10 mb-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-mont font-bold text-white mb-3">Company Profile</h3>
            <p className="text-gray-300 mb-6 text-base">
              View our company profile and compliance documentation.
            </p>
            <a
              href="Company Profile 2026.pdf"
              className="inline-flex items-center justify-center bg-secondary hover:bg-[#6fb31f] text-primary px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-download mr-2"></i>
              Download Company Profile
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
          <p>&copy; 2026 Cliberduche Corporation. All Rights Reserved. | Registered with SEC: November 28, 2018</p>
          <p className="mt-3">Professional Land Development & Civil Works Services in CALABARZON</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
