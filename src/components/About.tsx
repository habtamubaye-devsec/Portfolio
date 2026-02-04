
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { User, Mail, MapPin, Phone } from "lucide-react";

export default function About() {
    return (
        // SEO: Using semantic section with proper id and aria-label
        <section id="about" className="py-24 bg-muted/30" aria-labelledby="about-heading">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* SEO: Using article element for main content */}
                    <motion.article
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* SEO: Proper h2 heading for section */}
                        <h2 id="about-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-3">
                            <User className="text-blue-600" aria-hidden="true" />
                            About Me
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {portfolioData.summary}
                        </p>

                        {/* SEO: Contact information with microdata for better search engine understanding */}
                        <address className="space-y-4 not-italic">
                            <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
                                <a
                                    href={`mailto:${portfolioData.email}`}
                                    className="hover:underline"
                                    aria-label={`Email ${portfolioData.name}`}
                                    itemProp="email"
                                >
                                    {portfolioData.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                                <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
                                <a
                                    href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}
                                    className="hover:underline"
                                    aria-label={`Call ${portfolioData.name}`}
                                    itemProp="telephone"
                                >
                                    {portfolioData.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                                <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" />
                                <span itemProp="address">{portfolioData.location}</span>
                            </div>
                        </address>
                    </motion.article>

                    {/* SEO: Profile image placeholder with proper alt text */}
                    <motion.aside
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                        aria-label="Profile showcase"
                    >
                        <div className="aspect-square rounded-2xl bg-linear-to-tr from-blue-600 to-indigo-400 p-1">
                            <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center overflow-hidden">
                                {/* SEO: Placeholder for Profile Image - Consider adding actual image with alt text */}
                                <div className="text-muted-foreground text-center p-8" role="img" aria-label="Profile placeholder with initials HB">
                                    <p className="text-6xl mb-4 font-bold text-blue-600/20">HB</p>
                                    <p className="italic">"Passionate about solving real-world problems through code."</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" aria-hidden="true" />
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
