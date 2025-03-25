import Ball from '../assets/Image/ball.webp';
import imageforhero from '../assets/Image/infinite.c057ea68.webp';
import '../Css/Innovation.css';

const Innovation = () => {
  return (
    <div className="bg-[#0B1B33] text-white p-3 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 heroData space-y-6 pl-4">
          <h1 className="Transfer text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Transfer your enterprise with digital innovation
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Your success as a market innovator reflects our strides as a unified
            partner. Committed to assisting you in attaining excellence through
            our solutions, we boast a team of adept professionals and dynamic
            facilitators. Our steadfast commitment to a collaborative strategy,
            coupled with agile methodologies, propels business expansion. Rely
            on our strategic insights and development processes, and we will
            fuel your concepts to manifest as groundbreaking disruptions.
          </p>
          
          <button 
             className="flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300"
            style={{
              willChange: 'transform',
              transition: 'transform 250ms',
              background: 'linear-gradient(94.76deg, rgb(244, 123, 85) 1.49%, rgb(255, 61, 0) 95.34%)',
              transform: 'translateY(-4px)',
              height: '58px',
              fontWeight: '700',
              fontSize: '29px',
              lineHeight: '30px',
              textTransform: 'uppercase',
              borderRadius:'15px'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(0)'} // Smooth on hover
            onMouseLeave={(e) => e.target.style.transform = 'translateY(-4px)'} // Reset on leave
          >
            HIRE NOW
          </button>
        </div>
        
        {/* Right Image */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <img
              src={imageforhero}
              alt="Digital Innovation"
              className="w-full h-full object-contain"
            />
            <img
              src={Ball}
              alt="Floating Ball"
              className="absolute w-8 h-8 sm:w-15 sm:h-11 floating-ball"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;