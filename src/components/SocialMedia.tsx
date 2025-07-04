
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const SocialMedia = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
      <p className="text-gray-600 mb-6">
        Stay connected with us on social media for travel inspiration, updates, and special offers.
      </p>
      <div className="flex space-x-4">
        <a 
          href="#" 
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a 
          href="#" 
          className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-300"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a 
          href="#" 
          className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors duration-300"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a 
          href="#" 
          className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-300"
        >
          <Youtube className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
