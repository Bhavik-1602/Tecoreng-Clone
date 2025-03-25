import React, { useRef, useState } from 'react';

function Success() {
  const stories = [
    {
      title: 'Betting Platform',
      description: "Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more.",
      image_url: "/public/pi-1.webp",
      video_url: "/public/ss1.mp4"
    },
    {
      title: 'Health and Wellness',
      description: "Excitement fills the air as we proudly unveil our Health and Wellness Platform—a pivotal portal toward maximizing your health journey.",
      image_url: "/public/pi-2.webp",
      video_url: "/public/ss2.mp4"
    },
    {
      title: 'An E - Commerce',
      description: "Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship.",
      image_url: "/public/pi-3.webp",
      video_url: "/public/ss3.mp4"
    }
  ];

  return (
    <section className="bg-[#01132e] text-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-left mb-2 sm:mb-4 
        text-[rgb(239,237,227)] 
          drop-shadow-[0px_1px_0px_rgb(1,19,46)], 
          drop-shadow-[0px_2px_0px_rgb(1,19,46)], 
          drop-shadow-[0px_3px_0px_rgb(1,19,46)],
          drop-shadow-[0px_4px_0px_rgb(77,89,108)]">

          Our Success Stories
        </h1>
        
        {/* Card grid - changes to single column on mobile, 2 columns on tablets, 3 columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {stories.map((story, index) => {
            // Create a separate component for each card to properly handle state
            return <StoryCard key={index} story={story} />;
          })}
        </div>
      </div>
    </section>
  );
}

// Separate component for each card to properly handle hover state
function StoryCard({ story }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Only try to play if videoRef is available
    if (videoRef.current) {
      // Add catch to handle any potential play errors
      videoRef.current.play().catch(error => {
        console.log("Video play error:", error);
      });
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  
  // Add touch support for mobile devices
  const handleTouchStart = () => {
    setIsHovered(prev => !prev);
    if (!isHovered && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video play error:", error);
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="bg-[#112542] rounded-[17px] h-full flex flex-col overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <div className="relative w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px]">
        {/* Image (visible by default) */}
        <img
          src={story.image_url}
          alt={story.title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy" // Add lazy loading
        />
        
        {/* Video (visible on hover) */}
        <video
          ref={videoRef}
          src={story.video_url}
          loop
          muted
          playsInline // Better mobile support
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></video>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium pb-2">
          {story.title}
        </h3>
        <p className="text-white text-xs sm:text-sm leading-tight sm:leading-relaxed">
          {story.description}
        </p>
      </div>
    </div>
  );
}

export default Success;