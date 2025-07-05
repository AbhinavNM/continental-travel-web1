
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-coolBlue-50 rounded-lg p-6 sm:p-8 md:p-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
      <div className="space-y-8">
        <div className="flex items-start space-x-5">
          <MapPin className="h-6 w-6 text-coolBlue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Office Address</h4>
            <p className="text-gray-600 text-base">
              123 Galle Road, Colombo 03<br />
              Sri Lanka
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <Phone className="h-6 w-6 text-coolBlue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Phone Numbers</h4>
            <p className="text-gray-600 text-base">
              Office: +94 11 234 5678<br />
              Mobile: +94 77 123 4567<br />
              WhatsApp: +94 77 123 4567
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <Mail className="h-6 w-6 text-coolBlue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Email Addresses</h4>
            <p className="text-gray-600 text-base">
              General: info@continualtours.lk<br />
              Bookings: bookings@continualtours.lk<br />
              Support: support@continualtours.lk
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <Clock className="h-6 w-6 text-coolBlue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
            <p className="text-gray-600 text-base">
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 8:00 AM - 4:00 PM<br />
              Sunday: 9:00 AM - 2:00 PM<br />
              <span className="text-base text-coolBlue-600 font-medium">24/7 Emergency Support</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
