
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SocialMedia from '../components/SocialMedia';
import QuickContact from '../components/QuickContact';
import MapSection from '../components/MapSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <ContactHero />

      {/* Contact Section - Enhanced mobile spacing */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <ContactInfo />
              <SocialMedia />
              <QuickContact />
            </div>
          </div>
        </div>
      </section>

      <MapSection />

      {/* Footer with enhanced mobile spacing */}
      <div className="mt-12 sm:mt-16 md:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
