import { useRef, useState, useEffect } from 'react';
import video from '../assets/Image/Tecoreng_fullVideo.mp4'; // Update the path to match your video location

const VideoPlayer = () => {
    const [showControls, setShowControls] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true); // Start with video playing (autoPlay)
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const videoRef = useRef(null);
    
    // Effect to handle initial loading state
    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            if (videoElement.readyState >= 3) {
                setIsLoading(false);
            }
        }
    }, []);
    
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
            setShowControls(true); // Show controls when button is clicked
            videoRef.current.controls = true;
        }
    };
    
    return (
        <div className="relative w-full h-full min-h-[200px] sm:min-h-[280px] md:min-h-[400px] lg:min-h-[600px] bg-gradient-to-b from-[#23385E] to-[#01132E] p-[10%]">
            {/* Video Container */}
            <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop // Ensures video always loops
                    muted
                    playsInline
                    controls={showControls} // Controls only show when 'showControls' is true
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onLoadedData={() => setIsLoading(false)}
                    onWaiting={() => setIsLoading(true)}
                    onPlaying={() => setIsLoading(false)}
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Play/Pause Button (Always Visible) */}
                <div className="absolute right-4 bottom-8">
                    <button
                        onClick={togglePlayPause}
                        className="w-14 h-14 bg-[#01132E]/80 hover:bg-[#01132E] rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-cyan-500/30"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        {/* Dynamic Play/Pause Icon */}
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isPlaying ? (
                                // Pause Icon
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M10 4H6v16h4V4zm8 0h-4v16h4V4z"
                                />
                            ) : (
                                // Play Icon
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M5 3l14 9-14 9V3z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                
                {/* Loading State */}
                <div 
                    className="absolute inset-0 flex items-center justify-center bg-[#01132E]/50 backdrop-blur-sm transition-opacity duration-300"
                    style={{ 
                        opacity: isLoading ? 1 : 0, 
                        pointerEvents: isLoading ? 'auto' : 'none' 
                    }}
                >
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;