
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Event Coordinators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-purple-600 mb-2">{coordinator.event}</h3>
                <p className="text-base font-semibold text-gray-700 mb-1">{coordinator.name}</p>
                <p className="text-gray-600 font-medium text-sm">📞 {coordinator.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
