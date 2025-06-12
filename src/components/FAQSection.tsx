
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
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-purple-600 pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-purple-600" />
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
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
