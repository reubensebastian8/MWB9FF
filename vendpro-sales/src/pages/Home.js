import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Sarah L.',
    quote: 'Adding a VendPro machine to our office was the best decision! Employees love the convenience and it pays for itself.',
  },
  {
    name: 'Mike D.',
    quote: 'I started with one vending machine and now have five. The support and reliability are unmatched.',
  },
  {
    name: 'Jessica R.',
    quote: 'The machine is sleek, easy to use, and my customers are happy. Highly recommend VendPro!',
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-300 py-8 md:py-16 mb-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">Maximize Profits with Modern Vending Machines</h1>
            <p className="text-base md:text-xl mb-6 text-gray-700">Unlock passive income and delight your customers or employees with our state-of-the-art vending solutions for soft drinks, candy bars, and chips.</p>
            <Link to="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg w-full md:w-auto inline-block">See Pricing</Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=500&q=80" alt="Vending Machine" className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md h-auto mx-auto" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">Why Choose VendPro?</h2>
          <p className="text-gray-600 text-base md:text-lg">Our machines are designed for maximum uptime, easy maintenance, and unbeatable ROI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">Smart Inventory</h3>
            <p>Real-time stock alerts and remote monitoring keep your machine full and profitable.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">Cashless Payments</h3>
            <p>Accept cards, mobile payments, and more—no more missed sales due to cash-only machines.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">Plug & Play</h3>
            <p>Easy setup in minutes. No technical expertise required—just plug in and start earning.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-8 md:py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            {testimonials.map((t, idx) => (
              <div className="bg-white rounded-lg shadow p-6" key={idx}>
                <p className="italic mb-2">"{t.quote}"</p>
                <div className="font-semibold text-blue-700">- {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-800">Ready to Start Earning?</h2>
        <p className="mb-6 text-gray-700 text-base md:text-lg">Join hundreds of satisfied owners. Get your vending machine today and watch your passive income grow!</p>
        <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg w-full md:w-auto inline-block">Get Started</Link>
      </div>
    </>
  );
}

export default Home; 