import React from 'react';
import about from '../assets/Images/About.3.jpeg'


const About = () => {
  return (
    <div className="bg-white text-gray-900 shadow-md py-10 ">
     
      {/* Header Section */}
      <header className="bg-red-500 py-10 text-center">
        <h1 className="text-4xl font-bold text-white">About Our Shilajit Medicine</h1>
        <p className="text-lg text-white mt-2">Discover the Power of Ancient Ayurvedic Medicine</p>
      </header>

      {/* Main Content Section */}
      <section className="container mx-auto my-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={about} // Replace with actual image URL
              alt="Shilajit Medicine"
              className="w-3/4 h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content Section */}
          <div>
            <h2 className="text-3xl font-bold text-red-500">What is Shilajit?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Shilajit is a powerful natural supplement known for its rejuvenating and energizing properties. Found in
              the Himalayan mountains, this sticky tar-like substance has been used in Ayurveda for centuries to promote
              overall health, enhance vitality, and increase stamina.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our Shilajit medicine is derived from the purest sources, ensuring maximum potency and effectiveness. Each
              batch is carefully tested to maintain the highest quality standards, so you receive the best nature has to
              offer.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-700 py-12 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Benefits of Shilajit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Benefit Item 1 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-red-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Increases Energy</h3>
              <p className="text-gray-300">
                Shilajit is known to boost energy levels and combat fatigue, allowing you to feel more active and
                vibrant.
              </p>
            </div>

            {/* Benefit Item 2 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-red-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Enhances Vitality</h3>
              <p className="text-gray-300">
                Regular use of Shilajit supports reproductive health and helps balance testosterone levels.
              </p>
            </div>

            {/* Benefit Item 3 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-red-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Supports Cognitive Health</h3>
              <p className="text-gray-300">
                Shilajit contains fulvic acid, which helps improve brain function and memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto my-16 px-6">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-10">Why Choose Our Shilajit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">100% Pure & Organic</h3>
            <p className="mt-4 text-gray-700">
              We source our Shilajit from high-altitude Himalayan regions, ensuring purity and high bioavailability. No
              fillers, no additives—just pure, unadulterated Shilajit.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Clinically Tested</h3>
            <p className="mt-4 text-gray-700">
              Each batch is rigorously tested for heavy metals and contaminants, providing you with a safe and potent
              supplement.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* <footer className="bg-red-500 py-6">
        <div className="container mx-auto text-center text-white">
          <p className="text-lg">&copy; 2024 Shilajit Medicine. All Rights Reserved.</p>
          <p className="text-sm mt-2">Contact Us: info@shilajitmedicine.com</p>
        </div>
      </footer> */}
    </div>
  );
};

export default About;

