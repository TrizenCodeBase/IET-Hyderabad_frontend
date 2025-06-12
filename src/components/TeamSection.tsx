
import React from 'react';
import { Users, Crown, Star, Award } from 'lucide-react';

const TeamSection = () => {
  const organizers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Event Director',
      department: 'Computer Science & Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      tier: 'director',
      bio: 'Leading innovation in tech education for over 15 years'
    },
    {
      name: 'Prof. Priya Sharma',
      role: 'Academic Coordinator',
      department: 'Innovation & Entrepreneurship',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face',
      tier: 'coordinator',
      bio: 'Expert in startup mentorship and technology innovation'
    },
    {
      name: 'Mr. Arjun Reddy',
      role: 'Technical Lead',
      department: 'Software Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      tier: 'lead',
      bio: 'Full-stack developer with expertise in modern technologies'
    },
    {
      name: 'Ms. Kavya Patel',
      role: 'Student Coordinator',
      department: 'CSE Final Year',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      tier: 'student',
      bio: 'Passionate about organizing tech events and community building'
    }
  ];

  const committees = [
    {
      name: 'Technical Committee',
      members: ['Rahul Gupta', 'Sneha Iyer', 'Vikram Singh'],
      icon: Star,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Registration Team',
      members: ['Anitha Rao', 'Kiran Kumar', 'Meera Joshi'],
      icon: Users,
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Event Management',
      members: ['Sanjay Reddy', 'Pooja Sharma', 'Ravi Patel'],
      icon: Award,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'director': return Crown;
      case 'coordinator': return Star;
      case 'lead': return Award;
      default: return Users;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'director': return 'from-yellow-400 to-orange-500';
      case 'coordinator': return 'from-purple-500 to-pink-500';
      case 'lead': return 'from-blue-500 to-indigo-500';
      default: return 'from-green-500 to-teal-500';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          
          {/* Key Organizers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Key Organizers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizers.map((organizer, index) => {
                const TierIcon = getTierIcon(organizer.tier);
                return (
                  <div key={index} className="modern-card p-6 text-center">
                    <div className="relative mb-4">
                      <img 
                        src={organizer.image} 
                        alt={organizer.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                      />
                      <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${getTierColor(organizer.tier)} rounded-full flex items-center justify-center`}>
                        <TierIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{organizer.name}</h4>
                    <p className="text-purple-600 font-semibold text-sm mb-1">{organizer.role}</p>
                    <p className="text-gray-600 text-xs mb-3">{organizer.department}</p>
                    <p className="text-gray-700 text-xs">{organizer.bio}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Committee Teams */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Committee Teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {committees.map((committee, index) => {
                const IconComponent = committee.icon;
                return (
                  <div key={index} className="modern-card p-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${committee.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">{committee.name}</h4>
                    <div className="space-y-2">
                      {committee.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{member}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
