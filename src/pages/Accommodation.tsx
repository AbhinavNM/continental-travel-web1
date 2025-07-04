import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import { Filter } from 'lucide-react';

const Accommodation = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Properties' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'boutique', name: 'Boutique' },
    { id: 'heritage', name: 'Heritage' },
    { id: 'eco', name: 'Eco-Friendly' }
  ];

  const accommodations = [
    {
      id: 1,
      title: "Galle Face Hotel, Colombo",
      description: "Historic luxury hotel overlooking the Indian Ocean with colonial charm and modern amenities.",
      image: "/lovable-uploads/fed2536e-3833-4910-b3e2-62118ac39f5a.png",
      duration: "Per Night",
      groupSize: "2-4 Guests",
      rating: 4.8,
      reviews: 342,
      category: 'luxury',
      highlights: ["Ocean Views", "Historical Significance", "Fine Dining", "Spa Services"],
      includes: ["Breakfast", "WiFi", "Pool Access", "Concierge"]
    },
    {
      id: 2,
      title: "Amangalla, Galle",
      description: "Luxury heritage hotel within the historic Galle Fort, offering refined elegance and tranquil gardens.",
      image: "/lovable-uploads/b795a58d-47f8-4958-80bd-e8a5f6b2f0a4.png",
      duration: "Per Night",
      groupSize: "2-4 Guests",
      rating: 4.9,
      reviews: 198,
      category: 'heritage',
      highlights: ["UNESCO Fort Location", "Heritage Architecture", "Luxury Spa", "Private Gardens"],
      includes: ["Breakfast", "WiFi", "Pool", "Butler Service"]
    },
    {
      id: 3,
      title: "Tea Trails, Hatton",
      description: "Colonial-era tea planter bungalows converted into luxury accommodations in the hill country.",
      image: "/lovable-uploads/bcfa8639-8936-4713-8e6a-579bead7742d.png",
      duration: "Per Night",
      groupSize: "2-6 Guests",
      rating: 4.7,
      reviews: 156,
      category: 'heritage',
      highlights: ["Tea Plantation Setting", "Colonial Architecture", "Mountain Views", "Exclusive Experience"],
      includes: ["All Meals", "Tea Experiences", "Nature Walks", "Butler Service"]
    },
    {
      id: 4,
      title: "Shangri-La Hambantota",
      description: "Beachfront resort with championship golf course and comprehensive facilities in southern Sri Lanka.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      duration: "Per Night",
      groupSize: "2-8 Guests",
      rating: 4.6,
      reviews: 289,
      category: 'luxury',
      highlights: ["Golf Course", "Beach Access", "Multiple Restaurants", "Spa Complex"],
      includes: ["Breakfast", "WiFi", "Pool Access", "Beach Activities"]
    },
    {
      id: 5,
      title: "Jetwing Vil Uyana, Sigiriya",
      description: "Eco-luxury resort built on stilts over wetlands, offering unique wildlife viewing opportunities.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      duration: "Per Night",
      groupSize: "2-4 Guests",
      rating: 4.8,
      reviews: 234,
      category: 'eco',
      highlights: ["Wetland Setting", "Wildlife Viewing", "Sustainable Design", "Cultural Proximity"],
      includes: ["Breakfast", "Nature Walks", "Bird Watching", "Cultural Tours"]
    },
    {
      id: 6,
      title: "The Fortress Resort, Koggala",
      description: "Contemporary luxury resort perched on a rocky outcrop with panoramic ocean views.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      duration: "Per Night",
      groupSize: "2-6 Guests",
      rating: 4.5,
      reviews: 187,
      category: 'boutique',
      highlights: ["Clifftop Location", "Modern Design", "Infinity Pool", "Sunset Views"],
      includes: ["Breakfast", "WiFi", "Pool", "Spa Access"]
    }
  ];

  const filteredAccommodations = selectedCategory === 'all' 
    ? accommodations 
    : accommodations.filter(accommodation => accommodation.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Enhanced Hero Section with Filters - Mobile Optimized */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(24,78,119,0.8), rgba(52,160,164,0.6)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <h1 className="font-playfair-sc font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Accommodation</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-lato leading-relaxed mb-8">
            Discover exceptional places to stay across Sri Lanka
          </p>
          
          {/* Filter Buttons - Mobile Optimized */}
          <div className="w-full max-w-4xl mx-auto px-2">
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
              <Filter className="h-5 w-5 text-white flex-shrink-0" />
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 rounded-full font-medium font-playfair-sc text-sm sm:text-base md:text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-98 active:translate-y-0 min-h-[40px] sm:min-h-[44px] flex items-center justify-center whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-white text-coolBlue-700 shadow-lg scale-105'
                        : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Grid - Enhanced mobile spacing */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {filteredAccommodations.map((accommodation) => (
              <TourCard key={accommodation.id} tour={accommodation} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced mobile */}
      <section className="py-16 sm:py-20 md:py-24 bg-coolBlue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-amatic font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">Need Help Finding the Perfect Stay?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-lato leading-relaxed">
            Our accommodation experts can help you find the perfect place to stay based on your preferences and budget.
          </p>
          <button className="relative bg-white text-coolBlue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-coolBlue-50 hover:shadow-lg hover:-translate-y-1 active:scale-98 active:translate-y-0 group overflow-hidden font-poppins min-h-[56px]">
            <span className="relative z-10">Get Accommodation Help</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-coolBlue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Footer with enhanced mobile spacing */}
      <div className="mt-12 sm:mt-16 md:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Accommodation;
