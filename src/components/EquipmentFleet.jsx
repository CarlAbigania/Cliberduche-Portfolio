import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EquipmentFleet = () => {
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
    { label: 'Dump Trucks', value: '9 units', desc: '8,000–12,500 kg capacities' },
    { label: 'Compactors', value: '2 units', desc: '10–12 tons' },
    { label: 'Bulldozers', value: '1 unit', desc: 'Caterpillar DSH' },
    { label: 'Motor Grader', value: '1 unit', desc: 'Mitsubishi MG 130' },
    { label: 'Backhoes / Excavators', value: '3 units', desc: '0.98–1.2 cu.m.' },
    { label: 'Support Units', value: '5 units', desc: 'Tower lights & container vans' },
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
    <section id="equipment" className="py-12 md:py-16 bg-amber-50 dark:bg-amber-950/15 relative overflow-hidden" style={{ position: 'relative', zIndex: 15 }}>
      {/* Decorative background element - top-right */}
      <div className="absolute top-0 right-0 w-[450px] h-48 bg-white dark:bg-gray-900 skew-x-12 pointer-events-none" />
      {/* Decorative background element - bottom-right */}
      <div className="absolute bottom-0 right-0 w-[450px] h-48 bg-white dark:bg-gray-900 -skew-x-12 pointer-events-none" />
      <div className="max-w-container mx-auto px-4 relative z-10">
        <div className="section-title text-center mb-12">
          <h2 className="text-primary dark:text-blue-400 mb-4 scroll-fade-up" ref={titleRef}>
            Equipment & Fleet
          </h2>
          <p className="text-gray dark:text-gray-400 text-lg max-w-2xl mx-auto scroll-fade-up" ref={descRef}>
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
                className="premium-card p-7 text-center hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 scroll-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-xs uppercase tracking-widest font-bold text-gray dark:text-gray-400 mb-4">{item.label}</p>
                <p className="text-4xl md:text-5xl font-mont font-bold text-secondary dark:text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">{item.value}</p>
                <p className="text-gray dark:text-gray-400 text-base">{item.desc}</p>
              </div>
            );
            })}
          </div>
        </div>

        {/* Detailed Equipment Inventory */}
        <div className="scroll-fade-up" ref={inventoryHeadingRef}>
          <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white mb-4 text-center">
            Detailed Equipment Inventory
          </h3>
          <div className="space-y-12">
            <div ref={dumpTrucksRef}>
              <h4 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-4">Dump Trucks</h4>
              <div className="overflow-x-auto bg-white dark:bg-gray-800 border border-primary/10 dark:border-primary/20 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
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
                      <tr key={row.no} className={`border-t transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 ${index % 2 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-900'}`}>
                        <td className="px-6 py-4 font-semibold text-dark dark:text-white">{row.no}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-400">{row.model}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-400 font-mono">{row.plate}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-400">{row.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div ref={heavyEquipmentRef}>
              <h4 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-4">Heavy Equipment</h4>
              <div className="overflow-x-auto bg-white dark:bg-gray-800 border border-primary/10 dark:border-primary/20 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
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
                      <tr key={row.type + index} className={`border-t transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 ${index % 2 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-900'}`}>
                        <td className="px-6 py-4 font-semibold text-dark dark:text-white">{row.type}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-400 text-center">{row.units}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-400">{row.model}</td>
                        <td className="px-6 py-4 text-gray dark:text-gray-400">{row.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentFleet;
