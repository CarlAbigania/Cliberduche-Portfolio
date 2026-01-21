import React from 'react';
const logo = '/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 md:pt-24 pb-8">
      <div className="max-w-container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-mont font-bold mb-6 pb-4 border-b-2 border-secondary">
              CLIBERDUCHE CORP.
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              One-stop shop for backfill sourcing, land development, and civil works with a safety-first approach since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-mont font-bold mb-6 border-b-2 border-secondary pb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['About', 'Services', 'Projects', 'Equipment', 'Compliance'].map((item) => (
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
            <h3 className="text-lg font-mont font-bold mb-6 border-b-2 border-secondary pb-4">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Backfill Sourcing', 'Land Development', 'Civil Works', 'Equipment Leasing', 'Site Management'].map((item) => (
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-mont font-bold mb-6 border-b-2 border-secondary pb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="tel:+63495466107" className="hover:text-secondary transition-all duration-300">
                  <strong>Phone:</strong> +63 49 546-6107
                </a>
              </li>
              <li>
                <a href="mailto:cliberduche.corp@yahoo.com" className="hover:text-secondary transition-all duration-300">
                  <strong>Email:</strong> cliberduche.corp@yahoo.com
                </a>
              </li>
              <li>
                <span className="text-gray-400"><strong>Hours:</strong> Mon-Fri 8AM-6PM</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-mont font-bold mb-6 border-b-2 border-secondary pb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-6">
              {['facebook-f', 'linkedin-in', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
            <a href="#contact" className="text-secondary hover:text-white transition-all text-sm font-semibold">
              Get in Touch →
            </a>
          </div>
        </div>

        {/* Document Download */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 md:p-10 mb-12 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-mont font-bold text-white mb-2">Company Profile</h3>
              <p className="text-gray-300 text-sm">View our compliance documentation and corporate profile.</p>
            </div>
            <a
              href="Company Profile 2026.pdf"
              className="inline-flex items-center justify-center bg-secondary hover:bg-[#6fb31f] text-primary px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap flex-shrink-0"
            >
              <i className="fas fa-download mr-2"></i>
              Download PDF
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
