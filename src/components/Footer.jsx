import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
     
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <FaMapMarkerAlt /> Location
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <FaPhone /> Call +01 1234567890
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> demo@gmail.com
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Feane</h2>
          <p className="text-gray-400 mb-4">
            Necessary, making this the first true generator on the Internet. 
            It uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-500"><FaPinterestP /></a>
          </div>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-4">Opening Hours</h2>
          <p className="mb-2">Everyday</p>
          <p>10.00 Am - 10.00 Pm</p>
        </div>
      </div>

    
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4 text-sm">
        © 2025 All Rights Reserved By Free Html Templates <br />
        Distributed By ThemeWagon
      </div>
    </footer>
  );
};

export default Footer;
