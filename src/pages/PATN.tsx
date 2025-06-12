
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PATNHeroSection from '../components/PATN/PATNHeroSection';
import PATNAboutSection from '../components/PATN/PATNAboutSection';
import PATNTimelineSection from '../components/PATN/PATNTimelineSection';
import PATNEvaluationSection from '../components/PATN/PATNEvaluationSection';
import PATNPrizesSection from '../components/PATN/PATNPrizesSection';
import PATNRegistrationSection from '../components/PATN/PATNRegistrationSection';

const PATN = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <PATNHeroSection />
      <PATNAboutSection />
      <PATNEvaluationSection />
      <PATNTimelineSection />
      <PATNPrizesSection />
      <PATNRegistrationSection />
      <Footer />
    </div>
  );
};

export default PATN;
