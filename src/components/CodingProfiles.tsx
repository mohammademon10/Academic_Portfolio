import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

interface Platform {
  name: string;
  tagline: string;
  description: string;
  url: string;
  username: string;
  color: string;
  badgeColor: string;
  dotColor: string;
  logo: React.ReactNode;
}

const CodingProfiles = () => {
  const platforms: Platform[] = [
    {
      name: "LeetCode",
      tagline: "DSA & Interview Prep",
      description: "Actively solving Data Structures & Algorithms problems and preparing for technical interviews with structured problem sets.",
      url: "https://leetcode.com/u/MD_Emon_Hossain/",
      username: "MD_Emon_Hossain",
      color: "hover:border-orange-400 dark:hover:border-orange-500",
      badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      dotColor: "bg-orange-500",
      logo: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="text-orange-500">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      )
    },
    {
      name: "Codeforces",
      tagline: "Competitive Programming Contests",
      description: "Participating in rated contests to improve problem-solving speed and algorithmic thinking under competitive conditions.",
      url: "https://codeforces.com/profile/mohammademon10",
      username: "mohammademon10",
      color: "hover:border-blue-500 dark:hover:border-blue-400",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      dotColor: "bg-blue-500",
      logo: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="text-blue-600">
          <path d="M4.5 7.5A1.5 1.5 0 0 1 6 6h2a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 8 18H6a1.5 1.5 0 0 1-1.5-1.5v-9zm6-4.5A1.5 1.5 0 0 1 12 1.5h2A1.5 1.5 0 0 1 15.5 3v13.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 10.5 16.5V3zm6 7.5A1.5 1.5 0 0 1 18 9h2a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 20 18h-2a1.5 1.5 0 0 1-1.5-1.5v-6z"/>
        </svg>
      )
    },
    {
      name: "HackerRank",
      tagline: "Skill Challenges & Certifications",
      description: "Completing skill-based coding challenges and earning domain certificates across problem solving, SQL, and algorithmic domains.",
      url: "https://www.hackerrank.com/profile/emonemran677",
      username: "emonemran677",
      color: "hover:border-green-500 dark:hover:border-green-400",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      dotColor: "bg-green-500",
      logo: (
        <svg viewBox="0 0 44 32" width="32" height="32">
          <path className="text-slate-900 dark:text-white" fill="currentColor" d="M2 6h5.5v7.5h9V6H22v20h-5.5v-7.5h-9V26H2V6z"/>
          <rect x="24" y="6" width="20" height="20" fill="#00EA64"/>
        </svg>
      )
    },
    {
      name: "CodeChef",
      tagline: "Regular Contests & Structured Learning",
      description: "Engaging in long challenges, cook-offs, and lunchtime contests on CodeChef to build consistency and competitive programming discipline.",
      url: "https://www.codechef.com/users/emon_hossain10",
      username: "emon_hossain10",
      color: "hover:border-amber-500 dark:hover:border-amber-400",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      dotColor: "bg-amber-500",
      logo: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="text-amber-600">
          <path d="M11.2 0C6.134 0 2 4.134 2 9.2c0 3.11 1.55 5.865 3.926 7.565C5.56 18.577 6 20.31 6 22.2c0 .978.022 1.8 1 1.8h10c.978 0 1-.822 1-1.8 0-1.89.44-3.623.074-5.435C20.45 15.065 22 12.31 22 9.2 22 4.134 17.866 0 12.8 0zm0 2c3.76 0 6.8 3.04 6.8 6.8 0 2.3-1.14 4.33-2.9 5.59l-.5.36.1.62c.2.98.4 2.17.44 3.43H8.86c.04-1.26.24-2.45.44-3.43l.1-.62-.5-.36C7.14 13.13 6 11.1 6 8.8 6 5.04 9.04 2 12.8 2z"/>
        </svg>
      )
    },
    {
      name: "Beecrowd",
      tagline: "Problem Solving & Logic",
      description: "Solving hundreds of algorithmic and mathematical problems to strengthen foundational logic and C/C++ programming skills.",
      url: "https://judge.beecrowd.com/en/profile/947659",
      username: "947659",
      color: "hover:border-purple-500 dark:hover:border-purple-400",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      dotColor: "bg-purple-500",
      logo: <img src="https://resources.beecrowd.com/wp-content/uploads/2024/04/beecrowd-logo.svg" alt="Beecrowd" className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.src = 'https://judge.beecrowd.com/favicon.ico'; }} />
    },
    {
      name: "Vjudge",
      tagline: "Virtual Judging Contests",
      description: "Practicing and participating in custom virtual contests pulled from multiple competitive programming judges to ensure a wide variety of problem types.",
      url: "https://vjudge.net/user/Emon_Hossain10",
      username: "Emon_Hossain10",
      color: "hover:border-slate-500 dark:hover:border-slate-400",
      badgeColor: "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200",
      dotColor: "bg-slate-500",
      logo: <img src="https://vjudge.net/favicon.ico" alt="Vjudge" className="w-8 h-8 object-contain rounded-md" />
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Coding Profiles</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I actively practice problem solving and Data Structures & Algorithms across multiple competitive programming
            platforms — sharpening logical thinking, optimizing solutions, and preparing for technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-transparent ${platform.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-md">
                    {platform.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{platform.name}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${platform.badgeColor}`}>
                      {platform.tagline}
                    </span>
                  </div>
                </div>
                <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {platform.description}
              </p>

              {/* Username */}
              <div className="flex items-center gap-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                <div className={`w-2 h-2 rounded-full ${platform.dotColor}`}></div>
                <Code2 size={14} className="text-slate-400" />
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400">@{platform.username}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
