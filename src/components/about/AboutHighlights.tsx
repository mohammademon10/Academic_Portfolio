
import React from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const AboutHighlights = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "BSc CSE student at Daffodil International University, driven by curiosity and a commitment to continuous academic growth and technological innovation."
    },
    {
      icon: BookOpen,
      title: "Research Focus",
      description: "Active researcher at DIU Embedded System Research Lab — exploring AI, ML, Deep Learning, NLP, and Brain-Computer Interface technologies."
    },
    {
      icon: Users,
      title: "Educator & Mentor",
      description: "Founder of EMON SCIENCELAB — teaching Physics, Math, ICT, and Programming to hundreds of students online and offline since 2022."
    },
    {
      icon: Award,
      title: "Problem Solver",
      description: "Building real-world solutions from healthcare platforms to agricultural tools — always learning, always shipping meaningful technology."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
            <item.icon size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutHighlights;
