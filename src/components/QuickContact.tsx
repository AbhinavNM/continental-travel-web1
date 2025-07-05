
import React from 'react';

const QuickContact = () => {
  return (
    <div className="bg-coolBlue-600 text-white rounded-lg p-6 sm:p-8 md:p-10">
      <h3 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h3>
      <p className="mb-8 text-base">
        Our travel experts are available to help you plan your perfect Sri Lankan adventure.
      </p>
      <div className="space-y-4">
        <a 
          href="tel:+94112345678"
          className="block bg-white/20 backdrop-blur-sm text-white px-6 py-3.5 rounded-lg font-semibold text-center hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
        >
          Call Us Now
        </a>
        <a 
          href="https://wa.me/94771234567"
          className="block bg-white/20 backdrop-blur-sm text-white px-6 py-3.5 rounded-lg font-semibold text-center hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
        >
          WhatsApp Chat
        </a>
      </div>
    </div>
  );
};

export default QuickContact;
