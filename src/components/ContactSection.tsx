
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      primary: 'innoverse2024@vitap.ac.in',
      secondary: 'For general inquiries and support',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      primary: '+91 98765 43210',
      secondary: 'Available 9 AM - 6 PM (Mon-Fri)',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+91 87654 32109',
      secondary: 'Quick responses and updates',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Globe,
      title: 'Website',
      primary: 'innoverse.vitap.ac.in',
      secondary: 'Latest updates and resources',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency support only' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Contact & Support
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="modern-card p-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h4>
                      <p className="text-purple-600 font-semibold mb-1">{method.primary}</p>
                      <p className="text-gray-600 text-sm">{method.secondary}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Support Hours */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Support Hours</h3>
              <div className="modern-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-gray-800">Available Hours</span>
                </div>
                <div className="space-y-3">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-purple-600 font-semibold text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <p className="text-purple-700 text-sm">
                    <strong>Emergency Support:</strong> For urgent technical issues during the event, contact our 24/7 helpline at +91 98765 43211
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
