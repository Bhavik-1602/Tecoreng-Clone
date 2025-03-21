import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import { useEffect, useState } from "react"; // Import hooks from React
import laptop from "../assets/Image/laptop.svg"; // Import laptop image for the background
import logo from "../assets/Image/Logo.svg"; // Import company logo
import '../Css/Navbar.css'; // Custom styling for the Navbar

const Navbar = () => {
  // State hooks for managing Navbar behavior
  const [menuOpen, setMenuOpen] = useState(false); // Toggle menu open/close on mobile
  const [lastScrollY, setLastScrollY] = useState(0); // Store the last scroll position
  const [showNavbar, setShowNavbar] = useState(true); // Whether to show or hide the Navbar on scroll
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown menu visibility

  // Toggle the menu when the mobile menu button is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Navigation menu items array with dropdown handling
  const navItems = [
    { name: "Services", link: "/services" },
    {
      name: "About Us",
      link: "/about",
      hasDropdown: true, // Dropdown exists for "About Us"
      dropdownItems: [
        { name: "Who we are", link: "/about/who-we-are" },
        { name: "Industries we serve", link: "/about/industries" }
      ]
    },
    { name: "Career", link: "/careers" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
  ];

  // Effect hook for hiding/showing navbar based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      // If scrolling down, hide the navbar
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
        setShowDropdown(false); // Hide dropdown if navbar is hidden
      } else {
        setShowNavbar(true); // Show navbar if scrolling up
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    // Debounce scroll event for better performance
    let timeoutId;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedHandleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll); // Clean up the event listener
      clearTimeout(timeoutId);
    }
  }, [lastScrollY]); // Re-run effect on scroll position change

  return (
    <div className="bg-[#01132E]" >
      <div
        className="App flex flex-col bg-[#01132E] text-white overflow-x-hidden"
        style={{ minHeight: '100dvh' }}
      >
        {/* Navbar Header with scroll animation */}
        <header 
          className={`top-0 left-0 right-0 z-50 bg-[#01132E] shadow-md transition-all duration-700 ease-in-out transform ${showNavbar
            ? "fixed top-0 opacity-100 translate-y-0"
            : "fixed top-[-100px] opacity-0 translate-y-[-100%]"
            }`}
        >
          <nav className="navbar flex items-center gap-4 justify-between px-4 py-3">
            {/* Logo Section */}
            <div className="logo">
              <img src={logo} alt="Logo" className="h-10" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {/* Toggle between hamburger and close icons */}
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Navigation Links */}
            <ul className="nav-links md:flex gap-8 hidden text-sm">
              {navItems.map((item) => (
                <li key={item.name} className="text-lg relative">
                  {/* Dropdown for "About Us" */}
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <button 
                        className="text-white hover:text-orange-500 no-underline flex items-center gap-1"
                        aria-expanded={showDropdown}
                        aria-haspopup="true"
                      >
                        {item.name}
                        {/* Dropdown Arrow */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        
                      </button>
                      {/* Show dropdown menu on hover */}
                      {showDropdown && (
                        <div className="absolute top-full left-0 mt-2 no-underline w-48 bg-[#011e3d] rounded-lg shadow-lg py-2 z-50" role="menu">
                          {item.dropdownItems?.map((dropItem) => (
                            <a
                              key={dropItem?.name}
                              href={dropItem?.link}
                              className="block px-4 py-2 no-underline text-white hover:bg-[#022b54] hover:text-orange-500 text-sm"
                              role="menuitem"
                            >
                              {dropItem?.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="text-white hover:text-orange-500 no-underline"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Action Buttons (only visible on desktop) */}
            <div className="nav-buttons hidden md:flex gap-4">
              <button className="px-4 py-2 bg-transparent border border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent">
                Hire Developers
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]">
                Get a Quote
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          <ul
            className={`nav-links md:hidden flex flex-col items-center gap-3 px-6 py-4 bg-[#001f3d] shadow-lg ${menuOpen ? "block" : "hidden"
              }`}
            role="menu"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div className="w-full">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="text-white hover:text-orange-500 no-underline flex items-center gap-1 w-full"
                      aria-expanded={showDropdown}
                      aria-haspopup="true"
                    >
                      {item.name}
                      {/* Dropdown Arrow */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {showDropdown && (
                      <div className="mt-2 pl-4 space-y-2" role="menu">
                        {item.dropdownItems.map((dropItem) => (
                          <a
                            key={dropItem.name}
                            href={dropItem.link}
                            className="block text-white hover:text-orange-500 text-sm py-1"
                            role="menuitem"
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="text-white hover:text-orange-500 no-underline"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            {/* Action Buttons (Mobile) - Fixed text size */}
          
            <div className="flex flex-col gap-4 w-full mt-4">
              <button className="w-full px-4 py-2 bg-transparent border-2 border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent text-lg">
                Hire Developers
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33] text-lg">
                Get a Quote
              </button>
            </div>
            
          </ul>
        </header>

        {/* Main Content Area - Using flex layout instead of absolute positioning */}
        <div
          className="container mx-auto px-4 flex flex-col min-h-screen relative z-10 pt-24 md:pt-32"
          style={{
            backgroundImage: `url(${laptop})`, // Set the background image
            backgroundSize: "contain",
            backgroundPosition: "right bottom",
            backgroundRepeat: "no-repeat",
            transform: "scale(1.05)", // Slight zoom effect on background
            transition: "transform 0.3s ease-in-out", // Smooth transform on hover
          }}
        >
          {/* Text content using flex layout instead of absolute positioning */}
          <div className="font-bold w-full z-10 md:w-1/2 pt-4 md:pt-8">
            <div className="w-full   md:text-left md:ml-0 mb-8">
              <h1 className="Web text-4xl font-bold title md:text-8xl leading-tight mb-0 text-white">Web & Mobile App </h1>
             
              <h1 className="Web text-4xl font-bold title md:text-8xl leading-tight mb-0 text-white">Development</h1>
              <h1 className="Web text-4xl font-bold title md:text-8xl leading-tight mb-8 text-white">Company</h1>
              
              <button
                className="flex getstart items-center justify-center px-1 py-2 m-2 text-white font-semibold rounded-lg transition-all duration-300 sm:ml-2 md:ml-0"
                style={{
                  willChange: "transform",
                  transition: "transform 250ms",
                  background:
                    "linear-gradient(94.76deg, rgb(244, 123, 85) 1.49%, rgb(255, 61, 0) 95.34%)", // Gradient background
                  transform: "translateY(-4px)", // Initial transform state
                  height: "58px",
                  fontWeight: "700",
                  fontSize: "29px",
                  lineHeight: "30px",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "translateY(0)")}
                onMouseLeave={(e) => (e.target.style.transform = "translateY(-4px)")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Counter Section */}

      </div >
      <div className="bg-[#112545] relative project z-10 border-2 rounded-3xl md:mt-0 md:pt-0 border-cyan-400 max-w-6xl mx-auto mt-16 px-4">
        <div className="backdrop-blur-sm rounded-3xl p-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Successful Projects */}
            <div className="text-center">
              <div className="text-white text-xl">Successful Projects</div>
              <div className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl font-bold mb-2">100+</div>
            </div>

            {/* Repeated Client */}
            <div className="text-center">
              <div className="text-white text-xl">Repeated Client</div>
              <div className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl font-bold mb-2">80%</div>
            </div>

            {/* Years in Industry */}
            <div className="text-center">
              <div className="text-white text-xl">Years in Industry</div>
              <div className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl font-bold mb-2">9+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;