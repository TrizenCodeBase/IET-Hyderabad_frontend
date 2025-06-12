
import React from 'react';

const RegisterSection = () => {
  return (
    <section id="register" className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join InnoVerse?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on this incredible opportunity to showcase your innovation and compete with the best minds!
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-xl font-bold text-base hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl mb-6">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
