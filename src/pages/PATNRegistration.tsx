import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Send, ArrowLeft, Loader2, Zap, Star, Calendar, MapPin, AlertCircle, User, GraduationCap, Building2, Phone, CalendarDays, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import axios from 'axios';

const PATNRegistration = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    category: '',
    department: '',
    instituteName: '',
    isIETMember: '',
    mobileNumber: '',
    emailAddress: '',
    zoneVenue: '',
    youtubeLink: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log('IET Member value changed to:', value);
    setFormData(prev => ({
      ...prev,
      isIETMember: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Make API call to backend
      const response = await axios.post(
        'https://iet-hyderabad-backend.llp.trizenventures.com/api/patn/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          withCredentials: true
        }
      );
      
      if (response.data.success) {
        setShowSuccess(true);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      } else {
        throw new Error(response.data.message || 'Registration failed');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'An error occurred during registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-[#3B82F6] text-white px-6 py-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)] backdrop-blur-sm flex items-center gap-3 animate-fade-in-up z-50">
          <CheckCircle className="w-5 h-5 text-white/90" />
          <span className="font-medium">Registration submitted successfully!</span>
        </div>
      )}

      {showSuccess ? (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="relative overflow-hidden bg-black/40 backdrop-blur-sm rounded-xl p-8 max-w-md w-full mx-4 text-center border border-[#3B82F6]/20
            shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25),0_0_8px_0_rgba(59,130,246,0.1)]
            before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-[#3B82F6]/5 before:to-transparent before:opacity-100">
            <div className="relative mb-8 flex justify-center">
              <div className="w-20 h-20 bg-[#3B82F6]/10 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                <CheckCircle className="w-10 h-10 text-[#3B82F6]" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 [text-shadow:_0_1px_10px_rgb(59_130_246_/_20%)]">Registration Complete!</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Thank you for registering. You will receive a confirmation email shortly.
            </p>
            <button
              onClick={() => navigate('/')}
              className="group relative overflow-hidden w-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-semibold py-4 px-6 rounded-xl 
                shadow-[0_4px_20px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)]
                hover:shadow-[0_8px_30px_-2px_rgba(59,130,246,0.45),0_0_20px_0_rgba(59,130,246,0.3)]
                transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Return to Home Page
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[length:10px_10px] bg-repeat opacity-0 group-hover:opacity-10 transition-opacity duration-300
                [background-image:linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)]"></div>
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-black">
          <Navigation />
          
          <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pb-5">
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-screen-lg mx-auto mt-16 md:mt-20">
              <div className="animate-fade-in space-y-6">
                <div className="mb-6">
                 
                  
                  <h1 className="text-4xl md:text-5xl lg:text-8xl font-black mb-3 text-white [text-shadow:_0_2px_15px_rgb(59_130_246_/_25%)]">
              Present Around <span className="text-[#1E90FF]">the Network</span>
            </h1>
                  <div className="h-1 w-40 mx-auto mb-6 rounded-full bg-[#3B82F6] shadow-[0_0_30px_rgba(59,130,246,0.4)]"></div>
                </div>
                
            
                
                <div className="relative overflow-hidden inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-[#3B82F6]/20 rounded-full px-6 py-3 mb-6 
                  shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25),0_0_8px_0_rgba(59,130,246,0.1)] 
                  hover:shadow-[0_8px_30px_-2px_rgba(59,130,246,0.35),0_0_12px_0_rgba(59,130,246,0.2)]
                  hover:border-[#3B82F6]/40 transition-all duration-500
                  before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-[#3B82F6]/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                  <Zap className="w-4 h-4 text-white" />
                  <p className="text-base font-semibold text-white tracking-wide">
                    Organized by IET Hyderabad Local Network
                  </p>
                </div>
               
              </div>
            </div>
          </section>

          {/* Registration Form Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden bg-[#0A1628] border border-[#3B82F6]/20
                shadow-[0_4px_20px_-2px_rgba(59,130,246,0.25)]">
                
                <div className="flex flex-col lg:flex-row">
                  {/* Left Panel - Form Info */}
                  <div className="lg:w-1/3 bg-[#0A1628] p-8 lg:p-12 relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent"></div>
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#3B82F6]/20 via-transparent to-transparent"></div>
                      <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="sticky top-8 relative z-10">
                      <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 backdrop-blur-sm border border-[#3B82F6]/20 rounded-full px-4 py-1 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></div>
                        <span className="text-sm font-medium text-[#3B82F6]">Registration Open</span>
                      </div>

                      <h1 className="text-4xl font-bold text-white mb-4 [text-shadow:_0_1px_10px_rgb(59_130_246_/_20%)]">
                        PATN Registration
                      </h1>
                      <p className="text-gray-300 text-sm mb-12">Fill in your details to participate in Present Around the Network</p>
                      
                      <div className="space-y-8">
                        <div className="relative">
                          <div className="absolute -left-6 top-1/2 w-2 h-16 -translate-y-1/2 bg-gradient-to-b from-[#3B82F6] to-transparent rounded-full"></div>
                          <div className="flex items-start gap-4 bg-[#3B82F6]/5 backdrop-blur-sm border border-[#3B82F6]/10 rounded-xl p-4">
                            <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center shrink-0">
                              <Star className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <div>
                              <h3 className="text-white font-medium mb-1">Global Platform</h3>
                              <p className="text-sm text-gray-300">Share your innovative ideas and showcase your presentation skills on a global platform.</p>
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-6 top-1/2 w-2 h-16 -translate-y-1/2 bg-gradient-to-b from-[#3B82F6] to-transparent rounded-full"></div>
                          <div className="flex items-start gap-4 bg-[#3B82F6]/5 backdrop-blur-sm border border-[#3B82F6]/10 rounded-xl p-4">
                            <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center shrink-0">
                              <Calendar className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <div>
                              <h3 className="text-white font-medium mb-1">Important Date</h3>
                              <p className="text-sm text-gray-300">Registration deadline: July 20, 2025</p>
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-6 top-1/2 w-2 h-16 -translate-y-1/2 bg-gradient-to-b from-[#3B82F6] to-transparent rounded-full"></div>
                          <div className="flex items-start gap-4 bg-[#3B82F6]/5 backdrop-blur-sm border border-[#3B82F6]/10 rounded-xl p-4">
                            <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center shrink-0">
                              <MapPin className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <div>
                              <h3 className="text-white font-medium mb-1">Event Venue</h3>
                              <p className="text-sm text-gray-300">VIT-AP University, Amaravati</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Form Fields */}
                  <div className="lg:w-2/3 p-8 lg:p-12 border-t lg:border-l lg:border-t-0 border-[#3B82F6]/20 relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl p-4 text-sm font-medium flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0">
                            <AlertCircle className="w-5 h-5 text-red-400" />
                          </div>
                          <p>{error}</p>
                      </div>
                    )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                        {/* Personal Information Section */}
                        <div className="space-y-6 md:col-span-2 bg-[#3B82F6]/5 backdrop-blur-sm border border-[#3B82F6]/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 pb-4 border-b border-[#3B82F6]/10">
                            <div className="w-8 h-8 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center shrink-0">
                              <User className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Personal Information</h2>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                              <label className="block text-sm font-medium text-white mb-2">Title *</label>
                              <div className="relative">
                        <select
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-md border border-[#3B82F6]/20 bg-[#0A1628] text-white 
                                    focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                    placeholder:text-gray-500 hover:border-[#3B82F6]/40 appearance-none pr-10"
                          required
                        >
                                  <option value="" className="bg-[#0A1628] text-gray-400">Select Title</option>
                                  <option value="Mr" className="bg-[#0A1628] text-white py-2">Mr</option>
                                  <option value="Ms" className="bg-[#0A1628] text-white py-2">Ms</option>
                                  <option value="Dr" className="bg-[#0A1628] text-white py-2">Dr</option>
                                  <option value="Prof" className="bg-[#0A1628] text-white py-2">Prof</option>
                        </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3B82F6] pointer-events-none" />
                              </div>
                      </div>
                      <div>
                              <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                                className="w-full px-4 py-3 rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/5 text-white 
                                  focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                  placeholder:text-gray-500 hover:border-[#3B82F6]/40"
                          required
                        />
                            </div>
                      </div>
                    </div>

                        {/* Academic Information */}
                        <div className="space-y-6 bg-[#3B82F6]/5 backdrop-blur-sm border border-[#3B82F6]/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 pb-4 border-b border-[#3B82F6]/10">
                            <div className="w-8 h-8 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center shrink-0">
                              <GraduationCap className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Academic Details</h2>
                          </div>
                          <div className="space-y-6">
                      <div>
                              <label className="block text-sm font-medium text-white mb-2">Category *</label>
                              <div className="relative">
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-md border border-[#3B82F6]/20 bg-[#0A1628] text-white 
                                    focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                    placeholder:text-gray-500 hover:border-[#3B82F6]/40 appearance-none pr-10"
                          required
                        >
                                  <option value="" className="bg-[#0A1628] text-gray-400">Select Category</option>
                                  <option value="student" className="bg-[#0A1628] text-white py-2">Student</option>
                                  <option value="young-professional" className="bg-[#0A1628] text-white py-2">Young Professional</option>
                        </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3B82F6] pointer-events-none" />
                              </div>
                      </div>
                      <div>
                              <label className="block text-sm font-medium text-white mb-2">Department *</label>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          placeholder="e.g., Computer Science, ECE"
                                className="w-full px-4 py-3 rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/5 text-white 
                                  focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                  placeholder:text-gray-500 hover:border-[#3B82F6]/40"
                          required
                        />
                            </div>
                      </div>
                    </div>

                        {/* Institute & Membership */}
                        <div className="space-y-6 bg-[#3B82F6]/5 backdrop-blur-sm border border-[#3B82F6]/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 pb-4 border-b border-[#3B82F6]/10">
                            <div className="w-8 h-8 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center shrink-0">
                              <Building2 className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Institute & Membership</h2>
                          </div>
                          <div className="space-y-6">
                    <div>
                              <label className="block text-sm font-medium text-white mb-2">Institute Name *</label>
                      <input
                        type="text"
                        name="instituteName"
                        value={formData.instituteName}
                        onChange={handleChange}
                        placeholder="Enter your institute/organization"
                                className="w-full px-4 py-3 rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/5 text-white 
                                  focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                  placeholder:text-gray-500 hover:border-[#3B82F6]/40"
                        required
                      />
                    </div>
                    <div>
                              <label className="block text-sm font-medium text-white mb-3">Are you an IET Member? *</label>
                      <div className="flex gap-4">
                                <label className="flex-1 flex items-center p-4 border border-[#3B82F6]/20 rounded-lg bg-[#3B82F6]/5 cursor-pointer hover:bg-[#3B82F6]/10 transition-all group">
                          <input
                            type="radio"
                            name="isIETMember"
                            value="yes"
                            checked={formData.isIETMember === 'yes'}
                            onChange={handleRadioChange}
                                    className="w-4 h-4 text-[#3B82F6] border-[#3B82F6]/20 focus:ring-[#3B82F6] bg-[#3B82F6]/5"
                            required
                          />
                                  <span className="ml-3 text-sm text-white group-hover:text-[#3B82F6] transition-colors">Yes</span>
                        </label>
                                <label className="flex-1 flex items-center p-4 border border-[#3B82F6]/20 rounded-lg bg-[#3B82F6]/5 cursor-pointer hover:bg-[#3B82F6]/10 transition-all group">
                          <input
                            type="radio"
                            name="isIETMember"
                            value="no"
                            checked={formData.isIETMember === 'no'}
                            onChange={handleRadioChange}
                                    className="w-4 h-4 text-[#3B82F6] border-[#3B82F6]/20 focus:ring-[#3B82F6] bg-[#3B82F6]/5"
                            required
                          />
                                  <span className="ml-3 text-sm text-white group-hover:text-[#3B82F6] transition-colors">No</span>
                        </label>
                              </div>
                            </div>
                      </div>
                    </div>

                        {/* Contact Information */}
                        <div className="space-y-6 md:col-span-2 bg-[#3B82F6]/5 backdrop-blur-sm border border-[#3B82F6]/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 pb-4 border-b border-[#3B82F6]/10">
                            <div className="w-8 h-8 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center shrink-0">
                              <Phone className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Contact Information</h2>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                              <label className="block text-sm font-medium text-white mb-2">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="Enter your mobile number"
                                className="w-full px-4 py-3 rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/5 text-white 
                                  focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                  placeholder:text-gray-500 hover:border-[#3B82F6]/40"
                          required
                        />
                      </div>
                      <div>
                              <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/5 text-white 
                                  focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                  placeholder:text-gray-500 hover:border-[#3B82F6]/40"
                          required
                        />
                            </div>
                      </div>
                    </div>

                        {/* Event Details */}
                        <div className="space-y-6 md:col-span-2 bg-[#3B82F6]/5 backdrop-blur-sm border border-[#3B82F6]/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 pb-4 border-b border-[#3B82F6]/10">
                            <div className="w-8 h-8 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center shrink-0">
                              <CalendarDays className="w-5 h-5 text-[#3B82F6]" />
                            </div>
                            <h2 className="text-lg font-semibold text-white">Event Details</h2>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                              <label className="block text-sm font-medium text-white mb-2">Zone/Venue *</label>
                              <div className="relative">
                        <select
                          name="zoneVenue"
                          value={formData.zoneVenue}
                          onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-md border border-[#3B82F6]/20 bg-[#0A1628] text-white 
                                    focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                    placeholder:text-gray-500 hover:border-[#3B82F6]/40 appearance-none pr-10"
                          required
                        >
                                  <option value="" className="bg-[#0A1628] text-gray-400">Select Zone</option>
                                  <option value="zone1" className="bg-[#0A1628] text-white py-2">Zone 1 ( NIT Warangal Telangana )</option>
                                  <option value="zone2" className="bg-[#0A1628] text-white py-2">Zone 2 ( VIT-AP university )</option>
                                  <option value="zone3" className="bg-[#0A1628] text-white py-2">Zone 3 ( Kalinga university Raipur )</option>
                        </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3B82F6] pointer-events-none" />
                              </div>
                      </div>
                      <div>
                              <label className="block text-sm font-medium text-white mb-2">YouTube Link *</label>
                        <input
                          type="url"
                          name="youtubeLink"
                          value={formData.youtubeLink}
                          onChange={handleChange}
                          placeholder="https://youtube.com/..."
                                className="w-full px-4 py-3 rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/5 text-white 
                                  focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 text-sm transition-all
                                  placeholder:text-gray-500 hover:border-[#3B82F6]/40"
                          required
                        />
                            </div>
                          </div>
                      </div>
                    </div>

                      <div className="flex justify-end mt-8">
                    <button
                      type="submit"
                      disabled={loading}
                          className="group relative overflow-hidden inline-flex bg-[#3B82F6] text-white font-semibold px-8 py-4 rounded-md  
                            hover:bg-[#2563EB] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200
                            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            {loading ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Submitting...</span>
                              </>
                            ) : (
                              <>
                                <span>Register</span>
                                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                              </>
                            )}
                          </span>
                    </button>
                      </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 0.7; }
            }
          `}</style>

          <Footer />
        </div>
      )}
    </>
  );
};

export default PATNRegistration;