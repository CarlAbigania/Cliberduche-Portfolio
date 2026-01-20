import React from 'react';

const ResourcesPartners = () => {
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
    <section id="resources" className="py-16 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">
            Resources & Partners
          </h2>
          <p className="text-gray text-base md:text-lg">
            Our assets and trusted partners supporting project success
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md text-center border border-primary/10 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-dark">{stat.label}</h3>
              <p className="text-gray text-sm mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Land Development Sites */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-primary">
              Land Development Sites
            </h3>
          </div>

          <div className="space-y-8">
            {/* Calamba Site */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
              <h4 className="text-xl md:text-2xl font-semibold text-dark mb-3">
                Calamba City Site
              </h4>
              <p>
                <strong>Coordinates:</strong> 14°08'32.0"N 121°09'37.0"E
              </p>
              <p>
                <strong>Address:</strong> 45R6+V4J Calamba, Laguna
              </p>
              <p>
                <strong>Capacity:</strong> Approximately 20 million cubic meters of
                backfilling materials
              </p>
              <p>
                Covering 7 lots with a total volume of 19,580,004.6 cubic meters of
                excess backfill materials (Jastifias).
              </p>
            </div>

            {/* Silang Site */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
              <h4 className="text-xl md:text-2xl font-semibold text-dark mb-3">
                Silang, Cavite Site
              </h4>
              <p>
                <strong>Coordinates:</strong> 14°15'02"N 120°59'12"E
              </p>
              <p>
                <strong>Address:</strong> Sabutan, 7X2P+6MF Silang, Cavite
              </p>
              <p>
                <strong>Capacity:</strong> Approximately 2.2 million cubic meters of
                backfilling materials
              </p>
              <p>
                Covering 5 lots with a total volume of 2,241,000 cubic meters of
                excess backfill materials (Sitikis).
              </p>
            </div>
          </div>
        </div>

        {/* Supplier Network */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-primary">
              Supplier Network
            </h3>
            <p className="text-gray">Trusted partners supporting materials and operational readiness</p>
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
      </div>
    </section>
  );
};

export default ResourcesPartners;