


"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { 
    Code2, Terminal, Globe, Server, Smartphone, 
    Cloud, ShieldCheck, Database, Layout, Box, 
    GitBranch, Layers, Cpu
} from "lucide-react";
import Image from "next/image";

// Icon mapping for skill categories
const categoryIcons: Record<string, any> = {
    "Languages": Terminal,
    "Frontend": Layout,
    "Backend": Server,
    "Mobile": Smartphone,
    "DevOps & Cloud": Cloud,
    "Security": ShieldCheck,
};

// Map skill names to SimpleIcons IDs for real brand logos
const skillLogos: Record<string, string> = {
    // Languages
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "Python": "python",
    // Frontend
    "React.js": "react",
    "Next.js": "nextdotjs",
    "Tailwind CSS": "tailwindcss",
    "Ant Design": "antdesign",
    "Redux": "redux",
    "Radix UI": "radixui",
    "Shadcn UI": "shadcnui",
    "Zustand": "react", // fallback or specific icon
    // Backend
    "Node.js": "nodedotjs",
    "Express.js": "express",
    "NestJS": "nestjs",
    "FastAPI": "fastapi",
    "MongoDB": "mongodb",
    "PostgreSQL": "postgresql",
    "SQL": "postgresql",
    "RESTful APIs": "insomnia",
    // Mobile
    "React Native": "react",
    // DevOps
    "Docker": "docker",
    "Git": "git",
    "GitHub Actions": "githubactions",
    "AWS": "amazonwebservices",
    "Vercel": "vercel",
    "Linux": "linux",
    "Render": "render",
    // Security
    "Web Penetration Testing": "kalilinux",
    "Secure Coding": "shield",
    "Vulnerability Assessment": "owasp"
};

const getSkillIcon = (skill: string) => {
    const logoId = skillLogos[skill];
    
    if (logoId) {
        // Use SimpleIcons for real brand logos
        // In dark mode, some logos might need filters, but original colors usually work fine
        return (
            <div className="relative w-4 h-4 flex-shrink-0">
                <img 
                    src={`https://cdn.simpleicons.org/${logoId}`} 
                    alt={skill}
                    className="w-full h-full object-contain dark:brightness-110"
                />
            </div>
        );
    }
    
    return <Code2 className="w-4 h-4 text-accent-text/60" />;
};

export default function Skills() {
    return (
        // SEO: Semantic section with proper id and aria-label
        <section id="skills" className="section-full bg-muted/50" aria-labelledby="skills-heading">
            <div className="container mx-auto px-4 my-0 lg:my-20">
                <header className="mb-16 text-center">
                    {/* SEO: Proper h2 heading for section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 id="skills-heading" className="text-3xl md:text-4xl font-black mb-4 flex items-center justify-center gap-3">
                            <Code2 className="w-8 h-8 text-accent-text" aria-hidden="true" />
                            Technical Stack
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            The languages, frameworks, and tools I use to build robust and scalable digital products.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map((category, index) => {
                        const Icon = categoryIcons[category.category] || Code2;
                        return (
                            <motion.article
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group p-8 rounded-3xl border bg-card/60 backdrop-blur-sm hover:shadow-2xl hover:border-accent-text/30 transition-all duration-500"
                                aria-label={`${category.category} skills`}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-accent-text/10 text-accent-text group-hover:bg-accent-text group-hover:text-white transition-all duration-500 shadow-inner">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight">
                                        {category.category}
                                    </h3>
                                </div>
                                
                                <ul className="flex flex-wrap gap-3" role="list">
                                    {category.items.map((skill) => (
                                        <li
                                            key={skill}
                                            className="inline-flex items-center gap-2.5 px-4 py-2 text-sm font-bold bg-muted/40 text-foreground border border-transparent rounded-xl hover:border-accent-text/40 hover:bg-card hover:shadow-lg hover:-translate-y-1 transition-all cursor-default"
                                            role="listitem"
                                        >
                                            {getSkillIcon(skill)}
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
