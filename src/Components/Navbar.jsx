import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import '../Css/Navbar.css';
import laptop from "../assets/Image/laptop.svg";
import logo from "../assets/Image/Logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Services", link: "/services" },
    {
      name: "About Us",
      link: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Who we are", link: "/about/who-we-are" },
        { name: "Industries we serve", link: "/about/industries" }
      ]
    },
    { name: "Career", link: "/careers" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
        setShowDropdown(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#01132E] text-white">
        <header
          className={`top-0 left-0 right-0 z-50 bg-[#01132E] shadow-md transition-all duration-700 ease-in-out transform ${showNavbar
            ? "fixed top-0 opacity-100 translate-y-0"
            : "fixed top-[-100px] opacity-0 translate-y-[-100%]"
            }`}
        >
          <nav className="flex items-center justify-between px-4 py-3">
            <div className="logo">
              <img src={logo} alt="Logo" className="h-8" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
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

            {/* Desktop Navigation */}
            <ul className="nav-links md:flex gap-6 hidden text-sm">
              {navItems.map((item) => (
                <li key={item.name} className="text-base relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <button className="text-white hover:text-orange-500 no-underline flex items-center gap-1">
                        {item.name}
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
                        <div className="absolute top-full left-0 mt-1 w-44 bg-[#011e3d] rounded-lg shadow-lg py-1 z-50">
                          {item.dropdownItems.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.link}
                              className="block px-3 py-1.5 text-white hover:bg-[#022b54] hover:text-orange-500 text-sm"
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
            </ul>

            {/* Action Buttons */}
            <div className="nav-buttons hidden md:flex gap-3">
              <button className="px-3 py-1.5 bg-transparent border border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent">
                Hire Developers
              </button>
              <button className="px-3 py-1.5 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]">
                Get a Quote
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden bg-[#001f3d] shadow-lg ${menuOpen ? "block" : "hidden"
              }`}
          >
            <ul className="flex flex-col items-center py-2">
              {navItems.map((item) => (
                <li key={item.name} className="w-full px-4">
                  {item.hasDropdown ? (
                    <div className="w-full">
                      <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="text-white hover:text-orange-500 no-underline flex items-center gap-1 w-full py-2"
                      >
                        {item.name}
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
                        <div className="pl-4">
                          {item.dropdownItems.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.link}
                              className="block text-white hover:text-orange-500 text-sm py-2"
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
                      className="block text-white hover:text-orange-500 no-underline py-2"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
              <li className="w-full px-4 space-y-2 pt-2 " style={{borderRadius:"15px"}}>
                <button className="w-full px-3 py-1.5 bg-transparent border border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent" style={{borderRadius:"15px"}}>
                  Hire Developers
                </button>
                <button className="w-full px-3 py-1.5 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]" style={{borderRadius:"15px"}}>
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative min-h-screen">
          {/* Background laptop image */}
          <div
            className="absolute bgimage inset-0 bg-no-repeat bg-contain bg-right-bottom opacity-80 md:opacity-100 "
            style={{
              backgroundImage: `url(${laptop})`,
              transform: "scale(1)",
              transition: "transform 0.3s ease-in-out",
              right:"200px"
            }}
          />

          {/* Hero content */}
          <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-28">
            <div className=" w-full top-[250px] left-[100px] absolute">
              <h1 className=" bgfont text-6xl md:text-8xl font-extrabold leading-tight mt-2 mb-4 md:mb-6 text-white" 
              style={{fontSize:"60px"}}>
                Web & Mobile App
                <br />
                Development
                <br />
                Company
              </h1>

              <button
                className=" bgbutton flex items-center justify-center px-6 py-3 mt-6 md:mt-16 text-white font-bold rounded-lg transition-all duration-300 w-48"
                style={{
                  background: "linear-gradient(94.76deg, rgb(244, 123, 85) 1.49%, rgb(255, 61, 0) 95.34%)",
                  transform: "translateY(-4px)",
                  fontSize: "18px",
                  lineHeight: "24px",
                  textTransform: "uppercase",
                  marginTop:"150px",
                  borderRadius:"15px"
                }}
                onMouseEnter={(e) => (e.target.style.transform = "translateY(0)")}
                onMouseLeave={(e) => (e.target.style.transform = "translateY(-4px)")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* Stats Section */}
        <div className="relative z-8 border border-cyan-400 rounded-3xl w-[95%] md:w-[80%] mx-auto mt-8 md:mt-1 mb-3">
          <div className="backdrop-blur-sm rounded-3xl p-2 md:p-3">
            <div className="grid grid-cols-3 gap-1 md:gap-6">
              <div className="text-center">
                <div className="text-white text-[10px] sm:text-[12px] md:text-lg whitespace-nowrap">
                  Successful Projects
                </div>
                <div className="text-cyan-400 text-[16px] sm:text-xl md:text-6xl font-bold">
                  100+
                </div>
              </div>
              <div className="text-center">
                <div className="text-white text-[10px] sm:text-[12px] md:text-lg whitespace-nowrap">
                  Repeated Client
                </div>
                <div className="text-cyan-400 text-[16px] sm:text-xl md:text-6xl font-bold">
                  80%
                </div>
              </div>
              <div className="text-center">
                <div className="text-white text-[10px] sm:text-[12px] md:text-lg whitespace-nowrap">
                  Years in Industry
                </div>
                <div className="text-cyan-400 text-[16px] sm:text-xl md:text-6xl font-bold">
                  9+
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;