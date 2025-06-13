import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black relative">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
      
      <div className="py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/iet-logo-new.png"
                  alt="IET Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-white/80 text-base leading-relaxed">
                Future Technology Conclave 2025
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
              <p className="text-white/80 mb-3 text-base">📧 ietln.hyderabad@gmail.com</p>
              <div className="flex space-x-3">
                <a href="#" className="p-2 glassmorphism rounded-lg border border-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 glassmorphism rounded-lg border border-white/20 hover:border-white/50 transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-white transition-colors text-base hover:underline">Terms & Conditions</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors text-base hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-6 text-center">
            <p className="text-white/80 text-base">
              © 2025 IET Hyderabad Local Network. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
