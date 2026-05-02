
import React from 'react';
import { ExternalLink, Github, FileText, Youtube } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MediSeba",
      description: "A full-stack, multi-role healthcare management platform for Bangladesh's digital health ecosystem. Connects patients with verified doctors, automates appointment workflows, and generates digital prescriptions with PDF export. Integrates Google Gemini 1.5 Pro AI for symptom analysis and clinical summaries. Features JWT authentication, token-based queue system, Argon2ID password hashing, MySQL stored procedures & audit triggers, and a complete admin control panel.",
      technologies: ["PHP 8.1+", "MySQL", "HTML/CSS/JavaScript", "Google Gemini AI", "JWT Auth"],
      link: "https://github.com/mohammademon10/MEDISEBA"
    },
    {
      title: "KrishiSeba",
      description: "Bangladesh's modern agricultural equipment rental platform connecting farmers with certified equipment retailers. Features role-based dashboards (Farmer, Retailer, Admin), JWT authentication, equipment photo upload, location-aware listings by city/district, and a dark glassmorphism admin panel — built with Spring Boot 3.2.5, Thymeleaf, Spring Security, and PostgreSQL.",
      technologies: ["Spring Boot 3.2.5", "Java 17+", "Thymeleaf", "PostgreSQL", "JWT Auth", "Maven"],
      link: "https://github.com/mohammademon10/krishiSeba",
      demo: "https://github.com/mohammademon10/krishiseba-FrontEnd"
    },
    {
      title: "Student Database System",
      description: "A Student Database Management System built for CSE 124 (Data Structure Lab) at DIU. Implements a Singly Linked List in C for full CRUD operations with input validation and file-based persistence. Paired with a modern web admin panel (HTML/CSS/JS) featuring a dark glassmorphism theme, real-time search & filter, localStorage CRUD, and toast notifications — also deployed as a live GitHub Pages demo.",
      technologies: ["C Programming", "Singly Linked List", "HTML/CSS/JS", "File I/O"],
      link: "https://github.com/mohammademon10/Data-Structure-CSE124-PROJECT",
      demo: "https://mohammademon10.github.io/Data-Structure-CSE124-PROJECT/"
    },
    {
      title: "Medical Insurance Price Prediction",
      description: "An end-to-end machine learning web application that predicts medical insurance costs based on health and demographic data (age, BMI, smoking status, region, etc.). Built with a full ML pipeline — StandardScaler, OneHotEncoder, and XGBoost/Scikit-learn — packaged with a Gradio UI and deployed live on Hugging Face Spaces.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Gradio", "Pandas & NumPy", "Hugging Face"],
      link: "https://github.com/mohammademon10/Medical-insurance-price-prediction",
      demo: "https://huggingface.co/spaces/EmonHossain/Medical-insurance-price-prediction"
    },
    {
      title: "LexiTAC — Compiler Design",
      description: "A modular compiler front-end built for CSE314 (Compiler Design) at DIU, implementing three core compilation phases: Flex-based lexical analysis, Bison LALR(1) parsing, and Three-Address Code (TAC) generation with a live symbol table. Ships with both a colorized CLI tool and an interactive browser-based simulator that visualizes the full compiler pipeline in real time.",
      technologies: ["C", "Flex", "Bison (LALR)", "HTML/CSS/JS", "GCC", "Make"],
      link: "https://github.com/mohammademon10/Compiler_Design_Project_LexiTAC",
      demo: "https://mohammademon10.github.io/Compiler_Design_Project_LexiTAC/"
    },
    {
      title: "Water Level Indicator",
      description: "Course: CSE-122: Electrical Circuit Lab | Semester: Fall 2024. A real-time water level monitoring system built without microcontrollers, using NPN transistors as electronic switches. Detects water levels through conductivity and provides LED indicators (Green/Yellow/Red) plus an audible buzzer alert at critical overflow levels. Designed as a low-cost solution for household water tanks to prevent wastage and automate monitoring.",
      technologies: ["BC547 NPN Transistors", "LEDs & Buzzer", "Resistive Probes", "9V Battery"],
      reportLink: "https://drive.google.com/file/d/1i56xW7oJhy-RiMVaZTEGnUzT2cYIeelE/view?usp=drive_link"
    },
    {
      title: "LED Color Changing System",
      description: "Course: CSE-224: Digital Logic Design Lab | Semester: Fall 2024. An automated color-cycling LED display using pure hardware logic — no microcontroller, no code. Generates clock pulses with a 555 Timer, drives a 74LS93 binary counter (00→01→10→11), and routes outputs through a 74LS153 multiplexer to cycle through Red → Green → Yellow → Off states. Demonstrates combinational and sequential logic integration.",
      technologies: ["74LS153 Multiplexer", "74LS93 Binary Counter", "555 Timer IC", "RGB LEDs", "Proteus"],
      reportLink: "https://drive.google.com/file/d/11A_hzqQ188IpUJiig8FD1F1KNPqbbFNe/view?usp=drive_link",
      videoLink: "https://youtu.be/fW5qHkJmzCQ?si=OesHI_6Y8N9nrbpX"
    },
    {
      title: "Fire Alarm Circuit",
      description: "Course: CSE-216: Electronic Devices and Circuits Lab | Semester: Summer 2025. A compact flame detection system using an IR flame sensor and BC547 transistor switching. When the sensor detects infrared radiation from fire, the transistor activates a piezoelectric buzzer (audible alert) and an LED (visual alert). Designed for portability, low cost, and educational safety demonstrations — powered by a single 9V battery.",
      technologies: ["IR Flame Sensor", "BC547 NPN Transistor", "Piezoelectric Buzzer", "Breadboard"],
      reportLink: "https://drive.google.com/file/d/1ab5MSToFFLB7OVkqxEwV5hVX0uCklD6x/view?usp=drive_link",
      videoLink: "https://youtu.be/fW5qHkJmzCQ?si=OesHI_6Y8N9nrbpX"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Academic Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Personal and academic development projects showcasing various programming skills and technologies
          </p>
          <div className="mt-8">
            <a
              href="https://github.com/mohammademon10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              <Github size={20} className="mr-2" />
              <span className="font-medium">View All Projects on GitHub</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Github size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                {project.title}
              </h3>            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-justify">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    <span className="text-sm font-medium">View on GitHub</span>
                  </a>
                )}
                {!project.link && !project.reportLink && !project.videoLink && !project.demo && (
                  <span className="text-xs bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full">
                    Links coming soon
                  </span>
                )}
                {project.reportLink && (
                  <a
                    href={project.reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                  >
                    <FileText size={16} className="mr-2" />
                    <span className="text-sm font-medium">View Report</span>
                  </a>
                )}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
                  >
                    <Youtube size={16} className="mr-2" />
                    <span className="text-sm font-medium">Watch Video</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
