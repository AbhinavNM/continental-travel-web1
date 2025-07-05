
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    groupSize: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coolBlue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2.5">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coolBlue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coolBlue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2.5">
              Interested Destination
            </label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coolBlue-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select destination</option>
              <option value="cultural-triangle">Cultural Triangle</option>
              <option value="kandy-hills">Kandy & Hill Country</option>
              <option value="southern-coast">Southern Coast</option>
              <option value="wildlife-safari">Wildlife Safari</option>
              <option value="full-island">Full Island Tour</option>
              <option value="custom">Custom Itinerary</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2.5">
              Preferred Travel Date
            </label>
            <input
              type="date"
              id="travelDate"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coolBlue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-2.5">
              Group Size
            </label>
            <select
              id="groupSize"
              name="groupSize"
              value={formData.groupSize}
              onChange={handleInputChange}
              className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coolBlue-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select group size</option>
              <option value="1">Solo Traveler</option>
              <option value="2">2 People</option>
              <option value="3-5">3-5 People</option>
              <option value="6-10">6-10 People</option>
              <option value="10+">10+ People</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coolBlue-500 focus:border-transparent transition-all duration-300"
            placeholder="Tell us about your travel preferences, special requirements, or any questions you have..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-coolBlue-600 text-white py-3.5 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-coolBlue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          Send Message
          <Send className="h-5 w-5 ml-2" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
