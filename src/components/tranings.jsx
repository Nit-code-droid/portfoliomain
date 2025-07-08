
import React from 'react';
import { motion } from 'framer-motion';

const InternshipsSection = () => {
  const internships = [
   {
  company: 'Info Edge (Naukri.com)',
  position: 'Data Intern',
  duration: 'Feb 2025 - May 2025',
  location: 'Noida, India',
  description: 'Implemented web scraping solutions to gather and structure data from various online platforms. Utilized Python scripting and libraries to streamline data collection and processing.',
  technologies: ['Python', 'Scrapy', 'BeautifulSoup'],
  achievements: [
    'Built scalable scraping scripts for structured data pipelines',
    'Improved data parsing accuracy with customized logic',
    'Handled multi-source integration for a unified dataset'
  ],
  color: 'bg-yellow-100 border-yellow-400'
},
{
  company: 'MASSH - Minimal Access Smart Surgery Hospitals',
  position: 'Product Intern',
  duration: 'Jul 2024 - Aug 2024',
  location: 'Delhi, India',
  description: 'Led research and collaboration efforts for app development, focusing on user experience and competitor landscape to drive product differentiation.',
  technologies: ['Product Research', 'User Experience Design', 'Market Analysis'],
  achievements: [
    'Conducted competitor analysis leading to key strategic shifts',
    'Identified UX flaws and proposed actionable improvements',
    'Assisted in designing the second phase of the mobile app'
  ],
  color: 'bg-orange-100 border-orange-400'
},
{
  company: 'SI Club Delhi',
  position: 'Volunteer Web Developer',
  duration: 'Part-time',
  location: 'Delhi, India',
  description: 'Designed and maintained the NGO website while handling UX, content, and technical execution. Created digital content and supported event operations to increase engagement.',
  technologies: ['HTML', 'CSS', 'Canva', 'Event Management'],
  achievements: [
    'Developed and deployed the organization’s main website',
    'Improved user engagement through better UX and content',
    'Moderated outreach events and boosted participation'
  ],
  color: 'bg-yellow-100 border-yellow-400'
},
{
  company: 'IBM/Lernovate',
  position: 'Data Science Trainee',
  duration: 'Summer 2023',
  location: 'Delhi, India',
  description: 'Completed hands-on training in machine learning and Python-based data science tools. Built a music recommender using unsupervised learning and preprocessing techniques.',
  technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
  achievements: [
    'Built music recommender using K-Means and cosine similarity',
    'Performed EDA, scaling, and feature selection',
    'Learned key ML concepts: supervised/unsupervised learning, model evaluation'
  ],
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
    <div className=" p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-yellow-400 w-8 h-8 rounded mr-3"></div>
        <h1 className="text-2xl font-bold text-gray-800">Internships</h1>
      </div>

      {/* Internships List */}
      <div className="space-y-4">
        {internships.map((internship, index) => (
          <div
            key={index}
            className={`${internship.color} border-l-4 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            {/* Header Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{internship.position}</h3>
                <p className="text-md font-medium text-gray-700">{internship.company}</p>
              </div>
              <div className="text-sm text-gray-600 mt-1 md:mt-0">
                <p>{internship.duration}</p>
                <p>{internship.location}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              {internship.description}
            </p>

            {/* Technologies */}
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-1">
                {internship.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white bg-opacity-70 rounded px-2 py-1 text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {internship.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <p>Always eager to learn and contribute to innovative projects 🚀</p>
      </div>
    </div>
</motion.div>
  );
};

export default InternshipsSection;