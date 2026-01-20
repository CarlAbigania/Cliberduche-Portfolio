import React from 'react';

const CompanyStory = () => {
  const highlights = [
    'Established in 2018 and registered with the Securities and Exchange Commission on November 28, 2018.',
    'CLIBERDUCHE represents the founders’ surnames: CLImaco, BERonilla, PiaDUCHE.',
    'Now led by the founder’s spouse and brother as directors, focused on long-term growth.',
  ];

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">
            Our Story
          </h2>
          <p className="text-gray text-base md:text-lg">
            Built on family, trust, and a commitment to responsible development
          </p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-gray leading-relaxed">
            <p>
              The company was established in 2018 out of a founder’s dream to provide for his family
              while staying in the Philippines. He found this opportunity in the construction and land
              development industry, invited close friends to join, and officially registered
              CLIBERDUCHE CORPORATION with the SEC on November 28, 2018.
            </p>
            <p>
              CLIBERDUCHE stands for the surnames of the original incorporators: CLImaco, BERonilla,
              and PiaDUCHE. As time passed, two incorporators pursued other interests and mutually
              agreed to part ways. The founder’s spouse and brother became the new directors and
              continue to steer the company with a focus on quality, safety, and integrity.
            </p>
          </div>

          <div className="bg-light border border-primary/10 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-mont font-semibold text-dark mb-4">
              Key Milestones
            </h3>
            <ul className="space-y-4">
              {highlights.map((item, index) => (
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

export default CompanyStory;
