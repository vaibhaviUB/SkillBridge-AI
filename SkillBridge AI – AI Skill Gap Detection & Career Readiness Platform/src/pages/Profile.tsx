import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileHeader from '../components/profile/ProfileHeader';
import PersonalInfoForm from '../components/profile/PersonalInfoForm';
import SkillsSection from '../components/profile/SkillsSection';
import CertificationsSection from '../components/profile/CertificationsSection';
import SettingsPanel from '../components/profile/SettingsPanel';

interface Skill {
  id: number;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress';
  badge?: boolean;
}

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  bio: string;
  userType: string;
}

/**
 * Profile Page Component
 * Complete profile management system with editable sections
 */
export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  // User data state
  const [userInfo, setUserInfo] = useState<PersonalInfo>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    bio: 'Passionate about AI and machine learning. Currently learning prompt engineering and AI automation tools.',
    userType: 'Student'
  });

  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: 'Prompt Engineering', level: 'Intermediate' },
    { id: 2, name: 'AI Tools', level: 'Advanced' },
    { id: 3, name: 'Python', level: 'Beginner' },
    { id: 4, name: 'Machine Learning', level: 'Beginner' }
  ]);

  const [certifications] = useState<Certification[]>([
    {
      id: 1,
      title: 'Prompt Engineering Basics',
      issuer: 'SkillBridge AI',
      date: 'Completed Jan 2025',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'AI Tools Mastery',
      issuer: 'SkillBridge AI',
      date: 'Completed Feb 2025',
      status: 'Completed',
      badge: true
    },
    {
      id: 3,
      title: 'Automation with AI',
      issuer: 'SkillBridge AI',
      date: 'In Progress',
      status: 'In Progress'
    }
  ]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedInfo = localStorage.getItem('userProfile');
    const savedSkills = localStorage.getItem('userSkills');
    
    if (savedInfo) {
      setUserInfo(JSON.parse(savedInfo));
    }
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills));
    }
  }, []);

  // Save personal info
  const handleSaveInfo = (info: PersonalInfo) => {
    setUserInfo(info);
    localStorage.setItem('userProfile', JSON.stringify(info));
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  // Add skill
  const handleAddSkill = (skill: Skill) => {
    const updatedSkills = [...skills, skill];
    setSkills(updatedSkills);
    localStorage.setItem('userSkills', JSON.stringify(updatedSkills));
  };

  // Remove skill
  const handleRemoveSkill = (id: number) => {
    const updatedSkills = skills.filter(s => s.id !== id);
    setSkills(updatedSkills);
    localStorage.setItem('userSkills', JSON.stringify(updatedSkills));
  };

  // Logout handler
  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your personal and professional information</p>
        </div>

        {/* Profile Header */}
        <div className="mb-8">
          <ProfileHeader
            name={userInfo.name}
            email={userInfo.email}
            userType={userInfo.userType}
            memberSince="January 2025"
            onEdit={() => setIsEditing(true)}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <PersonalInfoForm
              info={userInfo}
              isEditing={isEditing}
              onSave={handleSaveInfo}
              onCancel={() => setIsEditing(false)}
            />

            {/* Skills Section */}
            <SkillsSection
              skills={skills}
              onAddSkill={handleAddSkill}
              onRemoveSkill={handleRemoveSkill}
            />

            {/* Certifications */}
            <CertificationsSection certifications={certifications} />
          </div>

          {/* Right Column - Settings */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SettingsPanel onLogout={handleLogout} />
              
              {/* Quick Stats Card */}
              <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white mt-8">
                <h3 className="font-bold text-lg mb-4">Profile Completion</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-white rounded-full h-3 transition-all" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Personal Info Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Skills Added</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Add More Certifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
