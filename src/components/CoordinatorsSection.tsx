import React from 'react';
import { Users } from 'lucide-react';

const CoordinatorsSection = () => {
  const coordinators = [
    { event: 'ProtoPlanet', name: 'Y. Bhavyasri', contact: '79811 23999' },
    { event: 'StartupSphere', name: 'Y. Harsha Sri', contact: '86396 48822' },
    { event: 'InnoThon', name: 'N. Nukaraju', contact: '86396 48822' },
    { event: 'AppAstral', name: 'M. Bhanu Bhargavi', contact: '81431 27444' }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-on-scroll space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Event Coordinators
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coordinators.map((coordinator, index) => (
              <div 
                key={index} 
                className="backdrop-blur-xl bg-black/40 rounded-lg p-5 text-center border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-all duration-500"
              >
                <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <Users className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-bold text-purple-300 mb-2">{coordinator.event}</h3>
                <p className="text-white font-semibold text-base mb-3">{coordinator.name}</p>
                <div className="inline-flex items-center justify-center gap-2 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 bg-background rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></span>
                  <span className="text-gray-300 text-sm">{coordinator.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
