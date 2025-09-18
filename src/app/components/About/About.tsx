import React from 'react';
import styles from './About.module.css';
import Image from "next/image";
import data from "../../values/about.json"
import AboutDetails from "@/app/components/AboutDetails/AboutDetails";

const About = () => {
    return (
        <>
            <div className="pageTitle">
                <h1>About Me!</h1>
            </div>
            <section className={`section ${styles.intro}`}>
                <div className={styles.imageColumn}>
                    <Image src={data.imageUrl} alt={"Profile Image"} width={800} height={800} className={styles.image}/>
                </div>
                <div className={styles.textColumn}>
                    {data.details.map((detail, index) => (
                        <AboutDetails key={index} detailsText={detail} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;