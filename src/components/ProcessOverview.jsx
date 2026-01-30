import React, { useState } from 'react';

const ProcessOverview = () => {
  const [maxExpandedStep, setMaxExpandedStep] = useState(0);

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
    <section id="process" className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-primary mb-4">
            Operational Process (MQP)
          </h2>
          <p className="text-gray text-base md:text-lg">
            A structured workflow that ensures quality, safety, and delivery precision
          </p>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            index <= maxExpandedStep + 1 && (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow min-h-40 relative"
                onClick={() => handleToggle(index)}
              >
                {index <= maxExpandedStep ? (
                  <>
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold mb-4">
                      {index + 1}
                    </div>
                    {index === maxExpandedStep && maxExpandedStep > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setMaxExpandedStep(Math.max(0, maxExpandedStep - 1));
                        }}
                        className="absolute top-4 right-4 text-xl text-gray-400 hover:text-primary transition-colors"
                      >
                        ✕
                      </button>
                    )}
                    <h3 className="text-lg font-semibold text-dark mb-2">{step.title}</h3>
                    <p className="text-gray text-sm leading-relaxed">{step.desc}</p>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-4xl font-light text-primary">+</span>
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
