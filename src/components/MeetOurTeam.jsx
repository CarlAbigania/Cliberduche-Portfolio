import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../hooks/useTheme';

const MeetOurTeam = () => {
  // Refs for scroll animations
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const descRef = useScrollAnimation({ threshold: 0.2 });
  const [currentDeptIndex, setCurrentDeptIndex] = useState(0);
  const { isDarkMode } = useTheme();
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
    <section id="team" className={
      `py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ` +
      (isDarkMode
        ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100')
    }>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-12 h-1 bg-gradient-to-r ${isDarkMode ? 'from-indigo-500 to-rose-500' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
            <span className={`text-sm font-bold tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-[#0099FF]'}`}>OUR TEAM</span>
            <div className={`w-12 h-1 bg-gradient-to-l ${isDarkMode ? 'from-indigo-500 to-rose-500' : 'from-[#0099FF] to-[#CCFF00]'}`}></div>
          </div>
          <h2 className={
            `text-5xl md:text-6xl lg:text-7xl font-black mb-6 ` +
            (isDarkMode ? 'text-white' : 'text-gray-900')
          }>Meet Our Team</h2>
          <p className={
            `text-lg max-w-2xl mx-auto ` +
            (isDarkMode ? 'text-white/70' : 'text-gray-700')
          }>
            Experienced professionals dedicated to your project's success
          </p>
        </div>

        {/* Department Navigation */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={handlePrevDept}
            className="p-2 rounded-full bg-primary hover:bg-primary/80 text-white transition-all duration-300 shadow-lg"
            aria-label="Previous Department"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-blue-400 text-center">
            {currentDepartment.name}
          </h3>
          <button
            onClick={handleNextDept}
            className="p-2 rounded-full bg-primary hover:bg-primary/80 text-white transition-all duration-300 shadow-lg"
            aria-label="Next Department"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 justify-items-center">
          {currentDepartment.members.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-xs flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ minHeight: '370px', height: '100%' }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mb-4 border-4 border-primary/20 dark:border-blue-400/20 shadow"
              />
              <h4 className="text-lg md:text-xl font-bold text-dark dark:text-white mb-1 text-center">
                {member.name}
              </h4>
              <p className="text-secondary dark:text-green-400 font-semibold mb-2 text-sm md:text-base text-center">
                {member.position}
              </p>
              <p className="text-gray-700 dark:text-white/90 text-sm md:text-base text-center leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Department Indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {departments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDeptIndex(index)}
              className={`h-2.5 w-7 rounded-full transition-all duration-300 ${
                  index === currentDeptIndex
                    ? (isDarkMode ? 'bg-blue-400' : 'bg-[#0099FF]')
                    : (isDarkMode ? 'bg-blue-400/30 hover:bg-blue-400/60' : 'bg-[#0099FF]/30 hover:bg-[#0099FF]/60')
                }`}
              aria-label={`Go to department ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-500 dark:text-gray-300 text-xs md:text-sm font-semibold">
            Department {currentDeptIndex + 1} of {departments.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;