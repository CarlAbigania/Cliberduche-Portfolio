import React from 'react';
const logo = '/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-mont font-semibold mb-4 relative after:block after:w-10 after:h-1 after:bg-secondary after:absolute after:-bottom-2">
              CLIBERDUCHE CORP.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Providing high-quality backfill materials, land development, and construction services with commitment to quality, safety, and integrity since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'About', 'Services', 'Projects', 'Resources'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              {['Backfill Sourcing', 'Land Development', 'Site Management', 'Equipment Leasing', 'Civil Works'].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-all"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-dark/80 rounded-lg p-6 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest project updates and industry news.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded text-dark font-sans"
                required
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-[#d18f16] text-white px-4 py-2 rounded font-medium transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          &copy; 2026 Cliberduche Corporation. All Rights Reserved. | Registered with SEC: November 28, 2018
        </div>
      </div>
    </footer>
  );
};

export default Footer;
