import React from 'react';
import { motion } from "framer-motion";

const HeroSection = () => {


  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3, 
        staggerChildren: 0.2, 
        type: "spring",
        damping: 15,
        stiffness: 100,
      }
    }
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0 }    
  };

  
  const imageVariants = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
    
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }}   
      viewport={{ once: true, amount: 0.4 }} 
      transition={{
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        damping: 10,    
        stiffness: 70   
      }}
    >
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="bg-amber-200 min-h-120 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl">
        
          <motion.div
            className="w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden min-h-[400px]"
            variants={containerVariants} 
            initial="hidden"             
            animate="visible"            
          >


            <div className="w-full md:w-[65%] p-6 rounded-t-xl md:rounded-tr-none md:rounded-l-xl flex flex-col justify-center items-center text-center">

              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4" variants={itemVariants}>
                Hi, I'm <span className="text-amber-700">NitCode</span>.
              </motion.h1>
              <motion.p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg" variants={itemVariants}>
                Crafting <span className="font-semibold text-amber-800">elegant and performant</span> digital experiences.
                A passionate developer specializing in modern web technologies.
              </motion.p>
              <motion.button
                className="bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-amber-700 transition-colors duration-300 ease-in-out"
                variants={itemVariants}
                onClick={() => {
                  document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.button>
            </div>

      
            <motion.div
              className="w-full md:flex-1 p-6 rounded-b-xl md:rounded-bl-none md:rounded-r-xl flex flex-col justify-center items-center text-center"
              variants={imageVariants} 
            >
             
              <img
                src="/about.jpg"
                alt="Developer Illustration"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
          
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;