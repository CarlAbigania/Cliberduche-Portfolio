import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';
import { MdTerrain, MdAgriculture, MdWorkHistory, MdHandyman, MdConstruction, MdPendingActions } from 'react-icons/md';
import LogoLoop from './ui/LogoLoop';

const Services = () => {
  const { isDarkMode } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Icon mapping
  const iconMap = {
    'fa-mountain': MdTerrain,
    'fa-tractor': MdAgriculture,
    'fa-hard-hat': MdWorkHistory,
    'fa-tools': MdHandyman,
    'fa-road': MdConstruction,
    'fa-clipboard-check': MdPendingActions,
  };

  const services = [
    { icon: 'fa-mountain', title: 'Backfill Sourcing', desc: 'Sub-base, aggregates, mixed soil, and boulders with lab-tested quality.' },
    { icon: 'fa-tractor', title: 'Land Development', desc: 'Clearing, cutting, leveling, and pipe laying for site readiness.' },
    { icon: 'fa-hard-hat', title: 'Site Management', desc: 'Professional field supervision aligned with safety and delivery targets.' },
    { icon: 'fa-tools', title: 'Equipment Leasing', desc: 'Dump trucks, bulldozers, excavators, compactors, and support units.' },
    { icon: 'fa-road', title: 'Civil Works', desc: 'Bridges, concrete roads, ripraps, drainage, and slope protection.' },
    { icon: 'fa-clipboard-check', title: 'Project Consultation', desc: 'Consultation for horizontal and vertical development projects.' },
  ];

  // Custom service card renderer for LogoLoop
  const renderServiceCard = (service, index) => (
    <motion.div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className={cn(
        "h-[320px] w-[340px] md:h-[340px] md:w-[380px] p-6 md:p-7 rounded-2xl border backdrop-blur-xl transition-all duration-300",
        "hover:shadow-2xl",
        isDarkMode
          ? 'border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent hover:border-indigo-500/50 hover:shadow-indigo-500/30'
          : 'border-gray-300 bg-gradient-to-br from-white/80 to-gray-50/70 hover:border-indigo-400 hover:shadow-indigo-400/30'
      )}>
        {/* Icon */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
            isDarkMode
              ? 'bg-gradient-to-br from-indigo-500/30 to-rose-500/30 text-indigo-300'
              : 'bg-gradient-to-br from-indigo-200 to-rose-200 text-indigo-700'
          )}
        >
          {iconMap[service.icon] && React.createElement(iconMap[service.icon], { className: 'text-3xl' })}
        </motion.div>

        {/* Content */}
        <h3 className={cn(
          "text-xl md:text-2xl font-black mb-3 transition-all duration-300",
          isDarkMode ? 'text-white' : 'text-gray-900'
        )}>
          {service.title}
        </h3>

        <p className={cn(
          "leading-relaxed text-base transition-opacity duration-300",
          isDarkMode ? 'text-white/75' : 'text-gray-700'
        )}>
          {service.desc}
        </p>

        {/* Accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          className={cn(
            "h-1 rounded-full bg-gradient-to-r mt-6",
            isDarkMode
              ? 'from-indigo-500 to-rose-500'
              : 'from-indigo-600 to-rose-600'
          )}
        ></motion.div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="services"
      className={cn(
        "py-24 md:py-32 relative overflow-hidden transition-colors duration-500",
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      )}
      style={{
        background:
          isDarkMode
            ? `linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,41,59,0.90) 50%, rgba(15,23,42,0.92) 100%), url('https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k=')`
            : `linear-gradient(135deg, rgba(248,250,252,0.7) 0%, rgba(241,245,249,0.65) 50%, rgba(248,250,252,0.7) 100%), url('https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k=')`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Removed section header for cleaner look */}

        {/* Smooth Infinite Scroll Logo Loop */}
        <LogoLoop
          logos={services}
          speed={80}
          direction="left"
          gap={24}
          pauseOnHover={true}
          logoHeight={400}
          fadeOut={true}
          fadeOutColor={isDarkMode ? '#0f172a' : '#f9fafb'}
          scaleOnHover={true}
          className="w-full"
          renderItem={renderServiceCard}
          ariaLabel="Our services carousel"
        />
      </div>
    </section>
  );
};

export default Services;
