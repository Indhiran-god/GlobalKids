import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* Title Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg rounded-xl p-6 text-center mb-6">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Global Kids, No. 1 Pre School Specialist
        </h1>
      </div>

      {/* Cards Section */}
      <div className="space-y-6">
        <div
          className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
          onClick={() => handleNavigation('/cheran-ma-nagar')}
        >
          <span className="text-gray-900 font-semibold text-lg">
            Global Kids - Cheran Ma Nagar - Coimbatore
          </span>
          <span className="text-blue-500 font-bold">{'>'}</span>
        </div>
        <div
          className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
          onClick={() => handleNavigation('/peelamedu')}
        >
          <span className="text-gray-900 font-semibold text-lg">
            Global Kids - Peelamedu - Coimbatore
          </span>
          <span className="text-blue-500 font-bold">{'>'}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
