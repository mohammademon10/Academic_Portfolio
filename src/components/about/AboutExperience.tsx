
import React from 'react';
import { Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceCard from './ExperienceCard';
import { experienceData } from './data/experienceData';

const AboutExperience = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
          <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Professional Experience</h3>
      </div>
          <Tabs defaultValue="emonScienceLab" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 mb-8 h-auto">
           <TabsTrigger value="emonScienceLab" className="text-xs sm:text-sm px-2 py-3">Founder & Educator - Offline / Online</TabsTrigger>
          <TabsTrigger value="diuCPC" className="text-xs sm:text-sm px-2 py-3">DIU CPC</TabsTrigger>
          <TabsTrigger value="diuResearchLab" className="text-xs sm:text-sm px-2 py-3">DIU Embedded System Research Lab</TabsTrigger>
          <TabsTrigger value="kishorAlo" className="text-xs sm:text-sm px-2 py-3">Kishor Alo</TabsTrigger>
        </TabsList>
        
        {Object.entries(experienceData).map(([key, data]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <ExperienceCard data={data} experienceKey={key} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AboutExperience;
