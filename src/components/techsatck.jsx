import React from 'react';

// Badge Component
const TechBadge = ({ children }) => (
  <span className="
    inline-flex items-center justify-center
    bg-indigo-100 text-indigo-800 text-sm font-medium
    px-3 py-1 rounded-full shadow-sm /* Styling for the badge */
    transition-all duration-200 ease-in-out
    hover:bg-indigo-200 hover:scale-105 /* Hover effects for interaction */
  ">
    {children}
  </span>
);

// Main TechStackCategories component
const TechStackCategories = () => {
  // Define your tech stack items categorized as provided in the image
  const techStack = {
    "Web & Software Development": [
      "Java",
      "JavaScript",
      "C++",
      "HTML",
      "CSS",
      "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      "REST APIs",
      "Redux Toolkit",
      "Recharts.js",
      "Framer Motion"
    ],
    "Machine Learning & Data Science": [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "NLTK",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "Tableau",
      "Power BI",
      "Excel",
      "Machine Learning",
      "Data Analytics"
    ]
  };

  return (
    <div className="
      max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 /* Responsive max-width and padding */
      bg-gradient-to-br from-gray-50 to-gray-100 /* Subtle gradient background */
      rounded-2xl shadow-xl border border-gray-200 /* Rounded corners, shadow, and border */
      flex flex-col items-center /* Center content horizontally */
      text-center space-y-8 /* Spacing between sections */
      min-h-[400px] /* Ensure a minimum height for the component container */
    ">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
        My Tech Stack
      </h2>

      {/* Grid container for categories to allow them to go side-by-side on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="
              bg-white p-6 rounded-xl shadow-md border border-gray-100
              flex flex-col items-center /* Center content in category box */
            "
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-300 pb-2">
              {category}
            </h3>
            {/* Container for badges: flex-wrap to arrange horizontally and wrap */}
            <div className="flex flex-wrap justify-center gap-2">
              {items.map((item, index) => (
                <TechBadge key={index}>{item}</TechBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCategories;