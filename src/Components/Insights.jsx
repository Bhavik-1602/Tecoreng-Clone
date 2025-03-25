import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper's styles


// Data array containing the image URLs, titles, and descriptions for each slide
const natureImages = [
    {
        image:"/public/ti-1.jpg",
        title: "Denis Cartin",
        description:
            'They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project\'s progress. They also shared significant insights and suggestions for developing the project. Discover the peaceful embrace of nature\'s quiet corners, where every element works in harmony to inspire a sense of calm and balance.',
    },
    {
         image: "/public/ti-2.webp",
        title: "Kean Graham",
        description:
            'What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.',
    },
    {
         image: "/public/ti-3.jpg",
        title: "Chetan Patwardhan",
        description:
            'What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.',
    },
    {
         image: "/public/ti-4.webp",
        title: "Chetan Patwardhan",
        description:
            "Witness the sky's dramatic transformation as the setting sun paints a masterpiece of color, reminding us of nature's fleeting moments of brilliance.",
    },
    {
       image: "/public/ti-5.webp",
        title: "Chetan Patwardhan",
        description:
            "Experience the soothing stillness of a pristine lakeside, where reflections of the surrounding beauty invite moments of quiet reflection.",
    },
];

const Insights = () => {
    // Detect if the user is on a laptop (based on window width)
    const isLaptop = window.innerWidth >= 1024;

    // Swiper configuration: setting up the slider options
    const swiperConfig = {
        loop: true, // Enable infinite loop
        slidesPerView: isLaptop ? 3 : 1, // Display 3 slides for laptops and 1 slide for mobile/tablet
        spaceBetween: 30, // Space between slides
        autoplay: {
            delay: 5000, // Auto-slide every 5 seconds
            disableOnInteraction: false, // Keep autoplay running even when user interacts
        },
        pagination: {
            clickable: true, // Make pagination dots clickable
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // Show 2 slides for medium devices (like tablets)
            },
            1024: {
                slidesPerView: 3, // Show 3 slides for larger screens (laptops)
            },
        },
    };

    return (
        <div className='w-full bg-[#01132e]'>
        <div className="container mx-auto  px-4 sm:px-6 lg:px-15 bg-[#01132e]">
            {/* Main heading for the section */}
            <h1
                className="text-4xl text-white font-extrabold text-left mb-8  tracking-wide"
                style={{
                    textShadow:
                        "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
                }}
            >
                Tecoreng insights
            </h1>
            <br />
            <br />

            {/* Swiper Slider */}
            <Swiper {...swiperConfig}>
                {natureImages.map((image, index) => (
                    <SwiperSlide key={index} className="relative bg-[#0b1b33] text-white rounded-2xl shadow-lg overflow-hidden group">
                        {/* Card Image */}
                        <div className="relative h-80"> {/* Fixed height for the image section */}
                            <img
                                src={image.image}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Dark overlay that appears on hover */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="text-center text-white px-4">
                                    <h3 className="text-2xl font-bold">{image.title}</h3>
                                    <p className="text-sm mt-2">{image.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card Text Content */}
                        <div className="p-6 space-y-4 h-40"> {/* Fixed height for the text section */}
                            <h3 className="text-xl font-bold tracking-tight">{image.title}</h3>
                            <p className="text-white text-sm line-clamp-3">{image.description}</p> {/* Limiting the text to 3 lines */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

</div>
    );
};

export default Insights;