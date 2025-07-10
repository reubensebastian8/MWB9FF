import React from 'react';
import { Link } from 'react-router-dom';

const pricingOptions = [
  {
    title: 'Starter',
    price: '$3,499',
    features: [
      '1 Snack & Drink Combo Machine',
      'Remote Monitoring',
      'Cashless Payment Enabled',
      '2-Year Warranty',
      'Free Training',
    ],
  },
  {
    title: 'Pro',
    price: '$6,499',
    features: [
      '2 Snack & Drink Combo Machines',
      'Custom Branding',
      'Remote Monitoring',
      'Cashless Payment Enabled',
      '2-Year Warranty',
      'Free Training',
    ],
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    features: [
      '5+ Machines',
      'Custom Solutions',
      'Dedicated Success Manager',
      'Lifetime Support',
      'Custom Branding',
      'Remote Monitoring',
    ],
  },
];

function PricingPage() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Pricing & Packages</h1>
        <p className="text-base md:text-lg text-gray-700">Choose the plan that fits your goals. All packages include setup, training, and support.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {pricingOptions.map((option, idx) => (
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col" key={idx}>
            <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-2">{option.title}</h3>
            <div className="text-2xl md:text-3xl font-bold mb-4">{option.price}</div>
            <ul className="list-disc pl-5 mb-4 text-gray-700 flex-grow">
              {option.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto text-center">Get Started</Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">Need a custom solution?</h2>
        <p className="mb-4 text-gray-700 text-base md:text-lg">Contact us for bulk pricing, custom branding, or unique requirements.</p>
        <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg w-full md:w-auto inline-block">Contact Sales</Link>
      </div>
    </div>
  );
}

export default PricingPage; 