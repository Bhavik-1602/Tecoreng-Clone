import React from 'react';

function Industries() {
  const industries = [
    { title: "Supply chain & Logistics", image: "/public/g-1.webp", span: "md:col-span-2" },
    { title: "Healthcare", image: "/public/g-2.webp", span: "md:col-span-1" },
    { title: "Education", image: "/public/g-3.webp", span: "md:col-span-1" },
    { title: "Banking", image: "/public/g-4.webp", span: "md:col-span-1" },
    { title: "E-commerce", image: "/public/g-5.webp", span: "md:col-span-1" },
    { title: "Travel", image: "/public/g-6.webp", span: "md:col-span-2" }
  ];
  
  return (
    <section className="w-full bg-[#01132e] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-semibold mb-6 text-left">
          Industries We Are Experts In
        </h2>
        <br />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg h-52 flex items-center justify-center ${industry.span} group`}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                onError={(e) => {
                  console.error(`Failed to load image: ${industry.image}`);
                  e.target.src = "https://via.placeholder.com/400x200?text=Image+Not+Found";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40 transition-opacity">
                <h3 className="text-xl font-medium text-white text-center px-2">
                  {industry.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;