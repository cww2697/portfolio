import React from 'react';
import Image from "next/image";
import GlassContainer from "./GlassContainer";

const About = () => {
    const imageUrl = "https://avatars.githubusercontent.com/u/19256987?s=800&v=4";
    const details: string[] = [
        "As a current Team Leader of Software Development, I have had extensive hands-on experience with a variety of programming languages, including C, C++, Java, JavaScript, PHP, Python, SQL, and Swift. I have successfully led high-priority projects such as a critical module redesign, which significantly improved user experience and data collection efficiency. Additionally, I spearheaded the transition of a module to a new framework, enhancing system performance and maintainability.",
        "I place a high priority on maintaining application and data security, ensuring that our systems are robust and protected against potential threats. My expertise also extends to system administration across diverse platforms, including Windows Server, CentOS, macOS Server, and Ubuntu. I am proficient in tools like Apple Xcode, Microsoft Excel, Word, Access, Project, Visio, and Visual Studio.",
        "In addition to my programming and system administration skills, I have extensive experience with various frameworks. I have worked with React and Next.js for building dynamic and responsive web applications, leveraging their powerful features for server-side rendering and static site generation. I have also utilized Laminas and Symfony for developing robust and scalable backend systems, ensuring efficient and maintainable codebases.",
        "For more details about my experience, projects, or research, please explore the relevant pages above!"
    ];

    return (
        <div className="space-y-12">
            <header className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--accent)] to-purple-500 blur-2xl opacity-20 animate-pulse"></div>
                    <Image 
                        src={imageUrl} 
                        alt="Cody West" 
                        fill 
                        className="rounded-full object-cover border-4 border-[var(--glass-border)] shadow-xl relative z-10"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--accent)]">
                        Cody West
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--foreground)] opacity-80 max-w-2xl">
                        Full Stack Software Engineer & Team Leader crafting secure, scalable web apps.
                    </p>
                </div>
            </header>

            <section className="grid gap-6">
                {details.map((detail, index) => (
                    <GlassContainer key={index}>
                        <p className="text-lg leading-relaxed opacity-90">{detail}</p>
                    </GlassContainer>
                ))}
            </section>
        </div>
    );
};

export default About;
