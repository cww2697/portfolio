import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import data from "../values/project.json";

export default function Page() {
    return (
        <>
            <div className="contentContainer">
                {data.map(project => (
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
            </div>
        </>
    );
}