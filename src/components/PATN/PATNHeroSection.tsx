import React from 'react';
import { Zap, Star, Calendar, MapPin } from 'lucide-react';

const PATNHeroSection = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with subtle star-like dots */}
      <div className="absolute inset-0">
        {/* Animated stars/dots effect */}
        <div className="absolute inset-0">
          <div className="stars-small"></div>
          <div className="stars-medium"></div>
          <div className="stars-large"></div>
        </div>
        
        {/* Floating orbs with subtle glow */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#3B82F6] rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-[#3B82F6] rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-[#3B82F6] rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-24 w-2 h-2 bg-[#3B82F6] rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-screen-lg mx-auto mt-16 md:mt-20">
        <div className="animate-fade-in space-y-6">
          <div className="mb-6">
            <div className="relative overflow-hidden inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-[#3B82F6]/20 rounded-full px-4 py-1.5 mb-4 
              shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25),0_0_8px_0_rgba(59,130,246,0.1)] 
              hover:shadow-[0_8px_30px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)]
              hover:border-[#3B82F6]/40 transition-all duration-500
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-[#3B82F6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
              <span className="inline-block w-1 h-1 rounded-full bg-[#3B82F6] animate-ping shadow-[0_0_10px_rgba(59,130,246,0.4)]"></span>
              <p className="text-xs font-medium text-white tracking-wide">Registration Open</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-3 text-white [text-shadow:_0_2px_15px_rgb(59_130_246_/_25%)]">
              Present Around <span className="text-[#1E90FF]">the Network</span>
            </h1>
            <div className="h-0.5 w-32 mx-auto mb-4 rounded-full bg-[#3B82F6] shadow-[0_0_30px_rgba(59,130,246,0.4)]"></div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#3B82F6] tracking-wide [text-shadow:_0_1px_10px_rgb(59_130_246_/_30%)]">
            PATN - 2025
          </h2>
          
          <div className="relative overflow-hidden inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-[#3B82F6]/20 rounded-full px-4 py-2 mb-4 
            shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25),0_0_8px_0_rgba(59,130,246,0.1)] 
            hover:shadow-[0_8px_30px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)]
            hover:border-[#3B82F6]/40 transition-all duration-500
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-[#3B82F6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
            <Zap className="w-3 h-3 text-white" />
            <p className="text-sm font-semibold text-white tracking-wide">
              Organized by IET Hyderabad Local Network
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto [text-shadow:_0_1px_5px_rgb(0_0_0_/_50%)]">
            Showcase your presentation skills and technical knowledge
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
            <div className="relative overflow-hidden inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-[#3B82F6]/20 rounded-full px-3 py-1.5 
              shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25),0_0_8px_0_rgba(59,130,246,0.1)] 
              hover:shadow-[0_8px_30px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)]
              hover:border-[#3B82F6]/40 transition-all duration-500
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-[#3B82F6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
              <Calendar className="w-3 h-3 text-[#3B82F6]" />
              <span className="text-sm">Registration: Until July 20, 2025</span>
            </div>
            <div className="relative overflow-hidden inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-[#3B82F6]/20 rounded-full px-3 py-1.5 
              shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25),0_0_8px_0_rgba(59,130,246,0.1)] 
              hover:shadow-[0_8px_30px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)]
              hover:border-[#3B82F6]/40 transition-all duration-500
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-[#3B82F6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
              <MapPin className="w-3 h-3 text-[#3B82F6]" />
              <span className="text-sm">VIT-AP University, Amaravati</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            
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

export default PATNHeroSection;
