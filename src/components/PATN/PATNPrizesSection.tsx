import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

const PATNPrizesSection = () => {
  const prizes = [
    {
      icon: <Trophy className="w-8 h-8 text-[#3B82F6]" />,
      title: "First Prize",
      amount: "₹7,000",
      benefits: ["Certificate of Excellence", "Regional Round Entry", "Mentorship Opportunity"]
    },
    {
      icon: <Award className="w-8 h-8 text-[#3B82F6]" />,
      title: "Second Prize",
      amount: "₹5,000",
      benefits: ["Certificate of Merit", "Regional Round Entry", "Networking Access"]
    },
    {
      icon: <Medal className="w-8 h-8 text-[#3B82F6]" />,
      title: "Third Prize",
      amount: "₹3,000",
      benefits: ["Certificate of Achievement", "Regional Round Entry", "Event Access Pass"]
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 [text-shadow:_0_1px_10px_rgb(59_130_246_/_20%)]">
            Prizes & Benefits
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#3B82F6] rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-[#3B82F6]/20 bg-black/40 p-6 
              shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25),0_0_8px_0_rgba(59,130,246,0.1)] 
              hover:shadow-[0_8px_30px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)]
              hover:border-[#3B82F6]/40 group backdrop-blur-sm transition-all duration-500
              before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-[#3B82F6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            >
              <div className="relative flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-[#3B82F6]/5 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  {prize.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 [text-shadow:_0_1px_5px_rgb(59_130_246_/_15%)]">
                  {prize.title}
                </h3>
                <div className="text-3xl font-bold text-[#3B82F6] mb-4 [text-shadow:_0_1px_8px_rgb(59_130_246_/_20%)]">
                  {prize.amount}
                </div>
                <ul className="space-y-2">
                  {prize.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-gray-300">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PATNPrizesSection;
