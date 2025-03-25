import React, { useState, useEffect } from 'react';

function SpecializationSection() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isShaking, setIsShaking] = useState(false);
    const [direction, setDirection] = useState(null);

    const services = [
        {
            icon: "/public/Image/ui.png",
            title: "UI/UX Graphics & Design",
            description: "Tecoreng is the best UI/UX graphics design agency. We have the capacity to build a smooth and high-quality design with our UI/UX team."
        },
        {
            icon: "/public/dm.jpg",
            title: "Digital Marketing",
            description: "Technical Core Engineers is a Digital organization that incorporates administrations from making your Brand character through carefully characterizing your thoughts and zeroing in on getting your items and administrations to the consistently developing computerized market subsequently expanding your image's mindfulness, deals, and wants."
        },
        {
            icon: "/public/iot.png",
            title: "Internet Of Things",
            description: "Web of Things(IoT) application advancement interfaces each and every actual device with the Internet to engage an exchange of data. It will in general be energized through different connection points and devices to make life favorable."
        },
        {
            icon: "/public/mobile-phone_3.svg",
            title: "Mobile App Development",
            description: "Tecoreng is the top mobile application development company in India. Our expert team of mobile application developers is capable of creating high-quality mobile apps for multiple platforms like IOS & Android."
        },
        {
            icon: "/public/OIP.jpeg",
            title: "Web Development",
            description: "Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts to continue growing themself to the latest fair with technology such as Laravel, Angular, Node.Js, and so on."
        }
    ];

    useEffect(() => {
        if (isShaking) {
            const timer = setTimeout(() => setIsShaking(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isShaking]);

    const handleCardClick = (index) => {
        const newIndex = (index + services.length) % services.length;
        if (newIndex !== activeIndex) {
            setDirection(newIndex > activeIndex ? 'right' : 'left');
            setIsShaking(true);
            setActiveIndex(newIndex);
        }
    };

    const getShakeAnimation = (index) => {
        if (!isShaking) return '';

        if (index === 1) {
            return 'animate-shake-center';
        } else if (direction === 'right' && index === 0) {
            return 'animate-shake-left';
        } else if (direction === 'left' && index === 2) {
            return 'animate-shake-right';
        }
        return '';
    };

    const getVisibleCards = () => {
        const prevIndex = (activeIndex - 1 + services.length) % services.length;
        const nextIndex = (activeIndex + 1) % services.length;
        return [services[prevIndex], services[activeIndex], services[nextIndex]];
    };

    return (
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-5 bg-[#01132e] text-white">
            <div className="container mx-auto p-4 md:p-6">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-left font-bold"
                    style={{
                        textShadow: `
                            rgb(239, 237, 227) -1px -1px 1px, 
                            rgb(1, 19, 46) 0px 1px 0px, 
                            rgb(1, 19, 46) 0px 2px 0px, 
                            rgb(1, 19, 46) 0px 3px 0px, 
                            rgb(77, 89, 108) 0px 4px 0px, 
                            rgba(0, 0, 0, 0.9) 0px 0px 0px, 
                            rgba(0, 0, 0, 0.3) 0px 0px 0px, 
                            rgba(0, 0, 0, 0.5) 0px 0px 0px, 
                            rgba(0, 0, 0, 0.9) 0px 0px 0px
                        `
                    }}
                >
                    Our Specialization
                </h2>
                <br />
                <p className="text-white text-sm md:text-base mb-4">
                    We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfils your diverse business requirements through a number of services. We specialise in the following services:
                </p>
            </div>
            <br />

            {/* carousel */}
            <div className="flex items-center justify-center overflow-hidden">
                <style jsx>{`
                    @keyframes shakeCenter {
                        0%, 100% { transform: scale(1) translateX(0); }
                        25% { transform: scale(1) translateX(-5px); }
                        75% { transform: scale(1) translateX(5px); }
                    }
                    @keyframes shakeLeft {
                        0%, 100% { transform: scale(0.9) translateX(0); }
                        25% { transform: scale(0.9) translateX(-3px); }
                        75% { transform: scale(0.9) translateX(3px); }
                    }
                    @keyframes shakeRight {
                        0%, 100% { transform: scale(0.9) translateX(0); }
                        25% { transform: scale(0.9) translateX(3px); }
                        75% { transform: scale(0.9) translateX(-3px); }
                    }
                    .animate-shake-center {
                        animation: shakeCenter 0.5s ease-in-out;
                    }
                    .animate-shake-left {
                        animation: shakeLeft 0.5s ease-in-out;
                    }
                    .animate-shake-right {
                        animation: shakeRight 0.5s ease-in-out;
                    }
                `}</style>
                <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                    {getVisibleCards().map((service, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(activeIndex + (index - 1))}
                            className={`
                                cursor-pointer
                                transition-all
                                duration-400
                                rounded-lg
                                overflow-hidden
                                flex flex-col
                                items-center
                                justify-between
                                bg-white 
                                text-black 
                                ${index === 1
                                    ? 'p-4 sm:p-5 md:p-6 lg:p-5 z-20 transform scale-100 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[370px] w-[240px] sm:w-[280px] md:w-[320px] lg:w-[500px]'
                                    : 'p-2 sm:p-3 md:p-4 lg:p-5 transform scale-90 opacity-70 hover:opacity-90 h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px]'
                                }   
                                ${index === 0 ? 'z-10 -mr-0 sm:-mr-4 md:-mr-6 lg:-mr-0' : ''}
                                ${index === 2 ? 'z-10 -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8' : ''}
                                ${getShakeAnimation(index)}
                            `}
                        >
                            <div className={`
                                w-full 
                                flex 
                                justify-center 
                                mb-4
                                ${index === 1
                                    ? 'h-32 sm:h-40 md:h-48 lg:h-46'
                                    : 'h-24 sm:h-32 md:h-40 lg:h-36'
                                }
                            `}>
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className={`
                                        object-contain
                                        ${index === 1
                                            ? 'w-15 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-28 lg:h-38'
                                            : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32'}
                                        transition-all duration-500
                                    `}
                                />
                            </div>

                            <div className="w-full text-center px-2 sm:px-3 md:px-4 lg:px-5">
                                <h3 className={`
                                    font-bold mb-2 sm:mb-3
                                    ${index === 1
                                        ? 'text-base sm:text-lg md:text-xl lg:text-2xl'
                                        : 'text-sm sm:text-base md:text-lg lg:text-xl'}
                                    transition-colors duration-500
                                `}>
                                    {service.title}
                                </h3>

                                <p className={`
                                    transition-colors duration-500
                                    ${index === 1
                                        ? 'text-xs sm:text-sm md:text-base lg:text-base line-clamp-4'
                                        : 'text-[10px] sm:text-xs md:text-sm lg:text-sm line-clamp-3'}
                                `}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SpecializationSection;