import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import data from "../values/project.json";

interface Project {
    id: number;
    title: string;
    desc: string;
    languages?: string[];
    applications?: string[];
    imageUrl?: string;
    imageCredit?: string;
    githubUrl?: string;
}


export default function Page() {
    return (
        <>
            {Object.values(data).reverse().map((project: Project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.desc}
                    languages={project.languages}
                    applications={project.applications}
                    imageUrl={project.imageUrl}
                    imageCredit={project.imageCredit}
                    github={project.githubUrl}
                />
            ))}
        </>
    );
}