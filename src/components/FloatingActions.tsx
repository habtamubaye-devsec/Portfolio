"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function FloatingActions() {
    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] flex flex-col gap-4">
            {/* Download CV Button */}
            <motion.a
                animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.1, 1],
                    boxShadow: [
                        "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
                        "0 20px 40px -5px rgba(37, 99, 235, 0.6)",
                        "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
                    ],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.9 }}
                href={(portfolioData as any).cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer border border-white/20 group hover:bg-blue-700 transition-colors z-10"
                aria-label="Download CV"
                title="Download CV"
            >
                <Download className="w-6 h-6 md:w-7 md:h-7" />
            </motion.a>

            {/* Chat/Contact Button */}
            <motion.a
                animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.1, 1],
                    boxShadow: [
                        "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
                        "0 20px 40px -5px rgba(37, 99, 235, 0.6)",
                        "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
                    ],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                whileTap={{ scale: 0.9 }}
                href="#contact"
                className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer border border-white/20 group hover:bg-blue-700 transition-colors"
                aria-label="Contact Me"
                title="Contact Me"
            >
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
            </motion.a>
        </div>
    );
}
