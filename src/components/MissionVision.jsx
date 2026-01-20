import React from 'react';

const MissionVision = () => {
  const blocks = [
    {
      title: 'Mission',
      desc:
        'We are a responsible land development company that provides high-quality backfill materials for land development projects and other infrastructures. We support sustainable land development by adhering to environmental regulations and deliver excellent value to our partner communities, investors, employees, and stakeholders.',
    },
    {
      title: 'Vision',
      desc:
        'To be a highly respected, world-class natural resource land development company committed to international standards in land development operations and environmental conservation, and to convert land development sites into future commercial and housing projects.',
    },
  ];

  return (
    <section id="mission-vision" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">
            Mission & Vision
          </h2>
          <p className="text-gray text-base md:text-lg">
            Guiding principles that shape our work and long-term direction
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blocks.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-primary/10 rounded-xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-mont font-semibold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
