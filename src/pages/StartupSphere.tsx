import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Clock, Calendar, Brain, Cpu, Bot, Heart, Leaf, Trophy, Mail, Phone } from 'lucide-react';

const StartupSphere = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 w-full text-center py-1 bg-black/80 backdrop-blur-sm z-50 border-b border-orange-500/20">
        <span className="text-sm text-white">🔥 IET Hyderabad Local Network</span>
      </div>

      <Navigation />

      {/* Background with subtle star-like dots */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <div className="stars-small"></div>
          <div className="stars-medium"></div>
          <div className="stars-large"></div>
        </div>
        
        {/* Floating orbs with subtle glow */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.4)]"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-orange-500 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.4)]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-orange-500 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.4)]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-24 w-2 h-2 bg-orange-500 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.4)]" style={{ animationDelay: '3s' }}></div>
      </div>

      <main className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-8">
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <span className="text-sm text-white">🚀 Future Tech Innovation</span>
            </div>
            
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4">
                <span className="text-white">Startup</span>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">Sphere</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
                Future Founders Pitch
              </h2>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 max-w-4xl mx-auto">
              <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 flex items-center gap-4 w-full sm:w-auto shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
                <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center border border-orange-500/20">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-orange-500">Team Size</div>
                  <div className="text-xl font-bold text-white">2-3 Members</div>
                </div>
              </div>

              <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 flex items-center gap-4 w-full sm:w-auto shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
                <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center border border-orange-500/20">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-orange-500">Registration Fee</div>
                  <div className="text-xl font-bold text-white">₹300-600 /-</div>
                </div>
              </div>

              <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 flex items-center gap-4 w-full sm:w-auto shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
                <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center border border-orange-500/20">
                  <Calendar className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-orange-500">Date</div>
                  <div className="text-xl font-bold text-white">Aug-Oct 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">About the Event</h2>
              <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                  StartupSphere is an exciting platform designed to empower and showcase student-led startup ideas leveraging emerging technologies. This competition provides young innovators from Telangana, Andhra Pradesh, and Chhattisgarh to pitch scalable and impactful business models that leverage future tech to solve real-world problems.
                </p>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Focus Areas</h2>
            <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
              <p className="text-gray-300 text-lg mb-6">
                Participants are encouraged to submit startup ideas featuring emerging and future technologies such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-white text-lg">Artificial Intelligence & Machine Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-white text-lg">HealthTech & BioTech</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-white text-lg">Internet of Things (IoT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-white text-lg">SpaceTech & Advanced Robotics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-white text-lg">Blockchain & FinTech</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-white text-lg">EdTech and Digital Transformation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-white text-lg">Renewable and Sustainable Technologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Competition Structure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Competition Structure</h2>
            <div className="space-y-8">
              {/* Level 1 */}
              <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-orange-500 text-2xl">💡</span>
                  <h3 className="text-2xl font-semibold text-orange-500">Level 1: Idea Submission</h3>
                  <span className="ml-auto bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
                    Deadline: 9 August 2025
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="text-white">Teams submit a detailed startup concept including:</p>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li className="list-disc">Problem statement and solution overview</li>
                    <li className="list-disc">Business model canvas or equivalent</li>
                    <li className="list-disc">Market opportunity and competitive landscape</li>
                    <li className="list-disc">Go-to-market strategy and financial projections</li>
                    <li className="list-disc">Social and/or business impact assessment</li>
                  </ul>
                  <div className="pt-4 space-y-2">
                    <p className="text-white"><span className="text-orange-500 font-semibold">Team Size:</span> Max 3 members (min 2 members)</p>
                    <p className="text-white"><span className="text-orange-500 font-semibold">Eligibility:</span> Undergraduate engineering students from Telangana, Andhra Pradesh, and Chhattisgarh only</p>
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-orange-500 text-2xl">📈</span>
                  <h3 className="text-2xl font-semibold text-orange-500">Level 2: Regional Pitch Round</h3>
                  <span className="ml-auto bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
                    23 August 2025
                  </span>
                </div>
                <p className="text-white">Shortlisted teams present their ideas at an in-person event.</p>
                <p className="text-gray-300 mt-2"><span className="text-orange-500 font-semibold">Venue:</span> VIT-AP University (Tentative)</p>
              </div>

              {/* Grand Finale */}
              <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-orange-500 text-2xl">🏆</span>
                  <h3 className="text-2xl font-semibold text-orange-500">Grand Finale: Future Technology Conclave 2025</h3>
                  <span className="ml-auto bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
                    11 October 2025
                  </span>
                </div>
                <p className="text-white">Top finalists pitch their startups to a panel of industry experts and investors.</p>
                <p className="text-gray-300 mt-2"><span className="text-orange-500 font-semibold">Venue:</span> T-Hub, Hyderabad</p>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Eligibility Criteria</h2>
            <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
              <ul className="text-white space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Team size: Maximum 3 members, minimum 2 members</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Participants must be undergraduate engineering students from Telangana, Andhra Pradesh, or Chhattisgarh</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Solo participation is not allowed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>At least two members from each team must attend both offline rounds in person</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Startup ideas must be original and developed by the team</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Registration Fee */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Registration Fee</h2>
            <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-orange-500 mb-6">IET Member Team</h3>
                  <div className="space-y-4">
                    <p className="text-white text-xl"><span className="font-semibold">Fee:</span> ₹300</p>
                    <p className="text-gray-300 italic">
                      (At least one team member must be a current IET student member to avail this rate)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-orange-500 mb-6">Non-Member Team</h3>
                  <div className="space-y-4">
                    <p className="text-white text-xl"><span className="font-semibold">Fee:</span> ₹600</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Awards & Recognition</h2>
            <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
              <ul className="text-white space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Opportunity to network with industry leaders and investors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Mentorship and incubation support from IET partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Recognition certificates and prizes for winning teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Platform to launch startup ideas on a regional and national stage</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Information</h2>
            <div className="bg-black backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(249,115,22,0.2)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-orange-500 mb-6">Event Coordinators</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <p className="text-white">John Doe: +91 9876543210</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <p className="text-white">Jane Smith: +91 8765432109</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-orange-500 mb-6">Email & Social</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <p className="text-white">startupsphere@iet.org</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <p className="text-white">@startupsphere_iet</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                      <p className="text-white">@iet_startupsphere</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }
        
        .stars-small, .stars-medium, .stars-large {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(2px 2px at var(--star-x, 50%) var(--star-y, 50%), rgba(249,115,22,0.3), transparent);
          background-size: 200px 200px;
          animation: twinkle 4s infinite;
        }
        
        .stars-medium {
          background-image: radial-gradient(3px 3px at var(--star-x, 30%) var(--star-y, 70%), rgba(249,115,22,0.3), transparent);
          background-size: 300px 300px;
          animation-delay: 2s;
        }
        
        .stars-large {
          background-image: radial-gradient(4px 4px at var(--star-x, 70%) var(--star-y, 30%), rgba(249,115,22,0.3), transparent);
          background-size: 400px 400px;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default StartupSphere; 