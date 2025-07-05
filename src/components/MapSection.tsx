
import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">Visit Our Office</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Colombo, easily accessible by public transport
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500 p-4">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-xl font-semibold">Interactive Map</p>
              <p className="text-base">123 Galle Road, Colombo 03, Sri Lanka</p>
              <p className="text-sm mt-4">
                * In a real implementation, this would be an embedded Google Maps or similar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
