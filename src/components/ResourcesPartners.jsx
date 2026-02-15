import React, { useRef, useState, useEffect } from 'react';
import { useScrollAnimated3DBuilding } from '../hooks/useScrollAnimated3DBuilding';

const ResourcesPartners = () => {
  const buildingContainer = useRef(null);
  const sectionRef = useRef(null);
  const [isModelVisible, setIsModelVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  
  useScrollAnimated3DBuilding(buildingContainer, isDesktop);

  // Handle responsive 3D model visibility
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hide the 3D model if the section bottom is within 200px of viewport bottom (approaching footer)
      if (sectionRect.bottom <= windowHeight) {
        setIsModelVisible(false);
      } else {
        setIsModelVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* 3D Building Model - Follows Screen while Scrolling through Section */}
      <div
        ref={buildingContainer}
        className="pointer-events-none"
        style={{
          position: 'fixed',
          top: 0,
          right: -600,
          width: '100vw',
          height: '100vh',
          zIndex: 11,
          opacity: isModelVisible ? 1 : 0,
          visibility: isModelVisible ? 'visible' : 'hidden',
          pointerEvents: 'none',
          overflow: 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
        }}
      />

      <section 
        ref={sectionRef}
        id="resources" 
        className="py-12 md:py-16 bg-amber-100 dark:bg-amber-950/25 relative overflow-hidden"
        style={{ position: 'relative', zIndex: 10 }}
      >

      <div className="max-w-container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h2 className="text-primary mb-4">
            Resources & Partners
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Our assets and trusted partners supporting project success
          </p>
          <div className="section-title-underline"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              className="premium-card p-8 text-center hover:border-secondary/50"
            >
              <div className="text-4xl md:text-5xl font-mont font-bold text-primary mb-4">
                {stat.number}
              </div>
              <h3 className="text-lg md:text-xl font-mont font-bold text-dark mb-2">{stat.label}</h3>
              <p className="text-gray text-base mt-2">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Land Development Sites */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark mb-4">
              Land Development Sites
            </h3>
          </div>

          <div className="space-y-10">
            {/* Calamba Site */}
            <div className="premium-card p-10 border-l-4 border-secondary">
              <h4 className="text-xl md:text-2xl font-mont font-bold text-dark mb-4">
                Calamba City Site
              </h4>
              <div className="space-y-3 text-gray text-base md:text-lg">
                <p>
                  <strong className="text-dark">Coordinates:</strong> 14°08'32.0"N 121°09'37.0"E
                </p>
                <p>
                  <strong className="text-dark">Address:</strong> 45R6+V4J Calamba, Laguna
                </p>
                <p>
                  <strong className="text-dark">Capacity:</strong> Approximately 20 million cubic meters of
                  backfilling materials
                </p>
                <p>
                  Covering 7 lots with a total volume of 19,580,004.6 cubic meters of
                  excess backfill materials (Jastifias).
                </p>
              </div>
            </div>

            {/* Silang Site */}
            <div className="premium-card p-10 border-l-4 border-secondary">
              <h4 className="text-xl md:text-2xl font-mont font-bold text-dark mb-4">
                Silang, Cavite Site
              </h4>
              <div className="space-y-3 text-gray text-base md:text-lg">
                <p>
                  <strong className="text-dark">Coordinates:</strong> 14°15'02"N 120°59'12"E
                </p>
                <p>
                  <strong className="text-dark">Address:</strong> Sabutan, 7X2P+6MF Silang, Cavite
                </p>
                <p>
                  <strong className="text-dark">Capacity:</strong> Approximately 2.2 million cubic meters of
                  backfilling materials
                </p>
                <p>
                  Covering 5 lots with a total volume of 2,241,000 cubic meters of
                  excess backfill materials (Sitikis).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supplier Network */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark mb-4">
              Supplier Network
            </h3>
          </div>

          <div className="overflow-x-auto bg-white border border-primary/10 rounded-xl shadow-md">
            <table className="min-w-full text-left text-sm md:text-base">
              <thead className="bg-primary text-white">
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
                  <tr key={row.company} className={`border-t ${index % 2 ? 'bg-light' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                    <td className="px-6 py-4 font-semibold text-dark">{row.company}</td>
                    <td className="px-6 py-4 text-gray">{row.address}</td>
                    <td className="px-6 py-4 text-gray">{row.contact}</td>
                    <td className="px-6 py-4 text-gray">{row.person}</td>
                    <td className="px-6 py-4 text-gray font-semibold">{row.supply}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ResourcesPartners;