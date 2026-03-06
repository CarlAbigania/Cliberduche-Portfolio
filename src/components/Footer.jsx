import React from 'react';
import BackToTopButton from './BackToTopButton';
import { MdPhone, MdMailOutline, MdSchedule, MdArrowForward } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
const logo = '/images/logo2.png';

const Footer = () => {
  return (
    <footer id="footer" className="transition-all duration-300 bg-primary dark:bg-dark text-dark dark:text-white pt-12 md:pt-16 pb-6 ease-out" style={{ position: 'relative', zIndex: 12 }}>
      <div className="max-w-container mx-auto px-4">
        {/* Top Decorative Line */}
        <div className="h-px bg-secondary/40 dark:bg-blue-400/40 mb-12"></div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Company Info - Featured */}
          <div className="lg:col-span-1 fade-in-up">
            <div className="mb-2">
              <img src={logo} alt="Cliberduche" className="h-10 w-auto mb-3" />
            </div>
            <h3 className="text-xl font-mont font-bold mb-3 text-secondary dark:text-blue-400">
              CLIBERDUCHE CORP.
            </h3>
            <p className="text-white dark:text-gray-300 leading-relaxed text-sm font-light">
              One-stop shop for backfill sourcing, land development, and civil works with a safety-first approach.
            </p>
            <p className="text-white/80 dark:text-gray-400 text-xs mt-3">Est. 2018</p>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-sm font-mont font-bold mb-4 uppercase tracking-widest text-secondary dark:text-blue-400">Quick Links</h4>
            <ul className="space-y-3 text-white dark:text-gray-300 text-sm">
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
            <h4 className="text-sm font-mont font-bold mb-6 uppercase tracking-widest text-secondary dark:text-blue-400">Contact</h4>
            <ul className="space-y-3 text-sm text-white dark:text-gray-300">
              <li className="flex items-start gap-3 hover:translate-x-1 transition-all duration-300">
                <MdPhone className="text-secondary dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+63495466107" className="text-white dark:text-gray-300 hover:text-secondary transition-all duration-300">
                  +63 49 546-6107
                </a>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-all duration-300">
                <MdMailOutline className="text-secondary dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:cliberduche.corp@yahoo.com" className="text-white dark:text-gray-300 hover:text-secondary transition-all duration-300">
                  cliberduche.corp@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdSchedule className="text-secondary dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white dark:text-gray-300">Mon-Fri 8AM-6PM</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-sm font-mont font-bold mb-6 uppercase tracking-widest text-secondary dark:text-blue-400">Follow Us</h4>
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
                    className="w-11 h-11 bg-secondary dark:bg-blue-400 text-primary dark:text-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark transition-all duration-300 hover:scale-110 text-sm fade-in-up"
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
        <div className="border-t border-secondary/40 dark:border-blue-400/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white dark:text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-secondary dark:text-blue-400 font-semibold">Cliberduche Corporation</span>. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <BackToTopButton className="bg-secondary dark:bg-blue-400 text-primary dark:text-dark" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
