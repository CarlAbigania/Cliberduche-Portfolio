import React from 'react';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: 'John Climaco',
      position: 'President & General Manager',
      bio: 'Founder with 15+ years in civil engineering and construction management.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Maria Piaduche',
      position: 'Vice President',
      bio: 'Expert in project management and client relations with extensive industry experience.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Robert Beronilla',
      position: 'Chief Operations Officer',
      bio: 'Leads operations with focus on safety, quality, and efficient project delivery.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sarah Santos',
      position: 'Safety Officer',
      bio: 'Ensures compliance with safety standards and promotes workplace safety culture.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">Meet Our Team</h2>
          <p className="text-gray">Experienced professionals dedicated to your project's success</p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-primary font-semibold">View Profile</div>
                </div>
              </div>
              <h3 className="text-xl font-mont font-semibold text-dark mb-1">{member.name}</h3>
              <p className="text-secondary font-medium mb-3">{member.position}</p>
              <p className="text-gray text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray mb-6">Our team combines decades of experience with innovative approaches</p>
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-colors font-medium"
          >
            Work With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;