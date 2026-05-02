import React from 'react';
import { Trophy, Award, Medal, Star, Target, Zap, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'award' | 'recognition' | 'certification' | 'competition' | 'scholarship' | 'publication';
  icon?: React.ReactNode;
  link?: string;
  badgeLink?: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "Scholarship for Academic Excellence",
      organization: "Daffodil International University",
      year: "Jan 2024 – Present",
      description: "Awarded merit-based tuition fee waivers across multiple semesters for maintaining exceptional academic performance. Received a 45% waiver in Fall 2024 and continuous 25% waivers in subsequent semesters (including Spring 2026), consistently fulfilling the required academic criteria.",
      type: "scholarship",
      icon: <Award size={24} className="text-red-600 dark:text-red-400" />,
      link: "https://www.linkedin.com/in/md-emon-hossain-22774b1a6/details/honors/"
    },
    {
      title: "Unlock the Algorithm — Programming Contest",
      organization: "DIU Computer Programming Club (CPC) & ACM",
      year: "Spring 2025",
      description: "Achieved Rank 61 out of 1000+ participants in the competitive programming contest organized by DIU CPC and ACM. Demonstrated strong algorithmic problem-solving skills under time constraints.",
      type: "competition",
      icon: <Trophy size={24} className="text-yellow-600 dark:text-yellow-400" />,
      link: "https://drive.google.com/open?id=14j3OM8y239AVj1byUdhffy1XVBbxmRTD"
    },
    {
      title: "Take-Off Programming Contest",
      organization: "DIU Computer Programming Club (CPC) & ACM",
      year: "Spring 2024",
      description: "Achieved Rank 45 in the Take-Off Programming Contest — a competitive programming event organized by DIU CPC and ACM, testing data structures, algorithms, and logical reasoning.",
      type: "competition",
      icon: <Medal size={24} className="text-purple-600 dark:text-purple-400" />,
      link: "https://drive.google.com/open?id=1Oex-lWXeYcz9tcyIVEautBBapkgqW8oO"
    },
    {
      title: "Googling Contest",
      organization: "DIU Computer Programming Club (CPC)",
      year: "Spring 2024",
      description: "Achieved Rank 47 in the Googling Contest, a research and information retrieval competition organized by DIU CPC that tests participants' ability to efficiently find and apply information.",
      type: "competition",
      icon: <Star size={24} className="text-blue-600 dark:text-blue-400" />,
      link: "https://drive.google.com/open?id=1h1hUhZWxy_irYnlpBc9KopULRj4zPp2W"
    },
    {
      title: "Prompt Battle — Prompt Engineering Contest",
      organization: "DIU Computer Programming Club (CPC)",
      year: "Summer 2025",
      description: "Participated in the Prompt Battle, a creative AI prompt engineering competition organized by DIU CPC focusing on effective interaction with large language models and generative AI systems.",
      type: "competition",
      icon: <Zap size={24} className="text-indigo-600 dark:text-indigo-400" />,
      link: "https://drive.google.com/open?id=13EpKRkmyQHB0KMDpxlb3ASWJ-4ddi8q0"
    },
    {
      title: "DIU Science Olympiad — Finalist",
      organization: "Daffodil International University, Faculty of Science & IT",
      year: "Fall 2024",
      description: "Achieved Finalist position in the DIU Science Olympiad, organized by the Faculty of Science & Information Technology on Nov 28, 2024 — competing against students across all science disciplines.",
      type: "recognition",
      icon: <Award size={24} className="text-green-600 dark:text-green-400" />,
      link: "https://drive.google.com/open?id=198RZJiqiZsApZf1emcXCzkdMij4WXnv1"
    },
    {
      title: "1st S.N. Bose National Science Festival",
      organization: "Biggan Adda",
      year: "May 2025",
      description: "Participated in the Science Olympiad Competition at the 1st S.N. Bose National Science Festival held on May 24–25, 2025 — a national-level science competition organized by Biggan Adda.",
      type: "recognition",
      icon: <Target size={24} className="text-orange-600 dark:text-orange-400" />,
      link: "https://drive.google.com/open?id=1D_Kpw15d2ULIty25BAXKI3fLLLqHxXT1"
    },
    {
      title: "AI for Innovation — Career Seminar",
      organization: "DIU Career Development Center (CDC)",
      year: "March 2025",
      description: "Attended 'Empowering Future Leaders: AI for Innovation', a career development seminar on harnessing AI for professional success, organized by the DIU Career Development Center on Mar 23, 2025.",
      type: "certification",
      icon: <Award size={24} className="text-teal-600 dark:text-teal-400" />,
      link: "https://drive.google.com/open?id=1Afdri4GD8MV9T_gpMVD25mkemuQn_IqB"
    },
    {
      title: "Stock Market Analysis Training",
      organization: "HEAT Project 13375 & Daffodil International University",
      year: "March 2026",
      description: "Successfully completed certified training in Fundamental & Technical Analysis of the Stock Market, organized by the HEAT Project 13375 and Daffodil International University on Mar 07, 2026.",
      type: "certification",
      icon: <Zap size={24} className="text-pink-600 dark:text-pink-400" />,
      link: "https://drive.google.com/open?id=1SAvlKKd2pRSpBg66dBfXrJ_S-3-p1qLv"
    },
    {
      title: "Regional High School ICT Quiz Contest",
      organization: "Noakhali Science and Technology University",
      year: "2017",
      description: "Participated in the National High School Programming Contest at Noakhali Science and Technology University on Mar 19, 2017 — an early milestone reflecting a long-standing passion for computing and technology.",
      type: "competition",
      icon: <Medal size={24} className="text-slate-600 dark:text-slate-400" />,
      link: "https://drive.google.com/open?id=1LiDutIHygunOjOcMBRA2rT4ekDkgbxGO"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      award: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      recognition: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      certification: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      competition: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      scholarship: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      publication: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Recognition and milestones that reflect dedication, excellence, and continuous growth in academics and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getTypeColor(achievement.type)}`}>
                    {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                {achievement.title}
              </h3>

              <div className="mb-3">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {achievement.organization}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {achievement.year}
                </p>
              </div>

              <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                {achievement.description.split('\n').map((paragraph, idx) => (
                  <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {(achievement.link || achievement.badgeLink) && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                  <div className="flex flex-wrap gap-3">
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                    {achievement.badgeLink && (
                      <a
                        href={achievement.badgeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors duration-200 text-sm font-medium"
                      >
                        <span>View Badge</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
