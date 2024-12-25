import React from 'react';
import { FaMoneyBill, FaPhotoVideo, FaClipboard, FaBell, FaHome } from 'react-icons/fa'; // Importing icons
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-2 flex justify-around text-gray-600">
      <button
        onClick={() => navigate('/notice')}
        className="flex flex-col items-center focus:outline-none hover:text-gray-800"
        title="Notice"
      >
        <FaBell size={20} />
        <span className="text-xs font-medium">Notice</span>
      </button>

      <button
        onClick={() => navigate('/photos')}
        className="flex flex-col items-center focus:outline-none hover:text-gray-800"
        title="Photos"
      >
        <FaPhotoVideo size={20} />
        <span className="text-xs font-medium">Photos</span>
      </button>

      {/* Home Icon in the Center */}
      <button
        onClick={() => navigate('/cheran-ma-nagar')}  // Navigate to CheranMaNagar page
        className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white hover:bg-blue-700 focus:outline-none"
        title="Home"
      >
        <FaHome size={20} />
      </button>

      <button
        onClick={() => navigate('/result')}
        className="flex flex-col items-center focus:outline-none hover:text-gray-800"
        title="Results"
      >
        <FaClipboard size={20} />
        <span className="text-xs font-medium">Results</span>
      </button>

      <button
        onClick={() => navigate('/fees')}
        className="flex flex-col items-center focus:outline-none hover:text-gray-800"
        title="Fees"
      >
        <FaMoneyBill size={20} />
        <span className="text-xs font-medium">Fees</span>
      </button>
    </div>
  );
};

export default Footer;