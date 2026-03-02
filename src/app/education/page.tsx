import EducationTimeline from "@/app/components/EducationTimeline";

export default function EducationPage() {
  return (
    <div className="space-y-12">
        <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--accent)] mb-4">
                Education
            </h1>
            <p className="text-[var(--foreground)] opacity-70 max-w-2xl mx-auto">
                My academic background and certifications that have shaped my career in software development.
            </p>
        </header>
        <EducationTimeline />
    </div>
  );
}
