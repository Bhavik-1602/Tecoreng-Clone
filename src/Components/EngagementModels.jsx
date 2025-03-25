// EngagementModels.js
import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const models = [
    {
        title: 'Hire Full-time Developer',
        description: "Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals."
    },
    {
        title: 'Hire Part-time Developer',
        description: "Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire."
    },
    {
        title: 'Professional Services',
        description: "Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale."
    }
];

function EngagementModels() {
    const [isHover, setIsHover] = useState(false);

    return (
      <div className='bg-[#112542]'>
        <div className="w-full bg-[#112542] container mx-auto p-4 md:p-6">
            <h2 className="text-3xl text-white md:text-4xl lg:text-5xl text-left font-bold">
                Our Flexible Engagement Models
            </h2>
            <p className=" text-white text-xs sm:text-sm md:text-base leading-normal sm:leading-relaxed pt-4 w-full md:w-[90%]">
                Our team is your partner for the next big digital leap. Our customized and
                highly flexible engagement models are designed to meet business objectives.
                All of our service engagements are focused on customer satisfaction, and we
                ensure that clear communication is maintained throughout.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
                {models.map((model, index) => (
                    <div
                        key={index}
                        className="rounded-[18px] h-[250px] sm:h-[300px] md:h-[350px] flex flex-col border border-amber-50 
                        relative overflow-hidden group transition-all duration-500 gap-2.5"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <div className="rounded-[15px] absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.58)_0%,rgba(1,19,46,0)_100%),linear-gradient(91.17deg,rgb(255,255,255)_-93.64%,rgb(120,179,255)_98.85%)] 
                        transition-all duration-1500 h-[90px] sm:h-[100px] md:h-[115px] group-hover:h-full"></div>

                        {/* Content Container */}
                        <div className="relative z-10 flex flex-col h-full">
                            <div
                                className="h-[90px] sm:h-[100px] md:h-[115px] w-full flex items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.58)_0%,rgba(1,19,46,0)_100%),linear-gradient(91.17deg,rgb(255,255,255)_-93.64%,rgb(129,179,255)_98.85%)]"
                            >
                                <h3 className="text-[#151515] text-lg sm:text-xl md:text-2xl font-semibold text-center px-2">
                                    {model.title}
                                </h3>
                            </div>

                            <div className="p-4 transition-all duration-700">
                                <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-[#151515]">
                                    {model.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default EngagementModels;
