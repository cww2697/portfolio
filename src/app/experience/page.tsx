import ExperienceTimeline from "@/app/components/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <div className="space-y-12">
        <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--accent)] mb-4">
                Professional Experience
            </h1>
            <p className="text-[var(--foreground)] opacity-70 max-w-2xl mx-auto">
                My professional journey as a software developer and team leader, focusing on scalable web applications and technical leadership.
            </p>
        </header>
        <ExperienceTimeline />
    </div>
  );
}