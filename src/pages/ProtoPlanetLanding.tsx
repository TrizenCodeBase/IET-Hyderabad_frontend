import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Cpu, Zap, Users, Send, ChevronRight, Rocket, Target, Award } from 'lucide-react';

const ProtoPlanetLanding = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/protoplanet/register');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 w-full text-center py-1 bg-[#2D1B69]/80 backdrop-blur-sm z-50">
        <span className="text-sm text-white">💙 IET Hyderabad Local Network</span>
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
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(147,51,234,0.4)]"></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-purple-500 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(147,51,234,0.4)]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-purple-500 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(147,51,234,0.4)]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-24 w-2 h-2 bg-purple-500 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(147,51,234,0.4)]" style={{ animationDelay: '3s' }}></div>
      </div>

      <main className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 pt-8">
            <div className="inline-flex items-center gap-2 bg-[#2D1B69]/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-white">🚀 Hardware Innovation Sprint</span>
            </div>
            
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4">
                <span className="text-white">Proto</span>
                <span className="text-purple-500">Planet</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
                Hardware Innovation Challenge
              </h2>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 max-w-4xl mx-auto">
              <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 flex items-center gap-4 w-full sm:w-auto shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <div className="w-12 h-12 rounded-lg bg-[#2D1B69] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-purple-400">Team Size</div>
                  <div className="text-xl font-bold text-white">2-3 Members</div>
                </div>
              </div>

              <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 flex items-center gap-4 w-full sm:w-auto shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <div className="w-12 h-12 rounded-lg bg-[#2D1B69] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <text x="9" y="15" className="text-xs font-bold">₹</text>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-purple-400">Registration Fee</div>
                  <div className="text-xl font-bold text-white">₹300-600 /-</div>
                </div>
              </div>

              <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 flex items-center gap-4 w-full sm:w-auto shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <div className="w-12 h-12 rounded-lg bg-[#2D1B69] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-purple-400">Date</div>
                  <div className="text-xl font-bold text-white">Aug-Oct 2025</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            
          </div>

          {/* About Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">About the Event</h2>
              <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <p className="text-gray-300 max-w-3xl mx-auto">
                  ProtoPlant is a regional-level hardware innovation competition designed to empower undergraduate engineering students to develop and demonstrate impactful solutions using emerging and future technologies. The competition emphasizes innovation, functionality, and societal relevance—encouraging teams to build what the future needs today.
                </p>
              </div>
            </div>
          </div>

          {/* Competition Structure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Competition Structure</h2>
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {/* Level 1 */}
              <div className="bg-[#0A051C] backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Level 1: Online Abstract Submission</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Problem Statement</li>
                      <li>• Proposed Solution</li>
                      <li>• Basic System Architecture</li>
                      <li>• Expected Technological and Social Impact</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="bg-[#0A051C] backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="7"></circle>
                      <path d="M12 9v3l1.5 1.5"></path>
                      <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Level 2: Regional Prototype Presentation</h3>
                    <p className="text-gray-300">Shortlisted teams will demonstrate their working prototypes at regional events. Venue: VIT-AP University (Tentative)</p>
                  </div>
                </div>
              </div>

              {/* Grand Finale */}
              <div className="bg-[#0A051C] backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"></path>
                      <path d="M19 8l-7-6-7 6"></path>
                      <rect x="6" y="8" width="12" height="4"></rect>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Grand Finale: Future Technology Conclave 2025</h3>
                    <p className="text-gray-300">Top performing teams will pitch their innovations at IET TechNext'25 Spotlight event. Venue: T-Hub, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thematic Tracks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Thematic Tracks (Based on Future Technologies)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <h3 className="text-xl font-semibold text-white mb-4">IoT & Smart Environments</h3>
                <p className="text-gray-300 mb-4">Connected devices and intelligent systems for smart homes, cities, agriculture, and industry.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Smart energy/water usage tracking</li>
                  <li>• IoT-enabled agriculture solutions</li>
                  <li>• Smart waste or pollution monitoring</li>
                </ul>
              </div>

              <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <h3 className="text-xl font-semibold text-white mb-4">Robotics & Intelligent Machines</h3>
                <p className="text-gray-300 mb-4">Hardware innovations using robotics, embedded systems, or automation.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Assistive robots or mechanisms</li>
                  <li>• Autonomous service bots</li>
                  <li>• Intelligent embedded control systems</li>
                </ul>
              </div>

              <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <h3 className="text-xl font-semibold text-white mb-4">HealthTech & Human Augmentation</h3>
                <p className="text-gray-300 mb-4">Next-gen tools for healthcare, rehabilitation, and accessibility.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Health monitoring wearables</li>
                  <li>• Smart assistive technologies</li>
                  <li>• Rehabilitation support systems</li>
                </ul>
              </div>

              <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <h3 className="text-xl font-semibold text-white mb-4">Sustainable & Clean Tech</h3>
                <p className="text-gray-300 mb-4">Technological solutions to promote sustainability and resource efficiency.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Solar-powered devices</li>
                  <li>• Smart irrigation controllers</li>
                  <li>• Green energy or eco-monitoring systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Eligibility Criteria</h2>
            <div className="bg-[#2D1B69]/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
              <ul className="text-gray-300 space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span>Open to undergraduate students (any year) from any branch of engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span>Institutions must be located in Telangana, Andhra Pradesh, or Chhattisgarh</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span>Teams must consist of 2 to 3 members (no solo participation allowed)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span>At least two members from each team must attend both offline rounds in person</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span>Projects must be original and developed by the team</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Registration Fee - Updated */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Registration Fee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#0A051C] backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <h3 className="text-2xl font-semibold text-white mb-4">IET Member Team</h3>
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-white">Fee: ₹300</p>
                  <p className="text-gray-400 italic text-lg">
                    (At least one team member must be a current IET student member to avail this rate)
                  </p>
                </div>
              </div>

              <div className="bg-[#0A051C] backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <h3 className="text-2xl font-semibold text-white mb-4">Non-Member Team</h3>
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-white">Fee: ₹600</p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Awards & Recognition</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#0A051C] backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">Main Prizes</h3>
                    <ul className="text-gray-300 space-y-4 text-lg">
                      <li className="flex items-center gap-3">
                        <span className="text-purple-400">•</span>
                        <span>1st Prize: 10,000</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-purple-400">•</span>
                        <span>2nd Prize: 5,000</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">Additional Benefits</h3>
                    <ul className="text-gray-300 space-y-4 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>All finalists receive Certificates of Merit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Top teams get featured in IET TechNext'25</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Recognition at Future Tech Forum</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Information</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#0A051C] backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_-5px_rgba(147,51,234,0.3)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Event Coordinators */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">Event Coordinators</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <p className="text-white text-lg">John Doe: +91 9876543210</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <p className="text-white text-lg">Jane Smith: +91 8765432109</p>
                      </div>
                    </div>
                  </div>

                  {/* Email & Social */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">Email & Social</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <p className="text-white text-lg">protoplant@college.edu</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                        <p className="text-white text-lg">@protoplant_official</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                        <p className="text-white text-lg">@protoplant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button
              onClick={handleRegister}
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl text-lg font-semibold 
                bg-gradient-to-r from-purple-600 to-purple-500 text-white px-10 py-5
                shadow-[0_4px_20px_-4px_rgba(147,51,234,0.5)] 
                hover:shadow-[0_8px_30px_-4px_rgba(147,51,234,0.6),0_0_20px_0_rgba(147,51,234,0.4)]
                transform hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-300 ease-out"
            >
              <span className="relative z-10 flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
                Register Now
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[length:10px_10px] bg-repeat opacity-0 group-hover:opacity-10 transition-opacity duration-300
                [background-image:linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)]"></div>
            </button>
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
          background-image: radial-gradient(2px 2px at var(--star-x, 50%) var(--star-y, 50%), rgba(147,51,234,0.3), transparent);
          background-size: 200px 200px;
          animation: twinkle 4s infinite;
        }
        
        .stars-medium {
          background-image: radial-gradient(3px 3px at var(--star-x, 30%) var(--star-y, 70%), rgba(147,51,234,0.3), transparent);
          background-size: 300px 300px;
          animation-delay: 2s;
        }
        
        .stars-large {
          background-image: radial-gradient(4px 4px at var(--star-x, 70%) var(--star-y, 30%), rgba(147,51,234,0.3), transparent);
          background-size: 400px 400px;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default ProtoPlanetLanding; 