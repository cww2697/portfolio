import data from "../values/experience.json";
import ExperienceListItem from "@/app/components/ExperienceItem/ExperienceListItem";
import ScrollArea from "@/app/components/ScrollArea/ScrollArea";

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
                <ScrollArea topOffset={100} bottomOffset={75}>
                    <div className="pageTitle">
                        <h1>Experience</h1>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-6">
                        {Object.values(data).reverse().map((experience: Experience) => (
                            <div key={experience.id} className="section">
                                <ExperienceListItem
                                    position={experience.position}
                                    company={experience.company}
                                    city={experience.city}
                                    state={experience.state}
                                    descLine1={experience.descLine1}
                                    descLine2={experience.descLine2}
                                    startDate={experience.startDate}
                                    endDate={experience.endDate}
                                />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </>
    );
}