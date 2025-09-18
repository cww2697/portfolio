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
    webUrl?: string;
}


export default function Page() {
    return (
        <>
            <div className="contentContainer">
                <div className="pageTitle">
                    <h1>Projects</h1>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                            webUrl={project.webUrl}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}