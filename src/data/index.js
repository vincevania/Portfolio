import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const siteConfig = {
    name: "Abhishek Rai",
    title: "Cybersecurity Analyst",
    description: "Securing digital infrastructure with modern defense strategies.",
    email: "raiabhishek314@gmail.com",
    socials: [
        {
            name: "GitHub",
            href: "https://github.com/vincevania",
            icon: Github,
        },
        {
            name: "LinkedIn",
            href: "www.linkedin.com/in/abhishek-rai-a91a723ab",
            icon: Linkedin,
        },
        {
            name: "Twitter",
            href: "https://twitter.com",
            icon: Twitter,
        },
        {
            name: "Email",
            href: "mailto:raiabhishek314@gmail.com",
            icon: Mail,
        },
    ],
};

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export const skills = [
    { name: "Network Security", level: 95 },
    { name: "Penetration Testing", level: 90 },
    { name: "Incident Response", level: 85 },
    { name: "Cryptography", level: 80 },
    { name: "Cloud Security", level: 85 },
    { name: "DevSecOps", level: 90 },
    { name: "Malware Analysis", level: 75 },
    { name: "Threat Intelligence", level: 85 },
];

export const projects = [
    {
        id: 1,
        title: "SecureNet Guard",
        description: "An enterprise-grade network intrusion detection system leveraging machine learning to identify and block zero-day threats in real-time.",
        tech: ["Python", "TensorFlow", "Snort", "Docker"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 2,
        title: "CryptoVault",
        description: "A secure, decentralized password manager built with zero-knowledge architecture, ensuring user data remains private even from the server.",
        tech: ["Rust", "WASM", "React", "AES-256"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 3,
        title: "VulnScanner Pro",
        description: "Automated vulnerability scanner for CI/CD pipelines, integrating with GitHub Actions to catch security flaws before deployment.",
        tech: ["Go", "GraphQL", "PostgreSQL", "React"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 4,
        title: "PhishGuard",
        description: "Email security gateway that intercepts and analyzes incoming emails for phishing attempts using natural language processing.",
        tech: ["Python", "FastAPI", "Redis", "NLP"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
];

export const experiences = [
    {
        role: "Senior Security Engineer",
        company: "TechCorp Global",
        period: "2021 - Present",
        description: "Leading the application security team, implementing DevSecOps practices, and conducting regular penetration tests.",
    },
    {
        role: "Security Analyst",
        company: "CyberDef Systems",
        period: "2018 - 2021",
        description: "Monitored SOC dashboards, responded to incidents, and performed forensic analysis on compromised systems.",
    },
];
