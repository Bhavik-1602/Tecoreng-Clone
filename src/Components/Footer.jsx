import logo from '../assets/Image/Logo.svg';
import callus from '../assets/Image/call.webp'; // For Phone icon
import location from '../assets/Image/location.svg'; // For Location icon
import mail from '../assets/Image/mail.svg'; // For Email icon

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#0b1b33", color: "#fff"  }}>
            <div className="container" style={{ backgroundColor: "#0b1b33", fontSize: '1.1rem' }}>
                <div className="row justify-content-between">
                    {/* Features Menu Section */}
                    <div className="col-lg-3 col-md-6 mb-4" style={{ backgroundColor: "#0b1b33", fontSize: '1.1rem' }}>
                        <h5 className="mb-4" style={{ borderBottom: "2px dotted #fff", paddingBottom: "0.5rem", fontSize: '1.5rem' }}>
                            Features Menu
                        </h5>
                        <ul className="list-unstyled">
                            {/* List of navigation links under Features Menu */}
                            <li className="my-2">
                                <a href="/blog" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                                    Blog
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="/services" style={{ color: "#fff", textDecoration: "none" }}>
                                    Services 
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="/hire-developer" style={{ color: "#fff", textDecoration: "none" }}>
                                    Hire Developer
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="/career" style={{ color: "#fff", textDecoration: "none" }}>
                                    Career
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="/who-we-are" style={{ color: "#fff", textDecoration: "none" }}>
                                    Who We Are
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Menu Section */}
                    <div className="col-lg-5 col-md-6 mb-4" style={{ backgroundColor: "#0b1b33" }}>
                        <h5 className="mb-4" style={{ borderBottom: "1px dotted #fff", paddingBottom: "0.5rem", fontSize: '1.5rem' }}>
                            Services Menu
                        </h5>
                        <div className="row">
                            {/* List of service links split into two columns */}
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li className="my-2">
                                        <a href="/web-development-company" style={{ color: "#fff", textDecoration: "none" }}>
                                            Web Development
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="/mobile-app-development-company" style={{ color: "#fff", textDecoration: "none" }}>
                                            Mobile App Development
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="/game-development" style={{ color: "#fff", textDecoration: "none" }}>
                                            Game Development
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="/ui-ux-design-company" style={{ color: "#fff", textDecoration: "none" }}>
                                            UI/UX Design
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="/graphics-design" style={{ color: "#fff", textDecoration: "none" }}>
                                            Graphics Design
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li className="my-2">
                                        <a href="/devops" style={{ color: "#fff", textDecoration: "none" }}>
                                            DevOps
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="/e-commerce" style={{ color: "#fff", textDecoration: "none" }}>
                                            E-Commerce
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="/digital-marketing" style={{ color: "#fff", textDecoration: "none" }}>
                                            Digital Marketing
                                        </a>
                                    </li>
                                    <li className="my-2">
                                        <a href="/cloud-computing" style={{ color: "#fff", textDecoration: "none" }}>
                                            Cloud Computing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="col-lg-4 col-md-12" style={{ backgroundColor: "#0b1b33" }}>
                        <h5 className="mb-4" style={{ borderBottom: "2px dotted #fff", paddingBottom: "0.5rem", fontSize: '1.5rem' }}>
                            Contact Information
                        </h5>
                        <ul className="list-unstyled">
                            {/* Address 1 */}
                            <li className="mb-3 d-flex align-items-start">
                                <img src={location} alt="Location" style={{ width: '30px', marginRight: '10px' }} />
                                <p style={{ margin: 0 }}>
                                    <strong>Address 1:</strong>
                                    <br />
                                    Skywalk The Element Godrej Garden, City Rd, Ahmedabad, Gujarat, India.
                                </p>
                            </li>

                            {/* Address 2 */}
                            <li className="mb-3 d-flex align-items-start">
                                <img src={location} alt="Location" style={{ width: '30px', marginRight: '10px' }} />
                                <p style={{ margin: 0 }}>
                                    <strong>Address 2:</strong>
                                    <br />
                                    1148 S Railroad Ave, Bronxville, New York, USA.
                                </p>
                            </li>

                            {/* Email */}
                            <li className="mb-3 d-flex align-items-start">
                                <img src={mail} alt="Email" style={{ width: '30px', marginRight: '10px' }} />
                                <p style={{ margin: 0 }}>
                                    <strong>Email:</strong>{" "}
                                    <a href="mailto:sales@tecoreng.com" style={{ color: "#fff", textDecoration: "none" }}>
                                        sales@tecoreng.com
                                    </a>
                                </p>
                            </li>

                            {/* Phone Numbers */}
                            <li className="d-flex align-items-start">
                                <img src={callus} alt="Phone" style={{ width: '30px', marginRight: '10px' }} />
                                <p style={{ margin: 0 }}>
                                    <strong>Phone:</strong>
                                    <br />
                                    HR -{" "}
                                    <a href="tel:+916352725452" style={{ color: "#fff", textDecoration: "none" }}>
                                        +91 63527 25452
                                    </a>
                                    <br />
                                    Sales -{" "}
                                    <a href="tel:+918511746476" style={{ color: "#fff", textDecoration: "none" }}>
                                        +91 85117 46476
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5" style={{ borderTop: "1px solid #fff", paddingTop: "1rem", backgroundColor: "#0b1b33" }}>
                    {/* Logo Section */}
                    <div className="d-flex align-items-center mb-3 mb-md-0">
                        <a href="/" aria-label="home">
                            <img src={logo} alt="Tecoreng" style={{ width: "100px" }} />
                        </a>
                    </div>
                    {/* Copyright Text */}
                    <p className="mb-3 mb-md-0 text-center text-md-right" style={{ fontSize: "0.9rem", flex: 1 }}>
                        © 2025 Tecoreng. All rights reserved.
                    </p>
                    {/* Social Media and Contact Icons */}
                    <div className="d-flex flex-wrap justify-content-center">
                        {/* Email Icon */}
                        <a href="mailto:support@tecoreng.com" style={{ margin: "0 10px" }}>
                            <img
                                src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/envelope.svg"
                                alt="Email"
                                style={{ width: "24px", filter: "invert(1)" }}
                            />
                        </a>
                        {/* Location Icon */}
                        <a href="https://goo.gl/maps/xyz" target="_blank" rel="noreferrer" style={{ margin: "0 10px" }}>
                            <img
                                src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/geo-alt.svg"
                                alt="Location"
                                style={{ width: "24px", filter: "invert(1)" }}
                            />
                        </a>
                        {/* Twitter Icon */}
                        <a href="https://twitter.com/tecoreng" target="_blank" rel="noreferrer" style={{ margin: "0 10px" }}>
                            <img
                                src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/twitter.svg"
                                alt="Twitter"
                                style={{ width: "24px", filter: "invert(1)" }}
                            />
                        </a>
                        {/* LinkedIn Icon */}
                        <a href="https://linkedin.com/company/tecoreng" target="_blank" rel="noreferrer" style={{ margin: "0 10px" }}>
                            <img
                                src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/linkedin.svg"
                                alt="LinkedIn"
                                style={{ width: "24px", filter: "invert(1)" }}
                            />
                        </a>
                        {/* Facebook Icon */}
                        <a href="https://facebook.com/Tecoreng" target="_blank" rel="noreferrer" style={{ margin: "0 10px" }}>
                            <img
                                src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/facebook.svg"
                                alt="Facebook"
                                style={{ width: "24px", filter: "invert(1)" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;