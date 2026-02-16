import { motion } from "framer-motion";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

export default function Projects() {
    return (
        <div className="flex flex-col">
            <Section className="pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
                    <p className="text-muted-foreground text-lg max-w-[800px]">
                        A collection of security tools, research, and infrastructure projects.
                    </p>
                </motion.div>
            </Section>

            <div className="container mx-auto px-4 md:px-6 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
