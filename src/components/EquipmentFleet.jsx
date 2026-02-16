import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';

const EquipmentFleet = () => {
  const { isDarkMode } = useTheme();
  const [activeTable, setActiveTable] = useState('dump-trucks');
  // Refs for animations
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const descRef = useScrollAnimation({ threshold: 0.2 });
  const overviewHeadingRef = useScrollAnimation({ threshold: 0.2 });
  const fleet1Ref = useScrollAnimation({ threshold: 0.2 });
  const fleet2Ref = useScrollAnimation({ threshold: 0.2 });
  const fleet3Ref = useScrollAnimation({ threshold: 0.2 });
  const fleet4Ref = useScrollAnimation({ threshold: 0.2 });
  const fleet5Ref = useScrollAnimation({ threshold: 0.2 });
  const fleet6Ref = useScrollAnimation({ threshold: 0.2 });
  const inventoryHeadingRef = useScrollAnimation({ threshold: 0.2 });
  const dumpTrucksRef = useScrollAnimation({ threshold: 0.2 });
  const heavyEquipmentRef = useScrollAnimation({ threshold: 0.2 });

  const fleet = [
    { label: 'Dump Trucks', value: '9 units', desc: '8,000–12,500 kg capacities', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
    { label: 'Compactors', value: '2 units', desc: '10–12 tons', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmhzlLZY2vWvFCdYKlf9AZ9klutf-4h7KAg&s' },
    { label: 'Bulldozers', value: '1 unit', desc: 'Caterpillar DSH', image: 'https://cdn.britannica.com/42/124942-050-5057EA58/Bulldozer.jpg' },
    { label: 'Motor Grader', value: '1 unit', desc: 'Mitsubishi MG 130', image: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20171009-37324-16812' },
    { label: 'Backhoes / Excavators', value: '3 units', desc: '0.98–1.2 cu.m.', image: 'https://res.cloudinary.com/dsfzcj5qk/image/upload/v1712765646/biggest-backhoes/biggest-backhoes-in-the-world.jpg' },
    { label: 'Support Units', value: '5 units', desc: 'Tower lights & container vans', image: 'https://files01.pna.gov.ph/ograph/2020/11/10/container-vans.jpg' },
  ];

  const dumpTrucks = [
    { no: 1, model: 'FUSO / 2006', plate: 'CAG5249', capacity: '12,000' },
    { no: 2, model: 'ISUZU / 2005', plate: 'CAG2259', capacity: '12,000' },
    { no: 3, model: 'ISUZU / 2021', plate: 'NFJ3086', capacity: '10,000' },
    { no: 4, model: 'MITSUBISHI / 2023', plate: 'CBS4575', capacity: '12,000' },
    { no: 5, model: 'FUSO / 2006', plate: 'CAL1933', capacity: '12,000' },
    { no: 6, model: 'SINOTRUK / 2021', plate: 'NGL9390', capacity: '12,500' },
    { no: 7, model: 'SINOTRUK / 2020', plate: 'NGR3512', capacity: '8,000' },
    { no: 8, model: 'MITSUBISHI / 2019', plate: 'NFZ7288', capacity: '10,000' },
    { no: 9, model: 'FUSO / 2021', plate: 'NII8356', capacity: '12,000' },
  ];

  const heavyEquipment = [
    { type: 'Compactor', units: 1, model: 'Caterpillar 2016', capacity: '10 tons' },
    { type: 'Bulldozer', units: 1, model: 'Caterpillar DSH - 2007', capacity: 'N/A' },
    { type: 'Motor Grader', units: 1, model: 'Mitsubishi - MG 130', capacity: 'N/A' },
    { type: 'Backhoe', units: 1, model: 'Volvo - Excavator - 2012 - 290 E', capacity: '1.2 cu.m.' },
    { type: 'Backhoe', units: 1, model: 'Caterpillar - 2018 - 320 E', capacity: '0.98 cu.m.' },
    { type: 'Backhoe', units: 1, model: 'Caterpillar - 2016 - 320 E', capacity: '0.98 cu.m.' },
    { type: 'Compactor', units: 1, model: 'Volvo', capacity: '12 tons' },
    { type: 'Tower Light', units: 3, model: 'N/A', capacity: 'N/A' },
    { type: 'Container Van', units: 2, model: 'N/A', capacity: 'N/A' },
  ];

  return (
    <section id="equipment" className="py-12 md:py-16 bg-amber-100 dark:bg-amber-950 relative overflow-hidden" style={{ position: 'relative', zIndex: 15 }}>
      {/* Decorative background element - top-right */}
      <div className="hidden lg:block absolute top-0 -right-10 w-[450px] h-48 bg-white dark:bg-slate-900 skew-x-12 pointer-events-none" />
      {/* Decorative background element - bottom-right */}
      <div className="hidden lg:block absolute bottom-0 -right-10 w-[450px] h-48 bg-white dark:bg-slate-900 -skew-x-12 pointer-events-none" />
      <div className="max-w-container mx-auto px-4 relative z-10">
        <div className="section-title text-center mb-12">
          <h2 className="text-primary dark:text-blue-400 mb-4 scroll-fade-up" ref={titleRef}>
            Equipment & Fleet
          </h2>
          <p className="text-gray dark:text-gray-100 text-lg max-w-2xl mx-auto scroll-fade-up" ref={descRef}>
            Modern equipment assets supporting large-scale site development
          </p>
          <div className="section-title-underline"></div>
        </div>

        {/* Fleet Summary */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white mb-4 text-center scroll-fade-up" ref={overviewHeadingRef}>
            Fleet Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleet.map((item, index) => {
              const fleetRefs = [fleet1Ref, fleet2Ref, fleet3Ref, fleet4Ref, fleet5Ref, fleet6Ref];
              return (
              <div
                key={index}
                ref={fleetRefs[index]}
                className="relative overflow-hidden rounded-xl shadow-lg dark:shadow-xl dark:shadow-black/50 border border-gray-200/60 dark:border-slate-700/60 hover:border-primary/50 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60 hover:-translate-y-2 scroll-fade-up group transition-all duration-300 min-h-[400px]"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative z-10 p-7 text-center h-full flex flex-col justify-end">
                  <p className="text-xs uppercase tracking-widest font-bold text-white mb-4">{item.label}</p>
                  <p className="text-4xl md:text-5xl font-mont font-bold text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">{item.value}</p>
                  <p className="text-white text-base">{item.desc}</p>
                </div>
              </div>
            );
            })}
          </div>
        </div>

        {/* Detailed Equipment Inventory */}
        <div className="scroll-fade-up" ref={inventoryHeadingRef}>
          <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white mb-8 text-center">
            Detailed Equipment Inventory
          </h3>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTable('dump-trucks')}
              className={`px-8 py-3 rounded-lg font-mont font-bold transition-all duration-300 ${
                activeTable === 'dump-trucks'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800/80 text-dark dark:text-white border border-primary/30 dark:border-slate-700/60 hover:border-primary/60'
              }`}
            >
              Dump Trucks
            </button>
            <button
              onClick={() => setActiveTable('heavy-equipment')}
              className={`px-8 py-3 rounded-lg font-mont font-bold transition-all duration-300 ${
                activeTable === 'heavy-equipment'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800/80 text-dark dark:text-white border border-primary/30 dark:border-slate-700/60 hover:border-primary/60'
              }`}
            >
              Heavy Equipment
            </button>
          </div>

          {/* Dump Trucks Table */}
          {activeTable === 'dump-trucks' && (
            <div ref={dumpTrucksRef} className="animate-fadeIn">
              <div className="overflow-x-auto bg-white dark:bg-slate-800/80 border border-primary/10 dark:border-slate-700/60 rounded-xl shadow-md dark:shadow-lg dark:shadow-black/40 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/50 transition-shadow duration-300">
                <table className="min-w-full text-left text-sm md:text-base">
                  <thead className="bg-gradient-to-r from-primary to-accent text-white">
                    <tr>
                      <th className="px-6 py-4 font-mont font-bold">No.</th>
                      <th className="px-6 py-4 font-mont font-bold">Model / Make</th>
                      <th className="px-6 py-4 font-mont font-bold">Plate Number</th>
                      <th className="px-6 py-4 font-mont font-bold">Capacity (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dumpTrucks.map((row, index) => (
                      <tr key={row.no} className={`border-t transition-colors hover:bg-blue-50 dark:hover:bg-slate-700/60 ${index % 2 ? 'bg-gray-50 dark:bg-slate-700/30' : 'bg-white dark:bg-slate-800/50'}`}>
                        <td className="px-6 py-4 font-semibold text-dark dark:text-white">{row.no}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-100">{row.model}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-100 font-mono">{row.plate}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-100">{row.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Heavy Equipment Table */}
          {activeTable === 'heavy-equipment' && (
            <div ref={heavyEquipmentRef} className="animate-fadeIn">
              <div className="overflow-x-auto bg-white dark:bg-slate-800/80 border border-primary/10 dark:border-slate-700/60 rounded-xl shadow-md dark:shadow-lg dark:shadow-black/40 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/50 transition-shadow duration-300">
                <table className="min-w-full text-left text-sm md:text-base">
                  <thead className="bg-gradient-to-r from-primary to-accent text-white">
                    <tr>
                      <th className="px-6 py-4 font-mont font-bold">Type of Equipment</th>
                      <th className="px-6 py-4 font-mont font-bold">No. of Units</th>
                      <th className="px-6 py-4 font-mont font-bold">Model</th>
                      <th className="px-6 py-4 font-mont font-bold">Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {heavyEquipment.map((row, index) => (
                      <tr key={row.type + index} className={`border-t transition-colors hover:bg-blue-50 dark:hover:bg-slate-700/60 ${index % 2 ? 'bg-gray-50 dark:bg-slate-700/30' : 'bg-white dark:bg-slate-800/50'}`}>
                        <td className="px-6 py-4 font-semibold text-dark dark:text-white">{row.type}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-100 text-center">{row.units}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-100">{row.model}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-100">{row.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EquipmentFleet;
