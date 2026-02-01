import React, { useState } from 'react';

const MeetOurTeam = () => {
  const departments = [
    {
      name: 'Executive Management',
      members: [
        {
          name: 'Rolando Climaco',
          position: 'President / CEO',
          bio: 'Founder and visionary leader overseeing all company operations.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      name: 'HR & Admin Department',
      members: [
        {
          name: 'Ofelia Macaldo',
          position: 'HR Admin & Legal - Head',
          bio: 'Oversees legal matters, contracts, employee management, and HR operations.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          name: 'Ian Climaco',
          position: 'HR Officer',
          bio: 'Manages employee records, hiring, benefits, and compliance matters.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      name: 'Finance & Accounting Department',
      members: [
        {
          name: 'Mabel Climaco',
          position: 'Vice President',
          bio: 'Leads financial strategy and oversees accounting operations.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          name: 'Ma. Cristina Dino',
          position: 'Accounting Head',
          bio: 'Manages bookkeeping, financial records, permits, and tax compliance.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      name: 'Procurement Department',
      members: [
        {
          name: 'Benilda Padilla',
          position: 'Purchasing Head',
          bio: 'Directs material sourcing, supplier negotiations, and quality assurance.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          name: 'Ivan Climaco',
          position: 'Purchasing Officer',
          bio: 'Manages procurement operations and supplier coordination.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      name: 'Safety & Logistics Department',
      members: [
        {
          name: 'Rolisdio Climaco',
          position: 'AMO, Site Supervisor & Safety Officer',
          bio: 'Oversees logistics operations, site safety, and workplace compliance.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          name: 'Edgardo Canicon',
          position: 'Material Handler & Records',
          bio: 'Manages warehouse operations, inventory control, and material distribution.',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      name: 'Engineering Department',
      members: [
        {
          name: 'Engr. Genesis De Guzman',
          position: 'Project Manager',
          bio: 'Leads project planning, technical design, and engineering solutions.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          name: 'Katleen Mae Martinez',
          position: 'QA/QC Engineer',
          bio: 'Ensures quality assurance and quality control across all projects.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          name: 'Persues Sarte',
          position: 'Site Engineer',
          bio: 'Provides on-site technical support and oversees project implementation.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
  ];

  const [expandedDepts, setExpandedDepts] = useState({ 0: true });

  const toggleDepartment = (index) => {
    setExpandedDepts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="section-title text-center mb-8">
          <h2 className="text-primary mb-4">Meet Our Team</h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">Experienced professionals dedicated to your project's success</p>
          <div className="section-title-underline"></div>
        </div>

        {departments.map((department, depIndex) => (
          <div key={depIndex} className="mb-6">
            <button
              onClick={() => toggleDepartment(depIndex)}
              className="w-full px-5 py-3 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300 flex items-center justify-between group"
            >
              <h3 className="text-lg font-mont font-bold text-primary group-hover:text-primary transition-colors">{department.name}</h3>
              <div className={`text-primary text-2xl font-light transition-transform duration-300 ${expandedDepts[depIndex] ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </button>

            {/* Expanded Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                expandedDepts[depIndex] ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                {department.members.map((member, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-36 h-36 rounded-lg mx-auto object-cover shadow-lg shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white font-mont font-bold text-center px-3">
                          <p className="text-sm">Learn More</p>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-base font-mont font-bold text-dark mb-1">{member.name}</h4>
                    <p className="text-secondary font-mont font-bold mb-3 text-sm">{member.position}</p>
                    <p className="text-gray text-sm leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 mt-8">
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