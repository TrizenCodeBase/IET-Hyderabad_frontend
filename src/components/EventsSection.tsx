import React, { useState } from 'react';
import EventCard from './EventCard';

const EventsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const patnEvent = {
    name: 'PATN',
    description: 'Present a Technical Note - Showcase your innovative ideas and technical solutions',
    teamSize: 'Individual/Team',
    prize: 'TBD',
    fee: 'TBD',
    status: 'open' as const,
    category: 'Technical'
  };

  const techTalkEvent = {
    name: 'TechTalk',
    description: 'Share your knowledge and expertise in cutting-edge technologies',
    teamSize: 'Individual',
    prize: 'TBD',
    fee: 'TBD',
    status: 'open' as const,
    category: 'Speaking'
  };

  const networkEvents = [
    {
      name: 'InnoThon',
      description: 'Ideate solutions using AI, IoT, AR/VR, Smart Cities, HealthTech, EdTech',
      teamSize: '2–3',
      prize: '₹5,000 (1st), ₹3,000 (Runner-up)',
      fee: '₹300 (IET) / ₹600 (Non-members)',
      status: 'open' as const,
      category: 'Ideation'
    },
    {
      name: 'ProtoPlanet',
      description: 'Build hardware prototypes in IoT, Robotics, Embedded Tech',
      teamSize: '2–3',
      prize: '₹10,000 (1st), ₹5,000 (Runner-up)',
      fee: '₹300 / ₹600',
      status: 'open' as const,
      category: 'Hardware'
    },
    {
      name: 'StartupSphere',
      description: 'Pitch startup ideas in AI, Blockchain, SpaceTech, CleanTech',
      teamSize: '2–3',
      prize: '₹5,000 (1st), ₹3,000 (Runner-up)',
      fee: '₹300 / ₹600',
      status: 'open' as const,
      category: 'Pitch'
    },
    {
      name: 'AppAstral',
      description: 'Design a mobile app for IET updates with future-tech features',
      teamSize: 'Max 2',
      prize: '₹5,000 (1st), ₹3,000 (Runner-up)',
      fee: '₹300 / ₹600',
      status: 'open' as const,
      category: 'App'
    }
  ];

  const allEvents = [patnEvent, techTalkEvent, ...networkEvents];
  const categories = ['all', 'Technical', 'Speaking', 'Ideation', 'Hardware', 'Pitch', 'App'];

  const filteredEvents = selectedCategory === 'all' 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  return (
    <section id="events" className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-lg relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Our Events
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Explore our exciting range of technology and innovation competitions designed to challenge and inspire the next generation of engineers and innovators.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 ${
                  selectedCategory === category
                    ? 'bg-background text-foreground shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105'
                    : 'bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 text-white hover:border-[#B100FF]/40 hover:shadow-[0_0_30px_rgba(110,0,255,0.2)]'
                }`}
              >
                {category === 'all' ? 'All Events' : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.name} 
                className="animate-fade-in backdrop-blur-xl bg-black/40 rounded-lg border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transition-all duration-500 transform hover:scale-[1.02]" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
