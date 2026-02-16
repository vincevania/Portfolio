import { motion } from "framer-motion";
import Section from "../components/Section";
import Button from "../components/Button";
import { siteConfig } from "../data";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-[80vh] justify-center">
            <Section className="max-w-2xl mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                >
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
                    <p className="text-muted-foreground text-lg">
                        Whether you have a security concern, a project in mind, or just want to connect, I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button href={`mailto:${siteConfig.email}`} variant="liquid" size="lg" className="w-full sm:w-auto">
                        <Mail className="mr-2 w-4 h-4" />
                        Send Email
                    </Button>
                    <Button href={siteConfig.socials[1].href} variant="liquid" size="lg" className="w-full sm:w-auto">
                        Connect on LinkedIn
                    </Button>
                </motion.div>
            </Section>
        </div>
    );
}
