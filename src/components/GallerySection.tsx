
import React from 'react';
import { Camera, Play, Users, Trophy } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      title: 'Team Collaboration',
      description: 'Students working together on innovative projects',
      type: 'photo',
      icon: Users
    },
    {
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      title: 'Coding Marathon',
      description: 'Participants during the intense coding sessions',
      type: 'photo',
      icon: Camera
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      title: 'Innovation Showcase',
      description: 'Final presentations and project demonstrations',
      type: 'video',
      icon: Play
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
      title: 'Award Ceremony',
      description: 'Celebrating winners and outstanding projects',
      type: 'photo',
      icon: Trophy
    },
    {
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      title: 'Campus Events',
      description: 'Various activities across VIT-AP campus',
      type: 'photo',
      icon: Camera
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      title: 'Networking Sessions',
      description: 'Industry experts interacting with participants',
      type: 'photo',
      icon: Users
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Event Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="modern-card overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      {item.type === 'video' ? (
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Camera className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-4 h-4 text-white" />
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300">
              View More Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
