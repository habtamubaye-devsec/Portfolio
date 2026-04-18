
"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { 
    User, Smartphone, Globe, Cpu, 
    ShieldCheck, Briefcase, Code2 
} from "lucide-react";

export default function About() {
    const highlights = [
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "Building production-ready cross-platform apps for Android and iOS with clean architectures and real-world deployments."
        },
        {
            icon: Globe,
            title: "Fullstack Engineering",
            description: "Designing and shipping end-to-end systems with React/Next.js on the frontend and Node.js/NestJS on the backend."
        },
        {
            icon: Cpu,
            title: "AI Automation",
            description: "Implementing state-of-the-art AI solutions to automate repetitive tasks and optimize complex business workflows."
        },
        {
            icon: ShieldCheck,
            title: "Cybersecurity",
            description: "Strong focus on secure system design, vulnerability assessment, and adhering to strict security protocols."
        },
        {
            icon: Briefcase,
            title: "Real-World Systems",
            description: "Delivering practical, scalable platforms—from e-learning to logistics—that solve critical real-world challenges."
        },
        {
            icon: Code2,
            title: "Clean Architecture",
            description: "Deep believer in SOLID principles, separation of concerns, and building modular systems that are easy to scale."
        }
    ];

    return (
        <section id="about" className="section-full bg-muted/30" aria-labelledby="about-heading">
            <div className="container mx-auto px-4 my-0 lg:my-20 mt-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start ">
                    {/* Left Column: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <header className="mb-8">
                            <h2 id="about-heading" className="text-4xl md:text-5xl font-black mb-4">
                                About Me
                            </h2>
                            <p className="text-accent-text font-bold text-lg">
                                A bit about who I am and what I do
                            </p>
                            <div className="h-1 w-12 bg-accent-text mt-4 rounded-full" />
                        </header>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I'm <span className="font-bold text-foreground">Habtamu Baye</span>, a 
                                <span className="text-accent-text font-bold"> Mobile App Developer</span>, 
                                <span className="text-accent-text font-bold"> Full-Stack Engineer</span>, and 
                                <span className="text-accent-text font-bold"> AI Automation</span> specialist based in 
                                <span className="font-bold text-foreground"> Addis Ababa, Ethiopia</span>. 
                                I specialize in building high-quality mobile and web applications that solve real-world problems.
                            </p>
                            <p>
                                I have extensive experience developing real-world systems such as ride-hailing, e-commerce, and logistics platforms, 
                                with a heavy focus on performance, real-time features, and user experience.
                            </p>
                            <p>
                                I am adaptable, quick to learn new technologies, and work effectively both independently and as part of a team. 
                                My development philosophy centers on writing clean, maintainable code and delivering reliable, scalable solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Highlights Grid */}
                    <div className="grid md:grid-cols-2 gap-4 h-full content-center">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-6 rounded-2xl border bg-card/40 backdrop-blur-sm hover:border-accent-text/30 hover:shadow-xl hover:shadow-accent-text/5 transition-all duration-300"
                            >
                                <div className="p-2.5 w-fit rounded-xl bg-accent-text/10 text-accent-text mb-4 group-hover:bg-accent-text group-hover:text-white transition-colors duration-300">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-black mb-2 text-foreground group-hover:text-accent-text transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed leading-normal">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
