import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClipboardList, FaBook } from 'react-icons/fa'; // Importing icons

const CheranMaNagar = () => {
  const navigate = useNavigate();

  // Navigate to Homework page
  const handleHomeworkClick = () => {
    navigate('/homework'); // Navigate to the homework page
  };

  // Navigate to Classwork page
  const handleClassworkClick = () => {
    navigate('/classwork'); // Navigate to the classwork page
  };

  return (
    <div className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Global Kids - Cheran Ma Nagar</h1>

      {/* Dairy Header Section */}
      <h2 className="h-16 bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg text-white text-center flex items-center justify-center text-2xl font-semibold rounded-lg">DAIRY</h2>

      {/* Homework and Classwork Buttons */}
      <div className="space-y-6 mt-8 max-w-lg mx-auto">
        <div
          className="bg-blue-500 text-white p-6 rounded-xl shadow-lg hover:bg-blue-600 cursor-pointer transition transform hover:scale-105 duration-300 ease-in-out flex items-center justify-center"
          onClick={handleHomeworkClick}
        >
          <FaClipboardList className="mr-4 text-3xl" />
          <h3 className="text-xl font-semibold">Homework</h3>
        </div>

        <div
          className="bg-green-500 text-white p-6 rounded-xl shadow-lg hover:bg-green-600 cursor-pointer transition transform hover:scale-105 duration-300 ease-in-out flex items-center justify-center"
          onClick={handleClassworkClick}
        >
          <FaBook className="mr-4 text-3xl" />
          <h3 className="text-xl font-semibold">Classwork</h3>
        </div>
      </div>
    </div>
  );
};

export default CheranMaNagar;
