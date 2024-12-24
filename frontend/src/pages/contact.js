import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Contact = () => {

  // Handle "Get Directions" button click
  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/zCCrgqzeoosuBVjW8', '_blank'); // Open Google Maps link in new tab
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">Contact Us</h1>

      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Global Kids Play School - Cheran Ma Nagar</h2>
        <p className="text-xl text-center text-gray-600 mb-6">International Montessori Teacher Training Institute</p>

        <div className="space-y-4 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
          <div className="flex items-center space-x-3 text-lg text-gray-700">
            <FaMapMarkerAlt className="text-blue-500" />
            <p><strong>Address:</strong> 2/21, Vilankurichi Post, Kumudham Nagar, Cheran ma Nagar, Coimbatore, Tamil Nadu 641035</p>
          </div>
          <div className="flex items-center space-x-3 text-lg text-gray-700">
            <FaPhoneAlt className="text-green-500" />
            <p><strong>Phone:</strong> 084380 03600</p>
          </div>
          <div className="flex items-center space-x-3 text-lg text-gray-700">
            <FaEnvelope className="text-red-500" />
            <p><strong>Email:</strong> info@globalkids.com</p> {/* Placeholder for email */}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Working Hours</h3>
          <div className="flex items-center space-x-3 text-lg text-gray-700">
            <FaClock className="text-orange-500" />
            <p><strong>Opens at:</strong> 8:30 AM,</p>
          </div>
          <div className="flex items-center space-x-3 text-lg text-gray-700">
            <FaClock className="text-orange-500" />
            <p><strong>Closes at:</strong> 8:00 PM</p>
          </div>
        </div>

        <div className="text-center">
          <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleGetDirections}
          >
            <FaMapMarkerAlt className="inline mr-2" /> Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
