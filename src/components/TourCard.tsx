
import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

interface TourCardProps {
  tour: {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    groupSize: string;
    rating: number;
    reviews: number;
    category: string;
    highlights: string[];
    includes: string[];
  };
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col mb-6 md:mb-0 mx-0">
      <div className="relative overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="font-merriweather font-semibold text-gray-800 mb-3 line-clamp-2 text-lg sm:text-xl md:text-xl leading-tight">{tour.title}</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-small font-lato line-clamp-3 leading-relaxed">{tour.description}</p>
        
        <div className="flex items-center gap-3 sm:gap-4 mb-4 text-sm sm:text-base md:text-small text-gray-500 font-lato">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="whitespace-nowrap">{tour.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="whitespace-nowrap">{tour.groupSize}</span>
          </div>
        </div>

        <div className="mb-4 flex-grow">
          <h4 className="font-josefin font-semibold text-gray-800 mb-2 text-sm sm:text-base">Highlights:</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2">
            {tour.highlights.slice(0, 2).map((highlight, index) => (
              <span key={index} className="bg-coolBlue-50 text-coolBlue-700 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-lato whitespace-nowrap">
                {highlight}
              </span>
            ))}
            {tour.highlights.length > 2 && (
              <span className="text-xs sm:text-sm text-gray-500 font-lato">+{tour.highlights.length - 2} more</span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-right">
            <div className="flex items-center mb-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              <span className="text-sm sm:text-base font-semibold font-poppins">{tour.rating}</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-500 font-lato">{tour.reviews} reviews</span>
          </div>
        </div>

        <div className="mt-auto">
          <button className="relative w-full bg-coolBlue-600 text-white py-3 sm:py-4 md:py-3 rounded-full font-semibold transition-all duration-300 ease-out transform hover:scale-102 hover:bg-coolBlue-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 active:translate-y-0 group/button overflow-hidden font-poppins min-h-[52px] sm:min-h-[56px] md:min-h-[48px] text-base sm:text-lg md:text-base">
            <span className="relative z-10 flex items-center justify-center">
              Book This Tour
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:scale-110" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-coolBlue-500 via-coolBlue-600 to-coolBlue-800 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
