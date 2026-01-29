
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Calendar, GraduationCap, Building2 } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                            <Building2 className="text-blue-600" />
                            Work Experience
                        </h2>
                        <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-0.5 before:bg-muted">
                            {portfolioData.experience.map((exp, index) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-12"
                                >
                                    <div className="absolute left-0 top-1 w-9 h-9 bg-background border-2 border-blue-600 rounded-full flex items-center justify-center z-10">
                                        <Calendar className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{exp.period}</span>
                                        <h3 className="text-xl font-bold mt-1 text-foreground">{exp.role}</h3>
                                        <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                                        <ul className="space-y-2">
                                            {exp.description.map((bullet, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                            <GraduationCap className="text-blue-600" />
                            Education
                        </h2>
                        <div className="space-y-12">
                            {portfolioData.education.map((edu, index) => (
                                <motion.div
                                    key={edu.school}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl border bg-card hover:bg-muted/30 transition-colors"
                                >
                                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{edu.period}</span>
                                    <h3 className="text-xl font-bold mt-1">{edu.degree}</h3>
                                    <p className="text-muted-foreground font-medium">{edu.school}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{edu.location}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
