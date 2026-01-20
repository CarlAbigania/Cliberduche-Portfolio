import React from 'react';

const ProcessOverview = () => {
  const steps = [
    {
      title: 'Planning & Forecasting',
      desc: 'Requirements gathering, volume forecasting, and site scheduling.',
    },
    {
      title: 'Sourcing & Site Survey',
      desc: 'Material sourcing, ingress/egress checks, and safety readiness.',
    },
    {
      title: 'Testing & Certification',
      desc: 'Material testing and client-approved laboratory reports.',
    },
    {
      title: 'Delivery & Volume Check',
      desc: 'Labeled trucks and verified capacity for every delivery.',
    },
    {
      title: 'Dumping & Compaction',
      desc: 'Layered spreading and compaction to required project levels.',
    },
    {
      title: 'Final Inspection',
      desc: 'Joint inspection and sign-off with client representatives.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            Operational Process (MQP)
          </h2>
          <p className="text-gray text-base md:text-lg">
            A structured workflow that ensures quality, safety, and delivery precision
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">{step.title}</h3>
              <p className="text-gray text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
