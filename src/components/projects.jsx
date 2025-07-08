import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
  title: 'Resume Analyzer',
  description: 'Streamlit app for resume–JD analysis with similarity scoring, NLP-based feedback, course suggestions, salary prediction, and downloadable resume.',
  technologies: ['Python', 'NLTK', 'Regex', 'Streamlit', 'Scikit-learn'],
  githubLink: 'https://github.com/username/resume-analyzer', // Update with your actual link
  liveLink: null,
  category: 'Machine Learning',
  icon: '📄',
  color: 'bg-orange-100 border-orange-400'
},
{
  title: 'WalletWise - Expense Tracker',
  description: 'Full-stack MERN app with JWT auth, Redux Toolkit, MongoDB Atlas, and Recharts dashboard for monthly insights and spending categorization.',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'Recharts'],
  githubLink: 'https://github.com/username/walletwise-expense-tracker', // Update with your actual link
  liveLink: 'https://walletwise-demo.netlify.app', // Add if deployed
  category: 'Web Development',
  icon: '💸',
  color: 'bg-yellow-100 border-yellow-400'
},
{
  title: 'Music Recommendation System',
  description: 'Built a personalized recommendation engine combining collaborative filtering (K-Means clustering) and content-based filtering (cosine similarity) techniques.',
  technologies: ['Python', 'Pandas', 'Scikit-learn', 'NLTK', 'Matplotlib'],
  githubLink: 'https://github.com/username/recommendation-system', // ← Replace with your actual GitHub link
  liveLink: null, // or add a deployment link if hosted
  category: 'Machine Learning',
  icon: '🎯',
  color: 'bg-orange-100 border-orange-400'
}

  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
     <motion.div
  initial={{ opacity: 0, y: 200 }} // Starts invisible and significantly further below
  whileInView={{ opacity: 1, y: 0 }}   // Ends visible at its natural position
  viewport={{ once: true, amount: 0.2}} // Triggers earlier (when 40% of component is in view)
  transition={{
    duration: 1.2, // Make it slightly longer to emphasize the travel distance
    ease: "easeOut",
    type: "spring", // Use a spring physics animation for a more dynamic "pop"
    damping: 10,    // Less damping means more bounce
    stiffness: 70   // Lower stiffness means more "stretch"
  }}
>
    <div className=" p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-yellow-400 w-8 h-8 rounded mr-3"></div>
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.color} border-l-4 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{project.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-xs text-gray-600 font-medium">{project.category}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white bg-opacity-70 rounded px-2 py-1 text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2">
              <button
                onClick={() => handleLinkClick(project.githubLink)}
                className="flex items-center px-3 py-1 bg-gray-800 text-white rounded-md text-xs font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="mr-1">⚡</span>
                GitHub
              </button>
              
              {project.liveLink && (
                <button
                  onClick={() => handleLinkClick(project.liveLink)}
                  className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md text-xs font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <span className="mr-1">🚀</span>
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      

      {/* Footer */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <p>More projects on my GitHub profile 🚀</p>
      </div>
    </div>
    </motion.div>
  );
};

export default ProjectsSection;