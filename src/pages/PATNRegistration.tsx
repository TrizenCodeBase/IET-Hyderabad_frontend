import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PATNRegistration = () => {
  const navigate = useNavigate();
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
    setError('');
    setLoading(true);

    try {
      console.log('Submitting form data:', formData);

      const response = await fetch('https://iet-hyderabad-backend.llp.trizenventures.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          fullName: formData.fullName,
          category: formData.category,
          department: formData.department,
          instituteName: formData.instituteName,
          isIETMember: formData.isIETMember,
          mobileNumber: formData.mobileNumber,
          emailAddress: formData.emailAddress,
          zoneVenue: formData.zoneVenue,
          youtubeLink: formData.youtubeLink
        })
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setShowSuccess(true);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000); // Hide notification after 5 seconds
    } catch (err) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-[#21B5E9] text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in-up z-50">
          <CheckCircle className="w-5 h-5" />
          <span>Registration submitted successfully!</span>
        </div>
      )}

      {showSuccess ? (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md w-full mx-4 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-[#21B5E9]/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#21B5E9]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Registration Complete!</h2>
            <p className="text-gray-200 mb-8">
              Thank you for registering. You will receive a confirmation email shortly.
            </p>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Go To Home Page
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <Navigation />
          
          <div className="container mx-auto px-4 py-8 mt-16">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 sm:p-8">
                  <h1 className="text-2xl font-bold text-purple-900 text-center mb-6">PATN Registration</h1>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-50 border border-red-500 text-red-500 rounded-lg p-4 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <select
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                          required
                        >
                          <option value="">Select Title</option>
                          <option value="Mr">Mr</option>
                          <option value="Ms">Ms</option>
                          <option value="Dr">Dr</option>
                          <option value="Prof">Prof</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="student">Student</option>
                          <option value="young-professional">Young Professional</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          placeholder="e.g., Computer Science, ECE"
                          className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institute Name *</label>
                      <input
                        type="text"
                        name="instituteName"
                        value={formData.instituteName}
                        onChange={handleChange}
                        placeholder="Enter your institute/organization"
                        className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Are you an IET Member? *</label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="isIETMember"
                            value="yes"
                            checked={formData.isIETMember === 'yes'}
                            onChange={handleRadioChange}
                            className="w-4 h-4 text-purple-600 border-black focus:ring-purple-500"
                            required
                          />
                          <span className="ml-2 text-sm text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="isIETMember"
                            value="no"
                            checked={formData.isIETMember === 'no'}
                            onChange={handleRadioChange}
                            className="w-4 h-4 text-purple-600 border-black focus:ring-purple-500"
                            required
                          />
                          <span className="ml-2 text-sm text-gray-700">No</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="Enter your mobile number"
                          className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Zone/Venue *</label>
                        <select
                          name="zoneVenue"
                          value={formData.zoneVenue}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                          required
                        >
                          <option value="">Select Zone</option>
                          <option value="zone1">Zone 1 ( NIT Warangal Telangana )</option>
                          <option value="zone2">Zone 2 ( VIT-AP university )</option>
                          <option value="zone3">Zone 3 ( Kalinga university Raipur )</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">YouTube Link *</label>
                        <input
                          type="url"
                          name="youtubeLink"
                          value={formData.youtubeLink}
                          onChange={handleChange}
                          placeholder="https://youtube.com/..."
                          className="w-full px-3 py-2 rounded-lg border-[1px] border-black focus:border-black focus:ring-0 text-gray-800 text-sm bg-white transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? 'Submitting...' : 'Complete Registration'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default PATNRegistration;