import React from 'react';

const PrizeSection = () => {
  const prizeData = [
    { event: 'InnoThon', first: '₹5,000', runnerUp: '₹3,000' },
    { event: 'ProtoPlanet', first: '₹10,000', runnerUp: '₹5,000' },
    { event: 'StartupSphere', first: '₹5,000', runnerUp: '₹3,000' },
    { event: 'AppAstral', first: '₹5,000', runnerUp: '₹3,000' }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-on-scroll space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Prize Pool
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <div className="backdrop-blur-xl bg-black/40 rounded-lg overflow-hidden border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transition-all duration-500">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-background">
                    <th className="px-6 py-4 text-left font-bold text-foreground text-base tracking-wide">Event</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground text-base tracking-wide">1st Prize</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground text-base tracking-wide">Runner-Up</th>
                  </tr>
                </thead>
                <tbody>
                  {prizeData.map((prize, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-[#B100FF]/10 hover:bg-[#6E00FF]/5 transition-all duration-300"
                    >
                      <td className="px-6 py-4 font-semibold text-purple-300 text-sm tracking-wide">{prize.event}</td>
                      <td className="px-6 py-4 text-emerald-400 font-bold text-sm">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          {prize.first}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-blue-400 font-bold text-sm">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          {prize.runnerUp}
                        </span>
                      </td>
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
