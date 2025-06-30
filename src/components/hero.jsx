import React from 'react';

const HeroSection = () => {
  return (
<div class="min-h-screen  flex flex-col justify-center items-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
  <div class="bg-amber-200 min-h-120 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl">
           <div className="
        w-11/12 max-w-6xl mx-auto 
 
        flex flex-col md:flex-row 
        overflow-hidden 
        min-h-[400px] 
    ">

        <div className="
            w-full md:w-[65%]          /* 100% width on mobile, 65% on medium screens and up */
           p-6 rounded-t-xl md:rounded-tr-none md:rounded-l-xl 
            flex flex-col justify-center items-center text-center /* Center content inside left part */
        ">

        </div>

        <div className="w-full md:flex-1 p-6 rounded-b-xl md:rounded-bl-none md:rounded-r-xl flex flex-col justify-center items-center text-center">
         
        </div>

    </div>
  </div>
</div>

  );
};

export default HeroSection;
