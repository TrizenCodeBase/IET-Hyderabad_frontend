
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">About InnoVerse</h2>
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                InnoVerse is the flagship multi-event competition by IET Hyderabad Local Network, designed exclusively for undergraduate engineering students from Telangana, Andhra Pradesh, and Chhattisgarh.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Dive into challenges centered around emerging and future technologies and showcase your innovation, creativity, and entrepreneurial spirit.
              </p>
              <div className="flex justify-center items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">6</div>
                  <div className="text-sm text-gray-500">Events</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">₹28K</div>
                  <div className="text-sm text-gray-500">Prize Pool</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
                  <div className="text-sm text-gray-500">States</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
