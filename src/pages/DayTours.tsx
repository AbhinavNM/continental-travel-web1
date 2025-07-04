import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import { Filter } from 'lucide-react';

const DayTours = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Tours'
  }, {
    id: 'cultural',
    name: 'Cultural'
  }, {
    id: 'wildlife',
    name: 'Wildlife'
  }, {
    id: 'nature',
    name: 'Nature'
  }, {
    id: 'adventure',
    name: 'Adventure'
  }];
  
  const tours = [{
    id: 1,
    title: "Sigiriya Rock Fortress & Dambulla Cave Temple",
    description: "Climb the ancient rock fortress and explore golden cave temples filled with Buddha statues and paintings.",
    image: "/lovable-uploads/75653780-c1be-4036-8c0c-96b6aadc17c8.png",
    duration: "10 Hours",
    groupSize: "2-15 People",
    rating: 4.9,
    reviews: 234,
    category: 'cultural',
    highlights: ["UNESCO World Heritage Site", "Ancient Frescoes", "Panoramic Views", "Cave Temples"],
    includes: ["Transportation", "English Speaking Guide", "Entrance Fees", "Lunch"]
  }, {
    id: 2,
    title: "Kandy City & Temple of Tooth Relic",
    description: "Visit the sacred Temple of Tooth Relic, explore royal botanical gardens, and enjoy a cultural dance show.",
    image: "/lovable-uploads/5f3129c5-f576-4721-866b-a5b04e24f5db.png",
    duration: "8 Hours",
    groupSize: "2-20 People",
    rating: 4.8,
    reviews: 189,
    category: 'cultural',
    highlights: ["Temple of Tooth Relic", "Royal Botanical Gardens", "Cultural Dance Show", "Kandy Lake"],
    includes: ["Transportation", "Guide", "Entrance Fees", "Cultural Show"]
  }, {
    id: 3,
    title: "Yala National Park Safari",
    description: "Full day safari experience in Sri Lanka's most famous national park, home to leopards and elephants.",
    image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6",
    duration: "12 Hours",
    groupSize: "2-8 People",
    rating: 4.9,
    reviews: 312,
    category: 'wildlife',
    highlights: ["Leopard Spotting", "Elephant Herds", "Exotic Birds", "Scenic Landscapes"],
    includes: ["4WD Safari Vehicle", "Experienced Driver", "Park Entrance", "Packed Lunch"]
  }, {
    id: 4,
    title: "Ella & Nine Arch Bridge",
    description: "Scenic train journey, visit the famous Nine Arch Bridge, and hike to Little Adam's Peak.",
    image: "/lovable-uploads/2ff88653-df8c-4624-bd69-3d9cb129b570.png",
    duration: "10 Hours",
    groupSize: "2-12 People",
    rating: 4.7,
    reviews: 156,
    category: 'nature',
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Plantations", "Train Journey"],
    includes: ["Transportation", "Train Tickets", "Hiking Guide", "Refreshments"]
  }, {
    id: 5,
    title: "Galle Fort & Southern Coast",
    description: "Explore the historic Dutch fort, stilt fishermen, and enjoy beautiful southern beaches.",
    image: "/lovable-uploads/d4bdf023-c4bd-4535-a41f-a51de049a77d.png",
    duration: "9 Hours",
    groupSize: "2-15 People",
    rating: 4.6,
    reviews: 198,
    category: 'cultural',
    highlights: ["Dutch Colonial Fort", "Stilt Fishermen", "Beach Time", "Local Markets"],
    includes: ["Transportation", "Guide", "Beach Access", "Seafood Lunch"]
  }, {
    id: 6,
    title: "Nuwara Eliya Tea Country Experience",
    description: "Visit tea plantations, learn about tea processing, and enjoy the cool mountain climate.",
    image: "/lovable-uploads/bcfa8639-8936-4713-8e6a-579bead7742d.png",
    duration: "8 Hours",
    groupSize: "2-18 People",
    rating: 4.5,
    reviews: 143,
    category: 'nature',
    highlights: ["Tea Factory Visit", "Tea Tasting", "Gregory Lake", "Hakgala Gardens"],
    includes: ["Transportation", "Factory Tour", "Tea Tasting", "Garden Entry"]
  }, {
    id: 7,
    title: "Adams Peak Sunrise Hike",
    description: "Challenge yourself with a pre-dawn hike to Sri Lanka's sacred mountain peak and witness a breathtaking sunrise.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    duration: "14 Hours",
    groupSize: "2-10 People",
    rating: 4.8,
    reviews: 167,
    category: 'adventure',
    highlights: ["Sacred Mountain Peak", "Sunrise Views", "Night Hike", "Spiritual Experience"],
    includes: ["Transportation", "Hiking Guide", "Headlamps", "Energy Snacks"]
  }];
  
  const filteredTours = selectedCategory === 'all' ? tours : tours.filter(tour => tour.category === selectedCategory);
  
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Extended Hero Section with Filters - Mobile Optimized */}
      <section className="relative h-[75vh] md:h-[500px] flex flex-col items-center justify-center overflow-hidden pt-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(24,78,119,0.8), rgba(52,160,164,0.6)), url('https://images.unsplash.com/photo-1433086966358-54859d0ed716')`
      }} />
        <div className="relative z-10 text-center text-white px-4 pt-20 md:pt-32 flex-1 flex flex-col justify-center">
          <h1 className="font-playfair-sc font-bold mb-4 text-3xl md:text-5xl">Day Tours</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto font-lato leading-relaxed mb-8">
            Discover Sri Lanka's wonders with our expertly crafted day tours
          </p>
          
          {/* Filter Buttons - Mobile Optimized */}  
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center bg-black/20 backdrop-blur-md rounded-full px-4 md:px-8 py-3 md:py-4 border border-white/20">
              <Filter className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                {categories.map(category => 
                  <button 
                    key={category.id} 
                    onClick={() => setSelectedCategory(category.id)} 
                    className={`px-3 md:px-6 py-2 md:py-2 rounded-full font-medium font-playfair-sc text-sm md:text-base transition-all duration-300 ease-out transform hover:scale-102 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 active:translate-y-0 min-h-[36px] md:min-h-[40px] flex items-center justify-center whitespace-nowrap ${selectedCategory === category.id ? 'bg-white text-coolBlue-700 shadow-lg scale-102' : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'}`}
                  >
                    {category.name}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid - Better mobile spacing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredTours.map(tour => <TourCard key={tour.id} tour={tour} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coolBlue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-amatic font-bold text-4xl md:text-5xl mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-body-mobile md:text-body mb-8 max-w-2xl mx-auto font-lato leading-relaxed">
            We create custom itineraries tailored to your interests. Contact us for a personalized tour experience.
          </p>
          <button className="relative bg-white text-coolBlue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-102 hover:bg-coolBlue-50 hover:shadow-lg hover:-translate-y-0.5 active:scale-98 active:translate-y-0 group overflow-hidden font-poppins">
            <span className="relative z-10">Create Custom Tour</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-coolBlue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Footer with mobile spacing */}
      <div className="mt-6 md:mt-0">
        <Footer />
      </div>
    </div>;
};

export default DayTours;
