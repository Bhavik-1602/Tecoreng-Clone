import { Phone, Upload } from 'lucide-react'; // Import icons
import { useState } from 'react'; // Import React hooks
import ReCAPTCHA from 'react-google-recaptcha'; // Import Google reCAPTCHA
import Select from 'react-select'; // Import react-select for custom dropdown
import b from '../assets/behanceFollow.8020f39c.svg';
import dribble from '../assets/dribbleFollow.57dc1fb5.svg';
import fecbook from '../assets/FbFollow.8f432841.svg';
import linkdin from '../assets/LinkedinFollow.213bb388.svg';
import medium from '../assets/mediumFollow.e83b68d2.svg';
import p from '../assets/phone.fd7b91e0.svg';
import twiter from '../assets/TwitterFollow.99d320e4.svg';
import India from '../assets/India.svg'; // Import the India flag image

// Country options for the select dropdown
const countryOptions = [
  { value: 'IN', label: '🇮🇳 +91', flag: India }, // India
  { value: 'US', label: '🇺🇸 +1', flag: '' }, // USA (no flag image)
  // More countries can be added here
];

// Custom styling for the react-select dropdown
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
    borderRadius: '8px',
    padding: '5px',
    fontSize: '16px',
    color: 'black', // Ensure text is black
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    marginTop: '5px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'black', // Selected value text color
  }),
};

const ContactForm = () => {
  // Form state to store user input data
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Added email to form state
    contactNumber: '',
    idea: '',
    file: null,
    captcha: '',
  });

  // State for CAPTCHA validation status
  const [captchaValid, setCaptchaValid] = useState(false);

  // State to store selected country phone code
  const [selectedPhoneCode, setSelectedPhoneCode] = useState('IN');

  // Handle form input changes (e.g., name, email, file upload, etc.)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file input as well
    });
  };

  // Handle CAPTCHA value change (validates CAPTCHA completion)
  const handleCaptchaChange = (value) => {
    setCaptchaValid(value ? true : false);
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert('Please complete the CAPTCHA.');
      return; // Stop form submission if CAPTCHA is not completed
    }
    // Form submission logic goes here (e.g., sending data to the server)
  };

  // Handle phone code selection from the dropdown
  const handlePhoneCodeSelect = (selectedOption) => {
    setSelectedPhoneCode(selectedOption.value); // Update selected phone code
  };

  return (
    <section className="bg-[#01132E]  py-3 sm:py-16 text-white" >
      <div className="container mx-auto flex flex-col lg:flex-row p-4 items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col items-start space-y-6">
          <h3 className="text-4xl font-bold mb-12">We Are Here To Help You</h3>
          <p className="text-3xl font-bold leading-relaxed mb-14">
            Let’s Transform Your <br /> Vision Into Value.
          </p>
          <br />

          {/* Contact Info */}
          <p className="text-lg font-medium mb-4">Contact us:</p>
          <ul className="mb-12">
            <li className="text-md mb-6 flex items-center space-x-4">
              <img src={b} alt="Skype Icon" className="w-5 h-5" />
              <span>biz.tecoreng</span>
            </li>
            <li className="text-md mb-6 flex items-center space-x-4">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 85117 46476</span>
            </li>
          </ul>
           <br />
           <br />

          {/* Social Media Links */}
          <p className="text-3xl font-extrabold mb-4">Our Socials:</p>
          <p className="text-md font-semibold mt-4 mb-8">
            Don’t Miss To Follow Us On Our Social Networks Accounts.
          </p>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twiter} alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fecbook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkdin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src={p} alt="Pinterest" className="w-8 h-8" />
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
              <img src={medium} alt="Medium" className="w-8 h-8" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <img src={dribble} alt="Dribble" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-gray-100 p-6 rounded-3xl shadow-lg relative -mt-2 -ml-2">
          <h3 className="text-5xl font-semibold mb-4">
            <span className="text-black">Get in </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
              Touch
            </span>
          </h3>
          <p className="text-lg mb-6 text-black">
            We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, or send an email.
          </p>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 text-black bg-white placeholder-gray-500"
                placeholder="  Full Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 text-black bg-white placeholder-gray-500"
                placeholder="  Email Address"
                required
              />
            </div>

            {/* Phone Number with Country Code */}
            <div className="mb-6 flex space-x-2">
              <Select
                options={countryOptions}
                onChange={handlePhoneCodeSelect}  // Updates selected phone code
                getOptionLabel={(e) => (
                  <div className="flex items-center space-x-2">
                    <img src={e.flag} alt={`${e.label} Flag`} className="w-6 h-4" />
                  </div>
                )}
                styles={customStyles} // Custom styling
                value={countryOptions.find((option) => option.value === selectedPhoneCode)} // Highlight selected option
              />
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-2/3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 text-black bg-white placeholder-gray-500"
                placeholder="  Contact number"
                required
              />
            </div>

            {/* Idea/Message Textarea */}
            <div className="mb-6">
              <textarea
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                className="w-full py-2 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 text-black bg-white placeholder-gray-500"
                placeholder="  Let's Talk About Your Idea"
                required
              />
            </div>

            {/* File Upload Input */}
            <div className="mb-6 relative">
              <label
                htmlFor="file-upload"
                className="w-full py-5 border-2 border-dotted border-gray-300 text-gray-600 text-center cursor-pointer flex items-center justify-center"
              >
                <Upload className="w-6 h-6 text-gray-600" />
                <span className="ml-2">Upload Additional File</span>
                <input
                  id="file-upload"
                  type="file"
                  name="file"
                  onChange={handleChange} // Handle file selection
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            </div>

            {/* CAPTCHA */}
            <div className="mb-6">
              <ReCAPTCHA
                sitekey="6Lc40MgqAAAAAAQ8EWVXtKoPhfVYXAM39zEJaT5u" // Added your site key
                onChange={handleCaptchaChange}
                className="mt-4" // Optional margin
              />
            </div>

            {/* Submit Button */}
            {/* <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300"
            >
              Submit
            </button> */}
            <button  style={{ borderRadius:"15px"}} className="sm:w-150 w-30 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm sm:text-3xl py-1 px-0.5 sm:py-3 sm:px-2 border-b-4 border-[#701d04] font-bold rounded-[8px] md:rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4">
                Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;