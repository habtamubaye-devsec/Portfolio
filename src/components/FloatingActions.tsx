"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function FloatingActions() {
    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-60 flex flex-col gap-3">
            {/* Download CV Button */}
            <motion.a
                animate={{
                    y: [0, -8, 0],
                    boxShadow: [
                        "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
                        "0 20px 40px -10px rgba(37, 99, 235, 0.5)",
                        "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
                    ],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{ scale: 1.08, rotate: 5 }}
                whileTap={{ scale: 0.92 }}
                href={(portfolioData as any).cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-14 md:h-14 bg-linear-to-tr from-blue-700 to-blue-500 text-white rounded-xl flex items-center justify-center cursor-pointer border border-white/20 shadow-xl transition-all z-10"
                aria-label="Download CV"
                title="Download CV"
            >
                <Download className="w-4 h-4 md:w-6 md:h-6" />
            </motion.a>

            {/* Chat/Contact s */}
            <motion.a
                animate={{
                    y: [0, -8, 0],
                    boxShadow: [
                        "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
                        "0 20px 40px -10px rgba(37, 99, 235, 0.5)",
                        "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
                    ],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                whileHover={{ scale: 1.08, rotate: -5 }}
                whileTap={{ scale: 0.92 }}
                href="#contact"
                className="w-11 h-11 md:w-14 md:h-14 bg-linear-to-tr from-indigo-600 to-blue-600 text-white rounded-xl flex items-center justify-center cursor-pointer border border-white/20 shadow-xl transition-all"
                aria-label="Contact Me"
                title="Contact Me"
            >
                <MessageCircle className="w-4 h-4 md:w-6 md:h-6" />
            </motion.a>
        </div>
    );
}
