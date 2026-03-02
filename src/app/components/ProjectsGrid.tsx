import React from 'react';
import GlassContainer from './GlassContainer';
import projectData from '../values/project.json';

interface Project {
  id: number;
  title: string;
  desc: string;
  languages?: string[];
  applications?: string[];
  githubUrl?: string;
  webUrl?: string;
  imageCredit?: string;
}

const ProjectsGrid = () => {
  const projects = Object.values(projectData) as Project[];
  const sortedProjects = projects.sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {sortedProjects.map((project) => (
        <GlassContainer key={project.id} className="flex flex-col h-full hover:border-[var(--accent)] transition-all duration-500 group">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">{project.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.languages?.map((lang) => (
                <span key={lang} className="px-3 py-1 text-xs font-mono rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {lang}
                </span>
              ))}
              {project.applications?.map((app) => (
                <span key={app} className="px-3 py-1 text-xs font-mono rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-auto pt-4 border-t border-[var(--glass-border)]">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-[var(--accent)] transition-colors flex items-center gap-1"
              >
                GitHub →
              </a>
            )}
            {project.webUrl && (
              <a 
                href={project.webUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-[var(--accent)] transition-colors flex items-center gap-1"
              >
                Website →
              </a>
            )}
          </div>
        </GlassContainer>
      ))}
    </div>
  );
};

export default ProjectsGrid;
