import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      primary: 'IET Hyderabad Local network2024@vitap.ac.in',
      secondary: 'For general inquiries and support',
      color: 'bg-background'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      primary: '+91 98765 43210',
      secondary: 'Available 9 AM - 6 PM (Mon-Fri)',
      color: 'bg-background'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+91 87654 32109',
      secondary: 'Quick responses and updates',
      color: 'bg-background'
    },
    {
      icon: Globe,
      title: 'Website',
      primary: 'IET Hyderabad Local network.vitap.ac.in',
      secondary: 'Latest updates and resources',
      color: 'bg-background'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency support only' }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-on-scroll space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Contact & Support
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Contact Methods */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div 
                      key={index} 
                      className="backdrop-blur-xl bg-black/40 rounded-lg p-5 border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-all duration-500"
                    >
                      <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                        <IconComponent className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{method.title}</h4>
                      <p className="text-purple-300 font-bold mb-1 text-sm">{method.primary}</p>
                      <p className="text-gray-300 text-xs">{method.secondary}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Support Hours */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Support Hours</h3>
              <div className="backdrop-blur-xl bg-black/40 rounded-lg p-5 border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-lg font-bold text-white">Available Hours</span>
                </div>
                <div className="space-y-3">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{schedule.day}</span>
                      <span className="text-purple-300 font-bold text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 backdrop-blur-xl bg-black/40 rounded-lg border border-[#B100FF]/20">
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-bold block mb-2">Emergency Support:</span>
                    For urgent technical issues during the event, contact our 24/7 helpline at{' '}
                    <span className="text-purple-300 font-bold">+91 98765 43211</span>
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
