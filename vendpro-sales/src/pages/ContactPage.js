import React, { useState } from 'react';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Contact Us</h1>
        <p className="text-base md:text-lg text-gray-700">Ready to get started or have questions? Fill out the form below and our team will be in touch soon.</p>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          {submitted && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">Thank you! We’ve received your message and will contact you soon.</div>}
          <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded shadow-md w-full max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" name="email" id="email" value={form.email} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
              <input type="tel" name="phone" id="phone" value={form.phone} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea name="message" id="message" rows="4" value={form.message} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage; 