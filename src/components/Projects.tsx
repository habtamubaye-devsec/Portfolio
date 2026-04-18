"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github, Briefcase, ChevronDown, ChevronUp, Monitor, Tablet, Smartphone, Code2, Cpu } from "lucide-react";
import Image from "next/image";

// Premium Image/Fallback component
function ProjectImage({ src, title, tags }: { src: string; title: string, tags: string[] }) {
    const [error, setError] = useState(false);

    // Dynamic icon based on tags/title
    const getIcon = () => {
        const lowerTitle = title.toLowerCase();
        const lowerTags = tags.map(t => t.toLowerCase());

        if (lowerTitle.includes("voting")) return <div className="relative"><Cpu className="w-16 h-16" /><div className="absolute -top-2 -right-2 bg-primary w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-primary-foreground">✓</div></div>;
        if (lowerTitle.includes("food") || lowerTitle.includes("delivery")) return <Monitor className="w-16 h-16" />;
        if (lowerTitle.includes("cyber") || lowerTitle.includes("security") || lowerTitle.includes("penetration")) return <div className="relative"><Cpu className="w-16 h-16" /><div className="absolute inset-0 bg-primary/10 animate-pulse rounded-full" /></div>;
        if (lowerTitle.includes("dental") || lowerTitle.includes("clinic")) return <Tablet className="w-16 h-16" />;
        if (lowerTags.includes("mobile") || lowerTags.includes("react native") || lowerTitle.includes("mobile")) return <Smartphone className="w-16 h-16" />;
        if (lowerTags.includes("nest") || lowerTags.includes("node") || lowerTags.includes("backend")) return <Code2 className="w-16 h-16" />;
        
        return <Briefcase className="w-16 h-16" />;
    };

    // Premium gradients based on project type
    const getGradient = () => {
        const hash = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 4;
        const gradients = [
            "from-[#a89e90] to-[#5c534a]",
            "from-slate-900 to-slate-800",
            "from-[#8c8078] to-[#4a3f38]",
            "from-[#6b6059] to-slate-900"
        ];
        return gradients[hash];
    };

    if (error || !src || src === "" || src.includes("placeholder") || !src.endsWith(".png")) {
        return (
            <div className={`absolute inset-0 bg-linear-to-br ${getGradient()} flex flex-col items-center justify-center overflow-hidden`}>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                
                {/* Glowing Aura */}
                <div className="absolute w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                
                <div className="relative z-10 text-white/40 group-hover:text-white/70 group-hover:scale-110 transition-all duration-700">
                    {getIcon()}
                </div>
                
                {/* Branded Text Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10">
                    <div className="h-[1px] w-full bg-linear-to-r from-white/0 via-white/20 to-white/0" />
                    <span className="text-[10px] text-center text-white/50 font-mono tracking-[0.2em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                        {title}
                    </span>
                    <span className="text-[8px] text-center text-accent-text/50 font-mono tracking-tighter uppercase">Professional System</span>
                </div>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    );
}

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 8;

    const displayedProjects = showAll 
        ? portfolioData.projects 
        : portfolioData.projects.slice(0, initialDisplayCount);

    // SEO: JSON-LD Structured Data for ItemList of projects
    const projectsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": portfolioData.projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "url": project.liveUrl,
                "keywords": project.tags.join(", "),
                "author": {
                    "@type": "Person",
                    "name": portfolioData.name
                }
            }
        }))
    };

    return (
        // SEO: Semantic section with proper id and aria-label
        <section id="projects" className="py-24 bg-muted/30" aria-labelledby="projects-heading">
            {/* SEO: Inject structured data for projects */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
            />

            <div className="container mx-auto px-4 ">
                <header className="mb-16 text-center">
                    {/* SEO: Proper h2 heading for section */}
                    <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Briefcase className="text-accent-text" aria-hidden="true" />
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive showcase of my work, ranging from large-scale national systems to specialized mobile and web applications.
                    </p>
                </header>

                {/* SEO: Using article elements for each project */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ 
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.2 },
                                    layout: { duration: 0.3 }
                                }}
                                className="group relative flex flex-col bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                                aria-label={`Project: ${project.title}`}
                            >
                                {/* SEO: Image with premium fallback */}
                                <div className="relative aspect-video overflow-hidden">
                                    <ProjectImage 
                                        src={project.image} 
                                        title={project.title} 
                                        tags={project.tags}
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    {/* SEO: Technology tags with proper semantic markup */}
                                    <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <span 
                                                key={tag} 
                                                className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-secondary/50 text-accent-text border border-accent-text/10 rounded-md backdrop-blur-xs hover:bg-accent-text hover:text-white transition-all duration-300"
                                                role="listitem"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* SEO: Project title as h3 heading */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent-text transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* SEO: Project description */}
                                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* SEO: Action buttons with descriptive aria-labels */}
                                    <div className="mt-auto flex items-center gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-colors shadow-sm"
                                            aria-label={`View live demo of ${project.title} (opens in new tab)`}
                                        >
                                            Live Demo
                                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 border rounded-lg hover:bg-muted transition-colors"
                                            aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                                        >
                                            <Github className="w-5 h-5" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More / Show Less Button */}
                {portfolioData.projects.length > initialDisplayCount && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group flex items-center gap-2 px-8 py-4 bg-card border rounded-full font-semibold hover:bg-muted hover:border-primary/30 transition-all shadow-sm hover:shadow-md"
                            aria-expanded={showAll}
                            aria-controls="projects-grid"
                        >
                            <span className="text-accent-text">
                                {showAll ? "Show Less" : `View All Projects (${portfolioData.projects.length})`}
                            </span>
                            {showAll ? (
                                <ChevronUp className="w-5 h-5 text-accent-text group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-accent-text group-hover:translate-y-1 transition-transform" />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
