import React from 'react';
import { motion } from 'framer-motion';

const PositionsAndCreatives = () => {
  const positionsAndAchievements = [
    {
      icon: '👑',
      title: 'Leadership',
      roles: [
        'Chairperson – IEEE ADGIPS (2024–25)',
        'WIE Chairperson – IEEE ADGIPS (2023–24)',
        'Membership Head – IEEE ADGIPS (2022–23)'
      ],
      color: 'bg-yellow-100 border-yellow-400'
    },
    {
      icon: '🏆',
      title: 'Awards',
      roles: [
        'Dr. JK Pal Memorial Award (2025)',
        'Outstanding Student Volunteer – IEEE Delhi Section (2024)'
      ],
      color: 'bg-orange-100 border-orange-400'
    },
    {
      icon: '🏅',
      title: 'Competitions',
      roles: [
        'Smart India Hackathon – Top 20 Team (College Level)',
        'Innerve Hackathon Finalist – IGDTUW (2024)'
      ],
      color: 'bg-yellow-100 border-yellow-400'
    }
  ];

  const CategorySection = ({ title, headerColor, categories }) => (
     
    <div className="mb-8">
    

      {/* Categories Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${category.color} border-l-4 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            <div className="flex items-center mb-3">
              <span className="text-lg mr-2">{category.icon}</span>
              <h3 className="text-sm font-semibold text-gray-800">{category.title}</h3>
            </div>

            <div className="space-y-1">
              {(category.roles || category.items).map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white bg-opacity-70 rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-opacity-90 transition-colors duration-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );

  return (
    <motion.div
  initial={{ opacity: 0, y: 200 }} // Starts invisible and significantly further below
  whileInView={{ opacity: 1, y: 0 }}   // Ends visible at its natural position
  viewport={{ once: true, amount: 0.4 }} // Triggers earlier (when 40% of component is in view)
  transition={{
    duration: 1.2, // Make it slightly longer to emphasize the travel distance
    ease: "easeOut",
    type: "spring", // Use a spring physics animation for a more dynamic "pop"
    damping: 10,    // Less damping means more bounce
    stiffness: 70   // Lower stiffness means more "stretch"
  }}
>
    <div className=" p-6 max-w-4xl mx-auto">
      {/* Main Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-yellow-400 w-8 h-8 rounded mr-3"></div>
        <h1 className="text-2xl font-bold text-gray-800">Position of responsibility and achievements</h1>
      </div>

      {/* Combined Section */}
      <CategorySection
      
        headerColor="bg-yellow-400"
        categories={positionsAndAchievements}
      />
    </div>
    </motion.div>
  );
};

export default PositionsAndCreatives;
