import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MeetOurTeam = () => {
  // Refs for scroll animations
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const descRef = useScrollAnimation({ threshold: 0.2 });
  const [currentDeptIndex, setCurrentDeptIndex] = useState(0);
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

  const handlePrevDept = () => {
    setCurrentDeptIndex((prev) => (prev === 0 ? departments.length - 1 : prev - 1));
  };

  const handleNextDept = () => {
    setCurrentDeptIndex((prev) => (prev === departments.length - 1 ? 0 : prev + 1));
  };

  const currentDepartment = departments[currentDeptIndex];

  return (
    <section className="bg-amber-100 dark:bg-amber-950 py-12 md:py-16">
      {/* Header */}
      <div className="max-w-container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-primary dark:text-blue-400 mb-4 scroll-fade-up" ref={titleRef}>Meet Our Team</h2>
          <p className="text-gray dark:text-gray-400 text-lg max-w-2xl mx-auto scroll-fade-up" ref={descRef}>Experienced professionals dedicated to your project's success</p>
          <div className="section-title-underline"></div>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="max-w-container mx-auto px-4 w-full">
        {/* Department Carousel */}
        <div className="flex flex-col">
          {/* Department Title */}
          <h3 className="text-3xl md:text-4xl font-mont font-bold text-primary dark:text-blue-400 mb-6 text-center fade-in-up">{currentDepartment.name}</h3>
          
          {/* Team Members Horizontal Carousel */}
          <div className="w-full overflow-x-auto pb-4 mb-6 fade-in-up">
            <div className="flex gap-8 min-w-max px-2">
              {currentDepartment.members.map((member, index) => (
                <div
                  key={index}
                  className="text-center group fade-in-up scale-in flex-shrink-0"
                  style={{ animationDelay: `${index * 0.1}s`, width: '260px' }}
                >
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-36 h-36 md:w-40 h-40 rounded-lg mx-auto object-cover shadow-lg shadow-primary/20 dark:shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/40 dark:group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-2"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white font-mont font-bold text-center px-3">
                        <p className="text-xs md:text-sm">Dedicated Professional</p>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-mont font-bold text-dark dark:text-white mb-1 group-hover:text-secondary transition-colors">{member.name}</h4>
                  <p className="text-secondary dark:text-green-400 font-mont font-bold mb-2 text-sm md:text-base">{member.position}</p>
                  <p className="text-gray dark:text-gray-400 text-sm md:text-base leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-3 md:gap-5 mt-4">
            <button
              onClick={handlePrevDept}
              className="p-2 md:p-2.5 rounded-full bg-primary hover:bg-primary/80 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              aria-label="Previous Department"
            >
              <svg className="w-4 h-4 md:w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex gap-2.5">
              {departments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDeptIndex(index)}
                  className={`h-2.5 md:h-3.5 rounded-full transition-all duration-300 ${
                    index === currentDeptIndex
                      ? 'bg-primary w-7 md:w-9'
                      : 'w-2.5 md:w-3.5 bg-primary/30 dark:bg-primary/60 hover:bg-primary/60 dark:hover:bg-primary/80'
                  }`}
                  aria-label={`Go to department ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextDept}
              className="p-2 md:p-2.5 rounded-full bg-primary hover:bg-primary/80 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              aria-label="Next Department"
            >
              <svg className="w-4 h-4 md:w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Department Counter */}
          <div className="text-center mt-3">
            <p className="text-gray dark:text-gray-300 text-xs md:text-sm font-semibold">
              Department {currentDeptIndex + 1} of {departments.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;