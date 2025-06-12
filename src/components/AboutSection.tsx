import React from 'react';
import { Zap, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
            About IET Hyderabad Local Network
          </h2>
          
          <div className="backdrop-blur-xl bg-black/40 rounded-xl p-6 text-center border border-[#B100FF]/20 shadow-[0_0_30px_rgba(110,0,255,0.15)]">
            <div className="max-w-4xl mx-auto">
              <p className="text-base leading-relaxed text-white mb-4">
                IET Hyderabad Local Network is the flagship multi-event competition by IET Hyderabad Local Network, designed exclusively for undergraduate engineering students from Telangana, Andhra Pradesh, and Chhattisgarh.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                Dive into challenges centered around emerging and future technologies and showcase your innovation, creativity, and entrepreneurial spirit.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      <Zap className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">6</div>
                  <div className="text-xs text-gray-400">Events</div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      <Award className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">₹28K</div>
                  <div className="text-xs text-gray-400">Prize Pool</div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      <Globe className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">3</div>
                  <div className="text-xs text-gray-400">States</div>
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
