import React from 'react';
import { Mail, Linkedin, Github, GraduationCap, FileText, Youtube, ArrowRight } from 'lucide-react';

import profile_pic from '../../public/img/dp.png';
import cv from '../../public/resource/MD_Emon_CV_Update_2026.pdf';

const Hero = () => {
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div>
          {/* Profile Image */}
          <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="relative animate-float">
              <img
                src={profile_pic}
                alt="Md. Emon Hossain"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-top shadow-2xl border-4 border-white dark:border-slate-700"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-blue-600/20 dark:to-blue-400/20"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            Md. Emon <span className="text-blue-600 dark:text-blue-400">Hossain</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-light animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            CSE Undergraduate & AI/ML Enthusiast
          </p>

          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-8 animate-fade-in" style={{ animationDelay: '0.7s', opacity: 0 }}>
            Daffodil International University
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.9s', opacity: 0 }}>
            Passionate about AI, Machine Learning, and Software Development — building real-world solutions
            and sharing knowledge as the Founder of EMON SCIENCELAB.
          </p>

          <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{ animationDelay: '1.1s', opacity: 0 }}>
            <button
              onClick={() => handleScrollTo('contact')}
              className="group flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white px-8 py-3.5 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] cursor-pointer font-semibold tracking-wide"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className="group flex items-center border-2 border-blue-600/40 dark:border-blue-400/40 text-blue-600 dark:text-blue-400 px-8 py-3.5 rounded-full hover:bg-blue-50 dark:hover:bg-slate-800/50 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer font-semibold tracking-wide backdrop-blur-sm shadow-sm hover:shadow-md"
            >
              <span>Learn More</span>
            </button>
          </div>

          <div className="flex justify-center space-x-6 px-6 md:px-0 mb-5 md:mb-0">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=emonemran677@gmail.com" target="_blank" rel="noopener noreferrer" title='Email Me' className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Mail size={28} />
            </a>
            <a href="https://www.linkedin.com/in/md-emon-hossain-22774b1a6/" title='LinkedIn Profile' target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/mohammademon10" title='GitHub Profile' target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Github size={28} />
            </a>
            <a href="https://scholar.google.com/citations?hl=en&user=B3CjR0sAAAAJ" title='Google Scholar Profile' target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <GraduationCap size={28} />
            </a>
            <a
              href="https://www.youtube.com/@EmonScienceLab"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube — EMON SCIENCELAB"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Youtube size={28} />
            </a>
            <a
              href="https://www.facebook.com/mohammad.emon.98622733"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Profile"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              title="View/Download CV"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FileText size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
