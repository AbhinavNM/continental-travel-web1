
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
      <section className="py-12 sm:py-16 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 md:space-y-8">
              <ContactInfo />
              <SocialMedia />
              <QuickContact />
            </div>
          </div>
        </div>
      </section>

      <MapSection />

      {/* Footer with enhanced mobile spacing */}
      <div className="mt-8 sm:mt-6 md:mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
