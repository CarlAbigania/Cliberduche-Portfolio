import React from 'react';

const Suppliers = () => {
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
    <section id="suppliers" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">
            Supplier Network
          </h2>
          <p className="text-gray text-base md:text-lg">
            Trusted partners supporting materials and operational readiness
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="overflow-x-auto bg-white border border-primary/10 rounded-xl shadow-md">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Company</th>
                <th className="px-4 py-3 font-semibold">Address</th>
                <th className="px-4 py-3 font-semibold">Contact No.</th>
                <th className="px-4 py-3 font-semibold">Contact Person</th>
                <th className="px-4 py-3 font-semibold">Supplier Of</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((row, index) => (
                <tr key={row.company} className={index % 2 ? 'bg-light' : 'bg-white'}>
                  <td className="px-4 py-3 font-semibold text-dark">{row.company}</td>
                  <td className="px-4 py-3 text-gray">{row.address}</td>
                  <td className="px-4 py-3 text-gray">{row.contact}</td>
                  <td className="px-4 py-3 text-gray">{row.person}</td>
                  <td className="px-4 py-3 text-gray">{row.supply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
