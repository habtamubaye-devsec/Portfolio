
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
                        Available for New Projects
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
                        Hi, I'm <span className="text-blue-600 font-black">{portfolioData.name.split(" ")[0]}</span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-center leading-relaxed"
                    >
                        {portfolioData.role}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                        >
                            View My Work
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={(portfolioData as any).cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600/10 text-blue-600 border-2 border-blue-600/20 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-600/20 transition-colors"
                        >
                            <Download className="w-5 h-5" />
                            Download CV
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="relative w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden border bg-linear-to-b from-muted/50 to-muted/10 backdrop-blur-sm self-center flex items-center justify-center">
                        <div className="p-8 text-left font-mono text-sm">
                            <p className="text-blue-400">const developer = {"{"}</p>
                            <div className="pl-6">
                                <p><span className="text-purple-400">name:</span> "{portfolioData.name}",</p>
                                <p><span className="text-purple-400">role:</span> "{portfolioData.role}",</p>
                                <p><span className="text-purple-400">skills:</span> [</p>
                                <div className="pl-6 text-green-400">
                                    "React", "Next.js", "Node.js", "TypeScript", "Tailwind", "PostgreSQL"
                                </div>
                                <p>],</p>
                                <p><span className="text-purple-400">passion:</span> "Building scalable web & mobile solutions"</p>
                            </div>
                            <p className="text-blue-400">{"}"};</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
