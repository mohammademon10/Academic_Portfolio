import { ExperienceData } from '../types/experienceTypes';
import diu from '../../../../public/img/diu.png';

export const experienceData: Record<string, ExperienceData> = {
  emonScienceLab: {
    position: "Educator (Offline & Online)",
    organization: "Emon ScienceLab",
    department: "Self-employed · Hybrid",
    year: "Jan 2024 – Present",
    description: "Teach students from school, college, and university levels offline and online. Providing structured lessons in Physics, Math, Chemistry, Biology, English, ICT, and Programming. Creating educational content on YouTube.",
    theme: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700",
    iconTheme: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    Conducted_Courses: [
      "Physics",
      "Mathematics",
      "Chemistry",
      "Biology",
      "English",
      "ICT & Programming"
    ],
    responsibilities: [
      "Teach students from school, college, and university levels offline and online",
      "Provide structured lessons in Physics, Math, Chemistry, Biology, English, ICT, and Programming",
      "Create and publish educational content on YouTube",
      "Provide Online Tutoring and HSC Tutoring"
    ]
  },
  diuCPC: {
    position: "Associate Member",
    organization: "DIU Computer & Programming Club (CPC)",
    department: "Dhaka, Bangladesh · On-site",
    year: "Jan 2024 – Present",
    description: "Active Associate Member contributing to the club's activities, programming contests, and technical community events at Daffodil International University.",
    theme: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700",
    iconTheme: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    logo: diu,
    Conducted_Courses: [
      "Programming Contests",
      "Technical Workshops",
      "Community Events"
    ],
    responsibilities: [
      "Collaborate with peers on club events and technical activities",
      "Participate in algorithmic problem solving and coding competitions",
      "Promote technology and programming culture among students"
    ]
  },
  diuResearchLab: {
    position: "General Member",
    organization: "DIU Embedded System Research Lab",
    department: "Dhaka, Bangladesh · On-site",
    year: "Jan 2024 – Present",
    description: "Active member of the DIU Embedded System Research Lab, contributing to AI/ML and embedded systems research initiatives alongside faculty and peers.",
    theme: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700",
    iconTheme: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    logo: diu,
    Conducted_Courses: [
      "AI & Machine Learning Research",
      "Embedded Systems Projects",
      "Academic Research Collaboration"
    ],
    responsibilities: [
      "Engage in AI/ML and embedded systems research initiatives",
      "Collaborate with research team members on innovative technical and software-based projects",
      "Assist in exploring technological solutions for academic and real-world applications"
    ]
  },
  kishorAlo: {
    position: "President",
    organization: "Kishor Alo Book Club (Noakhali Branch)",
    department: "Noakhali, Chattogram, Bangladesh · On-site",
    year: "Mar 2019 – Jul 2021",
    description: "Served as President of Noakhali Kishor Alo Book Club, leading a team of members to foster a culture of reading and intellectual growth.",
    theme: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200 dark:border-orange-700",
    iconTheme: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
    Conducted_Courses: [
      "Leadership",
      "Team Management",
      "Event Organization"
    ],
    responsibilities: [
      "Served as President, leading and managing a dedicated team of club members",
      "Organized community reading sessions, book reviews, and cultural events",
      "Managed branch operations and fostered youth engagement in literature"
    ]
  }
};
