
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        // SEO: Semantic footer element with proper structure
        <footer className="py-12 border-t" role="contentinfo">
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

                    {/* SEO: Social links with rel="me" for verification and proper aria-labels */}
                    <nav className="flex items-center gap-6" aria-label="Social media links">
                        <a
                            href={portfolioData.github}
                            target="_blank"
                            rel="noopener noreferrer me"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                            aria-label={`Visit ${portfolioData.name}'s GitHub profile (opens in new tab)`}
                        >
                            <Github className="w-5 h-5" aria-hidden="true" />
                        </a>
                        <a
                            href={portfolioData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer me"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                            aria-label={`Visit ${portfolioData.name}'s LinkedIn profile (opens in new tab)`}
                        >
                            <Linkedin className="w-5 h-5" aria-hidden="true" />
                        </a>
                        <a
                            href={`mailto:${portfolioData.email}`}
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                            aria-label={`Send email to ${portfolioData.name}`}
                        >
                            <Mail className="w-5 h-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
