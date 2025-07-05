
import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(24,78,119,0.8), rgba(52,160,164,0.6)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')`
        }}
      />
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <h1 className="font-playfair-sc font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-lato leading-relaxed">
          Let's plan your perfect Sri Lankan adventure together
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
