
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Briefcase className="text-blue-600" />
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work across web and mobile development, including open-source and professional projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative flex flex-col bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                        >
                            {/* Image Placeholder with Gradient */}
                            <div className="relative aspect-video bg-linear-to-br from-blue-100 to-indigo-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity group-hover:opacity-40">
                                    <Briefcase className="w-16 h-16 text-blue-600" />
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-blue-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex items-center gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                                    >
                                        Live Demo
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 border rounded-lg hover:bg-muted transition-colors"
                                        aria-label="GitHub Repository"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
