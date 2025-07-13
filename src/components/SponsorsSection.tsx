import React from 'react';
import { Building2, Handshake } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = [
    { name: 'TechCorp Solutions', logo: '🏢', tier: 'Title Sponsor', color: 'bg-background' },
    { name: 'InnovateX', logo: '🚀', tier: 'Gold Sponsor', color: 'bg-background' },
    { name: 'DataFlow Systems', logo: '📊', tier: 'Silver Sponsor', color: 'bg-background' },
    { name: 'CloudTech Pro', logo: '☁️', tier: 'Silver Sponsor', color: 'bg-background' }
  ];

  const partners = [
    { name: 'VIT-AP University', logo: '🎓', type: 'Academic Partner' },
    { name: 'T-Hub Hyderabad', logo: '🏛️', type: 'Incubation Partner' },
    { name: 'IEEE Student Branch', logo: '⚡', type: 'Technical Partner' },
    { name: 'ACM Chapter', logo: '💻', type: 'Community Partner' }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-fade-in space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Our Sponsors & Partners
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          {/* Sponsors */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Building2 className="w-4 h-4 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white">Sponsors</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sponsors.map((sponsor, index) => (
                <div 
                  key={index} 
                  className="backdrop-blur-xl bg-black/40 rounded-lg p-4 text-center border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-all duration-500"
                >
                  <div className={`w-12 h-12 ${sponsor.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                    {sponsor.logo}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{sponsor.name}</h4>
                  <div className="inline-flex items-center justify-center gap-2 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 bg-background rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></span>
                    <span className="text-gray-300 text-xs">{sponsor.tier}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Handshake className="w-4 h-4 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white">Partners</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="backdrop-blur-xl bg-black/40 rounded-lg p-4 text-center border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {partner.logo}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{partner.name}</h4>
                  <div className="inline-flex items-center justify-center gap-2 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 bg-background rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></span>
                    <span className="text-gray-300 text-xs">{partner.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
