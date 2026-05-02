
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Academic & Research",
      skills: [
        { name: "Teaching & Mentoring", level: 95 },
        { name: "Research Methodology", level: 85 },
        { name: "Content Creation", level: 90 },
        { name: "Technical Writing", level: 80 },
        { name: "AI/ML Research", level: 80 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "C++", level: 95 },
        { name: "C", level: 95 },
      ]
    },
    {
      title: "Web Technologies & Database",
      skills: [
        { name: "HTML / CSS", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "PHP", level: 88 },
        { name: "React / Vite", level: 75 },
        { name: "MySQL", level: 95 },
      ]
    },
    {
      title: "Software & Project Management",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Prompt Engineering", level: 90 },
        { name: "Software Development", level: 92 },
        { name: "Problem Solving", level: 92 },
        { name: "Team Leadership", level: 98 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive skill set developed through academic projects, competitions, and real-world software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-3 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
