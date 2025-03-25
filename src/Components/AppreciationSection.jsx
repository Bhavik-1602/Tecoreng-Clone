import { useEffect, useState } from 'react';

const Appreciations = () => {
  // State to track the currently active slide index
  const [activeIndex, setActiveIndex] = useState(0);
  
  // State to determine if the screen width is for laptop or not
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  // Array containing testimonials with name, position, and message
  const testimonials = [
    {
      name: "Tim Loenders",
      position: "BPOS LOENDERS GCV",
      message: "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn't have which saved the project time and money."
    },
    {
      name: "Denis Cartin",
      position: "CTO, SoSFba",
      message: "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project's progress. They also shared significant insights and suggestions for developing the project."
    },
    {
      name: "Kean Graham",
      position: "CEO, MonetizeMore",
      message: "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive."
    },
    {
      name: "Chetan Patwardhan",
      position: "CEO, HiQuest Group of IT Companies",
      message: "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs."
    },
    {
      name: "Michael Chen",
      position: "CTO, TechVision Solutions",
      message: "The team's expertise and professionalism exceeded our expectations. They demonstrated exceptional problem-solving skills and maintained clear communication throughout the project lifecycle. Their innovative approaches and dedication to quality made them an invaluable partner."
    },
    {
      name: "Robert Martinez",
      position: "Director, GlobalTech Systems",
      message: "Their ability to understand complex requirements and deliver innovative solutions sets them apart. The team's commitment to excellence and timely delivery made our collaboration highly successful. They truly went above and beyond to ensure our project's success."
    }
  ];

  // Calculate how many cards to show based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };
  
  // State for number of visible cards
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Setup auto-rotation timer (every 2 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
      setVisibleCount(getVisibleCount());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get visible testimonials based on active index and visible count
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  // Navigation dots click handler
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full bg-[#01132E] py-3 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <h1 className="text-4xl text-white font-extrabold text-left mb-8 tracking-wide">
          Appreciation from Clients
        </h1>
        <br />
        <br />

        {/* Cards container */}
        <div className="flex flex-wrap gap-6 justify-center">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="h-[350px] p-8 flex-1 min-w-[280px] max-w-[400px] transition-all duration-500"
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                boxShadow: 'rgba(255, 255, 255, 0.5) 0px 39px 56px -36px inset, rgb(255, 255, 255) 0px 7px 11px -4px inset, rgba(14, 78, 114, 0.3) 0px -82px 68px -64px inset, rgba(0, 161, 253, 0.3) 0px 98px 100px -48px inset, rgba(8, 59, 88, 0.3) 0px 4px 18px inset, rgba(13, 137, 207, 0.2) 0px 1px 40px inset',
                backdropFilter: 'blur(12.5px)',
                borderRadius: '25px',
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-6">
                    {testimonial.position}
                  </p>
                </div>
                
                <p className="text-gray-300 text-xs sm:text-sm" style={{ lineHeight: '20px' }}>
                  {testimonial.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        {/* <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-400' : 'bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Appreciations;