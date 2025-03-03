import styles from "./ExperienceListItem.module.css"
import React from "react";

interface ExperienceListItemProps {
    position: string;
    company: string|undefined;
    city: string;
    state: string;
    descLine1: string;
    descLine2: string|undefined;
    startDate: string;
    endDate: string;
}

const ExperienceListItem: React.FC<ExperienceListItemProps> = ({
    position,
    company,
    city,
    state,
    descLine1,
    descLine2,
    startDate,
    endDate
})=> {
    return (
        <>
            <div className={styles.experienceItemContainer}>
                <h1>{position}</h1>
                <div className={styles.companyInfoContainer}>
                    {company && (
                        <h2>{company}</h2>
                    )}
                    <h2>{city}, {state}</h2>
                    <h3>{startDate} - {endDate}</h3>
                </div>

                <hr />
                <p>{descLine1}</p>
                {descLine2 && (
                    <p>{descLine2}</p>
                )}
            </div>
        </>
    )
}
export default ExperienceListItem;