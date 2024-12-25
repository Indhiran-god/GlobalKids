import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClipboardList, FaBirthdayCake, FaPhotoVideo, FaBook, FaPlus, FaInfoCircle } from 'react-icons/fa';

const CheranMaNagar = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 min-h-screen relative">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Global Kids - Cheran Ma Nagar</h1>

      {/* Diary Header Section */}
      <h2 className="h-16 bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg text-white text-center flex items-center justify-center text-2xl font-semibold rounded-lg">Diary</h2>

      {/* Navigation Options */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigate('/all')}
        >
          <FaClipboardList className="text-blue-500 text-4xl mb-2" />
          <span className="text-sm font-semibold">All</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigate('/notice')}
        >
          <FaInfoCircle className="text-green-500 text-4xl mb-2" />
          <span className="text-sm font-semibold">Notice</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigate('/photos')}
        >
          <FaPhotoVideo className="text-purple-500 text-4xl mb-2" />
          <span className="text-sm font-semibold">Photos</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigate('/classwork')}
        >
          <FaBook className="text-red-500 text-4xl mb-2" />
          <span className="text-sm font-semibold">Classwork</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigate('/homework')}
        >
          <FaClipboardList className="text-blue-500 text-4xl mb-2" />
          <span className="text-sm font-semibold">Homework</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigate('/birthday')}
        >
          <FaBirthdayCake className="text-pink-500 text-4xl mb-2" />
          <span className="text-sm font-semibold">Birthday</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigate('/study')}
        >
          <FaBook className="text-orange-500 text-4xl mb-2" />
          <span className="text-sm font-semibold">Study</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigate('/results')}
        >
          <FaClipboardList className="text-green-500 text-4xl mb-2" />
          <span className="text-sm font-semibold">Results</span>
        </div>
      </div>

      
      {/* Floating Add Button */}
    
    </div>
  );
};

export default CheranMaNagar;
