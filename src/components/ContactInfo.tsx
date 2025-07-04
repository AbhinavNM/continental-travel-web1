
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-tropical-cream rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-tropical-teal mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
            <p className="text-gray-600">
              123 Galle Road, Colombo 03<br />
              Sri Lanka
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-tropical-teal mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Phone Numbers</h4>
            <p className="text-gray-600">
              Office: +94 11 234 5678<br />
              Mobile: +94 77 123 4567<br />
              WhatsApp: +94 77 123 4567
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-tropical-teal mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Email Addresses</h4>
            <p className="text-gray-600">
              General: info@continualtours.lk<br />
              Bookings: bookings@continualtours.lk<br />
              Support: support@continualtours.lk
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="h-6 w-6 text-tropical-teal mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 8:00 AM - 4:00 PM<br />
              Sunday: 9:00 AM - 2:00 PM<br />
              <span className="text-sm text-tropical-teal font-medium">24/7 Emergency Support</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
