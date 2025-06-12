
import React from 'react';
import { Trophy, Award, Gift } from 'lucide-react';

const PATNPrizesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Prizes & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="modern-card p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Winner</h3>
              <p className="text-4xl font-bold text-yellow-600 mb-4">₹10,000</p>
              <p className="text-gray-600">
                First place winner receives the highest prize along with recognition and networking opportunities.
              </p>
            </div>
            
            <div className="modern-card p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Runner-Up</h3>
              <p className="text-4xl font-bold text-gray-600 mb-4">₹5,000</p>
              <p className="text-gray-600">
                Second place winner receives substantial prize money and recognition for their excellent presentation.
              </p>
            </div>
          </div>
          
          <div className="modern-card p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Additional Benefits</h3>
                <p className="text-gray-600">For all participants</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Certificates</h4>
                <p className="text-sm text-blue-600">All regional level participants receive certificates</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Networking</h4>
                <p className="text-sm text-purple-600">Connect with industry professionals and peers</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Skill Development</h4>
                <p className="text-sm text-green-600">Enhance presentation and communication skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PATNPrizesSection;
