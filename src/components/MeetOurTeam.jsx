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
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-primary mb-4">Meet Our Team</h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">Experienced professionals dedicated to your project's success</p>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-xl mx-auto object-cover shadow-lg shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white font-mont font-bold text-center px-4">
                    <p className="text-lg">Learn More</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-mont font-bold text-dark mb-2">{member.name}</h3>
              <p className="text-secondary font-mont font-bold mb-4 text-base">{member.position}</p>
              <p className="text-gray text-base leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 md:p-16">
          <p className="text-gray text-lg md:text-xl mb-8 font-medium max-w-2xl mx-auto">
            Our team combines decades of experience with innovative approaches to deliver excellence
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block text-lg"
          >
            Work With Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;