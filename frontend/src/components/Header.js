import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className="h-16 bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg">
      <div className="h-full container mx-auto flex items-center px-6">
        {isHomePage ? (
          // Home Page Header
          <>
            <Link to="/">
              <Logo w={90} h={50} />
            </Link>
            <nav className="text-white font-semibold ml-auto">
              <Link
                to="/about"
                className="mx-4 hover:text-teal-200 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="mx-4 hover:text-teal-200 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </>
        ) : (
          // Other Pages Header
          <div className="mx-auto">
            <Link to="/">
              <Logo w={90} h={50} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
