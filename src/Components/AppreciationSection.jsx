import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Appreciations = () => {
  // State to track the currently active slide index
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const totalSlides = testimonials.length; // Get total number of slides (testimonials)

  // Hook to update the 'isLaptop' state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);  // Update the state when window is resized
    };
    window.addEventListener('resize', handleResize);  // Add event listener for resizing
    return () => window.removeEventListener('resize', handleResize);  // Clean up the event listener
  }, []);

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);  // Set the current slide to the specified index
  };

  // Swiper configuration options
  const swiperConfig = {
    loop: true,  // Infinite loop of slides
    slidesPerView: isLaptop ? 3 : 1,  // Show 3 slides on laptops, 1 slide on smaller screens
    spaceBetween: 30,  // Space between slides
    autoplay: {
      delay: 5000,  // Auto-play delay (5 seconds)
      disableOnInteraction: false,  // Don't stop autoplay on user interaction
    },
    pagination: {
      clickable: true,  // Make pagination clickable
    },
    breakpoints: {
      
      768: {
        slidesPerView: 2,  // Show 2 slides on medium screens (tablets)
      },
      1024: {
        slidesPerView: 3,  // Show 3 slides on larger screens (laptops)
      },
    },
    onSlideChange: (swiper) => {
      setCurrentSlide(swiper.activeIndex);  // Update the current slide index when Swiper changes
    }
  };

  return (
    <div className="w-full bg-[#01132E] py-3 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <h1
          className="text-4xl text-white font-extrabold text-left mb-8  tracking-wide"
          // style={{
          //   textShadow: "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px"
          // }}
        >
          Appreciation from Clients
        </h1>
        <br />
        <br />

        {/* Swiper component for displaying testimonials */}
        <Swiper {...swiperConfig}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {/* Testimonial card */}
              <div 
                className="h-[350px] p-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.01)',  // Slight transparent background
                  boxShadow: 'rgba(255, 255, 255, 0.5) 0px 39px 56px -36px inset, rgb(255, 255, 255) 0px 7px 11px -4px inset, rgba(14, 78, 114, 0.3) 0px -82px 68px -64px inset, rgba(0, 161, 253, 0.3) 0px 98px 100px -48px inset, rgba(8, 59, 88, 0.3) 0px 4px 18px inset, rgba(13, 137, 207, 0.2) 0px 1px 40px inset',  // Add shadow effects
                  backdropFilter: 'blur(12.5px)',  // Apply blur effect
                  borderRadius: '25px',  // Rounded corners
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {testimonial.name}  {/* Testimonial name */}
                    </h3>
                    <p className="text-blue-400 font-medium mb-6">
                      {testimonial.position}  {/* Testimonial position */}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-sm" style={{ lineHeight: '20px' }}>
                    {testimonial.message}  {/* Testimonial message */}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation dots for manual slide selection */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}  // Navigate to the selected slide
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-500 w-8' : 'bg-gray-400 hover:bg-gray-300'}`}  // Change appearance based on the active slide
              aria-label={`Go to slide ${index + 1}`}  // Accessibility label for the button
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appreciations;