import { useState } from 'react';

interface SettingsPanelProps {
  onLogout: () => void;
}

/**
 * SettingsPanel Component
 * Account settings including password change, notifications, and danger zone
 */
export default function SettingsPanel({ onLogout }: SettingsPanelProps) {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [notifications, setNotifications] = useState({
    email: true,
    courseUpdates: true,
    interviewReminders: false
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match!');
      return;
    }
    if (passwords.new.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    console.log('Password change requested:', { current: passwords.current, new: passwords.new });
    alert('Password changed successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
    setShowPasswordForm(false);
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Account Settings
      </h3>

      {/* Change Password */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-gray-800">Change Password</h4>
            <p className="text-sm text-gray-500">Update your password regularly for security</p>
          </div>
          <button
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="text-violet-600 font-medium hover:text-violet-700"
          >
            {showPasswordForm ? 'Cancel' : 'Change'}
          </button>
        </div>

        {showPasswordForm && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4 bg-gray-50 rounded-lg p-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input
                type="password"
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Confirm new password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Update Password
            </button>
          </form>
        )}
      </div>

      {/* Notification Preferences */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">Notification Preferences</h4>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <span className="font-medium text-gray-700">Email Notifications</span>
              <p className="text-sm text-gray-500">Receive general email updates</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() => toggleNotification('email')}
              className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
            />
          </label>
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <span className="font-medium text-gray-700">Course Updates</span>
              <p className="text-sm text-gray-500">Get notified about new courses</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.courseUpdates}
              onChange={() => toggleNotification('courseUpdates')}
              className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
            />
          </label>
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <span className="font-medium text-gray-700">Interview Reminders</span>
              <p className="text-sm text-gray-500">Reminders for interview practice</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.interviewReminders}
              onChange={() => toggleNotification('interviewReminders')}
              className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
            />
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
        <h4 className="font-semibold text-red-800 mb-2">Danger Zone</h4>
        <p className="text-sm text-red-600 mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <div className="flex gap-4">
          <button
            onClick={onLogout}
            className="flex-1 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Logout
          </button>
          <button
            onClick={() => alert('Account deletion feature coming soon!')}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
