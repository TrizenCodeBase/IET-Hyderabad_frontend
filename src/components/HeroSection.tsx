import React from 'react';
import { Zap, Star, Users, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multiple layered background images with improved overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop'),
              url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop'),
              url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop')
            `,
            backgroundPosition: 'top right, bottom left, center',
            backgroundSize: '40% 50%, 35% 45%, cover',
            backgroundBlendMode: 'overlay, multiply, normal'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-blue-900/90 backdrop-blur-sm"></div>
        
        {/* Enhanced floating animated elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Added more floating elements */}
        <div className="absolute top-1/3 right-24 w-32 h-32 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-16 md:mt-20">
        <div className="animate-fade-in space-y-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-bounce-slow">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <p className="text-sm font-medium text-white/90">Registration Open</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
              InnoVerse
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-white/60 via-blue-300 to-purple-300 rounded-full mx-auto mb-6 transform hover:scale-110 transition-transform"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white/95 tracking-wide">
            Future Technology Conclave 2025
          </h2>
          
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 mb-8 hover:bg-white/15 transition-all duration-300">
            <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
            <p className="text-lg font-semibold text-white">
              Organized by IET Hyderabad Local Network
            </p>
          </div>
          
          <p className="text-xl md:text-2xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 tracking-wide">
            Explore. Invent. Impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-3">
                <Star className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                Register Now
              </span>
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              <span className="flex items-center gap-3">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Events
              </span>
            </button>
          </div>
          
          {/* Scroll indicator - Now positioned in the flow */}
          <div className="flex justify-center mt-16">
            <ChevronDown className="w-6 h-6 text-white/70 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
