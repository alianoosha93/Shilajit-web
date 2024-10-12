




import React, { useState } from 'react';

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Error state management
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="bg-white text-gray-900 py-10">
      {/* Header Section */}
      <header className="bg-red-500 py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white  ">Contact Us</h1>
        <p className="text-lg text-white mt-2">
          Get in touch for more information about our Shilajit medicine.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-red-500 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                  rows="5"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For inquiries, support, or additional information, feel free to reach out to us using the form or via the
              following contact details.
            </p>
            <div className="text-gray-800">
              <p className="mb-2">
                <strong>Address:</strong> 1234 Shilajit Street, Himalayan Region, India
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +91 12345 67890
              </p>
              <p className="mb-2">
                <strong>Email:</strong> info@shilajitmedicine.com
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block bg-gray-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg mr-4 transition duration-300"
                >
                  Follow Us on Facebook
                </a>
                <a
                  href="#"
                  className="inline-block bg-gray-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Follow Us on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12 shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Find Us Here</h2>
          <div className="flex justify-center">
            {/* Embed Google Maps */}
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8352556914476!2d144.95592531584436!3d-37.81720944202147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1d2f903%3A0xf58fdd2a9b9c7e4d!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1642225557804!5m2!1sen!2sau"
              width="600"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full md:w-3/4 h-96 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

