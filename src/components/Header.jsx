import React, { useState } from 'react';
import logo from '/images/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex items-center">
          <img src={logo} alt="Cliberduche Corporation Logo" className="h-12 w-auto" />
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-6 text-sm">
          <a href="tel:+63495466107" className="text-dark hover:text-secondary flex items-center gap-2">
            <i className="fas fa-phone"></i>
            +63 49 546-6107
          </a>
          <a href="mailto:cliberduche.corp@yahoo.com" className="text-dark hover:text-secondary flex items-center gap-2">
            <i className="fas fa-envelope"></i>
            cliberduche.corp@yahoo.com
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['Home', 'About', 'Services', 'Projects', 'Resources', 'Suppliers', 'Equipment', 'Compliance', 'RFQ', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`}
                  className="text-dark font-medium hover:text-secondary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
<div
  className={`md:hidden fixed top-[64px] left-0 w-full bg-white shadow-md transform transition-transform duration-300 ${
    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <ul className="flex flex-col p-6 space-y-3">
    {['Home', 'About', 'Services', 'Projects', 'Resources', 'Suppliers', 'Equipment', 'Compliance', 'RFQ', 'Contact'].map((item) => (
      <li key={item}>
        <a
          href={`#${item.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`}
          className="text-dark hover:text-secondary block font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>

    </header>
  );
};

export default Header;
