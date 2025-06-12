import React, { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, UserPlus, Lightbulb, CreditCard } from 'lucide-react';

const ProtoPlanet = () => {
  const [currentStep, setCurrentStep] = useState('team-details');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.match('image/(png|jpeg|jpg)')) {
        alert('Please upload a PNG or JPG image');
        return;
      }
      
      // Check file size (10MB = 10 * 1024 * 1024 bytes)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 w-full text-center py-1 bg-purple-900/80 backdrop-blur-sm z-50">
        <span className="text-sm text-white">💜 IET Hyderabad Local Network</span>
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-white">🚀 IET Hyderabad Local Network</span>
            </div>
            
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4">
                <span className="text-white">Proto</span>
                <span className="text-purple-500">Planet</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
                Hardware Innovation Sprint
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 text-white">
                <span className="text-xl">🚀</span>
                Challenge the Future. Build What Matters.
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3">
              <span className="text-white font-medium">Registration Deadline: 9 August 2025</span>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setCurrentStep('team-details')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 'team-details'
                  ? 'bg-[#9333EA] text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white'
              }`}
            >
              <Users className="w-5 h-5" />
              Team Details
            </button>
            <button
              onClick={() => setCurrentStep('team-members')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 'team-members'
                  ? 'bg-[#9333EA] text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white'
              }`}
            >
              <UserPlus className="w-5 h-5" />
              Team Members
            </button>
            <button
              onClick={() => setCurrentStep('project-abstract')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 'project-abstract'
                  ? 'bg-[#9333EA] text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white'
              }`}
            >
              <Lightbulb className="w-5 h-5" />
              Project Abstract
            </button>
            <button
              onClick={() => setCurrentStep('payment')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 'payment'
                  ? 'bg-[#9333EA] text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-5 h-5" />
              Payment & Declaration
            </button>
          </div>

          {/* Form Section */}
          <div className="bg-white shadow-[0_4px_20px_-2px_rgba(147,51,234,0.25),0_0_8px_0_rgba(147,51,234,0.1)] backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 md:p-10">
            {currentStep === 'team-details' ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg text-xl">
                    👥
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Team Details</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Basic information about your team and institution
                </p>

                <form className="space-y-6 max-w-6xl mx-auto">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="teamName">
                      Team Name <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      placeholder="Enter your team name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                    />
                    <p className="text-gray-500 text-sm mt-1">
                      Choose a short and unique name for your team
                    </p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="institutionName">
                      Institution Name <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="institutionName"
                      placeholder="College/University name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="cityState">
                      City & State <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="cityState"
                      placeholder="e.g., Hyderabad, Telangana"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentStep('team-members')}
                      className="px-8 py-3 bg-[#9333EA] text-white rounded-lg font-medium hover:bg-purple-600 transition-colors shadow-sm"
                    >
                      Next →
                    </button>
                  </div>
                </form>
              </>
            ) : currentStep === 'team-members' ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg text-xl">
                    👥
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Enter the details of your team members
                </p>

                <form className="space-y-8 max-w-6xl mx-auto">
                  {/* Team Leader Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Team Leader (Member 1) <span className="text-purple-500">*</span></h3>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email ID <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 12345 67890"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Year & Branch <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 3rd Year CSE"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="leader-iet-member"
                        className="w-4 h-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                      />
                      <label htmlFor="leader-iet-member" className="ml-2 text-gray-700">
                        IET Student Member
                      </label>
                    </div>
                  </div>

                  {/* Member 2 Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Member 2 <span className="text-purple-500">*</span></h3>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email ID <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 12345 67890"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Year & Branch <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 2nd Year ECE"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="member2-iet-member"
                        className="w-4 h-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                      />
                      <label htmlFor="member2-iet-member" className="ml-2 text-gray-700">
                        IET Student Member
                      </label>
                    </div>
                  </div>

                  {/* Member 3 Section (Optional) */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Member 3 (Optional)</h3>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email ID
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 12345 67890"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Year & Branch
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 1st Year ME"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="member3-iet-member"
                        className="w-4 h-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                      />
                      <label htmlFor="member3-iet-member" className="ml-2 text-gray-700">
                        IET Student Member
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentStep('team-details')}
                      className="px-8 py-3 bg-white text-gray-700 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      ← Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep('project-abstract')}
                      className="px-8 py-3 bg-[#9333EA] text-white rounded-lg font-medium hover:bg-purple-600 transition-colors shadow-sm"
                    >
                      Next →
                    </button>
                  </div>
                </form>
              </>
            ) : currentStep === 'project-abstract' ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg text-xl">
                    💡
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">Project Abstract Submission - Level 1</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Describe your innovative hardware solution
                </p>

                <form className="space-y-6 max-w-6xl mx-auto">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Select Your Track <span className="text-purple-500">*</span>
                    </label>
                    <div className="space-y-3">
                      <button
                        type="button"
                        className="w-full px-4 py-3 flex items-center gap-3 bg-white border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-left shadow-sm"
                      >
                        <span className="text-xl">🌐</span>
                        IoT & Smart Environments
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-3 flex items-center gap-3 bg-white border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-left shadow-sm"
                      >
                        <span className="text-xl">🤖</span>
                        Robotics & Intelligent Machines
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-3 flex items-center gap-3 bg-white border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-left shadow-sm"
                      >
                        <span className="text-xl">🏥</span>
                        HealthTech & Human Augmentation
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-3 flex items-center gap-3 bg-white border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-left shadow-sm"
                      >
                        <span className="text-xl">🌱</span>
                        Sustainable & Clean Tech
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Project Title <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Concise and descriptive title"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Problem Statement <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Brief description of the problem you're solving..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Proposed Solution <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="How your project addresses the problem..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Basic System Architecture <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Overview of hardware/system components..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Expected Technological and Social Impact <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Who benefits, and how?..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentStep('team-members')}
                      className="px-8 py-3 bg-white text-gray-700 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      ← Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep('payment')}
                      className="px-8 py-3 bg-[#9333EA] text-white rounded-lg font-medium hover:bg-purple-600 transition-colors shadow-sm"
                    >
                      Next →
                    </button>
                  </div>
                </form>
              </>
            ) : currentStep === 'payment' ? (
              <>
                {/* Registration Fee Section */}
                <div className="space-y-8 max-w-6xl mx-auto">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg text-xl">
                        💳
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900">Registration Fee</h2>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-gray-700 font-medium mb-2">
                        Fee Type <span className="text-purple-500">*</span>
                      </label>
                      <button
                        type="button"
                        className="w-full px-4 py-3 flex items-center gap-3 bg-white border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-left shadow-sm"
                      >
                        <input type="radio" name="feeType" className="w-4 h-4 border-gray-300 text-purple-500 focus:ring-purple-500" />
                        <div>
                          <div className="font-medium">IET Member Team - ₹300</div>
                          <div className="text-sm text-gray-500">At least one member must be an IET Student Member</div>
                        </div>
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-3 flex items-center gap-3 bg-white border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-left shadow-sm"
                      >
                        <input type="radio" name="feeType" className="w-4 h-4 border-gray-300 text-purple-500 focus:ring-purple-500" />
                        <div>
                          <div className="font-medium">Non-Member Team - ₹600</div>
                          <div className="text-sm text-gray-500">For teams without IET membership</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Bank Details Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg text-xl">
                        🏦
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900">Bank Details for Payment</h2>
                    </div>

                    <div className="space-y-4 text-gray-900">
                      <div>
                        <div className="text-gray-600">Bank Name:</div>
                        <div>Axis Bank</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Account Name:</div>
                        <div>INSTITUTION OF ENGINEERING AND TECHNOLOGY-LOCAL NETWORK ACCOUNT HYDERABAD</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Account Number:</div>
                        <div>92402004037404S</div>
                      </div>
                      <div>
                        <div className="text-gray-600">IFSC Code:</div>
                        <div>UTIB0000009</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Branch Name:</div>
                        <div>Bangalore Main Branch</div>
                      </div>
                    </div>
                  </div>

                  {/* Transaction Details Section */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Transaction Reference Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter transaction ID after payment"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 shadow-sm"
                      />
                      <p className="text-gray-500 text-sm mt-1">Enter the transaction ID received after payment</p>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Upload Transaction Screenshot
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-purple-500 transition-colors">
                        <div className="flex flex-col items-center justify-center text-center">
                          <span className="text-2xl mb-2">⬆️</span>
                          <div className="text-gray-900 font-medium">Click to upload screenshot</div>
                          <div className="text-gray-500 text-sm">PNG, JPG up to 10MB</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Declaration Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg text-xl">
                        📝
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900">Declaration</h2>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-900">By submitting this form, we confirm that:</p>
                      <ul className="list-disc text-gray-700 space-y-2 ml-5">
                        <li>All project work is original and developed by the team</li>
                        <li>Our institution is located in Telangana, Andhra Pradesh, or Chhattisgarh</li>
                        <li>We agree to participate in both offline rounds if shortlisted</li>
                        <li>We understand and accept all rules and eligibility criteria</li>
                      </ul>

                      <div className="flex items-center gap-2 mt-4">
                        <input
                          type="checkbox"
                          id="terms"
                          className="w-4 h-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                        />
                        <label htmlFor="terms" className="text-gray-700">
                          I/We agree to the above terms and conditions <span className="text-purple-500">*</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentStep('project-abstract')}
                      className="px-8 py-3 bg-white text-gray-700 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      ← Previous
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#9333EA] text-white rounded-lg font-medium hover:bg-purple-600 transition-colors shadow-sm flex items-center gap-2"
                    >
                      Submit Registration <span>📨</span>
                    </button>
                  </div>
                </div>
              </>
            ) : null}
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
          background-image: radial-gradient(2px 2px at var(--star-x, 50%) var(--star-y, 50%), rgba(255, 255, 255, 0.3), transparent);
          background-size: 200px 200px;
          animation: twinkle 4s infinite;
        }
        
        .stars-medium {
          background-image: radial-gradient(3px 3px at var(--star-x, 30%) var(--star-y, 70%), rgba(255, 255, 255, 0.3), transparent);
          background-size: 300px 300px;
          animation-delay: 2s;
        }
        
        .stars-large {
          background-image: radial-gradient(4px 4px at var(--star-x, 70%) var(--star-y, 30%), rgba(255, 255, 255, 0.3), transparent);
          background-size: 400px 400px;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default ProtoPlanet; 