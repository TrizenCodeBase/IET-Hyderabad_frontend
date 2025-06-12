
import React from 'react';
import { Users, Clock, Trophy } from 'lucide-react';

const PATNAboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About PATN Competition
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Competition Overview</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Present Around the Network (PATN) Competition invites individual IET members to deliver compelling presentations on technology and engineering topics. This competition is designed to enhance presentation skills while showcasing technical expertise.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Participants have the freedom to choose any engineering or technology-related topic that interests them, making this competition a platform for knowledge sharing and innovation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="modern-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Presentation Duration</h4>
                    <p className="text-gray-600">10 minutes + 5 minutes Q&A</p>
                  </div>
                </div>
              </div>
              
              <div className="modern-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Participation</h4>
                    <p className="text-gray-600">Individual IET Members Only</p>
                  </div>
                </div>
              </div>
              
              <div className="modern-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Prize Pool</h4>
                    <p className="text-gray-600">₹15,000 Total Prize Money</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PATNAboutSection;
