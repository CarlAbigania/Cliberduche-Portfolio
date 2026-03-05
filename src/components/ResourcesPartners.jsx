import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

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
        'py-24 md:py-32 relative overflow-hidden transition-colors duration-500',
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
            <div className={`w-12 h-1 bg-gradient-to-r ${isDarkMode ? 'from-indigo-500 to-rose-500' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
            <span className={`text-sm font-bold tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-[#0099FF]'}`}>RESOURCES & PARTNERS</span>
            <div className={`w-12 h-1 bg-gradient-to-l ${isDarkMode ? 'from-indigo-500 to-rose-500' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
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
              className={`rounded-2xl shadow-lg border bg-white dark:bg-slate-800/80 border-gray-100 dark:border-slate-700/60 p-8 text-center hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'hover:border-rose-500/40' : 'hover:border-indigo-500/40'}`}
            >
              <div className={`text-4xl md:text-5xl font-mont font-bold mb-4 ${isDarkMode ? 'text-indigo-400' : 'text-[#0099FF]'}`}>{stat.number}</div>
              <h3 className={`text-lg md:text-xl font-mont font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.label}</h3>
              <p className={`text-base mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Land Development Sites */}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`rounded-2xl shadow-lg border bg-white dark:bg-slate-800/80 border-gray-100 dark:border-slate-700/60 p-10 hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'hover:border-rose-500/40' : 'hover:border-indigo-500/40'}`}
            >
              <h4 className={`text-xl md:text-2xl font-mont font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Calamba City Site</h4>
              <div className={`space-y-3 text-base md:text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                <p><strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Coordinates:</strong> 14°08'32.0"N 121°09'37.0"E</p>
                <p><strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Address:</strong> 45R6+V4J Calamba, Laguna</p>
                <p><strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Capacity:</strong> Approximately 20 million cubic meters of backfilling materials</p>
                <p>Covering 7 lots with a total volume of 19,580,004.6 cubic meters of excess backfill materials (Jastifias).</p>
              </div>
            </motion.div>
            {/* Silang Site */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`rounded-2xl shadow-lg border bg-white dark:bg-slate-800/80 border-gray-100 dark:border-slate-700/60 p-10 hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'hover:border-rose-500/40' : 'hover:border-indigo-500/40'}`}
            >
              <h4 className={`text-xl md:text-2xl font-mont font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Silang, Cavite Site</h4>
              <div className={`space-y-3 text-base md:text-lg ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                <p><strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Coordinates:</strong> 14°15'02"N 120°59'12"E</p>
                <p><strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Address:</strong> Sabutan, 7X2P+6MF Silang, Cavite</p>
                <p><strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Capacity:</strong> Approximately 2.2 million cubic meters of backfilling materials</p>
                <p>Covering 5 lots with a total volume of 2,241,000 cubic meters of excess backfill materials (Sitikis).</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Supplier Network */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h3 className={`text-2xl md:text-3xl font-mont font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Supplier Network</h3>
          </motion.div>
          <div className="overflow-x-auto">
            <table className={`min-w-full text-left text-sm md:text-base rounded-xl shadow-lg border border-gray-100 dark:border-slate-700/60 bg-white dark:bg-slate-800/80`}>
              <thead className={isDarkMode ? 'bg-indigo-900 text-white' : 'bg-[#0099FF] text-white'}>
                <tr>
                  <th className="px-6 py-4 font-mont font-bold">Company</th>
                  <th className="px-6 py-4 font-mont font-bold">Address</th>
                  <th className="px-6 py-4 font-mont font-bold">Contact No.</th>
                  <th className="px-6 py-4 font-mont font-bold">Contact Person</th>
                  <th className="px-6 py-4 font-mont font-bold">Supplier Of</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((row, index) => (
                  <tr key={row.company} className={`border-t transition-colors hover:bg-indigo-50 dark:hover:bg-slate-700/60 ${index % 2 ? 'bg-gray-50 dark:bg-slate-700/30' : 'bg-white dark:bg-slate-800/50'}`}>
                    <td className={`px-6 py-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{row.company}</td>
                    <td className={`px-6 py-4 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>{row.address}</td>
                    <td className={`px-6 py-4 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>{row.contact}</td>
                    <td className={`px-6 py-4 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>{row.person}</td>
                    <td className={`px-6 py-4 font-semibold ${isDarkMode ? 'text-indigo-300' : 'text-[#0099FF]'}`}>{row.supply}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPartners;