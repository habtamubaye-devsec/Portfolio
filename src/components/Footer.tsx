
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-12 border-t">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-xl font-bold mb-2">
                            HB<span className="text-blue-600">.</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href={portfolioData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href={portfolioData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href={`mailto:${portfolioData.email}`}
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
