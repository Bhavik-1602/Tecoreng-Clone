import Ball from "../assets/Image/ball.webp";
import imageforhero from "../assets/Image/infinity.png";


const Innovation = () => {
  return (
    <div className="bg-[#0B1B33] text-white px-4 sm:px-6 md:px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Transform your enterprise with digital innovation
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Your success as a market innovator reflects our strides as a unified partner. 
            Committed to assisting you in attaining excellence through our solutions, 
            we boast a team of adept professionals and dynamic facilitators. Our steadfast 
            commitment to a collaborative strategy, coupled with agile methodologies, propels 
            business expansion.
          </p>

          {/* Hire Now Button */}
          <button
            className="px-6 py-3 text-white font-semibold rounded-lg transition-transform duration-300 bg-gradient-to-r from-orange-500 to-red-600 hover:translate-y-1 text-lg md:text-xl uppercase"
          >
            HIRE NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              src={imageforhero}
              alt="Digital Innovation"
              className="w-full h-auto object-contain"
            />
            <img
              src={Ball}
              alt="Floating Ball"
              className=" left-0 w-5 h-5 sm:w-5 sm:h-2 floating-ball animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
