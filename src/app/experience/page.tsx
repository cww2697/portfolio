import data from "../values/experience.json";
import ExperienceListItem from "@/app/components/ExperienceItem/ExperienceListItem";

export default function Page() {
    interface Experience {
        id: number;
        position: string;
        company?: string;
        city: string;
        state: string;
        descLine1: string;
        descLine2?: string
        startDate: string;
        endDate: string;
    }

    return (
        <>
            <div className="contentContainer">
                <div className="pageTitle">
                    <h1>Experience</h1>
                </div>
                <section className="section">
                    {Object.values(data).reverse().map((experience: Experience) => (
                        <ExperienceListItem
                            key={experience.id}
                            position={experience.position}
                            company={experience.company}
                            city={experience.city}
                            state={experience.state}
                            descLine1={experience.descLine1}
                            descLine2={experience.descLine2}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                        />
                    ))}
                </section>
            </div>
        </>
    );
}