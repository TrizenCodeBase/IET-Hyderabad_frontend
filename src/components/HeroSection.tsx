import React from 'react';
import { Zap, Star, Users, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with subtle star-like dots */}
      <div className="absolute inset-0">
        {/* Animated stars/dots effect */}
        <div className="absolute inset-0">
          <div className="stars-small"></div>
          <div className="stars-medium"></div>
          <div className="stars-large"></div>
        </div>
        
        {/* Floating orbs with subtle glow */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-background rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-background rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-background rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-24 w-2 h-2 bg-background rounded-full blur-sm animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-screen-lg mx-auto mt-16 md:mt-20">
        <div className="animate-fade-in space-y-6">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 rounded-full px-4 py-2 mb-4 hover:border-[#B100FF]/40 transition-all duration-500">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-background animate-ping"></span>
              <p className="text-sm font-medium text-white tracking-wide">Registration Open</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              IET Hyderabad Local Network
            </h1>
            <div className="h-1 w-40 mx-auto mb-6 rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-wide">
            Future Technology Conclave 2025
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 rounded-full px-6 py-3 mb-6 hover:border-[#B100FF]/40 hover:shadow-[0_0_30px_rgba(110,0,255,0.2)] transition-all duration-500">
            <Zap className="w-4 h-4 text-white" />
            <p className="text-base font-semibold text-white tracking-wide">
              Organized by IET Hyderabad Local Network
            </p>
          </div>
          
          <p className="text-xl md:text-2xl font-bold mb-8 text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)] tracking-wider">
            Explore. Invent. Impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-6 py-2.5 bg-background text-foreground rounded-lg font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-500">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                Register Now
              </span>
              <div className="absolute inset-0 rounded-lg bg-background opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </button>
            <button className="group px-6 py-2.5 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 text-white rounded-lg font-semibold text-sm hover:border-[#B100FF]/40 hover:shadow-[0_0_30px_rgba(110,0,255,0.2)] transition-all duration-500">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-500" />
                View Events
              </span>
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-12">
            <ChevronDown className="w-5 h-5 text-white animate-bounce opacity-75 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.7; }
          }
          
          .stars-small, .stars-medium, .stars-large {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(2px 2px at var(--star-x, 50%) var(--star-y, 50%), rgba(255, 255, 255, 0.3), transparent);
            background-size: 200px 200px;
            animation: twinkle 4s infinite;
          }
          
          .stars-medium {
            background-image: radial-gradient(3px 3px at var(--star-x, 30%) var(--star-y, 70%), rgba(255, 255, 255, 0.3), transparent);
            background-size: 300px 300px;
            animation-delay: 2s;
          }
          
          .stars-large {
            background-image: radial-gradient(4px 4px at var(--star-x, 70%) var(--star-y, 30%), rgba(255, 255, 255, 0.3), transparent);
            background-size: 400px 400px;
            animation-delay: 3s;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
