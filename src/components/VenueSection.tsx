
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Venue Information
          </h2>
          
          {/* Venues */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {venues.map((venue, index) => (
              <div key={index} className="modern-card overflow-hidden">
                <img 
                  src={venue.image} 
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-600 font-semibold text-sm">{venue.role}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{venue.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{venue.address}</p>
                  <p className="text-gray-700 mb-4">{venue.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {venue.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Campus Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div key={index} className="modern-card p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{amenity.name}</h4>
                    <p className="text-gray-600 text-sm">{amenity.description}</p>
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
