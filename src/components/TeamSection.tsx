import React from 'react';
import { Users } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. John Doe',
      role: 'Faculty Coordinator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      department: 'Computer Science'
    },
    {
      name: 'Dr. Jane Smith',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      department: 'Electronics'
    },
    {
      name: 'Prof. Mike Johnson',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop',
      department: 'Electrical'
    },
    {
      name: 'Dr. Sarah Wilson',
      role: 'Student Mentor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      department: 'Mechanical'
    }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-fade-in space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Our Team
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="backdrop-blur-xl bg-black/40 rounded-lg p-4 text-center border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-all duration-500 group"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 bg-background rounded-lg rotate-6 transform group-hover:rotate-12 transition-transform duration-500"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative w-full h-full object-cover rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center justify-center gap-2 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 bg-background rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></span>
                    <span className="text-gray-300 text-xs">{member.role}</span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 bg-background rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></span>
                    <span className="text-gray-300 text-xs">{member.department}</span>
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

export default TeamSection;
