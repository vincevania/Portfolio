import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { navLinks, siteConfig } from "../data";
import Button from "../components/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end p-6 pointer-events-none">
                {/* Logo */}
                {/* <Link
                    to="/"
                    className="pointer-events-auto flex items-center gap-2 font-bold text-xl tracking-tight px-4 py-2 transition-all hover:text-red-600"
                >
                    <Shield className="w-5 h-5 text-primary" />
                    <span>{siteConfig.name}</span>
                </Link> */}

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:rotate-180 transition-all duration-300 z-50 hover:bg-white/10"
                    aria-label="Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </header>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background/60 flex items-center justify-end pr-6 md:pr-12"
                    >
                        <nav className="flex flex-col items-end gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                >
                                    <Link
                                        to={link.href}
                                        className="text-primary text-4xl md:text-6xl font-bold tracking-tighter hover:text-muted-foreground transition-colors text-right block py-2"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 flex gap-6"
                            >
                                {siteConfig.socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
