
import React from 'react';
import AboutHighlights from './about/AboutHighlights';
import AboutEducation from './about/AboutEducation';
import AboutExperience from './about/AboutExperience';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed text-justify">
              Passionate about turning complex ideas into impactful solutions through technology.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              A Computer Science & Engineering (CSE) undergraduate at Daffodil International University with a strong focus on Artificial Intelligence (AI), Machine Learning (ML), Software Development, and research. Driven by curiosity and innovation, with a deep interest in solving real-world problems using modern technologies.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              As the Founder & Educator of EMON SCIENCELAB, simplifying complex subjects like Physics, Mathematics, ICT, and Programming for HSC students through both offline and online platforms, while also creating educational content on YouTube to make learning more accessible and effective.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Actively exploring AI, Deep Learning, and research-driven development to build intelligent and scalable solutions. Focused on combining technical expertise with teaching experience to develop impactful technologies in education, healthcare, and smart agriculture.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Enjoy building projects, solving problems, and creating meaningful learning experiences. Aiming to grow as an AI/ML engineer and researcher, and to contribute to innovative solutions that create real impact in Bangladesh and beyond.
            </p>
          </div>

          <AboutHighlights />
        </div>

        <AboutEducation />
        <AboutExperience />
      </div>
    </section>
  );
};

export default About;
