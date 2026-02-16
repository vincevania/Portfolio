import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    liquid: "glass-button text-foreground hover:scale-105 active:scale-95",
};

const sizes = {
    sm: "h-9 px-3 text-xs",
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
};

export default function Button({
    className = "",
    variant = "primary",
    size = "default",
    asChild = false,
    href,
    children,
    ...props
}) {
    const cn = `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        if (href.startsWith("http")) {
            return (
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    {...props}
                >
                    {children}
                </motion.a>
            );
        }
        return (
            <Link to={href} className={cn} {...props}>
                <motion.span
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {children}
                </motion.span>
            </Link>
        );
    }

    return (
        <motion.button
            className={cn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
