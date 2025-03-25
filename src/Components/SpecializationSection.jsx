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
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-left font-bold">
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
                <div className="flex items-center justify-center space-x-2  sm:space-x-4 md:space-x-6 lg:space-x-8">
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
                                ${index === 1
                                    ? 'bg-white text-black p-1 sm:p-1 md:p-4 lg:p-6 z-20 transform scale-100 h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] w-[160px] sm:w-[220px] md:w-[320px] lg:w-[400px]'
                                    : 'bg-white text-black h-[120px] sm:h-[260px] md:h-[100px] lg:h-[250px] w-[150px] sm:w-[120px] md:w-[160px] lg:w-[250px] p-1 sm:p-2 md:p-3 lg:p-4 transform scale-90 opacity-70 hover:opacity-90 '
                                }   
                                ${index === 0 ? 'z-10 -mr-0 sm:-mr-4 md:-mr-6 lg:-mr-0' : ''}
                                ${index === 2 ? 'z-10 -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8' : ''}
                                ${getShakeAnimation(index)}
                            `}
                        >
                            <div className="flex flex-col items-center justify-start text-center h-full w-full">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className={`
                                        ${index === 1 
                                            ? 'w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-1 sm:mb-2 md:mb-3 lg:mb-4' 
                                            : 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mb-1 md:mb-2 '}
                                        transition-all duration-500
                                    `}
                                />
                                <h3 className={`
                                    font-bold mb-1 sm:mb-2
                                    ${index === 1 
                                        ? 'text-xs sm:text-sm md:text-base lg:text-lg' 
                                        : 'text-[8px] sm:text-[10px] md:text-xs lg:text-sm'}
                                    transition-colors duration-500 px-1
                                `}>
                                    {service.title}
                                </h3>
                                <div className="flex-grow overflow-hidden">
                                    <p className={`
                                        transition-colors duration-500 px-1
                                        ${index === 1 
                                            ? 'text-[10px] sm:text-xs md:text-sm lg:text-base line-clamp-3 md:line-clamp-4' 
                                            : 'text-[6px] sm:text-[8px] md:text-xs lg:text-sm line-clamp-2 md:line-clamp-3'}
                                    `}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SpecializationSection;