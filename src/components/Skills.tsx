
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2 } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Code2 className="text-blue-600" />
                        Technical Skills
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my technical stack and the tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-lg font-bold mb-4 text-blue-600 border-b pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
