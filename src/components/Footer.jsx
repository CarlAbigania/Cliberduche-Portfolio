import React from 'react';
import BackToTopButton from './BackToTopButton';
import { MdPhone, MdMailOutline, MdSchedule, MdArrowForward } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
const logo = '/images/logo2.png';

const Footer = () => {
  return (
    <footer className="transition-all duration-300 bg-gradient-to-b from-dark via-dark to-dark dark:from-gray-900 dark:via-gray-900 dark:to-black text-white pt-12 md:pt-16 pb-6 ease-out" style={{ position: 'relative', zIndex: 12 }}>
      <div className="max-w-container mx-auto px-4">
        {/* Top Decorative Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent mb-12"></div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Company Info - Featured */}
          <div className="lg:col-span-1 fade-in-up">
            <div className="mb-2">
              <img src={logo} alt="Cliberduche" className="h-10 w-auto mb-3" />
            </div>
            <h3 className="text-xl font-mont font-bold mb-3 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              CLIBERDUCHE CORP.
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm font-light">
              One-stop shop for backfill sourcing, land development, and civil works with a safety-first approach.
            </p>
            <p className="text-gray-400 text-xs mt-3">Est. 2018</p>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-sm font-mont font-bold mb-4 text-secondary uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {['About', 'Services', 'Projects', 'Equipment', 'Compliance'].map((item, i) => (
                <li key={item} className="fade-in-up" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`}
                    className="hover:text-secondary transition-all duration-300 inline-block hover:translate-x-1 underline-animate"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-sm font-mont font-bold mb-6 text-secondary uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 hover:translate-x-1 transition-all duration-300">
                <MdPhone className="text-secondary mt-0.5 flex-shrink-0" />
                <a href="tel:+63495466107" className="text-gray-300 hover:text-secondary transition-all duration-300">
                  +63 49 546-6107
                </a>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-all duration-300">
                <MdMailOutline className="text-secondary mt-0.5 flex-shrink-0" />
                <a href="mailto:cliberduche.corp@yahoo.com" className="text-gray-300 hover:text-secondary transition-all duration-300">
                  cliberduche.corp@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdSchedule className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri 8AM-6PM</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-sm font-mont font-bold mb-6 text-secondary uppercase tracking-widest">Follow Us</h4>
            <div className="flex space-x-3 mb-6">
              {[
                { icon: FaFacebook, url: '#', label: 'Facebook' },
                { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
                { icon: FaInstagram, url: '#', label: 'Instagram' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    title={social.label}
                    className="w-11 h-11 bg-gradient-to-br from-primary to-accent text-white rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 hover:scale-110 text-sm fade-in-up"
                    style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Back to Top */}
        <div className="border-t border-gray-700/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-secondary font-semibold">Cliberduche Corporation</span>. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <BackToTopButton />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
