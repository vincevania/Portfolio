import { motion } from "framer-motion";
import Section from "../components/Section";
import { experiences } from "../data";
import { Briefcase } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col relative overflow-hidden">
            <div className="red-pulse-bg" />
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid gap-12 lg:grid-cols-2"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I am a seasoned cybersecurity professional with over 8 years of experience in securing critical infrastructure and application environments. My expertise lies in offensive security, where I leverage my background in penetration testing to build more resilient defense systems.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Currently, I focus on DevSecOps methodologies, automating security controls within CI/CD pipelines to ensure rapid yet secure software delivery. I am passionate about open source security tools and contribute regularly to the community.
                        </p>
                    </div>

                    <div className="relative pl-6 border-l border-border space-y-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <span className="absolute -left-[29px] top-1 bg-background p-1 border border-border rounded-full">
                                    <Briefcase className="w-4 h-4 text-primary" />
                                </span>
                                <div className="space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                        <h3 className="text-xl font-bold">{exp.role}</h3>
                                        <span className="text-sm text-muted-foreground font-mono bg-secondary px-2 py-0.5 rounded">{exp.period}</span>
                                    </div>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                    <p className="text-muted-foreground">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
