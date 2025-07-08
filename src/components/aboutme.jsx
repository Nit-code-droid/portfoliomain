import React from 'react';
import { motion } from 'framer-motion';

const Aboutme = () => {
  const academics = [
    {
      institution: 'Dr Akhilesh Das Gupta Institute of Professional Studies',
      degree: 'Bachelor of Technology in Computer Science',
      duration: '2021 – 2025',
      grade: 'Current CGPA: 9.026',
      type: 'Higher Education',
      icon: '🎓',
      color: 'bg-yellow-100 border-yellow-400',
      highlights: [
        'Consistent academic excellence',
        'Dean\'s List for 4 consecutive semesters',
        'Active in technical societies'
      ]
    },
    {
      institution: 'Kulachi Hansraj Model School',
      degree: 'AISSCE(XII) CBSE BOARD',
      duration: '2021',
      grade: 'Percentage: 89%',
      type: 'Senior Secondary',
      icon: '📚',
      color: 'bg-orange-100 border-orange-400',
      highlights: [
        'Science stream with Mathematics',
        'School topper in Computer Science',
        'Participated in various olympiads'
      ]
    },
    {
      institution: 'Kulachi Hansraj Model School',
      degree: 'AISSCE(X) CBSE BOARD',
      duration: '2019',
      grade: 'Percentage: 92.8%',
      type: 'Secondary',
      icon: '📖',
      color: 'bg-yellow-100 border-yellow-400',
      highlights: [
        'All India rank in top 5%',
        'Excellence in Mathematics and Science',
        'Student council member'
      ]
    }
  ];

  const relevantCourses = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Machine Learning',
    'Web Development',
    'Object Oriented Programming',
    'System Design',
    'Artificial Intelligence'
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
    <div className="p-6 max-w-4xl mx-auto">

      <div className="flex items-center justify-center mb-6">
        <div className="bg-yellow-400 w-8 h-8 rounded mr-3"></div>
        <h1 className="text-2xl font-bold text-gray-800">Academics</h1>
      </div>


      <div className="space-y-4 mb-8">
        {academics.map((edu, index) => (
          <div
            key={index}
            className={`${edu.color} border-l-4 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200`}
          >

            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start">
                <span className="text-2xl mr-3 mt-1">{edu.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{edu.institution}</h3>
                  <p className="text-md font-medium text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.duration}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                  {edu.grade}
                </span>
                <p className="text-xs text-gray-600 mt-1">{edu.type}</p>
              </div>
            </div>


            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {edu.highlights.map((highlight, hlIndex) => (
                  <li key={hlIndex} className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>


      <div className="bg-gray-50 border-l-4 border-blue-400 rounded-lg p-5 shadow-sm">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-3">📝</span>
          <h3 className="text-lg font-semibold text-gray-800">Relevant Coursework</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {relevantCourses.map((course, courseIndex) => (
            <div
              key={courseIndex}
              className="bg-white bg-opacity-80 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-opacity-100 transition-colors duration-200"
            >
              {course}
            </div>
          ))}
        </div>
      </div>


      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">9.026</div>
          <div className="text-sm text-gray-600">Current CGPA</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">89%</div>
          <div className="text-sm text-gray-600">Class XII Score</div>
        </div>
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">92.8%</div>
          <div className="text-sm text-gray-600">Class X Score</div>
        </div>
      </div>


      <div className="text-center mt-6 text-sm text-gray-600">
        <p>Committed to academic excellence and continuous learning 📚</p>
      </div>
    </div>
    </motion.div>
  );
};

export default Aboutme;