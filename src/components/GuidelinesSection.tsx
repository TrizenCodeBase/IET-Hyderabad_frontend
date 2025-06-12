
import React from 'react';

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
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">General Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-purple-600">{guideline.title}</h3>
                <ul className="space-y-3">
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
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
