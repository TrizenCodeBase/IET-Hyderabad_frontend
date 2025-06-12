import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate?',
      answer: 'Only undergraduate engineering students from Telangana, Andhra Pradesh, and Chhattisgarh are eligible to participate.'
    },
    {
      question: 'Can I join more than one event?',
      answer: 'Yes, you can participate in multiple events, but separate registrations and fees are required for each event.'
    },
    {
      question: 'What does the fee include?',
      answer: 'The registration fee includes working lunch during the event days and access to all event facilities.'
    },
    {
      question: 'Is attendance mandatory for all members?',
      answer: 'A minimum of 2 team members must attend the offline rounds. All team members are encouraged to participate.'
    },
    {
      question: 'Will there be offline rounds?',
      answer: 'Yes, there will be regional rounds at VIT-AP University and the grand finale at T-Hub, Hyderabad.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-fade-in space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="backdrop-blur-xl bg-black/40 rounded-lg overflow-hidden border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-all duration-500"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 text-left flex justify-between items-center"
                >
                  <h3 className="text-lg font-bold text-white pr-6">{faq.question}</h3>
                  <div className={`w-8 h-8 bg-background rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] transform transition-all duration-500 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-foreground" />
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-4 border-t border-[#B100FF]/20">
                    <p className="text-gray-300 leading-relaxed pt-4 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
