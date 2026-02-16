import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Button from "./Button";

export default function ProjectCard({ project, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow"
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        <Button variant="liquid" size="icon" href={project.github} aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </Button>
                        <Button variant="liquid" size="icon" href={project.demo} aria-label="Live Demo">
                            <ExternalLink className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
