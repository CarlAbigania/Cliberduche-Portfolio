import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import FlipCard from './ui/FlipCard';

const ResourcesPartners = () => {
  const { isDarkMode } = useTheme();

  const suppliers = [
    {
      company: 'D.E. Abesamis Builders, Inc.',
      address: '427 Maryland Compound, Mayapa, Calamba City',
      contact: '0968-853-0826',
      person: 'Mr. Danilo Abesamis',
      supply: 'Aggregates',
    },
    {
      company: 'Jeff San Luis Enterprises',
      address: 'Sta. Cruz, Laguna',
      contact: '0917-529-2654',
      person: 'Mr. Jeff San Luis',
      supply: 'Heavy Equipments',
    },
    {
      company: 'Citicon',
      address: 'LIIP Ave, Biñan, 4024 Laguna, Philippines',
      contact: '0922-821-0268',
      person: 'Ms. Elma Olfindo',
      supply: 'Ready-mix concrete',
    },
    {
      company: 'Prea Enterprises',
      address: '26 J. Lopez De Leon St., Greenheights Vill., San Isidro Parañaque',
      contact: '0998-325-6300',
      person: 'Ms. Jesette Reyes',
      supply: 'Air-conditioning unit and office supplies',
    },
  ];

  return (
    <section
      id="resources"
      className={[
        'pt-24 md:pt-32 relative overflow-hidden transition-colors duration-500',
        isDarkMode
          ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-12 h-1 bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-teal-400' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
            <span className={`text-sm font-bold tracking-widest ${isDarkMode ? 'text-indigo-300' : 'text-[#0099FF]'}`}>RESOURCES & PARTNERS</span>
            <div className={`w-12 h-1 bg-gradient-to-l ${isDarkMode ? 'from-indigo-400 to-teal-400' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
          </div>
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Resources & Partners</h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>Our assets and trusted partners supporting project success</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              number: '20M+',
              label: 'Cubic Meters',
              desc: 'Backfilling materials at Calamba site',
            },
            {
              number: '2.2M+',
              label: 'Cubic Meters',
              desc: 'Backfilling materials at Silang site',
            },
            {
              number: '14+',
              label: 'Heavy Equipment',
              desc: 'Modern fleet including excavators, bulldozers, compactors',
            },
            {
              number: '9+',
              label: 'Dump Trucks',
              desc: 'Various capacities from 8,000 to 12,500 kg',
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`rounded-2xl shadow-lg border bg-white dark:bg-slate-800/80 border-gray-100 dark:border-slate-700/60 p-8 text-center hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'hover:border-teal-400/40' : 'hover:border-indigo-500/40'}`}
            >
              <div className={`text-4xl md:text-5xl font-mont font-bold mb-4 ${isDarkMode ? 'text-indigo-400' : 'text-[#0099FF]'}`}>{stat.number}</div>
              <h3 className={`text-lg md:text-xl font-mont font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.label}</h3>
              <p className={`text-base mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Land Development Sites - Modern Redesign */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h3 className={`text-2xl md:text-3xl font-mont font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Land Development Sites</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calamba Site */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <FlipCard
                isDarkMode={isDarkMode}
                front={
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/images/land-development-site1.png" 
                      alt="Calamba City Site" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-2xl font-bold text-white">Calamba City Site</div>
                  </div>
                }
                back={
                  <div className={`relative w-full h-full flex flex-col justify-center p-8 ${isDarkMode ? 'bg-gradient-to-br from-indigo-900 to-teal-900' : 'bg-gradient-to-br from-[#0099FF]/10 to-[#CCFF00]/20'}`}>
                    <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Calamba City Site</h3>
                    <div className={`border-t py-4 space-y-2 text-sm md:text-base leading-relaxed font-medium ${isDarkMode ? 'border-t-indigo-400/40 text-white' : 'border-t-gray-400 text-gray-900'}`}>
                      <p><strong>Coordinates:</strong> 14°08'32.0"N 121°09'37.0"E</p>
                      <p><strong>Address:</strong> 45R6+V4J Calamba, Laguna</p>
                      <p><strong>Capacity:</strong> 20M+ cubic meters of backfilling materials</p>
                      <p className="text-sm">Covering 7 lots with a total volume of 19,580,004.6 cubic meters of excess backfill materials (Jastifias).</p>
                    </div>
                  </div>
                }
              />
            </motion.div>
            {/* Silang Site */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FlipCard
                isDarkMode={isDarkMode}
                front={
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/images/land-development-site2.png" 
                      alt="Silang, Cavite Site" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-2xl font-bold text-white">Silang, Cavite Site</div>
                  </div>
                }
                back={
                  <div className={`relative w-full h-full flex flex-col justify-center p-8 ${isDarkMode ? 'bg-gradient-to-br from-indigo-900 to-teal-900' : 'bg-gradient-to-br from-[#0099FF]/10 to-[#CCFF00]/20'}`}>
                    <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Silang, Cavite Site</h3>
                    <div className={`border-t py-4 space-y-2 text-sm md:text-base leading-relaxed font-medium ${isDarkMode ? 'border-t-indigo-400/40 text-white' : 'border-t-gray-400 text-gray-900'}`}>
                      <p><strong>Coordinates:</strong> 14°15'02"N 120°59'12"E</p>
                      <p><strong>Address:</strong> Sabutan, 7X2P+6MF Silang, Cavite</p>
                      <p><strong>Capacity:</strong> 2.2M+ cubic meters of backfilling materials</p>
                      <p className="text-sm">Covering 5 lots with a total volume of 2,241,000 cubic meters of excess backfill materials (Sitikis).</p>
                    </div>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>

        {/* Supplier Network - Modern Card Grid */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h3 className={`text-2xl md:text-3xl font-mont font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Supplier Network</h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {suppliers.map((row, index) => (
              <motion.div
                key={row.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`rounded-2xl shadow-lg border ${
                  isDarkMode
                    ? 'bg-slate-900 border-white/10'
                    : 'bg-gradient-to-br from-white via-blue-50 to-teal-50 border-gray-200'
                } p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="mb-4">
                  <div className={`text-lg md:text-xl font-mont font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{row.company}</div>
                  <div className={`text-sm mb-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>{row.address}</div>
                  <div className={`text-sm mb-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}><span className="font-semibold">Contact:</span> {row.contact}</div>
                  <div className={`text-sm mb-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}><span className="font-semibold">Person:</span> {row.person}</div>
                </div>
                <div className={`text-base font-semibold mt-2 ${isDarkMode ? 'text-indigo-300' : 'text-[#0099FF]'}`}>{row.supply}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Curved Shape Section */}
      <div 
        style={{ 
          clipPath: 'polygon(0% 0%, 14% 30%, 86% 30%, 100% 0%, 100% 100%, 0% 100%)',
          height: '130px',
          marginTop: '60px'
        }}
        className={`${isDarkMode ? 'bg-dark' : 'bg-primary'}`}
      />
    </section>
  );
};

export default ResourcesPartners;