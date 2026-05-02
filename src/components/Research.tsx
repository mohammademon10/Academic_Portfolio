import React from 'react';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

interface ResearchItem {
  title: string;
  Collaborators?: string[];
  collaboratorLinks?: { [key: string]: string };
  description: string;
  type: string;
  publisher?: string;
  doi?: string;
  year?: string;
  tags?: string[];
}

const Research = () => {
  const [activeFilter, setActiveFilter] = React.useState<string>('All');

  const researchItems: ResearchItem[] = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Exploring AI and ML algorithms for intelligent decision-making, pattern recognition, and predictive modeling. Interested in supervised, unsupervised, and reinforcement learning paradigms with real-world applications — from medical cost prediction to agricultural optimization.",
      type: "Core Interest",
      tags: ["Machine Learning", "Deep Learning", "Neural Networks", "Predictive Modeling"]
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Interested in NLP techniques for text classification, sentiment analysis, language modeling, and conversational AI. Exploring transformer architectures and large language models (LLMs) for real-world language understanding and generation tasks.",
      type: "Core Interest",
      tags: ["NLP", "Transformers", "LLMs", "Text Classification", "Sentiment Analysis"]
    },
    {
      title: "Deep Learning & Computer Vision",
      description: "Studying deep learning architectures including CNNs, RNNs, and attention mechanisms. Interested in computer vision tasks such as image classification, object detection, and medical image analysis using state-of-the-art neural network models.",
      type: "Core Interest",
      tags: ["CNN", "RNN", "Attention Mechanism", "Computer Vision", "Image Classification"]
    },
    {
      title: "Brain-Computer Interface (BCI)",
      description: "Fascinated by BCI technology that enables direct communication between the human brain and computers. Interested in EEG signal processing, cognitive state recognition, and building assistive BCI applications to improve quality of life for individuals with disabilities.",
      type: "Emerging",
      tags: ["BCI", "EEG Signal Processing", "Cognitive Computing", "Assistive Technology"]
    },
    {
      title: "AI in Healthcare",
      description: "Passionate about applying AI and ML to solve real-world healthcare challenges — from disease prediction and clinical diagnosis support to intelligent prescription systems and patient outcome optimization using data-driven approaches.",
      type: "Application",
      tags: ["Medical AI", "Disease Prediction", "Clinical Decision Support", "Digital Health"]
    },
    {
      title: "Educational Technology (EdTech)",
      description: "Interested in leveraging technology to enhance learning experiences at scale. Researching adaptive learning systems, AI-powered tutoring platforms, and data-driven approaches to improve academic outcomes — inspired by hands-on work at EMON SCIENCELAB.",
      type: "Application",
      tags: ["EdTech", "Adaptive Learning", "AI Tutoring", "Learning Analytics"]
    },
    {
      title: "Embedded Systems & IoT",
      description: "Actively exploring embedded systems and IoT as a member of the DIU Embedded System Research Lab. Interested in building smart, connected devices that bridge the physical and digital world for automation, data collection, and intelligent real-world applications.",
      type: "Emerging",
      tags: ["Embedded Systems", "IoT", "Smart Devices", "Automation", "Sensors"]
    }
  ];

  // Get unique research types for filter buttons
  const researchTypes = ['All', ...Array.from(new Set(researchItems.map(item => item.type)))];

  // Filter research items based on active filter
  const filteredResearchItems = activeFilter === 'All'
    ? researchItems
    : researchItems.filter(item => item.type === activeFilter);

  return (
    <section id="research" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Research Interests</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Exploring cutting-edge domains in Artificial Intelligence, Machine Learning, and emerging technologies to solve real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {researchTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === type
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
          {filteredResearchItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <FileText size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{item.title}</h3>

              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-justify">{item.description}</p>

              {item.tags && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Research;
