import { useState } from 'react';

interface Skill {
  id: number;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface SkillsSectionProps {
  skills: Skill[];
  onAddSkill: (skill: Skill) => void;
  onRemoveSkill: (id: number) => void;
}

const popularSkills = [
  'Prompt Engineering',
  'AI Tools',
  'Python',
  'Machine Learning',
  'Data Analysis',
  'Automation',
  'ChatGPT',
  'NLP'
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 'bg-green-100 text-green-700';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-700';
    case 'Advanced':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

/**
 * SkillsSection Component
 * Manage user skills with add/remove functionality
 */
export default function SkillsSection({ skills, onAddSkill, onRemoveSkill }: SkillsSectionProps) {
  const [newSkill, setNewSkill] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.find(s => s.name.toLowerCase() === newSkill.toLowerCase())) {
      onAddSkill({
        id: Date.now(),
        name: newSkill.trim(),
        level: newSkillLevel
      });
      setNewSkill('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddSkill();
    }
  };

  const handleAddPopularSkill = (skillName: string) => {
    if (!skills.find(s => s.name.toLowerCase() === skillName.toLowerCase())) {
      onAddSkill({
        id: Date.now(),
        name: skillName,
        level: 'Beginner'
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Skills & Expertise
        <span className="ml-auto text-sm font-normal text-gray-500">{skills.length} skills</span>
      </h3>

      {/* Current Skills */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-500 mb-3">Your Skills</label>
        {skills.length === 0 ? (
          <p className="text-gray-400 italic">No skills added yet. Add your first skill below!</p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <div
                key={skill.id}
                className="group flex items-center gap-2 bg-gradient-to-r from-violet-50 to-indigo-50 px-4 py-2 rounded-full border border-violet-200"
              >
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
                <button
                  onClick={() => onRemoveSkill(skill.id)}
                  className="opacity-0 group-hover:opacity-100 w-5 h-5 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-all"
                  title="Remove skill"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add New Skill */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-500 mb-3">Add New Skill</label>
        <div className="flex gap-3">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            placeholder="Enter skill name (e.g., Python, AI Tools)"
          />
          <select
            value={newSkillLevel}
            onChange={(e) => setNewSkillLevel(e.target.value as 'Beginner' | 'Intermediate' | 'Advanced')}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button
            onClick={handleAddSkill}
            disabled={!newSkill.trim()}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>

      {/* Popular Skills Suggestions */}
      <div>
        <label className="block text-sm font-medium text-gray-500 mb-3">Popular Skills</label>
        <div className="flex flex-wrap gap-2">
          {popularSkills.map(skill => {
            const isAdded = !!skills.find(s => s.name.toLowerCase() === skill.toLowerCase());
            return (
              <button
                key={skill}
                onClick={() => handleAddPopularSkill(skill)}
                disabled={isAdded}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isAdded
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-700'
                }`}
              >
                {skill}
                {isAdded && (
                  <svg className="w-4 h-4 inline ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
