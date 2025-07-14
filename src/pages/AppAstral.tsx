import React, { useState, useRef, FormEvent } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, UserPlus, Smartphone, CreditCard, CheckCircle, Copy } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  yearBranch: string;
  isIETMember: boolean;
  ietMembershipId: string;
}

interface FormData {
  // Team Details
  teamName: string;
  institutionName: string;
  cityState: string;
  // Team Members
  member1: TeamMember;
  member2: TeamMember;
  member3: TeamMember;
  // Project Details
  prototypeTool: string;
  otherTool: string;
  prototypeScreens: File | null;
  prototypeLink: string;
  appSyncDescription: string;
  additionalNotes: string;
  // Payment Details
  feeType: string;
  transactionId: string;
  termsAccepted: boolean;
}

const AppAstral = () => {
  const [currentStep, setCurrentStep] = useState('team-details');
  const [uploadedFiles, setUploadedFiles] = useState<{
    screens: string | null;
    payment: string | null;
  }>({
    screens: null,
    payment: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: ''
  });
  
  const screensRef = useRef<HTMLInputElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    // Team Details
    teamName: '',
    institutionName: '',
    cityState: '',
    // Team Members
    member1: {
      name: '',
      email: '',
      phone: '',
      yearBranch: '',
      isIETMember: false,
      ietMembershipId: ''
    },
    member2: {
      name: '',
      email: '',
      phone: '',
      yearBranch: '',
      isIETMember: false,
      ietMembershipId: ''
    },
    member3: {
      name: '',
      email: '',
      phone: '',
      yearBranch: '',
      isIETMember: false,
      ietMembershipId: ''
    },
    // Project Details
    prototypeTool: '',
    otherTool: '',
    prototypeScreens: null,
    prototypeLink: '',
    appSyncDescription: '',
    additionalNotes: '',
    // Payment Details
    feeType: '',
    transactionId: '',
    termsAccepted: false
  });

  const isMobile = useIsMobile();

  const handleInputChange = (section: string, field: string, value: string | boolean) => {
    setFormData(prev => {
      if (field === '') {
        // Direct field update (like teamName, projectTitle, etc.)
        return {
          ...prev,
          [section]: value
        };
      } else if (section.startsWith('member')) {
        // Team member update
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: value
          }
        };
      } else {
        // Other nested fields
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: value
          }
        };
      }
    });
  };

  const handleFileUpload = (type: 'screens' | 'payment', event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      const validTypes = type === 'payment' 
        ? ['image/png', 'image/jpeg', 'image/jpg']
        : ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
      
      if (!validTypes.includes(file.type)) {
        alert(`Please upload a ${type === 'payment' ? 'PNG or JPG image' : 'PNG, JPG, or PDF file'}`);
        return;
      }
      
      // Check file size (10MB for payment, 5MB for screens)
      const maxSize = type === 'payment' ? 10 * 1024 * 1024 : 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert(`File size must be less than ${type === 'payment' ? '10MB' : '5MB'}`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedFiles(prev => ({
          ...prev,
          [type]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
      
      // Update form data
      if (type === 'screens') {
        setFormData(prev => ({
          ...prev,
          prototypeScreens: file
        }));
      }
    }
  };

  const handleUploadClick = (type: 'screens' | 'payment') => {
    if (type === 'screens') {
      screensRef.current?.click();
    } else {
      paymentRef.current?.click();
    }
  };

  const validateForm = () => {
    const missingFields: string[] = [];

    // Team Details validation
    if (!formData.teamName) missingFields.push('Team Name');
    if (!formData.institutionName) missingFields.push('Institution Name');
    if (!formData.cityState) missingFields.push('City & State');

    // Member 1 (Team Leader) validation
    if (!formData.member1.name) missingFields.push('Team Leader - Full Name');
    if (!formData.member1.email) missingFields.push('Team Leader - Email');
    if (!formData.member1.phone) missingFields.push('Team Leader - Phone Number');
    if (!formData.member1.yearBranch) missingFields.push('Team Leader - Year & Branch');
    if (formData.member1.isIETMember && !formData.member1.ietMembershipId) {
      missingFields.push('Team Leader - IET Membership ID');
    }

    // Member 2 validation
    if (!formData.member2.name) missingFields.push('Member 2 - Full Name');
    if (!formData.member2.email) missingFields.push('Member 2 - Email');
    if (!formData.member2.phone) missingFields.push('Member 2 - Phone Number');
    if (!formData.member2.yearBranch) missingFields.push('Member 2 - Year & Branch');
    if (formData.member2.isIETMember && !formData.member2.ietMembershipId) {
      missingFields.push('Member 2 - IET Membership ID');
    }

    // Member 3 validation (optional)
    if (formData.member3.name || formData.member3.email || formData.member3.phone || formData.member3.yearBranch) {
      if (!formData.member3.name) missingFields.push('Member 3 - Full Name');
      if (!formData.member3.email) missingFields.push('Member 3 - Email');
      if (!formData.member3.phone) missingFields.push('Member 3 - Phone Number');
      if (!formData.member3.yearBranch) missingFields.push('Member 3 - Year & Branch');
      if (formData.member3.isIETMember && !formData.member3.ietMembershipId) {
        missingFields.push('Member 3 - IET Membership ID');
      }
    }

    // Project details validation
    if (!formData.prototypeTool) missingFields.push('Prototype Tool');
    if (formData.prototypeTool === 'Other' && !formData.otherTool) {
      missingFields.push('Other Prototype Tool Specification');
    }
    if (!formData.prototypeScreens) missingFields.push('App Screens Upload');
    if (!formData.appSyncDescription) missingFields.push('App Sync Description');

    // Payment details validation
    if (!formData.feeType) missingFields.push('Fee Type');
    if (!formData.transactionId) missingFields.push('Transaction Reference Number');
    if (!uploadedFiles.payment) missingFields.push('Transaction Screenshot');
    if (!formData.termsAccepted) missingFields.push('Terms and Conditions Acceptance');

    if (missingFields.length > 0) {
      const sections: { [key: string]: string[] } = {
        'Team Details': missingFields.filter(f => !f.includes('-') && !f.includes('Prototype') && !f.includes('App') && !f.includes('Fee') && !f.includes('Transaction') && !f.includes('Terms')),
        'Team Members': missingFields.filter(f => f.includes('-')),
        'Project Details': missingFields.filter(f => f.includes('Prototype') || f.includes('App')),
        'Payment & Declaration': missingFields.filter(f => f.includes('Fee') || f.includes('Transaction') || f.includes('Terms'))
      };

      let message = 'Please fill in the following required fields:\n\n';
      
      for (const [section, fields] of Object.entries(sections)) {
        if (fields.length > 0) {
          message += `${section}:\n${fields.map(f => `• ${f}`).join('\n')}\n\n`;
        }
      }

      alert(message);

      // Set the current step to the first section that has missing fields
      if (sections['Team Details'].length > 0) {
        setCurrentStep('team-details');
      } else if (sections['Team Members'].length > 0) {
        setCurrentStep('team-members');
      } else if (sections['Project Details'].length > 0) {
        setCurrentStep('project-upload');
      } else if (sections['Payment & Declaration'].length > 0) {
        setCurrentStep('payment');
      }

      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmissionStatus({
        status: 'submitting',
        message: 'Preparing form data...'
      });

      const submitData = new FormData();
      
      // Append team details
      submitData.append('teamName', formData.teamName);
      submitData.append('institutionName', formData.institutionName);
      submitData.append('cityState', formData.cityState);
      
      // Append team members data
      submitData.append('member1', JSON.stringify(formData.member1));
      submitData.append('member2', JSON.stringify(formData.member2));
      if (formData.member3.name) {
        submitData.append('member3', JSON.stringify(formData.member3));
      }
      
      // Append project details
      submitData.append('prototypeTool', formData.prototypeTool);
      if (formData.prototypeTool === 'Other') {
        submitData.append('otherTool', formData.otherTool);
      }
      submitData.append('prototypeLink', formData.prototypeLink);
      submitData.append('appSyncDescription', formData.appSyncDescription);
      submitData.append('additionalNotes', formData.additionalNotes);
      
      // Append payment details
      submitData.append('feeType', formData.feeType);
      submitData.append('transactionId', formData.transactionId);
      submitData.append('termsAccepted', formData.termsAccepted.toString());

      // Append files
      if (formData.prototypeScreens) {
        submitData.append('prototypeScreens', formData.prototypeScreens);
      }
      if (paymentRef.current?.files?.[0]) {
        submitData.append('paymentScreenshot', paymentRef.current.files[0]);
      }

      setSubmissionStatus({
        status: 'submitting',
        message: 'Uploading registration data...'
      });
      
      const response = await fetch('https://iet-hyderabad-backend.llp.trizenventures.com/api/appastral/register', {
        method: 'POST',
        body: submitData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const result = await response.json();
      console.log('Server response:', result);

      if (result.success) {
        setSubmissionStatus({
          status: 'success',
          message: 'Registration successful! We will contact you shortly.'
        });

        // Reset form
        setFormData({
          teamName: '',
          institutionName: '',
          cityState: '',
          member1: {
            name: '',
            email: '',
            phone: '',
            yearBranch: '',
            isIETMember: false,
            ietMembershipId: ''
          },
          member2: {
            name: '',
            email: '',
            phone: '',
            yearBranch: '',
            isIETMember: false,
            ietMembershipId: ''
          },
          member3: {
            name: '',
            email: '',
            phone: '',
            yearBranch: '',
            isIETMember: false,
            ietMembershipId: ''
          },
          prototypeTool: '',
          otherTool: '',
          prototypeScreens: null,
          prototypeLink: '',
          appSyncDescription: '',
          additionalNotes: '',
          feeType: '',
          transactionId: '',
          termsAccepted: false
        });
        setUploadedFiles({
          screens: null,
          payment: null
        });
        if (screensRef.current) screensRef.current.value = '';
        if (paymentRef.current) paymentRef.current.value = '';
        setCurrentStep('team-details');

        // Show success message
        alert('Registration successful! We will contact you shortly.');
      } else {
        throw new Error(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus({
        status: 'error',
        message: 'Error: ' + (error as Error).message
      });
      alert('Error submitting form: ' + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStatusMessage = () => {
    if (submissionStatus.status === 'idle') return null;

    const statusColors = {
      submitting: 'bg-blue-100 text-blue-800',
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800'
    };

    return (
      <div className={`p-4 rounded-lg mb-4 ${statusColors[submissionStatus.status]}`}>
        <p className="font-medium">{submissionStatus.message}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <div className="fixed top-0 w-full text-center py-1" style={{ background: '#003A66' }}>
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
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ backgroundColor: '#22bbe0', boxShadow: '0 0 15px rgba(34,187,224,0.4)' }}></div>
        <div className="absolute bottom-20 right-10 w-1.5 h-1.5 rounded-full blur-sm animate-pulse" style={{ backgroundColor: '#22bbe0', boxShadow: '0 0 15px rgba(34,187,224,0.4)', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-3 h-3 rounded-full blur-sm animate-pulse" style={{ backgroundColor: '#22bbe0', boxShadow: '0 0 15px rgba(34,187,224,0.4)', animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-24 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ backgroundColor: '#22bbe0', boxShadow: '0 0 15px rgba(34,187,224,0.4)', animationDelay: '3s' }}></div>
      </div>

      <main className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-2 sm:px-4 w-full max-w-6xl md:w-auto md:max-w-6xl">
          {/* Add status message at the top of the form */}
          {renderStatusMessage()}

          <div className="text-center mb-16 pt-8">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-4 py-2 mb-6" style={{ background: '#003A66', borderColor: '#22bbe0', borderWidth: 1 }}>
              <span className="text-sm text-white">🚀 IET Hyderabad Local Network</span>
            </div>
            
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4">
                <span className="text-white">App</span>
                <span style={{ color: '#22bbe0' }}>Astral</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
                Mobile App Design & Innovation Sprint 2025
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 text-white">
                <span className="text-xl">📱</span>
                Design. Prototype. Innovate.
              </span>
            </div>

            <div className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-6 py-3" style={{ background: '#003A66', borderColor: '#22bbe0', borderWidth: 1 }}>
              <span className="text-white font-medium">Registration Deadline: 15 August 2025</span>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center justify-center gap-2 mb-8 w-full">
            <button
              onClick={() => setCurrentStep('team-details')}
              className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors ${
                currentStep === 'team-details'
                  ? 'text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white'
              }`}
              style={currentStep === 'team-details' ? { backgroundColor: '#22bbe0' } : {}}
            >
              <Users className="w-6 h-6 md:w-5 md:h-5" />
              {!isMobile && <span>Team Details</span>}
            </button>
            {/* Gradient Separator */}
            <div
              className="hidden md:block w-8 h-1 mx-1 rounded-full"
              style={{ background: 'linear-gradient(to right, #22bbe0, #000)' }}
            ></div>
            <div
              className="block md:hidden w-8 h-1 my-1 rounded-full"
              style={{ background: 'linear-gradient(to right, #22bbe0, #000)' }}
            ></div>
            <button
              onClick={() => setCurrentStep('team-members')}
              className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors ${
                currentStep === 'team-members'
                  ? 'text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white'
              }`}
              style={currentStep === 'team-members' ? { backgroundColor: '#22bbe0' } : {}}
            >
              <UserPlus className="w-6 h-6 md:w-5 md:h-5" />
              {!isMobile && <span>Team Members</span>}
            </button>
            {/* Gradient Separator */}
            <div
              className="hidden md:block w-8 h-1 mx-1 rounded-full"
              style={{ background: 'linear-gradient(to right, #22bbe0, #000)' }}
            ></div>
            <div
              className="block md:hidden w-8 h-1 my-1 rounded-full"
              style={{ background: 'linear-gradient(to right, #22bbe0, #000)' }}
            ></div>
            <button
              onClick={() => setCurrentStep('project-upload')}
              className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors ${
                currentStep === 'project-upload'
                  ? 'text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white'
              }`}
              style={currentStep === 'project-upload' ? { backgroundColor: '#22bbe0' } : {}}
            >
              <Smartphone className="w-6 h-6 md:w-5 md:h-5" />
              {!isMobile && <span>Project Upload</span>}
            </button>
            {/* Gradient Separator */}
            <div
              className="hidden md:block w-8 h-1 mx-1 rounded-full"
              style={{ background: 'linear-gradient(to right, #22bbe0, #000)' }}
            ></div>
            <div
              className="block md:hidden w-8 h-1 my-1 rounded-full"
              style={{ background: 'linear-gradient(to right, #22bbe0, #000)' }}
            ></div>
            <button
              onClick={() => setCurrentStep('payment')}
              className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors ${
                currentStep === 'payment'
                  ? 'text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white'
              }`}
              style={currentStep === 'payment' ? { backgroundColor: '#22bbe0' } : {}}
            >
              <CreditCard className="w-6 h-6 md:w-5 md:h-5" />
              {!isMobile && <span>Payment</span>}
            </button>
          </div>

          {/* Form Section */}
          <div className="bg-[#000] backdrop-blur-sm rounded-2xl p-4 sm:p-8 md:p-12 
            shadow-[0_19px_38px_#22bbe0,0_15px_12px_#22bbe0] w-full max-w-4xl mx-auto overflow-x-auto">
            <form className="space-y-8">
              {currentStep === 'team-details' ? (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Team Details</h2>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    Basic information about your team and institution
                  </p>

                  <div className="space-y-3 max-w-3xl mx-auto">
                    <div>
                      <label className="block text-white font-medium mb-1" htmlFor="teamName">
                        Team Name <span style={{ color: '#22bbe0' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        placeholder="Enter team name"
                        value={formData.teamName}
                        onChange={(e) => handleInputChange('teamName', '', e.target.value)}
                        className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <p className="text-gray-400 text-xs mt-1">
                        Choose a short and unique name for your team
                      </p>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1" htmlFor="institutionName">
                        Institution Name <span style={{ color: '#22bbe0' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="institutionName"
                        placeholder="College/University name"
                        value={formData.institutionName}
                        onChange={(e) => handleInputChange('institutionName', '', e.target.value)}
                        className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1" htmlFor="cityState">
                        City & State <span style={{ color: '#22bbe0' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="cityState"
                        placeholder="e.g., Hyderabad, Telangana"
                        value={formData.cityState}
                        onChange={(e) => handleInputChange('cityState', '', e.target.value)}
                        className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </>
              ) : currentStep === 'team-members' ? (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <UserPlus className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Team Members</h2>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    Enter the details of your team members
                  </p>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    {/* Team Leader Section */}
                    <div className="space-y-2 bg-white/5 rounded-xl p-4" style={{ border: '1.5px solid #22bbe0' }}>
                      <h3 className="text-lg font-semibold text-white">Team Leader (Member 1) <span style={{ color: '#22bbe0' }}>*</span></h3>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Full Name <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter full name"
                          value={formData.member1.name}
                          onChange={(e) => handleInputChange('member1', 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Email ID <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={formData.member1.email}
                          onChange={(e) => handleInputChange('member1', 'email', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Phone Number <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 12345 67890"
                          value={formData.member1.phone}
                          onChange={(e) => handleInputChange('member1', 'phone', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Year & Branch <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 3rd Year CSE"
                          value={formData.member1.yearBranch}
                          onChange={(e) => handleInputChange('member1', 'yearBranch', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="leader-iet-member"
                            checked={formData.member1.isIETMember}
                            onChange={(e) => handleInputChange('member1', 'isIETMember', e.target.checked)}
                            className="w-4 h-4 rounded border-blue-500/20 text-blue-500 focus:ring-blue-500 bg-white/10"
                          />
                          <label htmlFor="leader-iet-member" className="ml-2 text-white">
                            IET Student Member
                          </label>
                        </div>
                        {formData.member1.isIETMember && (
                          <div>
                            <label className="block text-white font-medium mb-1">
                              IET Membership ID <span style={{ color: '#22bbe0' }}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter IET Membership ID"
                              value={formData.member1.ietMembershipId}
                              onChange={(e) => handleInputChange('member1', 'ietMembershipId', e.target.value)}
                              className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Member 2 Section */}
                    <div className="space-y-2 bg-white/5 rounded-xl p-4" style={{ border: '1.5px solid #22bbe0' }}>
                      <h3 className="text-lg font-semibold text-white">Member 2 <span style={{ color: '#22bbe0' }}>*</span></h3>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Full Name <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter full name"
                          value={formData.member2.name}
                          onChange={(e) => handleInputChange('member2', 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Email ID <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={formData.member2.email}
                          onChange={(e) => handleInputChange('member2', 'email', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Phone Number <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 12345 67890"
                          value={formData.member2.phone}
                          onChange={(e) => handleInputChange('member2', 'phone', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Year & Branch <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 2nd Year ECE"
                          value={formData.member2.yearBranch}
                          onChange={(e) => handleInputChange('member2', 'yearBranch', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="member2-iet-member"
                            checked={formData.member2.isIETMember}
                            onChange={(e) => handleInputChange('member2', 'isIETMember', e.target.checked)}
                            className="w-4 h-4 rounded border-blue-500/20 text-blue-500 focus:ring-blue-500 bg-white/10"
                          />
                          <label htmlFor="member2-iet-member" className="ml-2 text-white">
                            IET Student Member
                          </label>
                        </div>
                        {formData.member2.isIETMember && (
                          <div>
                            <label className="block text-white font-medium mb-1">
                              IET Membership ID <span style={{ color: '#22bbe0' }}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter IET Membership ID"
                              value={formData.member2.ietMembershipId}
                              onChange={(e) => handleInputChange('member2', 'ietMembershipId', e.target.value)}
                              className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Member 3 Section (Optional) */}
                    <div className="space-y-2 bg-white/5 rounded-xl p-4" style={{ border: '1.5px solid #22bbe0' }}>
                      <h3 className="text-lg font-semibold text-white">Member 3 (Optional)</h3>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter full name"
                          value={formData.member3.name}
                          onChange={(e) => handleInputChange('member3', 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                      <label className="block text-white font-medium mb-1">
                          Email ID
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={formData.member3.email}
                          onChange={(e) => handleInputChange('member3', 'email', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 12345 67890"
                          value={formData.member3.phone}
                          onChange={(e) => handleInputChange('member3', 'phone', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Year & Branch
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 1st Year IT"
                          value={formData.member3.yearBranch}
                          onChange={(e) => handleInputChange('member3', 'yearBranch', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="member3-iet-member"
                            checked={formData.member3.isIETMember}
                            onChange={(e) => handleInputChange('member3', 'isIETMember', e.target.checked)}
                            className="w-4 h-4 rounded border-blue-500/20 text-blue-500 focus:ring-blue-500 bg-white/10"
                          />
                          <label htmlFor="member3-iet-member" className="ml-2 text-white">
                            IET Student Member
                          </label>
                        </div>
                        {formData.member3.isIETMember && (
                          <div>
                            <label className="block text-white font-medium mb-1">
                              IET Membership ID
                            </label>
                            <input
                              type="text"
                              placeholder="Enter IET Membership ID"
                              value={formData.member3.ietMembershipId}
                              onChange={(e) => handleInputChange('member3', 'ietMembershipId', e.target.value)}
                              className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : currentStep === 'project-upload' ? (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Project Details</h2>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    Upload your mobile app prototype details
                  </p>

                  <div className="space-y-4 max-w-3xl mx-auto">
                    <div>
                      <label className="block text-white font-medium mb-1">
                        Prototyping Tool Used <span style={{ color: '#22bbe0' }}>*</span>
                      </label>
                      <select
                        value={formData.prototypeTool}
                        onChange={(e) => handleInputChange('prototypeTool', '', e.target.value)}
                        className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Select a tool</option>
                        <option value="Figma">Figma</option>
                        <option value="Adobe XD">Adobe XD</option>
                        <option value="Sketch">Sketch</option>
                        <option value="InVision">InVision</option>
                        <option value="Other">Other</option>
                      </select>
                      {formData.prototypeTool === 'Other' && (
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Please specify"
                            value={formData.otherTool}
                            onChange={(e) => handleInputChange('otherTool', '', e.target.value)}
                            className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1">
                        Upload App Screens (PDF/Images) <span style={{ color: '#22bbe0' }}>*</span>
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleUploadClick('screens')}
                          className="px-4 py-2 rounded-lg text-white select-file-btn"
                          style={{ background: '#22bbe0', border: '1.5px solid #22bbe0' }}
                        >
                          {uploadedFiles.screens ? 'Change File' : 'Select File'}
                        </button>
                        <input
                          type="file"
                          ref={screensRef}
                          onChange={(e) => handleFileUpload('screens', e)}
                          className="hidden"
                          accept=".png,.jpg,.jpeg,.pdf"
                        />
                        {uploadedFiles.screens && (
                          <div className="flex items-center gap-2 text-green-400">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm">File selected</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-400 text-xs mt-1">
                        Upload screenshots or PDF of your app (max 5MB, PNG/JPG/PDF)
                      </p>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1">
                        Prototype Link (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://figma.com/prototype/..."
                        value={formData.prototypeLink}
                        onChange={(e) => handleInputChange('prototypeLink', '', e.target.value)}
                        className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <p className="text-gray-400 text-xs mt-1">
                        Share a link to your interactive prototype if available
                      </p>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1">
                        App Sync Description <span style={{ color: '#22bbe0' }}>*</span>
                      </label>
                      <textarea
                        placeholder="Describe how your app syncs with the theme (200-300 words)"
                        value={formData.appSyncDescription}
                        onChange={(e) => handleInputChange('appSyncDescription', '', e.target.value)}
                        rows={5}
                        className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      ></textarea>
                      <p className="text-gray-400 text-xs mt-1">
                        Explain how your app aligns with the competition theme
                      </p>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        placeholder="Any additional information about your project"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange('additionalNotes', '', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>
                </>
              ) : currentStep === 'payment' ? (
                <>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Registration Fee</h2>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-white font-medium mb-1">
                          Fee Type <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => handleInputChange('feeType', '', 'IET Member Team')}
                          className={`w-full px-3 py-2 flex items-center gap-2 bg-white/10 border ${
                            formData.feeType === 'IET Member Team' 
                              ? 'border-purple-500 ring-1 ring-purple-500' 
                              : 'border-purple-500/20'
                          } rounded-lg text-white hover:bg-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-left`}
                        >
                          <input 
                            type="radio" 
                            name="feeType" 
                            value="IET Member Team" 
                            checked={formData.feeType === 'IET Member Team'}
                            onChange={() => handleInputChange('feeType', '', 'IET Member Team')}
                            className="w-4 h-4 border-purple-500/20 text-purple-500 focus:ring-purple-500 bg-white/10" 
                          />
                          <div>
                            <div className="font-medium text-white">IET Member Team - ₹300</div>
                            <div className="text-sm text-gray-300">At least one member must be an IET Student Member</div>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleInputChange('feeType', '', 'Non-Member Team')}
                          className={`w-full px-3 py-2 flex items-center gap-2 bg-white/10 border ${
                            formData.feeType === 'Non-Member Team'
                              ? 'border-purple-500 ring-1 ring-purple-500'
                              : 'border-purple-500/20'
                          } rounded-lg text-white hover:bg-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-left`}
                        >
                          <input 
                            type="radio" 
                            name="feeType" 
                            value="Non-Member Team" 
                            checked={formData.feeType === 'Non-Member Team'}
                            onChange={() => handleInputChange('feeType', '', 'Non-Member Team')}
                            className="w-4 h-4 border-purple-500/20 text-purple-500 focus:ring-purple-500 bg-white/10" 
                          />
                          <div>
                            <div className="font-medium text-white">Non-Member Team - ₹600</div>
                            <div className="text-sm text-gray-300">For teams without IET membership</div>
                          </div>
                        </button>
                      </div>
                    </div>
                    {/* Bank Details Section - visually distinct */}
                    <div className="my-4 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-2xl">🏦</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">Bank Details for Payment</h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-sm">
                        <div>
                          <div className="text-gray-300 font-medium">Bank Name</div>
                          <div className="font-semibold text-white">Axis Bank</div>
                        </div>
                        <div>
                          <div className="text-gray-300 font-medium">Account Name</div>
                          <div className="font-semibold text-white">INSTITUTION OF ENGINEERING AND TECHNOLOGY-LOCAL NETWORK ACCOUNT HYDERABAD</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div>
                            <div className="text-gray-300 font-medium">Account Number</div>
                            <div className="font-semibold text-white select-all">924020040374045</div>
                          </div>
                          <button type="button" onClick={() => navigator.clipboard.writeText('92402004037404S')} aria-label="Copy Account Number"><Copy className="w-4 h-4" /></button>
                        </div>
                        <div className="flex items-center gap-2">
                          <div>
                            <div className="text-gray-300 font-medium">IFSC Code</div>
                            <div className="font-semibold text-white select-all">UTIB0000009</div>
                          </div>
                          <button type="button" onClick={() => navigator.clipboard.writeText('UTIB0000009')} aria-label="Copy IFSC Code"><Copy className="w-4 h-4" /></button>
                        </div>
                        <div>
                          <div className="text-gray-300 font-medium">Branch Name</div>
                          <div className="font-semibold text-white">Bangalore Main Branch</div>
                        </div>
                      </div>
                    </div>
                    {/* Transaction Details Section */}
                    <div className="space-y-2">
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Transaction Reference Number <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter transaction ID after payment"
                          value={formData.transactionId}
                          onChange={(e) => handleInputChange('transactionId', '', e.target.value)}
                          className="w-full px-3 py-2 bg-white/10 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <p className="text-gray-300 text-xs mt-1">Enter the transaction ID received after payment</p>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-1">
                          Upload Transaction Screenshot <span style={{ color: '#22bbe0' }}>*</span>
                        </label>
                        <div 
                          onClick={() => handleUploadClick('payment')}
                          className="border-2 border-dashed border-[#22BBE0]/20 rounded-lg p-8 hover:border-[#22BBE0] transition-colors cursor-pointer bg-white/5"
                        >
                          <input
                            type="file"
                            ref={paymentRef}
                            onChange={(e) => handleFileUpload('payment', e)}
                            accept="image/png,image/jpeg,image/jpg"
                            className="hidden"
                          />
                          <div className="flex flex-col items-center justify-center text-center">
                            {uploadedFiles.payment ? (
                              <div className="w-full">
                                <img 
                                  src={uploadedFiles.payment} 
                                  alt="Transaction Screenshot" 
                                  className="max-h-48 mx-auto mb-2"
                                />
                                <p className="text-sm text-gray-300">Click to change image</p>
                              </div>
                            ) : (
                              <>
                                <span className="text-2xl mb-2">⬆️</span>
                                <div className="text-white font-medium">Click to upload screenshot</div>
                                <div className="text-gray-300 text-xs">PNG, JPG up to 10MB</div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Declaration Section - normal design */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">📝</span>
                        </div>
                        <h2 className="text-xl font-bold text-white">Declarations & Consent</h2>
                      </div>
                      <div className="space-y-2">
                        <p className="text-white">By submitting this form, we confirm that:</p>
                        <ul className="list-disc text-gray-300 space-y-1 ml-5">
                          <li>We confirm both participants are undergrad engineering students from Telangana, Andhra Pradesh, or Chhattisgarh.</li>
                          <li>We acknowledge solo participation is not allowed.</li>
                          <li>We agree to pay the registration fee (₹300 for IET members / ₹600 for non-members).</li>
                        </ul>
                        <div className="flex items-center gap-2 mt-2">
                          <input
                            type="checkbox"
                            id="terms"
                            checked={formData.termsAccepted}
                            onChange={(e) => handleInputChange('termsAccepted', '', e.target.checked)}
                            className="w-4 h-4 rounded border-purple-500/20 text-purple-500 focus:ring-purple-500 bg-white/10"
                          />
                          <label htmlFor="terms" className="text-white">
                            I/We agree to the above terms and conditions <span style={{ color: '#22bbe0' }}>*</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </form>
          </div>

          {/* Navigation Buttons OUTSIDE the form */}
          <div className="flex justify-between items-center max-w-3xl mx-auto mt-16 gap-2">
            {currentStep !== 'team-details' && (
              <button
                type="button"
                onClick={() => {
                  if (currentStep === 'team-members') setCurrentStep('team-details');
                  else if (currentStep === 'project-upload') setCurrentStep('team-members');
                  else if (currentStep === 'payment') setCurrentStep('project-upload');
                }}
                className="outline-btn px-6 py-2 rounded-lg font-medium flex items-center gap-2"
                onMouseUp={e => e.currentTarget.blur()}
              >
                <span className="arrow-left">←</span> Previous
              </button>
            )}
            <div className="flex-1"></div>
            {currentStep !== 'payment' ? (
              <button
                type="button"
                onClick={() => {
                  if (currentStep === 'team-details') setCurrentStep('team-members');
                  else if (currentStep === 'team-members') setCurrentStep('project-upload');
                  else if (currentStep === 'project-upload') setCurrentStep('payment');
                }}
                className="gradient-btn px-6 py-2 rounded-lg font-medium flex items-center gap-2"
                onMouseUp={e => e.currentTarget.blur()}
              >
                Next <span className="arrow-right">→</span>
              </button>
            ) : (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="gradient-btn px-6 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onMouseUp={e => e.currentTarget.blur()}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {submissionStatus.message}
                  </>
                ) : (
                  <>Submit Registration <span className="arrow-right">📨</span></>
                )}
              </button>
            )}
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
          background-image: radial-gradient(2px 2px at var(--star-x, 50%) var(--star-y, 50%), rgba(160, 70, 180, 0.3), transparent);
          background-size: 200px 200px;
          animation: twinkle 4s infinite;
        }
        
        .stars-medium {
          background-image: radial-gradient(3px 3px at var(--star-x, 30%) var(--star-y, 70%), rgba(160, 70, 180, 0.3), transparent);
          background-size: 300px 300px;
          animation-delay: 2s;
        }
        
        .stars-large {
          background-image: radial-gradient(4px 4px at var(--star-x, 70%) var(--star-y, 30%), rgba(160, 70, 180, 0.3), transparent);
          background-size: 400px 400px;
          animation-delay: 3s;
        }

        @media (max-width: 768px) {
          .container, .max-w-6xl, .md\:max-w-6xl {
            max-width: 100vw !important;
            width: 100vw !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }

        .gradient-btn {
          background: linear-gradient(135deg, #22bbe0 0%, #003a66 100%);
          color: #fff;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
          transition: background 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1);
          position: relative;
          overflow: hidden;
        }
        .gradient-btn:hover {
          background: linear-gradient(135deg, #003A66 0%, #22bbe0 100%);
          box-shadow: 0 10px 15px rgba(34,187,224,0.2), 0 4px 6px rgba(34,187,224,0.1);
          transform: translateY(-4px);
          outline: none;
        }
        .gradient-btn:focus {
          outline: none;
        }
        .gradient-btn:active {
          transform: translateY(-2px);
        }
        .gradient-btn:disabled, .gradient-btn[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
          background: linear-gradient(135deg, #22bbe0 0%, #003a66 100%);
          box-shadow: none;
          transform: none;
        }
        .gradient-btn .arrow-right {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(.4,0,.2,1);
        }
        .gradient-btn:hover .arrow-right {
          transform: translateX(3px);
        }
        .outline-btn {
          border: 2px solid #22bbe0;
          color: #22bbe0;
          background: transparent;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          transition: background 0.3s cubic-bezier(.4,0,.2,1), border-color 0.3s cubic-bezier(.4,0,.2,1), color 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1);
          position: relative;
          overflow: hidden;
        }
        .outline-btn:hover {
          background: transparent;
          border-color: #003A66;
          color: #003A66;
          transform: translateY(-4px);
          outline: none;
        }
        .outline-btn:focus {
          outline: none;
        }
        .outline-btn:active {
          transform: translateY(-2px);
        }
        .outline-btn .arrow-left {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(.4,0,.2,1);
        }
        .outline-btn:hover .arrow-left {
          transform: translateX(-3px);
        }
        .error-message {
          color: #ef4444;
          font-size: 0.95em;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
          font-weight: 500;
        }
        .select-file-btn:hover {
          background: #003A66 !important;
          border-color: #003A66 !important;
        }
      `}</style>
    </div>
  );
};

export default AppAstral;