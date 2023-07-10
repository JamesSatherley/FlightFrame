import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-8">Contact</h2>
        <p className="text-center mb-4">To inquire about our services, please email us at:</p>
        <a href="mailto:your-email@example.com" className="block text-center text-blue-500 underline">your-email@example.com</a>
      </div>
    </section>
  );
}

export default Contact;
