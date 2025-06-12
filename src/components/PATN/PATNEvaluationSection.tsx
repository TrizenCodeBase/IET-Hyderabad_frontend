
import React from 'react';
import { BarChart3, MessageSquare } from 'lucide-react';

const PATNEvaluationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Evaluation Criteria
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="modern-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Presentation Skills</h3>
                  <p className="text-3xl font-bold text-blue-600">70%</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Your ability to communicate effectively, engage the audience, and deliver a compelling presentation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Clarity and fluency</li>
                <li>• Audience engagement</li>
                <li>• Visual aids effectiveness</li>
                <li>• Time management</li>
                <li>• Confidence and delivery</li>
              </ul>
            </div>
            
            <div className="modern-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Technical Content</h3>
                  <p className="text-3xl font-bold text-green-600">30%</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                The technical accuracy, depth, and relevance of your chosen topic.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Technical accuracy</li>
                <li>• Content depth and research</li>
                <li>• Innovation and insights</li>
                <li>• Relevance to current trends</li>
                <li>• Practical applications</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="modern-card p-6 inline-block">
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-purple-600">Q&A Session:</span> 5 minutes with the jury panel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PATNEvaluationSection;
