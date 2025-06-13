import React from 'react';
import { Presentation, Lightbulb, Target, MessageSquare } from 'lucide-react';

const PATNEvaluationSection = () => {
  const criteria = [
    {
      icon: <Presentation className="w-6 h-6 text-[#3B82F6]" />,
      title: "Presentation Skills",
      percentage: "35%",
      description: "Clarity, confidence, timing, and engagement with the audience"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#3B82F6]" />,
      title: "Technical Content",
      percentage: "35%",
      description: "Depth of knowledge, research quality, and technical accuracy"
    },
    {
      icon: <Target className="w-6 h-6 text-[#3B82F6]" />,
      title: "Visual Aids",
      percentage: "15%",
      description: "Quality and effectiveness of slides and visual materials"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#3B82F6]" />,
      title: "Q&A Session",
      percentage: "15%",
      description: "Ability to handle questions and provide clear answers"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 [text-shadow:_0_1px_10px_rgb(59_130_246_/_20%)]">
            Evaluation Criteria
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#3B82F6] rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-[#3B82F6]/20 bg-black/40 p-6 
              shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25),0_0_8px_0_rgba(59,130,246,0.1)] 
              hover:shadow-[0_8px_30px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)]
              hover:border-[#3B82F6]/40 group backdrop-blur-sm transition-all duration-500
              before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-[#3B82F6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-[#3B82F6]/5 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  {criterion.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 [text-shadow:_0_1px_5px_rgb(59_130_246_/_15%)]">
                  {criterion.title}
                </h3>
                <div className="text-2xl font-bold text-[#3B82F6] mb-3 [text-shadow:_0_1px_8px_rgb(59_130_246_/_20%)]">
                  {criterion.percentage}
                </div>
                <p className="text-gray-300">
                  {criterion.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PATNEvaluationSection;
