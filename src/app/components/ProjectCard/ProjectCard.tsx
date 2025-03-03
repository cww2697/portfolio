import styles from "./ProjectCard.module.css";
import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    languages: string[]|undefined;
    applications: string[]|undefined;
    imageUrl: string|undefined;
    imageCredit: string|undefined;
    github: string|undefined;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    languages,
    applications,
    imageUrl,
    imageCredit,
    github,
}) => {
    return (
        <>
            <div
                className={`mb-10 flex flex-col md:flex-row overflow-hidden rounded-lg`}

            >
                {imageUrl && (
                    <div className="relative w-full md:w-1/3">
                        <img
                            src={imageUrl}
                            alt=""
                            className="object-cover w-full h-full max-h-[200px] md:max-h-full"
                        />
                        {imageCredit && (
                            <figcaption
                                className="absolute bottom-0 left-0 w-full text-center text-sm text-white bg-black bg-opacity-50"
                                style={{ padding: "5px" }}
                            >
                                {imageCredit}
                            </figcaption>
                        )}
                    </div>
                )}
                <div
                    className={`p-8 sm:p-9 md:p-7 xl:p-9 w-full md:w-2/3 text-left`}
                >
                    <h3 className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                        {title}
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {description}
                    </p>

                    {languages && (
                        <div className="mb-4">
                            <h4 className="mb-4 block text-lg font-semibold">Languages used:</h4>
                            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                {languages.map((l, index) => (
                                    <li key={index}>{l}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {applications && (
                        <div className="mb-4">
                            <h4 className="mb-4 block text-lg font-semibold">Applications used:</h4>
                            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                {applications.map((l, index) => (
                                    <li key={index}>{l}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {github && (
                        <h4 className="mb-4 block text-lg font-semibold pt-4">
                            This project and all supporting documentation can be found on{" "}
                            <a
                                className={styles.linkStyle}
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>.
                        </h4>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjectCard;