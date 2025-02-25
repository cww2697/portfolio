import React from 'react';
import styles from './About.module.css';
import Image from "next/image"; // Import the CSS module

const About = () => {
    return (
        <>
            <div className="pageTitle">
                <h1>About Me!</h1>
            </div>
            <section className={styles.intro}>
                <div className={styles.imageColumn}>
                    <Image src={"https://avatars.githubusercontent.com/u/19256987?s=800&v=4"} alt={"Profile Image"} width={800} height={800} className={styles.image}/>
                </div>
                <div className={styles.textColumn}>
                    <p>As the current Team Leader of Software Development, I have had extensive hands-on experience with a variety of programming languages, including C, C++, Java, JavaScript, PHP, Python, SQL, and Swift.
                        I have successfully led high-priority projects such as a critical module redesign, which significantly improved user experience and data collection efficiency.
                        Additionally, I spearheaded the transition of a module to a new framework, enhancing system performance and maintainability.</p><br/>
                    <p>I place a high priority on maintaining application and data security, ensuring that our systems are robust and protected against potential threats.
                        My expertise also extends to system administration across diverse platforms, including Windows Server, CentOS, macOS Server, and Ubuntu.
                        I am proficient in tools like Apple Xcode, Microsoft Excel, Word, Access, Project, Visio, and Visual Studio.</p> <br/>
                    <p>In addition to my programming and system administration skills, I have extensive experience with various frameworks.
                        I have worked with React and Next.js for building dynamic and responsive web applications, leveraging their powerful features for server-side rendering and static site generation.
                        I have also utilized Laminas and Symfony for developing robust and scalable backend systems, ensuring efficient and maintainable codebases.</p><br/>
                    <p>For more details about my experience, projects, or research, please explore the relevant pages above!</p>
                </div>
            </section>
        </>
    );
};

export default About;