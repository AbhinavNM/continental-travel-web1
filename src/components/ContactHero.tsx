
import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative h-[70vh] sm:h-[75vh] md:h-[500px] flex flex-col items-center justify-center overflow-hidden pt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(24,78,119,0.8), rgba(52,160,164,0.6)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')`
        }}
      />
      <div className="relative z-10 text-center text-white px-4 pt-16 sm:pt-20 md:pt-32 flex-1 flex flex-col justify-center">
        <h1 className="font-playfair-sc font-bold mb-4 text-2xl sm:text-3xl md:text-5xl">Contact Us</h1>
        <p className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto font-lato leading-relaxed">
          Let's plan your perfect Sri Lankan adventure together
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
