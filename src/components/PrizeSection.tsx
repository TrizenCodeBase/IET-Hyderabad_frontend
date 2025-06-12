
import React from 'react';

const PrizeSection = () => {
  const prizeData = [
    { event: 'InnoThon', first: '₹5,000', runnerUp: '₹3,000' },
    { event: 'ProtoPlanet', first: '₹10,000', runnerUp: '₹5,000' },
    { event: 'StartupSphere', first: '₹5,000', runnerUp: '₹3,000' },
    { event: 'AppAstral', first: '₹5,000', runnerUp: '₹3,000' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Prize Pool</h2>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-white text-base">Event</th>
                    <th className="px-6 py-4 text-left font-bold text-white text-base">1st Prize</th>
                    <th className="px-6 py-4 text-left font-bold text-white text-base">Runner-Up</th>
                  </tr>
                </thead>
                <tbody>
                  {prizeData.map((prize, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-6 py-4 font-semibold text-purple-600 text-base">{prize.event}</td>
                      <td className="px-6 py-4 text-green-600 font-bold text-base">{prize.first}</td>
                      <td className="px-6 py-4 text-blue-600 font-bold text-base">{prize.runnerUp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
