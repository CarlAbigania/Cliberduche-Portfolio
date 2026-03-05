import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalPortal from './ModalPortal';
import { MdVerified, MdReceipt, MdDocumentScanner, MdLocalHospital, MdHouse, MdWorkspacePremium, MdLocalFireDepartment, MdVerifiedUser, MdOpenInNew, MdEco } from 'react-icons/md';

const ComplianceSafety = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Animation variants
  const overlayItem = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, boxShadow: '0 0 0 8px #6366f122' },
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Blueprint map: all certificates as hotspots with coordinates
  // Hotspots now scattered within the extended box area (x: 15-85, y: 20-80)
  const complianceHotspots = [
    { name: 'Securities and Exchange Commission (SEC)', image: 'images/permits/securities-and-exchange-commision.png', reactIcon: MdDocumentScanner, x: 18, y: 28 },
    { name: 'Bureau of Internal Revenue (BIR)', image: 'images/permits/BIR.png', reactIcon: MdReceipt, x: 35, y: 22 },
    { name: 'Social Security System (SSS)', image: 'images/permits/SSS.png', reactIcon: MdVerified, x: 65, y: 25 },
    { name: 'PhilHealth', image: 'images/permits/philhealth.png', reactIcon: MdLocalHospital, x: 25, y: 55 },
    { name: 'Pag-IBIG Fund', image: 'images/permits/pagibig-fund.png', reactIcon: MdHouse, x: 45, y: 70 },
    { name: "Mayor's Permit 2026", image: 'images/permits/mayors2026.png', reactIcon: MdWorkspacePremium, x: 80, y: 35 },
    { name: 'Fire Safety Inspection Permit', image: 'images/permits/fire-safety-inspection.png', reactIcon: MdLocalFireDepartment, x: 20, y: 80 },
    { name: 'Sanitary Permit', image: 'images/permits/sanitary.png', reactIcon: MdVerifiedUser, x: 60, y: 80 },
    { name: 'PCAB License', image: 'images/permits/pcab-license.png', reactIcon: MdWorkspacePremium, x: 75, y: 60 },
    { name: 'Insurance Certificate & Guarantee', image: 'images/permits/insurance-certificate.png', reactIcon: MdVerifiedUser, x: 55, y: 45 },
    { name: 'Environmental Compliance Certificate (ECC)', image: 'images/permits/ECC.png', reactIcon: MdEco, x: 80, y: 80 },
  ];

  const safetyCommitments = [
    'Provide a safe and healthy work environment for all employees and partners.',
    'Ensure supervisors are accountable for health and safety under their supervision.',
    'Maintain safe machinery and equipment, with strict compliance to work procedures.',
    'Provide adequate training for every worker to protect health and safety.',
    'Make health and safety an integral part of every activity and decision.',
  ];

  return (
    <section id="compliance" className={
      `py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ` +
      (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100')
    }>
      {/* Animated Infographic SVG Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
          <ellipse cx="720" cy="300" rx="600" ry="220" fill="#6366f1" fillOpacity="0.10" />
          <rect x="320" y="120" width="800" height="360" rx="80" fill="#f43f5e" fillOpacity="0.07" />
          <path d="M720 120 Q800 300 720 480 Q640 300 720 120 Z" fill="#6366f1" fillOpacity="0.13" />
          <circle cx="720" cy="300" r="90" fill="#fff" fillOpacity="0.08" />
        </svg>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={overlayItem}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-rose-600 dark:from-indigo-500 dark:to-rose-500"></div>
            <span className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400">COMPLIANCE & SAFETY</span>
            <div className="w-12 h-1 bg-gradient-to-l from-indigo-600 to-rose-600 dark:from-indigo-500 dark:to-rose-500"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900 dark:text-white">Compliance & Safety</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-white/70">
            Legal compliance, certifications, and unwavering safety commitment
          </p>
        </motion.div>

        {/* Blueprint Interactive Map for Certificates */}
        <div className="relative flex items-center justify-center mb-20 min-h-[480px] w-full">
          {/* SVG Blueprint Background with grid lines, now much wider */}
          <svg viewBox="0 0 200 110" className="absolute w-full h-full left-0 top-0 z-0" style={{ maxWidth: '2000px', maxHeight: '520px' }}>
            {/* Only grid lines remain, extended width */}
            <g stroke="#334155" strokeWidth="0.3">
              <line x1="3" y1="30" x2="197" y2="30" />
              <line x1="3" y1="55" x2="197" y2="55" />
              <line x1="3" y1="80" x2="197" y2="80" />
              <line x1="33" y1="7" x2="33" y2="103" />
              <line x1="100" y1="7" x2="100" y2="103" />
              <line x1="167" y1="7" x2="167" y2="103" />
            </g>
          </svg>
          {/* Hotspots with improved spacing and animated effects */}
          {complianceHotspots.map((item, idx) => {
            // Clamp hotspot positions to always stay within the grid area
            // Grid area in SVG: x: 3-197, y: 7-103 (out of 200x110)
            // Convert to percent: x: 1.5%-98.5%, y: 6.4%-93.6%
            const clamp = (val, min, max) => Math.max(min, Math.min(val, max));
            const minX = 1.5, maxX = 98.5, minY = 6.4, maxY = 93.6;
            const clampedX = clamp(item.x, minX, maxX);
            const clampedY = clamp(item.y, minY, maxY);
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: 'easeOut' }}
                whileHover={{}}
                style={{
                  position: 'absolute',
                  left: `${clampedX}%`,
                  top: `${clampedY}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10 + idx,
                  cursor: 'pointer',
                }}
                tabIndex={0}
                aria-label={item.name}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedCert(item)}
                onKeyDown={e => (e.key === 'Enter' ? setSelectedCert(item) : null)}
              >
                <span className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shadow-lg">
                  {item.reactIcon && React.createElement(item.reactIcon, { className: 'text-xl' })}
                </span>
                {/* Floating card on hover/click with certificate name and details only (no image preview) */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 bg-white dark:bg-slate-900/90 text-gray-700 dark:text-white/80 rounded-xl shadow-lg px-4 py-3 text-sm z-50"
                    >
                      <div className="font-bold mb-1">{item.name}</div>
                      <div>{item.details || 'Click to view certificate.'}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          {/* Removed safety badges/icons around the blueprint as requested */}
        </div>

        {/* Safety Commitments as Animated Overlays on Infographic */}
        <div className="flex flex-wrap gap-8 items-center justify-center relative z-10">
          {safetyCommitments.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={overlayItem}
              whileHover="hover"
              className="relative px-8 py-5 rounded-full bg-gradient-to-br from-indigo-100 to-rose-100 dark:from-slate-700 dark:to-slate-900 shadow-md text-lg text-gray-700 dark:text-white/80 font-semibold select-none"
              style={{ cursor: 'default', minWidth: '200px', minHeight: '60px' }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal - Animated */}
        <AnimatePresence>
          {selectedCert && (
            <ModalPortal isOpen={!!selectedCert}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden">
                  <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-slate-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCert?.name}</h3>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="text-gray-400 dark:text-gray-300 hover:text-dark dark:hover:text-white text-3xl font-light transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  <div className="p-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
                      <img
                        src={selectedCert?.image}
                        alt={selectedCert?.name}
                        className="w-full h-auto object-contain max-h-[60vh]"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 300\"%3E%3Crect fill=\"%23e0e7ff\" width=\"400\" height=\"300\"/%3E%3Ctext x=\"50%25\" y=\"50%25\" text-anchor=\"middle\" dy=\".3em\" font-family=\"Arial\" font-size=\"16\" fill=\"%236366f1\"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-6 border-t border-gray-200 dark:border-slate-700 flex justify-end bg-gray-50 dark:bg-slate-700/50">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="btn-dark py-2 px-6"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </ModalPortal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ComplianceSafety;