'use client';
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import data from "../values/project.json";
import React, {useMemo, useState} from "react";
import ScrollArea from "@/app/components/ScrollArea/ScrollArea";

interface Project {
    id: number;
    title: string;
    desc: string;
    languages?: string[];
    applications?: string[];
    imageUrl?: string;
    imageCredit?: string;
    githubUrl?: string;
    webUrl?: string;
}

export default function Page() {
    const projects: Project[] = useMemo(() => Object.values(data).reverse() as Project[], []);

    const allLanguages = useMemo(() => {
        const set = new Set<string>();
        projects.forEach(p => p.languages?.forEach(l => set.add(l)));
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }, [projects]);

    const allTools = useMemo(() => {
        const set = new Set<string>();
        projects.forEach(p => p.applications?.forEach(t => set.add(t)));
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }, [projects]);

    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedTools, setSelectedTools] = useState<string[]>([]);
    const [hasGithub, setHasGithub] = useState<boolean>(false);
    const [hasWebsite, setHasWebsite] = useState<boolean>(false);

    const toggleChip = (value: string, selected: string[], setter: (v: string[]) => void) => {
        setter(selected.includes(value)
            ? selected.filter(v => v !== value)
            : [...selected, value]
        );
    };

    const clearFilters = () => {
        setSelectedLanguages([]);
        setSelectedTools([]);
        setHasGithub(false);
        setHasWebsite(false);
    };

    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
            // Languages (OR within)
            const langMatch = selectedLanguages.length === 0 || (p.languages && p.languages.some(l => selectedLanguages.includes(l)));
            // Tools (OR within)
            const toolMatch = selectedTools.length === 0 || (p.applications && p.applications.some(t => selectedTools.includes(t)));
            // Toggles
            const githubMatch = !hasGithub || Boolean(p.githubUrl);
            const websiteMatch = !hasWebsite || Boolean(p.webUrl);
            return langMatch && toolMatch && githubMatch && websiteMatch;
        });
    }, [projects, selectedLanguages, selectedTools, hasGithub, hasWebsite]);

    const chipBase = "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border transition select-none cursor-pointer";
    const chipSelected = "bg-teal-600 text-white border-teal-600 shadow";
    const chipUnselected = "bg-white text-gray-800 border-gray-300 hover:bg-gray-50 dark:bg-white/5 dark:text-white/80 dark:border-white/20 dark:hover:bg-white/10";

    return (
        <>
            <div className="contentContainer">
                <ScrollArea topOffset={100} bottomOffset={75}>
                <div className="pageTitle">
                    <h1>Projects</h1>
                </div>

                <div className="mt-4">
                    <button
                        type="button"
                        onClick={() => setShowFilters(v => !v)}
                        className="w-full flex items-center justify-between rounded-lg border px-4 py-3 text-left transition bg-white border-gray-300 hover:bg-gray-50 text-gray-900 dark:text-white dark:border-white/15 dark:bg-[var(--card-background)] dark:hover:bg-neutral-800"
                        aria-expanded={showFilters}
                        aria-controls="filters-panel"
                    >
                        <span className="text-lg font-semibold">Filters</span>
                        <svg
                            className={`h-5 w-5 transition-transform ${showFilters ? "rotate-180" : "rotate-0"}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {showFilters && (
                        <div id="filters-panel" className="mt-3 space-y-6 rounded-lg border p-4 bg-white border-gray-300 dark:border-white/10 dark:bg-[var(--card-background)]">
                            {/* Languages */}
                            {allLanguages.length > 0 && (
                                <div>
                                    <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-white/70">Languages</div>
                                    <div className="flex flex-wrap gap-2">
                                        {allLanguages.map(lang => {
                                            const isSelected = selectedLanguages.includes(lang);
                                            return (
                                                <button
                                                    key={lang}
                                                    type="button"
                                                    onClick={() => toggleChip(lang, selectedLanguages, setSelectedLanguages)}
                                                    className={`${chipBase} ${isSelected ? chipSelected : chipUnselected}`}
                                                    aria-pressed={isSelected}
                                                >
                                                    {lang}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {allTools.length > 0 && (
                                <div>
                                    <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-white/70">Tools</div>
                                    <div className="flex flex-wrap gap-2">
                                        {allTools.map(tool => {
                                            const isSelected = selectedTools.includes(tool);
                                            return (
                                                <button
                                                    key={tool}
                                                    type="button"
                                                    onClick={() => toggleChip(tool, selectedTools, setSelectedTools)}
                                                    className={`${chipBase} ${isSelected ? chipSelected : chipUnselected}`}
                                                    aria-pressed={isSelected}
                                                >
                                                    {tool}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <label className="flex items-center justify-between gap-3 rounded-lg border p-3 bg-white border-gray-300 dark:border-white/10 dark:bg-white/5">
                                    <span className="font-medium text-gray-800 dark:text-white">Has GitHub</span>
                                    <span className="relative inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={hasGithub}
                                            onChange={(e) => setHasGithub(e.target.checked)}
                                            className="sr-only"
                                        />
                                        <span className={`h-6 w-10 rounded-full transition ${hasGithub ? "bg-teal-600" : "bg-gray-300 dark:bg-white/20"}`}></span>
                                        <span className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${hasGithub ? "translate-x-4" : "translate-x-0"}`}></span>
                                    </span>
                                </label>

                                <label className="flex items-center justify-between gap-3 rounded-lg border p-3 bg-white border-gray-300 dark:border-white/10 dark:bg-white/5">
                                    <span className="font-medium text-gray-800 dark:text-white">Has Website</span>
                                    <span className="relative inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={hasWebsite}
                                            onChange={(e) => setHasWebsite(e.target.checked)}
                                            className="sr-only"
                                        />
                                        <span className={`h-6 w-10 rounded-full transition ${hasWebsite ? "bg-teal-600" : "bg-gray-300 dark:bg-white/20"}`}></span>
                                        <span className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${hasWebsite ? "translate-x-4" : "translate-x-0"}`}></span>
                                    </span>
                                </label>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="rounded-md border bg-transparent px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-100 border-gray-300 dark:text-white dark:hover:bg-white/10 dark:border-white/20"
                                >
                                    Clear filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {filteredProjects.map((project: Project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.desc}
                            languages={project.languages}
                            applications={project.applications}
                            imageUrl={project.imageUrl}
                            imageCredit={project.imageCredit}
                            github={project.githubUrl}
                            webUrl={project.webUrl}
                        />
                    ))}
                    {filteredProjects.length === 0 && (
                        <div className="col-span-full rounded-lg border p-6 text-center text-gray-700 bg-white border-gray-300 dark:text-white/70 dark:border-white/10 dark:bg-[var(--card-background)]">
                            No projects match the selected filters.
                        </div>
                    )}
                </div>
                </ScrollArea>
            </div>
        </>
    );
}