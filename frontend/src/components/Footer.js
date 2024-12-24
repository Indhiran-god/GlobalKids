import React from 'react';
import { FaMoneyBill, FaPhotoVideo, FaClipboard, FaBell } from 'react-icons/fa'; // Importing icons
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

      <button
        onClick={() => navigate('/results')}
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
