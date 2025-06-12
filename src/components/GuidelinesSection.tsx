import React from 'react';
import { Check } from 'lucide-react';

const GuidelinesSection = () => {
  const guidelines = [
    {
      title: 'Eligibility',
      items: [
        'Only UG students from Telangana, AP, Chhattisgarh',
        'Valid student ID required'
      ]
    },
    {
      title: 'Team Requirements',
      items: [
        'Team size: 2–3 (AppAstral max 2)',
        'No solo participation allowed',
        'Minimum 2 members must attend offline'
      ]
    },
    {
      title: 'Registration',
      items: [
        'Registration fee includes working lunch',
        'Separate registration for each event'
      ]
    },
    {
      title: 'Event Format',
      items: [
        'Online submissions + Offline rounds',
        'Regional round at VIT-AP',
        'Grand finale at T-Hub, Hyderabad'
      ]
    }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-fade-in space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              General Guidelines
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guidelines.map((guideline, index) => (
              <div 
                key={index} 
                className="backdrop-blur-xl bg-black/40 rounded-lg p-5 border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-all duration-500"
              >
                <h3 className="text-lg font-bold mb-4 text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
                  {guideline.title}
                </h3>
                <ul className="space-y-3">
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-background rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        <Check className="w-3 h-3 text-foreground" />
                      </div>
                      <span className="text-gray-300 leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
