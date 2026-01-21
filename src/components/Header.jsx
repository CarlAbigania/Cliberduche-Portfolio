import React, { useState } from 'react';
import logo from '/images/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md shadow-primary/10 fixed w-full top-0 z-50">
      <div className="max-w-container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex items-center">
          <img src={logo} alt="Cliberduche Corporation Logo" className="h-14 w-auto hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-8 text-sm">
          <a href="tel:+63495466107" className="text-dark hover:text-primary flex items-center gap-2 font-semibold transition-all duration-300">
            <i className="fas fa-phone text-primary"></i>
            +63 49 546-6107
          </a>
          <a href="mailto:cliberduche.corp@yahoo.com" className="text-dark hover:text-primary flex items-center gap-2 font-semibold transition-all duration-300">
            <i className="fas fa-envelope text-primary"></i>
            cliberduche.corp@yahoo.com
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {['Home', 'About', 'Services', 'Projects', 'Resources', 'Suppliers', 'Equipment', 'Compliance', 'RFQ', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`}
                  className="text-dark font-semibold hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary text-2xl hover:scale-110 transition-transform duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full bg-white shadow-lg transform transition-all duration-300 ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col p-6 space-y-2">
          {['Home', 'About', 'Services', 'Projects', 'Resources', 'Suppliers', 'Equipment', 'Compliance', 'RFQ', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`}
                className="text-dark hover:text-primary block font-semibold px-4 py-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
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
