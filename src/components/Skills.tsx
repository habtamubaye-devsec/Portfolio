
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2 } from "lucide-react";

export default function Skills() {
    return (
        // SEO: Semantic section with proper id and aria-label
        <section id="skills" className="py-24" aria-labelledby="skills-heading">
            <div className="container mx-auto px-4">
                <header className="mb-16 text-center">
                    {/* SEO: Proper h2 heading for section */}
                    <h2 id="skills-heading" className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Code2 className="text-blue-600" aria-hidden="true" />
                        Technical Skills
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my technical stack and the tools I use to bring ideas to life.
                    </p>
                </header>

                {/* SEO: Using article elements for each skill category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map((category, index) => (
                        <motion.article
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow"
                            aria-label={`${category.category} skills`}
                        >
                            {/* SEO: h3 heading for skill category */}
                            <h3 className="text-lg font-bold mb-4 text-blue-600 border-b pb-2">
                                {category.category}
                            </h3>
                            {/* SEO: List of skills with proper semantic markup */}
                            <ul className="flex flex-wrap gap-2" role="list">
                                {category.items.map((skill) => (
                                    <li
                                        key={skill}
                                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                                        role="listitem"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
