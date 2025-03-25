import React from "react";

const WhyTecoreng = () => {
  const boxes = [
    { text: "Reporting & Analysis", img: "/public/Image/s-1.webp"},
    { text: "On-Time Delivery", img: "/public/Image/s-2.webp" },
    { text: "Seamless Communication", img: "/public/Image/s-3.webp" },
    { text: "Post Launch Support", img: "/public/Image/s-4.webp" },
    { text: "Agile Methodology" },
    { text: "Certified Experts" },
    { text: "Budget Friendly" },
    { text: "100% Client Expectation" },
  ];

  return (
    <div className="bg-[#112545] flex justify-center items-center py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Left-Aligned Text Section */}
        <div className="text-left mb-8 md:mb-12">
          {/* H1 Title - Updated with custom styling */}
          <h1 
            className="
              text-3xl md:text-5xl lg:text-6xl xl:text-8xl 
              uppercase 
              font-bold 
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              from-white 
              to-white 
              stroke-white 
              stroke-1
            "
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: '600',
              letterSpacing: '5px',
              WebkitTextStroke: '1px white'
            }}
          >
            Why Tecoreng for your next project?
          </h1>

          <div className="my-4 md:my-8"></div>

          {/* Paragraph - Better readability on mobile */}
          <p className="text-white text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-4xl">
            Introducing Technical Core Engineers (TCE), the intersection of technology and innovation. At TCE, we excel in delivering exceptional IT services customized to fulfill your development requirements. Harnessing our expertise and enthusiasm, we breathe life into your ideas. Backed by a team of seasoned developers with extensive knowledge in various programming technologies, our dedication is unwavering, ensuring the delivery of outstanding results. Our mission is straightforward: decode the language of binary and transform it into extraordinary digital solutions that empower your business.
          </p>

          {/* Button - Properly sized for all screens */}
          <button  
            style={{borderRadius:"15px"}} 
            className="w-40 md:w-48 lg:w-60 h-10 md:h-12 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm md:text-base lg:text-lg py-1 px-4 border-b-4 border-[#701d04] font-bold rounded-lg md:rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4"
          >
            GET IN TOUCH
          </button>
        </div>

        {/* 8 Boxes Grid - Responsive columns and proper spacing */}
        <div className="mt-8 md:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-[#1a3562] p-4 md:p-6 shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform duration-300 hover:transform hover:scale-105 h-32 md:h-40"
              >
                {/* All boxes now have images */}
                {box.img && (
                  <img
                    src={box.img}
                    alt={box.text}
                    className="mb-3 w-10 h-10 md:w-16 md:h-16 object-contain"
                  />
                )}
                <p className="text-white text-center text-sm md:text-base font-medium">
                  {box.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTecoreng;