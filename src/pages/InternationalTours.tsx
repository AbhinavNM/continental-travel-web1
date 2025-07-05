import React, { useState } from 'react';
import { Plane, Globe, Calendar, Users, Star, ArrowRight, Filter, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const InternationalTours = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'asia', name: 'Asia' },
    { id: 'europe', name: 'Europe' },
    { id: 'africa', name: 'Africa' },
    { id: 'oceania', name: 'Oceania' }
  ];

  const internationalTours = [
    {
      id: 1,
      title: "Dubai & UAE Explorer",
      description: "Experience the glamour of Dubai with city tours, desert safari, and luxury shopping experiences.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      destination: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      groupSize: "2-20 People",
      rating: 4.8,
      reviews: 187,
      category: 'asia',
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Gold Souk", "Luxury Hotels"],
      includes: ["Return Flights", "4-Star Hotel", "City Tours", "Desert Safari", "Visa Assistance"]
    },
    {
      id: 2,
      title: "Thailand Adventure",
      description: "Discover the beauty of Thailand from bustling Bangkok to pristine beaches of Phuket.",
      image: "/lovable-uploads/fed2536e-3833-4910-b3e2-62118ac39f5a.png",
      destination: "Bangkok & Phuket",
      duration: "7 Days / 6 Nights",
      groupSize: "2-16 People",
      rating: 4.9,
      reviews: 234,
      category: 'asia',
      highlights: ["Grand Palace", "Floating Markets", "Island Hopping", "Thai Massage", "Street Food Tours"],
      includes: ["Return Flights", "Hotels", "Local Tours", "Some Meals", "Airport Transfers"]
    },
    {
      id: 3,
      title: "Maldives Paradise",
      description: "Ultimate luxury beach vacation with overwater villas and pristine coral reefs.",
      image: "/lovable-uploads/9e7d7bf8-423d-4b78-9a6f-08bda70b8887.png",
      destination: "Maldives",
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 People",
      rating: 4.9,
      reviews: 156,
      category: 'asia',
      highlights: ["Overwater Villas", "Snorkeling", "Spa Treatments", "Sunset Cruises", "Private Beaches"],
      includes: ["Seaplane Transfers", "Resort Stay", "All Meals", "Water Sports", "Spa Credit"]
    },
    {
      id: 4,
      title: "European Grand Tour",
      description: "Explore Europe's most iconic cities: Paris, Rome, Amsterdam, and London in one amazing journey.",
      image: "https://images.unsplash.com/photo-1471623432079-b009d30b6729",
      destination: "Europe Multi-City",
      duration: "12 Days / 11 Nights",
      groupSize: "10-25 People",
      rating: 4.7,
      reviews: 98,
      category: 'europe',
      highlights: ["Eiffel Tower", "Colosseum", "Anne Frank House", "Big Ben", "High-Speed Trains"],
      includes: ["Flights", "3-Star Hotels", "Rail Passes", "City Tours", "Some Meals"]
    },
    {
      id: 5,
      title: "Kenya Safari Adventure",
      description: "Witness the Great Migration and explore Kenya's incredible wildlife parks and reserves.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      destination: "Kenya",
      duration: "8 Days / 7 Nights",
      groupSize: "2-12 People",
      rating: 4.8,
      reviews: 143,
      category: 'africa',
      highlights: ["Masai Mara", "Great Migration", "Big Five", "Masai Village", "Safari Lodges"],
      includes: ["Flights", "Safari Lodges", "Game Drives", "All Meals", "Professional Guide"]
    },
    {
      id: 6,
      title: "Australia Discovery",
      description: "Explore Sydney's iconic landmarks and the natural beauty of the Great Barrier Reef.",
      image: "/lovable-uploads/f37c3d90-d024-47cc-867c-f3cf5ea913ed.png",
      destination: "Sydney & Cairns",
      duration: "10 Days / 9 Nights",
      groupSize: "2-18 People",
      rating: 4.6,
      reviews: 112,
      category: 'oceania',
      highlights: ["Sydney Opera House", "Great Barrier Reef", "Blue Mountains", "Bondi Beach", "Kuranda Village"],
      includes: ["Return Flights", "Hotels", "Reef Tours", "City Tours", "Some Meals"]
    }
  ];

  const filteredTours = selectedCategory === 'all' 
    ? internationalTours 
    : internationalTours.filter(tour => tour.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Mobile-Optimized Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-playfair-sc text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            International Tours
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed font-lato">
            Explore the world with our expertly crafted international travel packages
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-playfair-sc">Why Travel Internationally with Us?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-lato leading-relaxed">
              From Sri Lanka to the world - we make international travel seamless and affordable
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Plane className="h-10 w-10 sm:h-12 sm:w-12 text-coolBlue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair-sc">Best Flight Deals</h3>
              <p className="text-base text-gray-600 font-lato">Exclusive rates with major airlines departing from Colombo</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-coolBlue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair-sc">Visa Assistance</h3>
              <p className="text-base text-gray-600 font-lato">Complete visa support for Sri Lankan passport holders</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-coolBlue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair-sc">Group Discounts</h3>
              <p className="text-base text-gray-600 font-lato">Special rates for families and groups traveling together</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Calendar className="h-10 w-10 sm:h-12 sm:w-12 text-coolBlue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair-sc">Flexible Booking</h3>
              <p className="text-base text-gray-600 font-lato">Easy payment plans and flexible cancellation policies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Filters */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center">
            <Filter className="h-5 w-5 text-gray-600" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base md:text-lg font-playfair-sc transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-98 active:translate-y-0 ${
                  selectedCategory === category.id
                    ? 'bg-coolBlue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-coolBlue-600 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Tours Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{tour.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-coolBlue-600 text-white px-3 py-1 rounded-full flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">{tour.destination}</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 font-playfair-sc">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 text-base line-clamp-2 font-lato">{tour.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-base text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-1" />
                      {tour.groupSize}
                    </div>
                  </div>

                  <div className="mb-4 flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg font-playfair-sc">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="bg-coolBlue-50 text-coolBlue-700 text-sm px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                      {tour.highlights.length > 3 && (
                        <span className="text-sm text-gray-500">+{tour.highlights.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-semibold">{tour.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">{tour.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button className="relative w-full bg-coolBlue-600 text-white py-3.5 rounded-full font-semibold text-lg font-playfair-sc transition-all duration-300 ease-out transform hover:scale-105 hover:bg-coolBlue-700 hover:shadow-lg hover:-translate-y-1 active:scale-98 group/button overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center">
                        Book This Tour
                        <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-coolBlue-500 via-coolBlue-600 to-coolBlue-800 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-coolBlue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-playfair-sc">Complete Travel Services</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto font-lato leading-relaxed">
              We handle everything so you can focus on creating memories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="bg-coolBlue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-7 w-7 sm:h-8 sm:w-8 text-coolBlue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair-sc">Flight Bookings</h3>
              <p className="text-base text-gray-600 mb-4 font-lato">Best rates on international flights with flexible booking options</p>
              <ul className="text-sm text-gray-600 space-y-2 font-lato">
                <li>• Economy to Business Class</li>
                <li>• Direct & connecting flights</li>
                <li>• Special group rates</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="bg-coolBlue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-7 w-7 sm:h-8 sm:w-8 text-coolBlue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair-sc">Visa Processing</h3>
              <p className="text-base text-gray-600 mb-4 font-lato">Complete visa assistance for Sri Lankan passport holders</p>
              <ul className="text-sm text-gray-600 space-y-2 font-lato">
                <li>• Document preparation</li>
                <li>• Application submission</li>
                <li>• Status tracking</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="bg-coolBlue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-coolBlue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair-sc">Travel Insurance</h3>
              <p className="text-base text-gray-600 mb-4 font-lato">Comprehensive coverage for international travel</p>
              <ul className="text-sm text-gray-600 space-y-2 font-lato">
                <li>• Medical coverage</li>
                <li>• Trip cancellation</li>
                <li>• Baggage protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-coolBlue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-playfair-sc">Ready to Explore the World?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-lato leading-relaxed">
            Contact our international travel specialists for personalized itineraries and best deals on your dream destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative bg-white text-coolBlue-700 px-8 py-4 rounded-full font-semibold text-lg font-playfair-sc transition-all duration-300 ease-out transform hover:scale-105 hover:bg-coolBlue-50 hover:shadow-lg hover:-translate-y-1 active:scale-98 group overflow-hidden">
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-coolBlue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a 
              href="tel:+94112345678"
              className="relative border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg font-playfair-sc transition-all duration-300 ease-out transform hover:scale-105 hover:bg-white hover:text-coolBlue-700 hover:shadow-lg hover:-translate-y-1 active:scale-98 group overflow-hidden"
            >
              <span className="relative z-10">Call Travel Expert</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternationalTours;