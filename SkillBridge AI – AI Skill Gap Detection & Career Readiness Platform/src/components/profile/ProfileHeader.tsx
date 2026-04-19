

interface ProfileHeaderProps {
  name: string;
  email: string;
  userType: string;
  memberSince: string;
  onEdit: () => void;
}

/**
 * ProfileHeader Component
 * Displays user avatar, name, email, and user type
 */
export default function ProfileHeader({ name, email, userType, memberSince, onEdit }: ProfileHeaderProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white/30 shadow-lg">
            {initials}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-400 w-8 h-8 rounded-full border-4 border-violet-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <p className="text-white/80 text-lg mb-3">{email}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
              {userType}
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
              Member since {memberSince}
            </span>
          </div>
          <button
            onClick={onEdit}
            className="bg-white text-violet-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
