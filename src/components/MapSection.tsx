
import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
          <p className="text-xl text-gray-600">
            Located in the heart of Colombo, easily accessible by public transport
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm">123 Galle Road, Colombo 03, Sri Lanka</p>
              <p className="text-xs mt-2">
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
