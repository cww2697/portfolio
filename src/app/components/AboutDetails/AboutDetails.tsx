import React from "react";
import styles from './AboutDetails.module.css';

interface AboutDetailsProps {
    detailsText: string;
}

const AboutDetails: React.FC<AboutDetailsProps>  = (
    {detailsText}
) => {
    return (
        <p className={styles.aboutParagraph}>{detailsText}</p>
    );
}

export default AboutDetails;