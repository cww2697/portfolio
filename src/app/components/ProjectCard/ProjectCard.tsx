import styles from "./ProjectCard.module.css";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  languages: string[] | undefined;
  applications: string[] | undefined;
  imageUrl: string | undefined;
  imageCredit: string | undefined;
  github: string | undefined;
  webUrl?: string | undefined;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  languages,
  applications,
  imageUrl,
  imageCredit,
  github,
  webUrl,
}) => {
  const isPhoto = Boolean(imageCredit);
  return (
    <>
      <div className={`${styles.card} flex flex-col md:flex-row`}>
        {imageUrl && (
          <div className={styles.media}>
            <img
              src={imageUrl}
              alt={`${title} preview`}
              className={isPhoto ? styles.imageCover : styles.imageContain}
              loading="lazy"
              decoding="async"
            />
            {imageCredit && <div className={styles.caption}>{imageCredit}</div>}
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.actions}>
              {webUrl && (
                <a
                  className={styles.button}
                  href={webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title} website`}
                >
                  Website
                </a>
              )}
              {github && (
                <a
                  className={styles.button}
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} on GitHub`}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          <p className={styles.bodyText}>{description}</p>

          {languages && languages.length > 0 && (
            <>
              <h4 className={styles.sectionTitle}>Languages</h4>
              <div className={styles.chips}>
                {languages.map((l, index) => (
                  <span key={index} className={styles.chip}>
                    {l}
                  </span>
                ))}
              </div>
            </>
          )}

          {applications && applications.length > 0 && (
            <>
              <h4 className={styles.sectionTitle}>Tools</h4>
              <div className={styles.chips}>
                {applications.map((tool, index) => (
                  <span
                    key={index}
                    className={`${styles.chip} ${styles.chipMuted}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;