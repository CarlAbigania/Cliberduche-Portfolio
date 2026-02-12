import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProcessOverview = () => {
  const [maxExpandedStep, setMaxExpandedStep] = useState(0);

  // Refs for animations
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const descRef = useScrollAnimation({ threshold: 0.2 });
  const step1Ref = useScrollAnimation({ threshold: 0.2 });
  const step2Ref = useScrollAnimation({ threshold: 0.2 });
  const step3Ref = useScrollAnimation({ threshold: 0.2 });
  const step4Ref = useScrollAnimation({ threshold: 0.2 });
  const step5Ref = useScrollAnimation({ threshold: 0.2 });
  const step6Ref = useScrollAnimation({ threshold: 0.2 });
  const step7Ref = useScrollAnimation({ threshold: 0.2 });

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
    <section id="process" className="py-12 md:py-16 bg-white dark:bg-gray-900 relative overflow-hidden" style={{ position: 'relative', zIndex: 12 }}>
      {/* Decorative background element - top-left */}
      <div className="absolute top-0 left-0 w-[450px] h-48 bg-stone-100 dark:bg-stone-900/20 skew-x-12 pointer-events-none" />
      <div className="max-w-container mx-auto px-4 relative z-10">
        <div className="section-title text-center mb-12">
          <h2 className="text-primary dark:text-blue-400 mb-4 scroll-fade-up" ref={titleRef}>
            Operational Process (MQP)
          </h2>
          <p className="text-gray dark:text-gray-400 text-base md:text-lg scroll-fade-up" ref={descRef}>
            A structured workflow that ensures quality, safety, and delivery precision
          </p>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref, step5Ref, step6Ref, step7Ref];
            return (
              index <= maxExpandedStep + 1 && (
                <div
                  key={index}
                  ref={stepRefs[index]}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 min-h-40 relative group"
                  onClick={() => handleToggle(index)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                {index <= maxExpandedStep ? (
                  <>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-semibold mb-4 group-hover:scale-110 transition-transform duration-300">
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
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-2 group-hover:text-secondary transition-colors">{step.title}</h3>
                    <p className="text-gray dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-4xl font-light text-primary dark:text-blue-400 group-hover:scale-125 transition-transform duration-300">+</span>
                  </div>
                )}
              </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
