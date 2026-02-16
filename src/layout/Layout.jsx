import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
}
