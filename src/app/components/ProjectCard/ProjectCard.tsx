import styles from "./ProjectCard.module.css";

const ProjectCard = ({
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
                className={`mb-10 flex overflow-hidden rounded-lg shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 dark:border-dark border-2 ${
                    imageUrl ? "flex-row md:flex-row" : "flex-col text-left"
                }`}
            >
                {imageUrl && (
                    <div className="relative w-full md:w-1/3">
                        <img
                            src={imageUrl}
                            alt=""
                            className="object-cover w-full"
                        />
                        {imageCredit && (
                            <figcaption
                                className="absolute bottom-0 left-0 w-full text-center text-sm text-white bg-black bg-opacity-50"
                                style={{"padding":"5px"}}
                            >
                                {imageCredit}
                            </figcaption>
                        )}
                    </div>
                )}
                <div
                    className={`p-8 sm:p-9 md:p-7 xl:p-9 ${
                        imageUrl ? "w-full md:w-2/3 text-left" : "w-full"
                    }`}
                >
                    <h3 className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                        {title}
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {description}
                    </p>

                    {languages && (
                        <h4 className="mb-4 block text-lg font-semibold">Languages used: {languages}</h4>
                    )}

                    {applications && (
                        <h4 className="mb-4 block text-lg font-semibold">Applications used: {applications}</h4>
                    )}

                    {github && (
                        <h4>This project and all supporting documentation can be found on <a className={styles.linkStyle} href={github} target="_blank" rel="noopener noreferrer">Github.</a></h4>
                    )}

                </div>
            </div>
        </>
    );
}

export default ProjectCard;