
import React from 'react';
import { Presentation, Calendar, MapPin } from 'lucide-react';

const PATNHeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
            <Presentation className="w-5 h-5" />
            <span className="text-sm font-semibold">Presentation Competition</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Present Around the Network
            <span className="block text-2xl md:text-3xl text-blue-300 mt-2">PATN - 2025</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Organized by IET Hyderabad Local Network - Showcase your presentation skills and technical knowledge
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-300" />
              <span>Registration: Until July 20, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span>VIT-AP University, Amaravati</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PATNHeroSection;
