import React from 'react';
import GlassContainer from './GlassContainer';
import educationData from '../values/education.json';

interface Education {
  id: number;
  institution: string;
  degree: string;
  city: string;
  state: string;
  descLine1: string;
  descLine2?: string;
  startDate: string;
  endDate: string;
}

const EducationTimeline = () => {
  const educations = Object.values(educationData) as Education[];
  
  // Sort educations by ID descending (assuming higher ID is newer)
  const sortedEducations = educations.sort((a, b) => b.id - a.id);

  return (
    <div className="relative py-12">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent -translate-x-1/2 hidden md:block"></div>
      
      <div className="space-y-12">
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {sortedEducations.map((edu, index) => (
          <div key={edu.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--accent)] rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
            
            <div className="w-full md:w-[45%] ml-12 md:ml-0">
              <GlassContainer className="hover:border-[var(--accent)] transition-all duration-500">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-[var(--accent)]">{edu.degree}</h3>
                    <span className="text-sm opacity-60 font-mono">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="font-semibold text-lg">{edu.institution}</p>
                  <p className="text-sm opacity-60 mb-2">{edu.city}, {edu.state}</p>
                  <div className="space-y-4 opacity-90 text-sm leading-relaxed">
                    <p>{edu.descLine1}</p>
                    {edu.descLine2 && <p>{edu.descLine2}</p>}
                  </div>
                </div>
              </GlassContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
