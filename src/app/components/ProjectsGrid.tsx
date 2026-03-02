'use client';

import React, { useState, useMemo } from 'react';
import GlassContainer from './GlassContainer';
import projectData from '../values/project.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  // Get all unique technologies (languages + applications)
  const allTech = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(p => {
      p.languages?.forEach(l => techSet.add(l));
      p.applications?.forEach(a => techSet.add(a));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        const matchesSearch = 
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.desc.toLowerCase().includes(searchQuery.toLowerCase());
        
        const projectTech = [...(project.languages || []), ...(project.applications || [])];
        const matchesTech = selectedTech.length === 0 || 
          selectedTech.every(tech => projectTech.includes(tech));

        return matchesSearch && matchesTech;
      })
      .sort((a, b) => b.id - a.id);
  }, [projects, searchQuery, selectedTech]);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech) 
        : [...prev, tech]
    );
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <GlassContainer className="p-6 space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-[var(--glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all placeholder:opacity-50"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className={`px-3 py-1 text-xs font-mono rounded-full border transition-all ${
                selectedTech.includes(tech)
                  ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-[0_0_10px_rgba(14,165,233,0.3)]'
                  : 'bg-white/5 text-[var(--foreground)] opacity-60 border-[var(--glass-border)] hover:opacity-100'
              }`}
            >
              {tech}
            </button>
          ))}
          {selectedTech.length > 0 && (
            <button
              onClick={() => setSelectedTech([])}
              className="px-3 py-1 text-xs font-mono rounded-full text-red-400 hover:text-red-500 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </GlassContainer>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
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
                    className="text-sm font-medium hover:text-[var(--accent)] transition-colors flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.webUrl && (
                  <a 
                    href={project.webUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-[var(--accent)] transition-colors flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                    Website
                  </a>
                )}
              </div>
            </GlassContainer>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl opacity-50">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
