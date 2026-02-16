import { siteConfig } from "../data";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <h3 className="text-lg font-bold">{siteConfig.name}</h3>
                    <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
                </div>

                <div className="flex items-center gap-6">
                    {siteConfig.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}
