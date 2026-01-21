import React, { useState } from 'react';
import logo from '/images/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md shadow-primary/10 fixed w-full top-0 z-50">
      {/* Main Header */}
      <div className="max-w-container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex items-center flex-shrink-0">
          <img src={logo} alt="Cliberduche Corporation Logo" className="h-12 w-auto hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block flex-grow">
          <ul className="flex space-x-0.5 justify-center">
            {['About', 'Services', 'Projects', 'Equipment', 'Compliance', 'RFQ', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`}
                  className="text-dark text-sm font-semibold hover:text-primary transition-all duration-300 px-2.5 py-2 rounded-lg hover:bg-primary/5"
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
          {['About', 'Services', 'Projects', 'Equipment', 'Compliance', 'RFQ', 'Contact'].map((item) => (
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
