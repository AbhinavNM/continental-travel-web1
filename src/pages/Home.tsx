
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  const featuredTours = [{
    id: 1,
    title: "Cultural Triangle Adventure",
    description: "Explore ancient kingdoms of Anuradhapura, Polonnaruwa, and Sigiriya",
    image: "/lovable-uploads/bfc6cca8-7d18-4cb4-a891-3a91fc230b7f.png",
    duration: "3 Days",
    rating: 4.9,
    reviews: 127
  }, {
    id: 2,
    title: "Kandy & Hill Country",
    description: "Sacred temples, tea plantations, and scenic mountain railways",
    image: "/lovable-uploads/b795a58d-47f8-4958-80bd-e8a5f6b2f0a4.png",
    duration: "2 Days",
    rating: 4.8,
    reviews: 94
  }, {
    id: 3,
    title: "Wildlife Safari Experience",
    description: "Spot leopards, elephants, and exotic birds in Yala National Park",
    image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6",
    duration: "1 Day",
    rating: 4.9,
    reviews: 156
  }];

  const testimonials = [{
    name: "Sarah Johnson",
    country: "United Kingdom",
    rating: 5,
    comment: "Continental Tours made our Sri Lanka trip absolutely magical! Professional guides, comfortable transportation, and unforgettable experiences.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b64ad35c"
  }, {
    name: "Michael Chen",
    country: "Australia",
    rating: 5,
    comment: "Exceptional service from start to finish. The cultural triangle tour was perfectly organized with knowledgeable local guides.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  }, {
    name: "Emma Rodriguez",
    country: "Spain",
    rating: 5,
    comment: "Beautiful accommodations, delicious local food, and breathtaking scenery. Can't wait to return with Continental Tours!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }];

  const features = [{
    icon: <Users className="h-8 w-8 text-coolBlue-500" />,
    title: "Expert Local Guides",
    description: "Experienced guides with deep knowledge of Sri Lankan culture and history"
  }, {
    icon: <CheckCircle className="h-8 w-8 text-coolBlue-500" />,
    title: "100% Safe & Secure",
    description: "Licensed operator with comprehensive insurance and safety protocols"
  }, {
    icon: <MapPin className="h-8 w-8 text-coolBlue-500" />,
    title: "Customized Itineraries",
    description: "Tailor-made tours designed to match your interests and preferences"
  }, {
    icon: <Calendar className="h-8 w-8 text-coolBlue-500" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey"
  }];

  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Optimized for mobile */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(24,78,119,0.6), rgba(52,160,164,0.6)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')`,
          }} />
        <div className="relative z-10 text-center text-white p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
          <h1 className="font-bowlby font-bold mb-4 md:mb-6 animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Discover
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-coolBlue-200 to-coolBlue-100 font-dancing text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 mb-2">
              Explore the Wonders of Sri Lanka
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fade-in max-w-3xl mx-auto font-lato leading-relaxed">
            Experience the Pearl of the Indian Ocean with expertly crafted tours, 
            luxury accommodations, and unforgettable adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Link to="/day-tours" className="relative bg-coolBlue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-coolBlue-700 hover:shadow-lg hover:-translate-y-1 active:scale-98 group overflow-hidden font-poppins flex items-center justify-center">
              <span className="relative z-10">Explore Day Tours</span>
              <div className="absolute inset-0 bg-gradient-to-r from-coolBlue-500 via-coolBlue-600 to-coolBlue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link to="/contact" className="relative border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-white hover:text-coolBlue-700 hover:shadow-lg hover:-translate-y-1 active:scale-98 group overflow-hidden font-poppins flex items-center justify-center">
              <span className="relative z-10">Plan Your Trip</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Improved mobile spacing */}
      <section className="py-16 sm:py-20 md:py-24 bg-coolBlue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-alegreya font-semibold text-gray-800 mb-4">
              Why Choose Continental Tours & Travels?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-lato">
              We're committed to providing exceptional travel experiences with personalized service and local expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-josefin">{feature.title}</h3>
                <p className="text-gray-600 font-lato">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section - Better mobile card spacing */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-arvo font-semibold text-gray-800 mb-4">
              Featured Tours
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-lato">
              Discover our most popular destinations and experiences across beautiful Sri Lanka.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map(tour => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:scale-105 hover:-translate-y-1 flex flex-col">
                <div className="relative overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105">
                    <span className="text-coolBlue-600 font-semibold font-poppins text-sm">{tour.duration}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm text-gray-600 ml-2 font-lato">{tour.rating} ({tour.reviews} reviews)</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-coolBlue-600 font-merriweather">{tour.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow font-lato leading-relaxed">{tour.description}</p>
                  <div className="mt-auto">
                    <button className="relative w-full bg-coolBlue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out transform hover:scale-105 hover:bg-coolBlue-700 hover:shadow-lg hover:-translate-y-1 active:scale-98 group/button overflow-hidden font-poppins text-lg flex items-center justify-center">
                      <span className="relative z-10 flex items-center">
                        Book Now
                        <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-coolBlue-500 via-coolBlue-600 to-coolBlue-800 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Link to="/day-tours" className="relative inline-flex items-center bg-coolBlue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-coolBlue-700 hover:shadow-lg hover:-translate-y-1 active:scale-98 group overflow-hidden font-poppins">
              <span className="relative z-10 flex items-center">
                View All Tours
                <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-coolBlue-500 via-coolBlue-600 to-coolBlue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Better mobile layout */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-coolBlue-700 to-coolBlue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair-sc font-semibold text-white mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-lato">
              Read genuine reviews from our satisfied customers who have experienced the magic of Sri Lanka with us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl group">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 transition-transform duration-300 group-hover:scale-110" 
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
                    }} 
                  />
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-800 transition-colors duration-300 group-hover:text-coolBlue-600 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 font-lato">{testimonial.country}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-110" />
                  ))}
                </div>
                <p className="testimonial-quote text-gray-700 leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Better mobile button spacing */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-amatic font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Ready to Start Your Sri Lankan Adventure?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed font-lato">
            Contact us today to plan your perfect trip. Our travel experts are ready to create a customized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="relative bg-coolBlue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-coolBlue-700 hover:shadow-lg hover:-translate-y-1 active:scale-98 group overflow-hidden font-poppins flex items-center justify-center">
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-coolBlue-500 via-coolBlue-600 to-coolBlue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <a href="tel:+94112345678" className="relative border-2 border-coolBlue-500 text-coolBlue-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:bg-coolBlue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-98 group overflow-hidden font-poppins flex items-center justify-center">
              <span className="relative z-10">Call Us Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-coolBlue-400 via-coolBlue-500 to-coolBlue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer with better mobile spacing */}
      <div className="mt-6 md:mt-0">
        <Footer />
      </div>
    </div>;
};

export default Home;
