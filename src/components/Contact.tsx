
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Official Email",
      value: "hossain2305101818@diu.edu.bd",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=hossain2305101818@diu.edu.bd"
    },
    {
      icon: Mail,
      title: "Personal Email",
      value: "emonemran677@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=emonemran677@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+8801893672505",
      link: "tel:+8801893672505"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Daffodil International University, Dhaka, Bangladesh",
      link: "https://share.google/NxPdWLyrxiCDYkK8V"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mohammademon10"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-emon-hossain-22774b1a6/"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@EmonScienceLab"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research opportunities, project discussions, or just a friendly chat!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl flex items-start shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 dark:border-slate-700"
              >
                <div className="w-12 h-12 shrink-0 bg-blue-100/50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                  <info.icon size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-[15px] font-semibold text-slate-800 dark:text-white mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-[14px] text-slate-500 dark:text-slate-400 break-words">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 text-center">Connect Online</h3>
            <div className="flex justify-center flex-wrap gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  <social.icon size={22} />
                  <span>{social.label}</span>
                </a>
              ))}
              <a
                href="https://scholar.google.com/citations?hl=en&user=B3CjR0sAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
                <span>Google Scholar</span>
              </a>
              <a
                href="https://www.facebook.com/mohammad.emon.98622733"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
