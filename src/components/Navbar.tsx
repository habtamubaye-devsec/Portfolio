
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, User, Briefcase, Code2, LayoutGrid, BookOpen, Mail, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: LayoutGrid },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: BookOpen },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map(link => link.name.toLowerCase());
            for (const section of sections) {
                const id = section === "home" ? "hero" : section;
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Using a tighter threshold for section detection
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        const link = navLinks.find(l => l.name.toLowerCase() === section);
                        if (link) setActiveSection(link.name);
                        break;
                    }
                }
            }
            if (window.scrollY < 100) setActiveSection("Home");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Desktop Navbar - Sticky Full Width (relative to 70% container) */}
            <header
                className={`sticky top-0 z-50 hidden lg:block transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        HB<span className="text-blue-600">.</span>
                    </Link>

                    <nav className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border/50 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveSection(link.name)}
                                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group ${activeSection === link.name
                                    ? "text-white"
                                    : "text-foreground/60 hover:text-foreground"
                                    }`}
                            >
                                {activeSection === link.name && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-500/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <link.icon className={`w-4 h-4 ${activeSection === link.name ? "text-white" : "text-foreground/40 group-hover:text-blue-600"}`} />
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <a
                            href={(portfolioData as any).cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </header>

            {/* Mobile Header Buttons - Fixed to viewport for accessibility */}
            <div className="fixed top-0 left-0 w-full z-50 lg:hidden pointer-events-none">
                <div className="w-full px-6 py-6 flex justify-between items-center pointer-events-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-3 bg-background/90 backdrop-blur-md rounded-2xl shadow-xl border border-border/50 text-foreground transition-transform active:scale-90"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <div className="p-1 bg-background/80 backdrop-blur-md rounded-2xl shadow-xl border border-border/50">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 lg:hidden bg-black/20 dark:bg-black/40 backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-[320px] z-50 lg:hidden bg-background shadow-2xl p-6 pt-10 flex flex-col border-r border-border/50"
                        >
                            {/* Drawer Header */}
                            <div className="flex justify-between items-center mb-12">
                                <h2 className="text-2xl font-black tracking-tighter">
                                    {portfolioData.name.split(" ")[0]}<span className="text-blue-600">.</span>
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-muted/50 rounded-xl text-foreground transition-transform active:scale-95"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                            setIsOpen(false);
                                        }}
                                        className="flex items-center gap-4 py-2 transition-all group active:scale-95"
                                    >
                                        <div className={`p-2.5 rounded-xl transition-colors ${activeSection === link.name ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "bg-secondary text-muted-foreground group-hover:bg-blue-600/10 group-hover:text-blue-600"}`}>
                                            <link.icon className="w-5 h-5" />
                                        </div>
                                        <span className={`text-lg font-bold ${activeSection === link.name ? "text-blue-600" : "text-foreground/70"}`}>{link.name}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto pb-10">
                                <a
                                    href={(portfolioData as any).cvUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 active:scale-95 transition-transform"
                                >
                                    <Briefcase className="w-5 h-5" />
                                    Download CV
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
