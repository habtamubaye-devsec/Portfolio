
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { User, Mail, MapPin, Phone } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                            <User className="text-blue-600" />
                            About Me
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {portfolioData.summary}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="w-5 h-5 text-blue-600" />
                                <span>{portfolioData.email}</span>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                                <Phone className="w-5 h-5 text-blue-600" />
                                <span>{portfolioData.phone}</span>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                <span>{portfolioData.location}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl bg-linear-to-tr from-blue-600 to-indigo-400 p-1">
                            <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center overflow-hidden">
                                {/* Placeholder for Profile Image - Suggest generating one or using a generic avatar */}
                                <div className="text-muted-foreground text-center p-8">
                                    <p className="text-6xl mb-4 font-bold text-blue-600/20">HB</p>
                                    <p className="italic">"Passionate about solving real-world problems through code."</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
