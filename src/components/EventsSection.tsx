
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

  const innoverseEvents = [
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

  const allEvents = [patnEvent, techTalkEvent, ...innoverseEvents];

  const categories = ['all', 'Technical', 'Speaking', 'Ideation', 'Hardware', 'Pitch', 'App'];

  const filteredEvents = selectedCategory === 'all' 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Events</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our exciting range of technology and innovation competitions designed to challenge and inspire the next generation of engineers and innovators.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-purple-600 border-2 border-purple-200 hover:border-purple-400 hover:shadow-md'
                }`}
              >
                {category === 'all' ? 'All Events' : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
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
