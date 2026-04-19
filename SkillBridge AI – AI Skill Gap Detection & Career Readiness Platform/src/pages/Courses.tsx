import React, { useState } from 'react';
import { Sparkles, Trophy, TrendingUp, BookOpen, CheckCircle } from 'lucide-react';
import CourseCard from '../components/courses/CourseCard';
import EnrolledCourseCard from '../components/courses/EnrolledCourseCard';
import CourseTabs from '../components/courses/CourseTabs';
import SearchBar from '../components/courses/SearchBar';
import CourseDetail from '../components/courses/CourseDetail';

// Course Interface
interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modules: number;
  rating: number;
}

// Module Interface
interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  videoCount: number;
}

// Enrolled Course Interface
interface EnrolledCourse {
  courseId: string;
  progress: number;
  completedModules: string[];
  enrolledDate: string;
  lastAccessed: string;
}

const Courses: React.FC = () => {
  // State Management
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([
    { courseId: '1', progress: 60, completedModules: ['1-1', '1-2', '1-3'], enrolledDate: '2024-01-15', lastAccessed: '2 hours ago' },
    { courseId: '2', progress: 30, completedModules: ['2-1'], enrolledDate: '2024-01-20', lastAccessed: '1 day ago' }
  ]);

  // Dummy Courses Data
  const allCourses: Course[] = [
    {
      id: '1',
      title: 'Prompt Engineering Mastery',
      description: 'Master the art of crafting effective prompts for AI models. Learn advanced techniques for ChatGPT, Claude, and more.',
      difficulty: 'Beginner',
      duration: '3 hours',
      modules: 5,
      rating: 4.8
    },
    {
      id: '2',
      title: 'ChatGPT for Developers',
      description: 'Integrate ChatGPT API into your applications. Build AI-powered features and automate workflows.',
      difficulty: 'Intermediate',
      duration: '5 hours',
      modules: 8,
      rating: 4.7
    },
    {
      id: '3',
      title: 'AI Automation with Zapier',
      description: 'Connect AI tools with your favorite apps. Automate repetitive tasks and boost productivity.',
      difficulty: 'Beginner',
      duration: '2.5 hours',
      modules: 4,
      rating: 4.6
    },
    {
      id: '4',
      title: 'Resume Optimization using AI',
      description: 'Use AI to create ATS-friendly resumes. Learn to optimize your profile for job applications.',
      difficulty: 'Beginner',
      duration: '2 hours',
      modules: 3,
      rating: 4.5
    },
    {
      id: '5',
      title: 'Interview Preparation with AI',
      description: 'Practice mock interviews with AI. Get instant feedback and improve your interview skills.',
      difficulty: 'Intermediate',
      duration: '4 hours',
      modules: 6,
      rating: 4.9
    },
    {
      id: '6',
      title: 'Advanced AI Workflows',
      description: 'Build complex AI automation workflows. Chain multiple AI tools for powerful outcomes.',
      difficulty: 'Advanced',
      duration: '6 hours',
      modules: 10,
      rating: 4.8
    },
    {
      id: '7',
      title: 'AI for Data Analysis',
      description: 'Leverage AI for data insights. Learn to analyze datasets using AI-powered tools.',
      difficulty: 'Intermediate',
      duration: '4.5 hours',
      modules: 7,
      rating: 4.6
    },
    {
      id: '8',
      title: 'Building AI Chatbots',
      description: 'Create intelligent chatbots for customer support. Deploy on websites and messaging platforms.',
      difficulty: 'Advanced',
      duration: '7 hours',
      modules: 12,
      rating: 4.7
    }
  ];

  // Module Data for Course Detail
  const getModulesForCourse = (courseId: string): Module[] => {
    const modulesData: Record<string, Module[]> = {
      '1': [
        { id: '1-1', title: 'Introduction to Prompt Engineering', description: 'Understanding the basics of prompts and AI responses', duration: '20 min', isCompleted: true, isLocked: false, videoCount: 3 },
        { id: '1-2', title: 'Writing Effective Prompts', description: 'Learn the structure of great prompts', duration: '35 min', isCompleted: true, isLocked: false, videoCount: 4 },
        { id: '1-3', title: 'Advanced Prompt Techniques', description: 'Chain-of-thought, few-shot prompting, and more', duration: '45 min', isCompleted: true, isLocked: false, videoCount: 5 },
        { id: '1-4', title: 'Prompt Optimization', description: 'Iterate and refine your prompts for better results', duration: '30 min', isCompleted: false, isLocked: false, videoCount: 3 },
        { id: '1-5', title: 'Real-world Projects', description: 'Apply your skills to practical scenarios', duration: '50 min', isCompleted: false, isLocked: true, videoCount: 4 }
      ],
      '2': [
        { id: '2-1', title: 'Getting Started with ChatGPT API', description: 'Setup and first API call', duration: '25 min', isCompleted: true, isLocked: false, videoCount: 2 },
        { id: '2-2', title: 'API Integration Basics', description: 'Integrate ChatGPT into your apps', duration: '40 min', isCompleted: false, isLocked: false, videoCount: 4 },
        { id: '2-3', title: 'Building AI Features', description: 'Create smart features using AI', duration: '55 min', isCompleted: false, isLocked: true, videoCount: 5 },
        { id: '2-4', title: 'Error Handling & Optimization', description: 'Handle errors and optimize API calls', duration: '35 min', isCompleted: false, isLocked: true, videoCount: 3 }
      ]
    };
    return modulesData[courseId] || [];
  };

  // Filter Courses
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === '' || course.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  // Get Enrolled Courses with Details
  const myCourses = enrolledCourses.map(enrollment => {
    const course = allCourses.find(c => c.id === enrollment.courseId);
    return {
      courseId: enrollment.courseId,
      ...course!,
      progress: enrollment.progress,
      completedModules: enrollment.completedModules.length,
      totalModules: course!.modules,
      lastAccessed: enrollment.lastAccessed
    };
  });

  // Handle Enrollment
  const handleEnroll = (courseId: string) => {
    const course = allCourses.find(c => c.id === courseId);
    if (course && !enrolledCourses.find(e => e.courseId === courseId)) {
      setEnrolledCourses([
        ...enrolledCourses,
        {
          courseId,
          progress: 0,
          completedModules: [],
          enrolledDate: new Date().toISOString().split('T')[0],
          lastAccessed: 'Just now'
        }
      ]);
      alert(`Successfully enrolled in "${course.title}"!`);
    }
  };

  // Handle Continue Learning
  const handleContinue = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  // Handle Module Completion
  const handleToggleComplete = (moduleId: string) => {
    if (selectedCourse) {
      const enrollment = enrolledCourses.find(e => e.courseId === selectedCourse);
      if (enrollment) {
        const isCompleted = enrollment.completedModules.includes(moduleId);
        const updatedCompleted = isCompleted
          ? enrollment.completedModules.filter(id => id !== moduleId)
          : [...enrollment.completedModules, moduleId];
        
        const newProgress = Math.round((updatedCompleted.length / getModulesForCourse(selectedCourse).length) * 100);
        
        setEnrolledCourses(enrolledCourses.map(e =>
          e.courseId === selectedCourse
            ? { ...e, completedModules: updatedCompleted, progress: newProgress }
            : e
        ));
      }
    }
  };

  // Handle Play Module
  const handlePlayModule = (moduleId: string) => {
    console.log('Playing module:', moduleId);
    alert('Module video would play here. This is a demo!');
  };

  // Get Selected Course Details
  const getSelectedCourseData = () => {
    if (!selectedCourse) return null;
    const course = allCourses.find(c => c.id === selectedCourse);
    const enrollment = enrolledCourses.find(e => e.courseId === selectedCourse);
    if (!course || !enrollment) return null;
    
    return {
      course: { ...course, enrolledDate: enrollment.enrolledDate },
      progress: enrollment.progress,
      completedModules: enrollment.completedModules.length,
      totalModules: course.modules,
      modules: getModulesForCourse(selectedCourse)
    };
  };

  const selectedCourseData = getSelectedCourseData();

  // Show Course Detail View
  if (selectedCourseData) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <CourseDetail
            course={selectedCourseData.course}
            progress={selectedCourseData.progress}
            completedModules={selectedCourseData.completedModules}
            totalModules={selectedCourseData.totalModules}
            modules={selectedCourseData.modules}
            onBack={() => setSelectedCourse(null)}
            onToggleComplete={handleToggleComplete}
            onPlayModule={handlePlayModule}
          />
        </div>
      </div>
    );
  }

  // Main Courses View
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">AI Learning Hub</h1>
              <p className="text-gray-600">Master in-demand AI skills and tools</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{enrolledCourses.length}</div>
              <div className="text-sm text-gray-600">Courses Enrolled</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {enrolledCourses.reduce((acc, curr) => acc + curr.completedModules.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Modules Completed</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {Math.round(enrolledCourses.reduce((acc, curr) => acc + curr.progress, 0) / (enrolledCourses.length || 1))}%
              </div>
              <div className="text-sm text-gray-600">Average Progress</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <CourseTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            allCoursesCount={allCourses.length}
            myCoursesCount={enrolledCourses.length}
          />
        </div>

        {/* Search and Filter */}
        <div className="mb-6">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filterDifficulty={filterDifficulty}
            onFilterChange={setFilterDifficulty}
          />
        </div>

        {/* Courses Grid */}
        {activeTab === 'all' ? (
          <>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Browse All Courses</h2>
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard
                    key={course.id}
                    {...course}
                    isEnrolled={enrolledCourses.some(e => e.courseId === course.id)}
                    onEnroll={handleEnroll}
                    onViewDetails={handleContinue}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600">No courses found</h3>
                <p className="text-gray-500">Try adjusting your search or filter</p>
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-gray-800 mb-4">My Learning</h2>
            {myCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myCourses.map(course => (
                  <EnrolledCourseCard
                    key={course.courseId}
                    id={course.courseId}
                    title={course.title}
                    description={course.description}
                    progress={course.progress}
                    totalModules={course.totalModules}
                    completedModules={course.completedModules}
                    duration={course.duration}
                    lastAccessed={course.lastAccessed}
                    onContinue={handleContinue}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600">No courses enrolled yet</h3>
                <p className="text-gray-500 mb-4">Browse our courses and start learning today!</p>
                <button
                  onClick={() => setActiveTab('all')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
                >
                  Browse Courses
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
