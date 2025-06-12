import React from 'react';
import { ExternalLink, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const PATNRegistrationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Present?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join the PATN Competition and showcase your presentation skills to a panel of experts
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Registration Requirements</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">Must be an IET member</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">Individual participation only</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">3-minute video submission required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">Choose any tech/engineering topic</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Important Information</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-200">Upload video to YouTube as Unlisted</span>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-200">Registration deadline: July 20, 2025</span>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-200">Free participation for IET members</span>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-200">Event theme: Presentation Excellence</span>
                </div>
              </div>
            </div>
          </div>
          
          <Link
            to="/patn/register"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Register Now</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
          
          <p className="text-sm text-gray-300 mt-6">
            Registration closes on July 20, 2025 - Don't miss out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PATNRegistrationSection;
