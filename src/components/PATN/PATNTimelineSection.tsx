
import React from 'react';
import { Calendar, MapPin, Video, Users } from 'lucide-react';

const PATNTimelineSection = () => {
  const timelineSteps = [
    {
      step: 1,
      title: 'Registration & Video Submission',
      date: 'Deadline: July 20, 2025',
      description: 'Record a 3-minute video on your chosen topic and upload to YouTube (Unlisted)',
      icon: Video,
      action: 'Register at: https://iethlnevents.in/patn/',
      color: 'from-blue-500 to-purple-500'
    },
    {
      step: 2,
      title: 'Regional Presentation Round',
      date: 'August 2, 2025',
      description: 'Selected participants present live at VIT-AP University',
      icon: Users,
      action: 'Venue: VIT-AP University, Amaravati',
      color: 'from-green-500 to-teal-500'
    },
    {
      step: 3,
      title: 'Grand Final',
      date: 'October 11, 2025',
      description: 'Final round with top performers from regional rounds',
      icon: Calendar,
      action: 'Location: Hyderabad',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Competition Timeline
          </h2>
          
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1 modern-card p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-lg font-semibold text-purple-600 mb-3">{step.date}</p>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                        <MapPin className="w-4 h-4" />
                        <span>{step.action}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PATNTimelineSection;
