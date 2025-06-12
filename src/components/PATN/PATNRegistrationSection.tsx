import React from 'react';
import { ClipboardList, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PATNRegistrationSection = () => {
  const navigate = useNavigate();

  const requirements = [
    "Must be an IET member under 35 years old",
    "Valid student or professional ID",
    "Abstract of your presentation (200-300 words)",
    "Presentation slides in PDF format",
    "High-quality profile photo"
  ];

  const guidelines = [
    "Presentation duration: 10 minutes",
    "Q&A session: 5 minutes",
    "Topic must be technology-related",
    "Original content only",
    "Professional presentation attire required"
  ];

  return (
    <section id="registration" className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 [text-shadow:_0_1px_10px_rgb(91_33_182_/_20%)]">
            Registration Details
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#5B21B6] rounded-full shadow-[0_0_20px_rgba(91,33,182,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative overflow-hidden rounded-lg border border-[#5B21B6]/20 bg-black/40 p-6 
            shadow-[0_4px_20px_-2px_rgba(91,33,182,0.25),0_0_8px_0_rgba(91,33,182,0.1)] 
            hover:shadow-[0_8px_30px_-2px_rgba(91,33,182,0.35),0_0_12px_0_rgba(91,33,182,0.2)]
            hover:border-[#5B21B6]/40 group backdrop-blur-sm transition-all duration-500
            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-[#5B21B6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          >
            <div className="relative flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-[#5B21B6]/5 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(91,33,182,0.2)]">
                <CheckCircle className="w-6 h-6 text-[#5B21B6]" />
              </div>
              <h3 className="text-xl font-semibold text-white [text-shadow:_0_1px_5px_rgb(91_33_182_/_15%)]">
                Requirements
              </h3>
            </div>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B21B6] shadow-[0_0_8px_rgba(91,33,182,0.3)]"></div>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-[#5B21B6]/20 bg-black/40 p-6 
            shadow-[0_4px_20px_-2px_rgba(91,33,182,0.25),0_0_8px_0_rgba(91,33,182,0.1)] 
            hover:shadow-[0_8px_30px_-2px_rgba(91,33,182,0.35),0_0_12px_0_rgba(91,33,182,0.2)]
            hover:border-[#5B21B6]/40 group backdrop-blur-sm transition-all duration-500
            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-[#5B21B6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          >
            <div className="relative flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-[#5B21B6]/5 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(91,33,182,0.2)]">
                <AlertCircle className="w-6 h-6 text-[#5B21B6]" />
              </div>
              <h3 className="text-xl font-semibold text-white [text-shadow:_0_1px_5px_rgb(91_33_182_/_15%)]">
                Guidelines
              </h3>
            </div>
            <ul className="space-y-3">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B21B6] shadow-[0_0_8px_rgba(91,33,182,0.3)]"></div>
                  {guideline}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/patn/register')}
            className="relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium 
              bg-[#5B21B6] text-white px-8 py-2.5
              shadow-[0_4px_20px_-2px_rgba(91,33,182,0.35),0_0_12px_0_rgba(91,33,182,0.2)] 
              hover:shadow-[0_8px_30px_-2px_rgba(91,33,182,0.45),0_0_20px_0_rgba(91,33,182,0.3)]
              hover:scale-105 transition-all duration-500
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B21B6] focus-visible:ring-offset-2
              disabled:pointer-events-none disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              Register Now
            </span>
            <div className="absolute inset-0 rounded-lg bg-[#5B21B6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PATNRegistrationSection;
