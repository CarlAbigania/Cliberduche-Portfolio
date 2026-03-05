import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';
import { MdLocalShipping, MdBuild, MdConstruction, MdExtension, MdDirections, MdLightbulb, MdChevronRight } from 'react-icons/md';

const EquipmentFleet = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('dump-trucks');
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // Icon mapping for fleet types
  const iconMap = {
    'dump-trucks': MdLocalShipping,
    'compactors': MdConstruction,
    'bulldozers': MdBuild,
    'motor-grader': MdExtension,
    'backhoes': MdDirections,
    'support': MdLightbulb,
  };

  // Equipment categories with detailed items
  const categories = {
    'dump-trucks': {
      label: 'Dump Trucks',
      icon: MdLocalShipping,
      items: [
        { id: 1, model: 'FUSO / 2006', plate: 'CAG5249', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 2, model: 'ISUZU / 2005', plate: 'CAG2259', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 3, model: 'ISUZU / 2021', plate: 'NFJ3086', capacity: '10,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 4, model: 'MITSUBISHI / 2023', plate: 'CBS4575', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 5, model: 'FUSO / 2006', plate: 'CAL1933', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 6, model: 'SINOTRUK / 2021', plate: 'NGL9390', capacity: '12,500 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 7, model: 'SINOTRUK / 2020', plate: 'NGR3512', capacity: '8,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 8, model: 'MITSUBISHI / 2019', plate: 'NFZ7288', capacity: '10,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
        { id: 9, model: 'FUSO / 2021', plate: 'NII8356', capacity: '12,000 kg', image: 'https://t3.ftcdn.net/jpg/05/79/29/80/360_F_579298011_98yHQKvfzUqrPVVMrfUAVtM7hmP9dV5r.jpg' },
      ]
    },
    'compactors': {
      label: 'Compactors',
      icon: MdConstruction,
      items: [
        { id: 1, model: 'Caterpillar 2016', capacity: '10 tons', units: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmhzlLZY2vWvFCdYKlf9AZ9klutf-4h7KAg&s' },
        { id: 2, model: 'Volvo', capacity: '12 tons', units: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmhzlLZY2vWvFCdYKlf9AZ9klutf-4h7KAg&s' },
      ]
    },
    'bulldozers': {
      label: 'Bulldozers',
      icon: MdBuild,
      items: [
        { id: 1, model: 'Caterpillar DSH - 2007', capacity: 'Heavy duty', units: '1', image: 'https://cdn.britannica.com/42/124942-050-5057EA58/Bulldozer.jpg' },
      ]
    },
    'motor-grader': {
      label: 'Motor Grader',
      icon: MdExtension,
      items: [
        { id: 1, model: 'Mitsubishi - MG 130', capacity: 'Precision grading', units: '1', image: 'https://s7d2.scene7.com/is/image/Caterpillar/CM20171009-37324-16812' },
      ]
    },
    'backhoes': {
      label: 'Backhoes / Excavators',
      icon: MdDirections,
      items: [
        { id: 1, model: 'Volvo - Excavator - 2012', capacity: '1.2 cu.m.', units: '1', image: 'https://res.cloudinary.com/dsfzcj5qk/image/upload/v1712765646/biggest-backhoes/biggest-backhoes-in-the-world.jpg' },
        { id: 2, model: 'Caterpillar - 2018 - 320 E', capacity: '0.98 cu.m.', units: '1', image: 'https://res.cloudinary.com/dsfzcj5qk/image/upload/v1712765646/biggest-backhoes/biggest-backhoes-in-the-world.jpg' },
        { id: 3, model: 'Caterpillar - 2016 - 320 E', capacity: '0.98 cu.m.', units: '1', image: 'https://res.cloudinary.com/dsfzcj5qk/image/upload/v1712765646/biggest-backhoes/biggest-backhoes-in-the-world.jpg' },
      ]
    },
    'support': {
      label: 'Support Units',
      icon: MdLightbulb,
      items: [
        { id: 1, model: 'Tower Light', units: '3', capacity: 'High-power lighting', image: 'https://files01.pna.gov.ph/ograph/2020/11/10/container-vans.jpg' },
        { id: 2, model: 'Container Van', units: '2', capacity: 'Storage & transport', image: 'https://files01.pna.gov.ph/ograph/2020/11/10/container-vans.jpg' },
      ]
    },
  };

  const categoryList = Object.entries(categories).map(([key, value]) => ({ key, ...value }));
  const currentCategory = categories[activeCategory];
  const currentItem = currentCategory?.items[activeItemIndex] || currentCategory?.items[0];


  return (
    <section id="equipment" className={cn(
      "py-24 md:py-32 relative overflow-hidden transition-colors duration-500",
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-black'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-12 h-1 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-indigo-500 to-rose-500' 
                : 'from-[#0099FF] to-[#CCFF00]'
            }`}></div>
            <span className={`text-sm font-bold tracking-widest ${
              isDarkMode 
                ? 'text-indigo-400' 
                : 'text-[#0099FF]'
            }`}>EQUIPMENT & FLEET</span>
            <div className={`w-12 h-1 bg-gradient-to-l ${
              isDarkMode 
                ? 'from-indigo-500 to-rose-500' 
                : 'from-[#0099FF] to-[#CCFF00]'
            }`}></div>
          </div>
          <h2 className={cn(
            "text-5xl md:text-6xl lg:text-7xl font-black mb-6",
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            Modern Fleet
          </h2>
          <p className={cn(
            "text-lg max-w-2xl mx-auto",
            isDarkMode 
              ? 'text-white/70' 
              : 'text-gray-700'
          )}>
            State-of-the-art equipment assets supporting large-scale site development
          </p>
        </motion.div>

        {/* Interactive Equipment Browser */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Sidebar Category List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/4 mb-8 md:mb-0"
          >
            <ul className="space-y-3">
              {categoryList.map((cat, idx) => (
                <li key={cat.key}>
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300",
                      activeCategory === cat.key
                        ? isDarkMode
                          ? 'bg-gradient-to-r from-indigo-500 to-rose-500 text-white shadow-lg shadow-indigo-500/30'
                          : 'bg-gradient-to-r from-[#0099FF] to-[#CCFF00] text-white shadow-lg shadow-[#0099FF]/30'
                        : isDarkMode
                          ? 'border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-white hover:border-indigo-500/50'
                          : 'border border-gray-300 bg-white/80 text-gray-900 hover:border-[#0099FF]'
                    )}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setActiveItemIndex(0);
                    }}
                  >
                    {cat.icon && <cat.icon className="text-2xl" />}
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Main Equipment Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-3/4"
          >
            <div className="flex flex-col items-center gap-8">
              {/* Large Equipment Image with Overlay */}
              <div className="relative w-full max-w-xl aspect-video rounded-3xl overflow-hidden shadow-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-slate-900">
                <img
                  src={currentItem?.image}
                  alt={currentItem?.model}
                  className="w-full h-full object-cover"
                  style={{ minHeight: 320, maxHeight: 400 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2">{currentItem?.model}</h4>
                    <p className="text-lg mb-2">{currentItem?.capacity}</p>
                    {currentItem?.plate && <p className="text-base mb-2">Plate: {currentItem.plate}</p>}
                    {currentItem?.units && <p className="text-base mb-2">Units: {currentItem.units}</p>}
                  </div>
                </motion.div>
              </div>

              {/* Equipment Item Selector */}
              <div className="flex gap-2 flex-wrap justify-center">
                {currentCategory.items.map((item, idx) => (
                  <button
                    key={item.id}
                    className={cn(
                      "px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 border",
                      activeItemIndex === idx
                        ? isDarkMode
                          ? 'bg-indigo-500 text-white border-indigo-500'
                          : 'bg-[#0099FF] text-white border-[#0099FF]'
                        : isDarkMode
                          ? 'bg-white/10 text-white border-white/10 hover:bg-indigo-500/20'
                          : 'bg-white text-gray-900 border-gray-300 hover:bg-indigo-100'
                    )}
                    onClick={() => setActiveItemIndex(idx)}
                  >
                    {item.model}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentFleet;
