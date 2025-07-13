import React from 'react';
import { MapPin, Clock, Car, Utensils, Wifi, Coffee } from 'lucide-react';

const VenueSection = () => {
  const venues = [
    {
      name: 'VIT-AP University',
      role: 'Main Event Venue',
      address: 'Inavolu, Beside AP Secretariat, Amaravati, Andhra Pradesh 522237',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
      features: ['Wi-Fi Available', 'Cafeteria', 'Parking', 'Air Conditioned'],
      description: 'State-of-the-art campus with modern facilities for innovation and learning.'
    },
    {
      name: 'T-Hub Hyderabad',
      role: 'Startup Showcase Venue',
      address: 'IIIT-H Campus, Gachibowli, Hyderabad, Telangana 500032',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
      features: ['Incubation Center', 'Mentorship', 'Networking', 'Demo Area'],
      description: 'Premier startup incubator fostering innovation and entrepreneurship.'
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'High-Speed Internet', description: 'Dedicated bandwidth for participants' },
    { icon: Coffee, name: 'Refreshments', description: 'Coffee, tea, and snacks available 24/7' },
    { icon: Utensils, name: 'Food Court', description: 'Multiple dining options on campus' },
    { icon: Car, name: 'Parking', description: 'Ample parking space for participants' }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-on-scroll space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Venue Information
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          {/* Venues */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {venues.map((venue, index) => (
              <div 
                key={index} 
                className="backdrop-blur-xl bg-black/40 rounded-lg overflow-hidden border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-transform duration-500 group"
              >
                <div className="relative h-48">
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent backdrop-blur-[2px] group-hover:hidden"></div>
                </div>
                <div className="p-4 bg-black/40 backdrop-blur-xl group-hover:bg-black/80 group-hover:backdrop-blur-none">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <MapPin className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-purple-300 font-bold text-sm">{venue.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">{venue.name}</h3>
                  <p className="text-gray-400 text-xs mb-3">{venue.address}</p>
                  <p className="text-gray-300 text-sm mb-4">{venue.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {venue.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-[#B100FF]/20 rounded-full px-3 py-1.5 group-hover:bg-black/80 group-hover:backdrop-blur-none"
                      >
                        <span className="w-1.5 h-1.5 bg-background rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></span>
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">Campus Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div 
                    key={index} 
                    className="backdrop-blur-xl bg-black/40 rounded-lg p-4 text-center border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-transform duration-500 group hover:backdrop-blur-none hover:bg-black/80"
                  >
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <IconComponent className="w-6 h-6 text-foreground" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">{amenity.name}</h4>
                    <p className="text-gray-300 text-sm">{amenity.description}</p>
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

export default VenueSection;
