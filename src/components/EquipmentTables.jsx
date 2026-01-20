import React from 'react';

const EquipmentTables = () => {
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
    <section id="equipment-details" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">
            Detailed Equipment Inventory
          </h2>
          <p className="text-gray text-base md:text-lg">
            Fleet listings for dump trucks and heavy equipment
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-mont font-semibold text-dark mb-4">Dump Trucks</h3>
            <div className="overflow-x-auto bg-white border border-primary/10 rounded-xl shadow-md">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">No.</th>
                    <th className="px-4 py-3 font-semibold">Model / Make</th>
                    <th className="px-4 py-3 font-semibold">Plate Number</th>
                    <th className="px-4 py-3 font-semibold">Capacity (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {dumpTrucks.map((row, index) => (
                    <tr key={row.no} className={index % 2 ? 'bg-light' : 'bg-white'}>
                      <td className="px-4 py-3 font-semibold text-dark">{row.no}</td>
                      <td className="px-4 py-3 text-gray">{row.model}</td>
                      <td className="px-4 py-3 text-gray">{row.plate}</td>
                      <td className="px-4 py-3 text-gray">{row.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-mont font-semibold text-dark mb-4">Heavy Equipment</h3>
            <div className="overflow-x-auto bg-white border border-primary/10 rounded-xl shadow-md">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Type of Equipment</th>
                    <th className="px-4 py-3 font-semibold">No. of Units</th>
                    <th className="px-4 py-3 font-semibold">Model</th>
                    <th className="px-4 py-3 font-semibold">Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {heavyEquipment.map((row, index) => (
                    <tr key={`${row.type}-${index}`} className={index % 2 ? 'bg-light' : 'bg-white'}>
                      <td className="px-4 py-3 font-semibold text-dark">{row.type}</td>
                      <td className="px-4 py-3 text-gray">{row.units}</td>
                      <td className="px-4 py-3 text-gray">{row.model}</td>
                      <td className="px-4 py-3 text-gray">{row.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentTables;
