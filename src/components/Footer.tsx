
import React from 'react';
import { Heart, Mail, Linkedin, Github, MapPin, GraduationCap, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Md. Emon Hossain</h3>
            <p className="text-slate-300 dark:text-slate-400 mb-4 leading-relaxed">
              CSE undergraduate at Daffodil International University, passionate about AI, Machine Learning,
              and building real-world software solutions.
            </p>
            <div className="flex items-center text-slate-300 dark:text-slate-400">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=emonemran677@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
                className="group w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 shadow-lg hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-emon-hossain-22774b1a6/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 shadow-lg hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              >
                <Linkedin size={20} className="group-hover:-rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/mohammademon10"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="group w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 shadow-lg hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=B3CjR0sAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Scholar"
                className="group w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 shadow-lg hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              >
                <GraduationCap size={20} className="group-hover:-rotate-12 transition-transform duration-300" />
              </a>
            </div>
            <p className="text-slate-300 dark:text-slate-400 text-sm">
              Open to collaborations, research opportunities, and project discussions.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Md. Emon Hossain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
