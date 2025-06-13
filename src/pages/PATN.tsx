import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PATNHeroSection from '../components/PATN/PATNHeroSection';
import PATNAboutSection from '../components/PATN/PATNAboutSection';
import PATNTimelineSection from '../components/PATN/PATNTimelineSection';
import PATNEvaluationSection from '../components/PATN/PATNEvaluationSection';
import PATNPrizesSection from '../components/PATN/PATNPrizesSection';
import PATNRegistrationSection from '../components/PATN/PATNRegistrationSection';
import { useTheme } from '../contexts/ThemeContext';

const PATN = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-[#0A1628]' : 'bg-gradient-to-br from-[#0A1628] to-[#1a365d]'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Glowing Dots */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#3B82F6] rounded-full animate-glow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.5 + 0.25
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <PATNHeroSection />
        <PATNAboutSection />
        <PATNEvaluationSection />
        <PATNTimelineSection />
        <PATNPrizesSection />
        <PATNRegistrationSection />
        <Footer />
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        .animate-glow {
          animation: glow 3s infinite;
        }

        /* Modern Glassmorphism */
        .glass-card {
          background: rgba(10, 22, 40, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(59, 130, 246, 0.1);
          box-shadow: 
            0 4px 24px -1px rgba(59, 130, 246, 0.1),
            0 0 1px 0 rgba(59, 130, 246, 0.1);
        }

        /* Text Styles */
        h2, h3 {
          color: #3B82F6;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
        }

        /* Button Styles */
        .primary-button {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px -1px rgba(59, 130, 246, 0.2);
        }

        .primary-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px -2px rgba(59, 130, 246, 0.3);
        }

        /* Link Styles */
        .hover-link {
          color: #3B82F6;
          transition: all 0.3s ease;
          position: relative;
        }

        .hover-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background: #3B82F6;
          transition: width 0.3s ease;
        }

        .hover-link:hover:after {
          width: 100%;
        }

        /* Section Transitions */
        section {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Scroll Progress Indicator */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(to right, #3B82F6, #60A5FA);
          z-index: 100;
          transition: width 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default PATN;
