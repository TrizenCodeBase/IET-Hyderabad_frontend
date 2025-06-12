
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 border-t-4 border-blue-500 py-12 text-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-purple-600 font-bold text-base">IV</span>
              </div>
              <span className="font-bold text-xl text-white">InnoVerse</span>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              Future Technology Conclave 2025
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
            <p className="text-white/80 mb-3 text-base">📧 ietln.hyderabad@gmail.com</p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
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
    </footer>
  );
};

export default Footer;
