
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import PrizeSection from '../components/PrizeSection';
import GuidelinesSection from '../components/GuidelinesSection';
import CoordinatorsSection from '../components/CoordinatorsSection';
import SponsorsSection from '../components/SponsorsSection';
import GallerySection from '../components/GallerySection';
import VenueSection from '../components/VenueSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import RegisterSection from '../components/RegisterSection';
import Footer from '../components/Footer';
import FloatingHelpButton from '../components/FloatingHelpButton';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <PrizeSection />
      <GuidelinesSection />
      <CoordinatorsSection />
      <SponsorsSection />
      <GallerySection />
      <VenueSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <RegisterSection />
      <Footer />
      <FloatingHelpButton />
    </div>
  );
};

export default Index;
