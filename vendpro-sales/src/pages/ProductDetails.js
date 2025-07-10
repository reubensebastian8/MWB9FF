import React from 'react';

function ProductDetails() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Snack Vending Machine" className="rounded-lg shadow-lg w-full max-w-xs md:max-w-xs h-auto mx-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">Snack & Drink Combo</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Holds up to 300 snacks and 200 drinks</li>
              <li>Energy-efficient cooling system</li>
              <li>Remote inventory management</li>
              <li>ADA compliant and eco-friendly</li>
              <li>Custom branding available</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">Technical Specifications</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Dimensions: 72"H x 39"W x 33"D</li>
              <li>Weight: 650 lbs</li>
              <li>Power: 110V standard outlet</li>
              <li>Payment: Cash, card, mobile</li>
              <li>Warranty: 2 years parts & labor</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">Perfect For</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Offices & break rooms</li>
              <li>Gyms & recreation centers</li>
              <li>Schools & universities</li>
              <li>Apartment complexes</li>
              <li>Retail stores & more</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails; 