import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const ProcessOverview = () => {
  const { isDarkMode } = useTheme();
  const [maxExpandedStep, setMaxExpandedStep] = useState(1);

  const steps = [
    {
      title: 'Specific Order of Materials and P.O.',
      desc: 'Customer requests a specific material or that is needed. A signed Purchase Order is needed, and the required down payment is variable depending on the volume needed.',
    },
    {
      title: 'Source - Site of Materials',
      desc: 'The company determines the capacity needed to satisfy the requirements in terms of volume and size of materials needed.',
    },
    {
      title: 'Sampling and Laboratory Test',
      desc: 'A certification is obtained from a reputable Material Testing Company accompanied by a Client Representative. Material Reporting and Customer approval are secured.',
    },
    {
      title: 'Forecasting & Scheduling + Survey of Site',
      desc: 'Scheduling of delivery and site survey is obtained. Site Management predetermines delivery time to avoid traffic jams. Site Inspection ensures safety personnel and equipment readiness prior to material delivery.',
    },
    {
      title: 'Loading - Volume Check & Delivery',
      desc: 'Once the area has passed ocular inspection, delivery of materials commences. Trucks are clearly labelled to predetermine capacity for record purposes.',
    },
    {
      title: 'Site Dumping - Spreading and Compaction',
      desc: 'Heavy machines are deployed on-site to spread backfill materials and compact each 0.40-meter layer until required level is achieved – 15% compaction rate determined on-site.',
    },
    {
      title: 'Final Checking',
      desc: 'Joint ocular inspection is conducted with the customer representative or engineer for final checking and reporting.',
    },
  ];

  const handleToggle = (index) => {
    setMaxExpandedStep(index);
  };

  return (
    <section
      id="process"
      className={
        `py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ` +
        (isDarkMode
          ? 'bg-[#0f172a]'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100')
      }
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-12 h-1 bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-teal-400' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
            <span className={`text-sm font-bold tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-[#0099FF]'}`}>OPERATIONAL PROCESS</span>
            <div className={`w-12 h-1 bg-gradient-to-l ${isDarkMode ? 'from-indigo-400 to-teal-400' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
          </div>
          <h2 className={
            `text-5xl md:text-6xl lg:text-7xl font-black mb-6 ` +
            (isDarkMode ? 'text-white' : 'text-gray-900')
          }>Operational Process (MQP)</h2>
          <p className={
            `text-lg max-w-2xl mx-auto ` +
            (isDarkMode ? 'text-white/70' : 'text-gray-700')
          }>
            A structured workflow that ensures quality, safety, and delivery precision
          </p>
        </motion.div>

        {/* Infographic Style - SVG Path with Step Markers */}
        <div className="max-w-5xl mx-auto">
          <div className="relative flex flex-col items-center">
            <svg width="100%" height="120" viewBox="0 0 900 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full mb-8">
              <path d="M60 60 Q 200 10, 340 60 T 620 60 T 880 60" stroke={isDarkMode ? "url(#grad-dark)" : "url(#grad-light)"} strokeWidth="6" fill="none" />
              <defs>
                <linearGradient id="grad-light" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0099FF" />
                  <stop offset="0.5" stopColor="#CCFF00" />
                  <stop offset="1" stopColor="#0099FF" />
                </linearGradient>
                <linearGradient id="grad-dark" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1" />
                  <stop offset="0.5" stopColor="#14b8a6" />
                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              {steps.map((step, index) => {
                const x = 60 + (index * ((820) / (steps.length - 1)));
                const y = 60 + (index % 2 === 0 ? -20 : 20);
                return (
                  <g key={index}>
                    <circle cx={x} cy={y} r="22" fill={isDarkMode ? "url(#grad-dark)" : "url(#grad-light)"} stroke="#fff" strokeWidth="4" />
                    <text x={x} y={y + 7} textAnchor="middle" fontSize="20" fontWeight="bold" fill="#fff">{index + 1}</text>
                  </g>
                );
              })}
            </svg>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="flex flex-col items-center w-64"
                >
                  <span className="text-lg font-bold text-indigo-500 dark:text-teal-300 mb-2">Step {index + 1}</span>
                  <h3 className="text-base font-semibold text-dark dark:text-white/90 mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed text-center">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
