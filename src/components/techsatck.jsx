import React from 'react';
import { motion } from 'framer-motion';
const TechStack = () => {
  const skillCategories = [
    
   {
  icon: '🧑‍💻',
  title: 'Languages',
  skills: ['Java', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML', 'CSS'],
  color: 'bg-yellow-100 border-yellow-400'
},
{
  icon: '🌐',
  title: 'Web Development',
  skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack', 'Redux Toolkit', 'Recharts.js', 'Framer Motion', 'REST APIs'],
  color: 'bg-orange-100 border-orange-400'
},
{
  icon: '🤖',
  title: 'Data Science & ML',
  skills: ['Pandas', 'NumPy', 'Scikit-learn', 'NLTK', 'Matplotlib', 'Seaborn', 'Streamlit', 'Machine Learning', 'Data Analytics'],
  color: 'bg-yellow-100 border-yellow-400'
},
{
  icon: '🛠️',
  title: 'Tools',
  skills: ['VS Code', 'Postman', 'Figma', 'Jira', 'Slack', 'Tableau', 'Power BI', 'Excel', 'Git'],
  color: 'bg-orange-100 border-orange-400'
}

  ];

  return (
     <motion.div
  initial={{ opacity: 0, y: 200 }} // Starts invisible and significantly further below
  whileInView={{ opacity: 1, y: 0 }}   // Ends visible at its natural position
  viewport={{ once: true, amount: 0.2 }} // Triggers earlier (when 40% of component is in view)
  transition={{
    duration: 1.2, // Make it slightly longer to emphasize the travel distance
    ease: "easeOut",
    type: "spring", // Use a spring physics animation for a more dynamic "pop"
    damping: 10,    // Less damping means more bounce
    stiffness: 70   // Lower stiffness means more "stretch"
  }}
>
    <div className="mt-5 p-6 max-w-3xl mx-auto">
      {/* Compact Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-yellow-400 w-8 h-8 rounded mr-3"></div>
        <h1 className="text-2xl font-bold text-gray-800">My Tech Stack</h1>
      </div>

      {/* Compact Skills Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`${category.color} border-l-4 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            <div className="flex items-center mb-3">
              <span className="text-lg mr-2">{category.icon}</span>
              <h3 className="text-sm font-semibold text-gray-800">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-white bg-opacity-70 rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-opacity-90 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
};

export default TechStack;