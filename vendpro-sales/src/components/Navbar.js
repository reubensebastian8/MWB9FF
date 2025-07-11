import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">VendPro Machines</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Home</Link>
              <Link to="/product" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Product</Link>
              <Link to="/why-us" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Why Us</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Testimonials</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Pricing</Link>
              <Link to="/faq" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">FAQ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Home</Link>
            <Link to="/product" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Product</Link>
            <Link to="/why-us" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Why Us</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Testimonials</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Pricing</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">FAQ</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default AppNavbar; 