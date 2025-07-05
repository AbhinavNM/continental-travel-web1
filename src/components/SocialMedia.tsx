
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const SocialMedia = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Follow Us</h3>
      <p className="text-gray-600 text-base mb-8">
        Stay connected with us on social media for travel inspiration, updates, and special offers.
      </p>
      <div className="flex space-x-4 sm:space-x-5">
        <a 
          href="#" 
          className="bg-coolBlue-100 text-coolBlue-600 p-3 sm:p-4 rounded-full hover:bg-coolBlue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a 
          href="#" 
          className="bg-coolBlue-100 text-coolBlue-600 p-3 sm:p-4 rounded-full hover:bg-coolBlue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a 
          href="#" 
          className="bg-coolBlue-100 text-coolBlue-600 p-3 sm:p-4 rounded-full hover:bg-coolBlue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a 
          href="#" 
          className="bg-coolBlue-100 text-coolBlue-600 p-3 sm:p-4 rounded-full hover:bg-coolBlue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <Youtube className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
