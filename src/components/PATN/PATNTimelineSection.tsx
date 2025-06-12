import React from 'react';
import { CalendarDays, Users, Presentation, Trophy } from 'lucide-react';

const PATNTimelineSection = () => {
  const timelineSteps = [
    {
      icon: <CalendarDays className="w-6 h-6 text-[#5B21B6]" />,
      title: "Registration",
      date: "Until July 20, 2025",
      description: "Submit your application with presentation topic and abstract"
    },
    {
      icon: <Users className="w-6 h-6 text-[#5B21B6]" />,
      title: "Participant Selection",
      date: "July 25, 2025",
      description: "Selected participants will be notified via email"
    },
    {
      icon: <Presentation className="w-6 h-6 text-[#5B21B6]" />,
      title: "Competition Day",
      date: "August 5, 2025",
      description: "Present your topic to the jury panel and audience"
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#5B21B6]" />,
      title: "Results & Awards",
      date: "August 5, 2025",
      description: "Winners announcement and prize distribution"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 [text-shadow:_0_1px_10px_rgb(91_33_182_/_20%)]">
            Event Timeline
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#5B21B6] rounded-full shadow-[0_0_20px_rgba(91,33,182,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-[#5B21B6]/20 bg-black/40 p-6 
              shadow-[0_4px_20px_-2px_rgba(91,33,182,0.25),0_0_8px_0_rgba(91,33,182,0.1)] 
              hover:shadow-[0_8px_30px_-2px_rgba(91,33,182,0.35),0_0_12px_0_rgba(91,33,182,0.2)]
              hover:border-[#5B21B6]/40 group backdrop-blur-sm transition-all duration-500
              before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-[#5B21B6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            >
              <div className="relative flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-[#5B21B6]/5 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(91,33,182,0.2)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 [text-shadow:_0_1px_5px_rgb(91_33_182_/_15%)]">
                  {step.title}
                </h3>
                <div className="text-[#5B21B6] font-semibold mb-3 [text-shadow:_0_1px_8px_rgb(91_33_182_/_20%)]">
                  {step.date}
                </div>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PATNTimelineSection;
