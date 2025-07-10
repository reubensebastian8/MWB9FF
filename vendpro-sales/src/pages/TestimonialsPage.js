import React from 'react';

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
  {
    name: 'Carlos M.',
    quote: 'VendPro made it easy to get started. The training and support are top-notch. I’m earning passive income every month!',
  },
  {
    name: 'Linda S.',
    quote: 'We placed a machine in our gym and it’s been a hit. The cashless payment system is a game changer.',
  },
];

function TestimonialsPage() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Customer Success Stories</h1>
        <p className="text-base md:text-lg text-gray-700">See how VendPro is helping people just like you earn more and stress less.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div className="bg-white rounded-lg shadow p-6" key={idx}>
            <p className="italic mb-2">"{t.quote}"</p>
            <div className="font-semibold text-blue-700">- {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsPage; 