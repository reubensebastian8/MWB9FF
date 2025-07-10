import React, { useState } from 'react';

const faqs = [
  {
    question: 'How quickly can I get started?',
    answer: 'Most customers are up and running within 2 weeks of ordering. We handle delivery, setup, and training.'
  },
  {
    question: 'Do I need any technical skills?',
    answer: 'No technical expertise required! Our machines are plug-and-play, and we provide full training and support.'
  },
  {
    question: 'What about maintenance?',
    answer: 'Our machines are designed for reliability. If you ever need help, our support team is available 24/7.'
  },
  {
    question: 'How do I restock the machine?',
    answer: 'You can restock at your convenience. Our smart inventory system will alert you when supplies are low.'
  },
  {
    question: 'Can I customize the machine?',
    answer: 'Yes! We offer custom branding and configuration options to fit your needs.'
  },
];

function FAQPage() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-base md:text-lg text-gray-700">Got questions? We’ve got answers. If you don’t see your question here, <a href="/contact" className="text-blue-600 underline">contact us</a>.</p>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button onClick={() => toggle(index)} className="flex justify-between items-center w-full text-lg font-semibold text-left text-blue-800">
                <span>{faq.question}</span>
                <span>{open === index ? '-' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${open === index ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="mt-2 text-gray-700">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage; 