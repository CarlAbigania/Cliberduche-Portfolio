import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import ModalPortal from './ModalPortal';
import { MdVerified, MdReceipt, MdDocumentScanner, MdLocalHospital, MdHouse, MdWorkspacePremium, MdLocalFireDepartment, MdVerifiedUser, MdOpenInNew, MdEco } from 'react-icons/md';

const ComplianceSafety = () => {
  const { isDarkMode } = useTheme();
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
      [
        'py-24 md:py-32 relative overflow-hidden transition-colors duration-500',
        isDarkMode
          ? 'bg-[#0f172a]'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      ].join(' ')
    }>
      {/* Removed background shapes: only grid remains below */}
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
              <div className={`w-12 h-1 bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-teal-400' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
              <span className={`text-sm font-bold tracking-widest ${isDarkMode ? 'text-indigo-300' : 'text-[#0099FF]'}`}>COMPLIANCE & SAFETY</span>
              <div className={`w-12 h-1 bg-gradient-to-l ${isDarkMode ? 'from-indigo-400 to-teal-400' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
          </div>
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Compliance & Safety</h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>Legal compliance, certifications, and unwavering safety commitment</p>
        </motion.div>



        {/* New grid layout for certificates and safety commitments */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Certificates Grid */}
          <div className="flex-1">
            <div className="p-0 bg-white/90 dark:bg-slate-900/80 overflow-hidden">
              {complianceHotspots.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.6, ease: 'easeOut' }}
                  className="flex flex-col sm:flex-row items-center gap-6 px-6 py-5"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl ${isDarkMode ? 'bg-[#6366f1]' : 'bg-[#0099FF]'}`}>
                    {item.reactIcon && React.createElement(item.reactIcon, { className: 'text-2xl' })}
                  </div>
                  <div className="flex-1 flex flex-col items-center sm:items-start">
                    <div className="font-bold text-base text-center sm:text-left text-gray-900 dark:text-white min-h-[48px] flex items-center">{item.name}</div>
                  </div>
                  <button
                    className={`mt-4 sm:mt-0 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-white ${isDarkMode ? 'bg-[#6366f1] hover:bg-[#818cf8]' : 'bg-[#0099FF] hover:bg-[#005fcc]'}`}
                    onClick={() => setSelectedCert(item)}
                  >
                    View
                    <MdOpenInNew className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Safety Commitments */}
          <div className="flex-1 flex flex-col gap-8 items-center">
            {safetyCommitments.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={overlayItem}
                whileHover="hover"
                className={
                  `relative px-8 py-5 rounded-2xl bg-gradient-to-br ` +
                  (isDarkMode
                    ? 'from-indigo-900 to-teal-900 text-white/80'
                    : 'from-[#0099FF]/10 to-[#CCFF00]/20 text-gray-700') +
                  ' shadow-md text-lg font-semibold select-none text-center'
                }
                style={{ cursor: 'default', minWidth: '200px', minHeight: '60px' }}
              >
                {item}
              </motion.div>
            ))}
          </div>
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
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-2xl font-light transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode ? 'bg-[#6366f1] text-white hover:bg-[#818cf8]' : 'bg-[#0099FF] text-white hover:bg-[#005fcc]'}`}
                      aria-label="Close"
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