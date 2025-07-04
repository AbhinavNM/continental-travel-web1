import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="bg-tropical-teal w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <span className="text-white font-bold">CT</span>
              </div>
              <div>
                <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-tropical-teal">Continental tours &amp; travels</h3>
                <p className="text-sm text-gray-400">(Pvt) Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for exploring the beautiful island of Sri Lanka. 
              We offer exceptional travel experiences with professional service and local expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tropical-teal transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 active:scale-95">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tropical-teal transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 active:scale-95">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tropical-teal transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 active:scale-95">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tropical-teal transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 active:scale-95">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tropical-gold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-tropical-teal transition-all duration-300 hover:pl-2 transform hover:scale-105">
                Home
              </Link>
              <Link to="/day-tours" className="block text-gray-300 hover:text-tropical-teal transition-all duration-300 hover:pl-2 transform hover:scale-105">
                Day Tours
              </Link>
              <Link to="/international-tours" className="block text-gray-300 hover:text-tropical-teal transition-all duration-300 hover:pl-2 transform hover:scale-105">
                International Tours
              </Link>
              <Link to="/accommodation" className="block text-gray-300 hover:text-tropical-teal transition-all duration-300 hover:pl-2 transform hover:scale-105">
                Accommodation
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-tropical-teal transition-all duration-300 hover:pl-2 transform hover:scale-105">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tropical-gold">Our Services</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="transition-all duration-300 hover:text-tropical-teal hover:pl-2 cursor-pointer transform hover:scale-105">Cultural Tours</p>
              <p className="transition-all duration-300 hover:text-tropical-teal hover:pl-2 cursor-pointer transform hover:scale-105">Wildlife Safaris</p>
              <p className="transition-all duration-300 hover:text-tropical-teal hover:pl-2 cursor-pointer transform hover:scale-105">Beach Holidays</p>
              <p className="transition-all duration-300 hover:text-tropical-teal hover:pl-2 cursor-pointer transform hover:scale-105">Mountain Trekking</p>
              <p className="transition-all duration-300 hover:text-tropical-teal hover:pl-2 cursor-pointer transform hover:scale-105">City Tours</p>
              <p className="transition-all duration-300 hover:text-tropical-teal hover:pl-2 cursor-pointer transform hover:scale-105">Airport Transfers</p>
              <p className="transition-all duration-300 hover:text-tropical-teal hover:pl-2 cursor-pointer transform hover:scale-105">Travel Insurance</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-tropical-gold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-tropical-teal mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-gray-300 text-sm">
                  <p>123 Galle Road,</p>
                  <p>Colombo 03,</p>
                  <p>Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-tropical-teal flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-gray-300 text-sm">
                  <p>+94 11 234 5678</p>
                  <p>+94 77 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-tropical-teal flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-gray-300 text-sm">
                  <p>info@continualtours.lk</p>
                  <p>bookings@continualtours.lk</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Continental Tours & Travels (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-tropical-teal transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-tropical-teal transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                Terms of Service
              </a>
              <span>Reg No: PV 12345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;