import React, { useState } from 'react';
import w0 from '../assets/Image/w-0.webp';
import w1 from '../assets/Image/w-1.svg';
import w2 from '../assets/Image/w-2.svg';
import w3 from '../assets/Image/w-3.svg';
import w4 from '../assets/Image/w-4.svg';
import m0 from '../assets/Image/m-0.webp';
import m1 from '../assets/Image/m-1.svg';
import m2 from '../assets/Image/m-2.svg';
import m3 from '../assets/Image/m-3.svg';
import m4 from '../assets/Image/m-4.svg';
import g0 from '../assets/Image/g-0.webp';
import g1 from '../assets/Image/g-1.svg';
import g2 from '../assets/Image/g-2.svg';
import g3 from '../assets/Image/g-3.svg';
import g4 from '../assets/Image/g-4.svg';
import u0 from '../assets/Image/u-0.webp';
import u1 from '../assets/Image/u-1.svg';
import u2 from '../assets/Image/u-2.svg';
import u3 from '../assets/Image/u-3.svg';
import u4 from '../assets/Image/u-4.svg';
import q0 from '../assets/Image/q-0.webp';
import q1 from '../assets/Image/q-1.svg';
import q2 from '../assets/Image/q-2.webp';
import q3 from '../assets/Image/q-3.svg';
import q4 from '../assets/Image/q-4.webp';
import d0 from '../assets/Image/d-0.webp';
import d1 from '../assets/Image/d-1.svg';
import d2 from '../assets/Image/d-2.svg';
import d3 from '../assets/Image/d-3.svg';
import d4 from '../assets/Image/d-4.svg';

const services = [
  {
    icon: w0,
    hoverIcon: w1,
    title: "Web Development",
    description: "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
    technologies: [
      { name: "React JS", icon: w1 },
      { name: "Angular", icon: w2 },
      { name: "Laravel", icon: w3 },
      { name: "Node JS", icon: w4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: m0,
    hoverIcon: m1,
    title: "Mobile App Development",
    description: "Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
    technologies: [
      { name: "React Native", icon: m1 },
      { name: "Flutter", icon: m2 },
      { name: "Swift", icon: m3 },
      { name: "Kotlin", icon: m4 }
    ],
    href: "/mobile-app-development"
  },
  {
    icon: g0,
    title: "Graphics Design",
    hoverIcon: g1,
    description: "Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
    technologies: [
      { name: "React JS", icon: g1 },
      { name: "Angular", icon: g2 },
      { name: "Laravel", icon: g3 },
      { name: "Node JS", icon: g4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: u0,
    title: "UI/UX Design",
    hoverIcon: u1,
    description: "We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.",
    technologies: [
      { name: "React JS", icon: u1 },
      { name: "Angular", icon: u2 },
      { name: "Laravel", icon: u3 },
      { name: "Node JS", icon: u4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: q0,
    title: "Quality Assurance (QA)",
    hoverIcon: q1,
    description: "Explore our user-friendly and seamless website and app development services, designed for easy management.",
    technologies: [
      { name: "React JS", icon: q1 },
      { name: "Angular", icon: q2 },
      { name: "Laravel", icon: q3 },
      { name: "Node JS", icon: q4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: d0,
    title: "Digital Marketing",
    hoverIcon: d1,
    description: "Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.",
    technologies: [
      { name: "React JS", icon: d1 },
      { name: "Angular", icon: d2 },
      { name: "Laravel", icon: d3 },
      { name: "Node JS", icon: d4 }
    ],
    href: "/web-development-company"
  }
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`flex flex-col md:flex-row items-center px-3 py-5 md:p-8 cursor-pointer rounded-[25px] relative border border-white/25 transition-all duration-500
      ${isHovered ? 'bg-gradient-to-br from-[#26426B] to-[#030b1b] border-white md:p-16 p-4' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={service.href} aria-label={service.title} className="flex-1 flex flex-col md:flex-row items-start md:items-center w-full">
        <div className="h-12 w-12 mr-5 md:w-14 md:h-14 flex-shrink-0 mb-3 md:mb-0">
          <img 
            src={isHovered ? service.hoverIcon : service.icon} 
            alt={service.title} 
            className="w-full h-full object-contain transition-all duration-500" 
          />
        </div>
        <div className="md:ml-14 w-full">
          <h3 className="text-[18px] md:font-medium text-white">{service.title}</h3>
          <p className={`text-[14px] md:text-[16px] max-w-md transition-opacity text-white duration-500 ${isHovered ? 'opacity-100 mt-2' : 'opacity-0 h-0 overflow-hidden'}`}>
            {service.description}
          </p>
        </div>
      </a>

      <div className={`flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-4 md:mt-0 transition-all duration-500 w-full md:w-auto ${isHovered ? 'opacity-100 flex' : 'opacity-0 hidden'}`}>
        {service.technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center px-2 md:px-4 text-xs md:text-base text-center">
            <div className="w-8 h-8 md:w-12 md:h-12">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="mt-1 md:mt-2">{tech.name}</div>
          </div>
        ))}
      </div>
    </li>
  );
};

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center px-3 py-5 md:px-30 md:py-16 bg-[#01132e] text-white">
      <div className="container">
        <h2 className="pb-5 md:p-0 text-2xl md:text-5xl leading-tight md:leading-[84px] text-shadow-custom">
          Services We Offer
        </h2>
        <p className="text-[12px] md:text-[16px] text-left">
          We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated developers fulfills your diverse business requirements through a number of services.
        </p>
        <div className="mt-10 md:mt-20 w-full">
          <ul className="p-0 list-none flex flex-col gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;