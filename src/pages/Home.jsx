import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe as GlobeIcon, Lock, Terminal } from "lucide-react";
import Button from "../components/Button";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Globe from "../components/Globe";
import SEO from "../components/SEO";
import { siteConfig, skills, projects } from "../data";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function Home() {
    const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

    return (
        <div className="flex flex-col">
            <SEO
                path="/"
                description="Abhishek Rai — Cybersecurity Professional specializing in defensive security, penetration testing, DevSecOps, and infrastructure hardening."
            />
            {/* Fixed Globe Background */}
            <div className="fixed inset-0 z-0">
                <Globe />
            </div>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center relative overflow-hidden pointer-events-none">

                <div className="container relative z-10 px-4 md:px-6 flex flex-col items-end text-right gap-6 ml-auto w-3/4 lg:w-1/2 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            <span className="text-primary"> Hi, I'm Abhishek Rai </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-[600px]"
                    >
                        A {siteConfig.title} specializing in defensive security, infrastructure hardening, and threat intelligence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex gap-4 mt-4"
                    >
                        <Button href="/projects" variant="liquid" size="lg">
                            View Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button href="/contact" variant="liquid" size="lg">
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Red pulse background starts here - below hero */}
            <div className="relative overflow-hidden">
                <div className="red-pulse-bg" />

                {/* Skills Section */}
                <Section>
                    <div className="flex flex-col gap-12 relative z-10">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Arsenal</h2>
                            <p className="text-muted-foreground max-w-[600px] mx-auto">
                                A comprehensive toolset for modern cybersecurity challenges.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center p-6 glass-card rounded-lg transition-colors text-center gap-4"
                                >
                                    {i % 4 === 0 && <Terminal className="w-8 h-8 text-primary" />}
                                    {i % 4 === 1 && <Shield className="w-8 h-8 text-primary" />}
                                    {i % 4 === 2 && <Lock className="w-8 h-8 text-primary" />}
                                    {i % 4 === 3 && <GlobeIcon className="w-8 h-8 text-primary" />}
                                    <h3 className="font-semibold">{skill.name}</h3>
                                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="bg-gradient-to-r from-red-600 to-red-400 h-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Featured Projects */}
                <Section>
                    <div className="flex flex-col gap-12 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="space-y-2 text-center md:text-left">
                                <h2 className="text-3xl font-bold tracking-tighter">Featured Operations</h2>
                                <p className="text-muted-foreground">Select highlights from my security portfolio.</p>
                            </div>
                            <Button href="/projects" variant="liquid">View All Projects</Button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredProjects.map((project, i) => (
                                <ProjectCard key={project.id} project={project} index={i} />
                            ))}
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
}
