import { motion } from "framer-motion";

export default function Section({ children, className = "", id = "" }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={`py-16 md:py-24 container mx-auto px-4 md:px-6 ${className}`}
        >
            {children}
        </motion.section>
    );
}
