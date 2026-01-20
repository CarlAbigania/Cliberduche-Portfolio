import React from 'react';

const SafetyCommitment = () => {
  const commitments = [
    'Provide a safe and healthy work environment for all employees and partners.',
    'Ensure supervisors are accountable for health and safety under their supervision.',
    'Maintain safe machinery and equipment, with strict compliance to work procedures.',
    'Provide adequate training for every worker to protect health and safety.',
    'Make health and safety an integral part of every activity and decision.',
  ];

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">
            Safety Commitment
          </h2>
          <p className="text-gray text-base md:text-lg">
            A leadership pledge to protect our people and uphold safe work practices
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-light border border-primary/10 rounded-xl p-8 shadow-md">
            <p className="text-gray leading-relaxed">
              CLIBERDUCHE CORPORATION is vitally interested in its employees’ health and safety.
              Protecting employees from injury or occupational disease is a major, continuing
              objective. As President, I personally promise that every reasonable precaution will be
              taken to protect our workers. Hiring experienced Safety Officers and maintaining strict
              safety practices before, during, and after project execution is a core commitment.
            </p>
            <p className="text-gray leading-relaxed mt-4">
              Commitment to health and safety must form an integral part of this organization from
              the president to the workers. Signed November 2018.
            </p>
          </div>

          <div className="bg-white border border-primary/10 rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-mont font-semibold text-dark mb-4">
              Safety Principles
            </h3>
            <ul className="space-y-4">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 h-3 w-3 rounded-full bg-secondary"></span>
                  <span className="text-gray text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCommitment;
