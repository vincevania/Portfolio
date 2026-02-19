import { Helmet } from "react-helmet-async";

const SITE_URL = "https://abhishek-rai-portfolio.vercel.app";

const defaults = {
    title: "Abhishek Rai | Cybersecurity Professional",
    description:
        "Portfolio of Abhishek Rai — a cybersecurity professional specializing in defensive security, penetration testing, DevSecOps, and infrastructure hardening.",
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
};

export default function SEO({
    title,
    description = defaults.description,
    path = "/",
    type = "website",
}) {
    const fullTitle = title
        ? `${title} | Abhishek Rai`
        : defaults.title;
    const url = `${SITE_URL}${path}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={defaults.image} />
            <meta property="og:site_name" content="Abhishek Rai" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={defaults.image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Abhishek Rai" />
            <meta
                name="keywords"
                content="cybersecurity, penetration testing, network security, DevSecOps, security engineer, Abhishek Rai, portfolio"
            />
        </Helmet>
    );
}
