import React from 'react';
import { GraduationCap, Calendar, Building2, MapPin } from 'lucide-react';
import diu from '../../../public/img/diu.png';
import dcc from '../../../public/img/dcc.png';
import nzs from '../../../public/img/nzs_logo.png';

const AboutEducation = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Daffodil International University",
      location: "Savar, Dhaka",
      year: "2024 – 2027 (Expected)",
      description: "Currently Enrolled",
      logo: diu,
      theme: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-green-300 dark:border-green-700",
      iconColor: "text-green-700 dark:text-green-400"
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Dhaka City College",
      location: "Dhanmondi, Dhaka",
      year: "2021 – 2022",
      description: "Group: Science | GPA: 5.00 (On a scale of 5)",
      logo: dcc,
      theme: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-300 dark:border-blue-700",
      iconColor: "text-blue-700 dark:text-blue-400"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Noakhali Zilla School",
      location: "Maijdee, Noakhali",
      year: "2015 – 2020",
      description: "Group: Science | GPA: 5.00 (On a scale of 5)",
      logo: nzs,
      theme: "bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 border-red-300 dark:border-red-700",
      iconColor: "text-red-700 dark:text-red-400"
    }
  ];

  return (
    <div className="mt-20">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
          <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Education</h3>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {education.map((item, index) => (
          <div
            key={index}
            className={`p-6 ${item.theme} rounded-xl hover:shadow-lg transition-all duration-300 border`}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center mr-4 border border-gray-200 dark:border-gray-700">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    className="w-12 h-12 object-contain rounded-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <Building2
                  size={24}
                  className={`${item.iconColor} ${item.logo ? 'hidden' : ''}`}
                  style={{ display: item.logo ? 'none' : 'block' }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <Calendar
                    size={16}
                    className={`mr-2 ${item.iconColor}`}
                  />
                  <span className={`text-sm font-medium ${item.iconColor}`}>{item.year}</span>
                </div>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{item.degree}</h4>
            <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">{item.institution}</p>
            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-2">
              <MapPin size={14} className="mr-1" />
              <span>{item.location}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
