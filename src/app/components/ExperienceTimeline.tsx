import React from 'react';
import GlassContainer from './GlassContainer';
import experienceData from '../values/experience.json';

interface Experience {
  id: number;
  position: string;
  company?: string;
  city: string;
  state: string;
  descLine1: string;
  descLine2?: string;
  startDate: string;
  endDate: string;
}

const ExperienceTimeline = () => {
  const experiences = Object.values(experienceData) as Experience[];
  const sortedExperiences = experiences.sort((a, b) => b.id - a.id);

  return (
    <div className="relative py-12">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent -translate-x-1/2 hidden md:block"></div>
      
      <div className="space-y-12">
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {sortedExperiences.map((exp, index) => (
          <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--accent)] rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
            
            <div className="w-full md:w-[45%] ml-12 md:ml-0">
              <GlassContainer className="hover:border-[var(--accent)] transition-all duration-500">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-[var(--accent)]">{exp.position}</h3>
                    <span className="text-sm opacity-60 font-mono">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  {exp.company && <p className="font-semibold text-lg">{exp.company}</p>}
                  <p className="text-sm opacity-60 mb-2">{exp.city}, {exp.state}</p>
                  <div className="space-y-4 opacity-90 text-sm leading-relaxed">
                    <p>{exp.descLine1}</p>
                    {exp.descLine2 && <p>{exp.descLine2}</p>}
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

export default ExperienceTimeline;
