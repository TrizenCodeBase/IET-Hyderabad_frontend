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
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 relative z-10">
        <div className="animate-fade-in space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_20%)]">
              Event Gallery
            </h2>
            <div className="h-1 w-40 mx-auto rounded-full bg-background shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="backdrop-blur-xl bg-black/40 rounded-lg overflow-hidden border border-[#B100FF]/20 shadow-[0_0_15px_rgba(110,0,255,0.15)] hover:shadow-[0_0_30px_rgba(110,0,255,0.3)] transform hover:scale-[1.02] transition-all duration-500 group"
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent backdrop-blur-[2px]" />
                    <div className="absolute top-3 right-3">
                      <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {item.type === 'video' ? (
                          <Play className="w-4 h-4 text-foreground" />
                        ) : (
                          <Camera className="w-4 h-4 text-foreground" />
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-background rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                          <IconComponent className="w-3 h-3 text-foreground" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 text-xs">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <button className="px-6 py-2.5 bg-background text-foreground rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transform hover:scale-[1.02] transition-all duration-500">
              View More Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
