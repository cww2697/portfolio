import React from 'react';
import styles from './About.module.css'; // Import the CSS module

const About = () => {
    return (
        <>
            <div className="pageTitle">
                <h1>About Me!</h1>
            </div>
            <section className={styles.intro}>
                <div className={styles.imageColumn}>
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQH9xETNZ9i4hA/profile-displayphoto-shrink_800_800/B56ZTjx0GIGoAk-/0/1738988275335?e=1746057600&v=beta&t=0Y2PYisyBGKegUXX981DR8OlM2tCPUZDwy0rk4q4y6w"
                        alt="Description of image"
                        className={styles.image}
                    />
                </div>
                <div className={styles.textColumn}>
                    <p>As the current Team Leader of Software Development, I have had extensive hands-on experience with a variety of programming languages, including C, C++,Java, JavaScript, PHP, Python, SQL, and Swift.
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