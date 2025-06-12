
import React from 'react';
import { Building2, Handshake } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = [
    { name: 'TechCorp Solutions', logo: '🏢', tier: 'Title Sponsor', color: 'from-blue-500 to-purple-600' },
    { name: 'InnovateX', logo: '🚀', tier: 'Gold Sponsor', color: 'from-yellow-400 to-orange-500' },
    { name: 'DataFlow Systems', logo: '📊', tier: 'Silver Sponsor', color: 'from-gray-400 to-gray-600' },
    { name: 'CloudTech Pro', logo: '☁️', tier: 'Silver Sponsor', color: 'from-gray-400 to-gray-600' }
  ];

  const partners = [
    { name: 'VIT-AP University', logo: '🎓', type: 'Academic Partner' },
    { name: 'T-Hub Hyderabad', logo: '🏛️', type: 'Incubation Partner' },
    { name: 'IEEE Student Branch', logo: '⚡', type: 'Technical Partner' },
    { name: 'ACM Chapter', logo: '💻', type: 'Community Partner' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Sponsors & Partners
          </h2>
          
          {/* Sponsors */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Building2 className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Sponsors</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="modern-card p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${sponsor.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {sponsor.logo}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{sponsor.name}</h4>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {sponsor.tier}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Handshake className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Partners</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="modern-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    {partner.logo}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{partner.name}</h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {partner.type}
                  </span>
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
