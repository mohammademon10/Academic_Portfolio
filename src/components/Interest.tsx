import React from 'react';
import { BookOpen, Heart, Brain, Code, Database, Globe, Music, Camera, Gamepad2, Coffee, Dumbbell, Book, ExternalLink, Youtube, Trophy } from 'lucide-react';

interface InterestItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
  link?: string;
}

const Interest = () => {
  const researchInterests: InterestItem[] = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Exploring deep learning algorithms, neural networks, and their applications in solving real-world problems — from healthcare prediction to intelligent tutoring systems.",
      icon: <Brain size={24} className="text-blue-600 dark:text-blue-400" />,
      tags: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"]
    },
    {
      title: "Brain-Computer Interface (BCI)",
      description: "Fascinated by the intersection of neuroscience and computing — exploring how EEG signals and cognitive state detection can power assistive and adaptive technologies.",
      icon: <Globe size={24} className="text-green-600 dark:text-green-400" />,
      tags: ["BCI", "EEG", "Cognitive Computing", "Assistive Tech"]
    },
    {
      title: "AI in Healthcare & EdTech",
      description: "Passionate about building AI-driven solutions for healthcare access and education — from intelligent prescription platforms to adaptive learning tools for students.",
      icon: <Database size={24} className="text-purple-600 dark:text-purple-400" />,
      tags: ["Medical AI", "EdTech", "Adaptive Learning", "Digital Health"]
    },
  ];

  const hobbies: InterestItem[] = [
    {
      title: "Competitive Programming",
      description: "Regularly participating in programming contests and solving algorithmic challenges on online judges. Ranked in multiple DIU CPC events — always chasing that next optimal solution.",
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Content Creation & Teaching",
      description: "Creating and publishing educational content on YouTube covering HSC subjects and programming tutorials through EMON SCIENCELAB — turning complex concepts into clear, engaging lessons.",
      icon: <Youtube size={24} className="text-red-600 dark:text-red-400" />,
    },
    {
      title: "Reading & Self-Learning",
      description: "Consistently reading tech articles, research papers, and books on AI, software engineering, and personal growth. Firm believer that lifelong learning is the greatest investment.",
      icon: <Book size={24} className="text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Music",
      description: "Listening to music across various genres helps me recharge, focus during long coding sessions, and stay creative — from lo-fi beats to Bangladeshi classical music.",
      icon: <Music size={24} className="text-pink-600 dark:text-pink-400" />,
    },
    {
      title: "Cricket & Outdoor Sports",
      description: "A passionate cricket fan and recreational player. Outdoor sports keep me grounded, energized, and remind me that teamwork on the field mirrors collaboration in tech.",
      icon: <Trophy size={24} className="text-green-600 dark:text-green-400" />,
    },
    {
      title: "Coffee & Exploring Cafés",
      description: "A self-confessed coffee enthusiast. Some of the best project ideas, debugging breakthroughs, and study plans have happened over a quiet cup of coffee.",
      icon: <Coffee size={24} className="text-orange-600 dark:text-orange-400" />,
    },
  ];

  return (
    <section id="interest" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Interests</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A glimpse into my research passions and personal hobbies that drive my curiosity and creativity.
          </p>
        </div>

        {/* Research Interest Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen size={32} className="text-blue-600 dark:text-blue-400 mr-4" />
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Research Interest</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                    {interest.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">{interest.title}</h4>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify mb-4">
                  {interest.description}
                </p>
                
                {interest.tags && (
                  <div className="flex flex-wrap gap-2">
                    {interest.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hobby Section */}
        <div>
          <div className="flex items-center mb-8">
            <Heart size={32} className="text-red-600 dark:text-red-400 mr-4" />
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Hobbies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                    {hobby.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">{hobby.title}</h4>
                </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                  {hobby.description}
                </p>
                  {hobby.link && (
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-600">
                    <a
                      href={hobby.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200 text-sm font-medium"
                    >
                      <span>View Gallery</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default Interest;
