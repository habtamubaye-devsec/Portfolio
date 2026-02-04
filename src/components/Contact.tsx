
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setSubmitError(null);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || result.message || "Failed to send message");
            }

            console.log("Form submitted successfully");
            setIsSuccess(true);
            reset();
        } catch (error: any) {
            console.error("Submission Error:", error);
            setSubmitError(error.message || "Something went wrong. Please try again later.");
        }
    };

    const resetForm = () => {
        setIsSuccess(false);
        setSubmitError(null);
    };

    return (
        // SEO: Semantic section with proper id and aria-label
        <section id="contact" className="py-24 bg-muted/30" aria-labelledby="contact-heading">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            {/* SEO: Proper h2 heading for contact section */}
                            <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold mb-6">Let's Connect</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Mail, label: "Email", value: "habtamubaye2127@gmail.com" },
                                    { icon: Phone, label: "Phone", value: "+251 991 51 55 88" },
                                    { icon: MapPin, label: "Location", value: "Adama, Ethiopia" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                                            <p className="font-bold">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-card border rounded-3xl shadow-xl min-h-[500px] flex flex-col justify-center"
                        >
                            <AnimatePresence mode="wait">
                                {!isSuccess ? (
                                    <motion.form
                                        key="contact-form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-6"
                                    >
                                        <div>
                                            {/* SEO: Proper label with htmlFor for accessibility */}
                                            <label htmlFor="name-input" className="block text-sm font-medium mb-2">Name</label>
                                            <input
                                                id="name-input"
                                                {...register("name")}
                                                className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-600 outline-none transition-all ${errors.name ? "border-red-500" : "border-muted"
                                                    }`}
                                                placeholder="Your Name"
                                                aria-required="true"
                                                aria-invalid={errors.name ? "true" : "false"}
                                                aria-describedby={errors.name ? "name-error" : undefined}
                                            />
                                            {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email-input" className="block text-sm font-medium mb-2">Email</label>
                                            <input
                                                id="email-input"
                                                type="email"
                                                {...register("email")}
                                                className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-600 outline-none transition-all ${errors.email ? "border-red-500" : "border-muted"
                                                    }`}
                                                placeholder="your@email.com"
                                                aria-required="true"
                                                aria-invalid={errors.email ? "true" : "false"}
                                                aria-describedby={errors.email ? "email-error" : undefined}
                                            />
                                            {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="subject-input" className="block text-sm font-medium mb-2">Subject</label>
                                            <input
                                                id="subject-input"
                                                {...register("subject")}
                                                className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-600 outline-none transition-all ${errors.subject ? "border-red-500" : "border-muted"
                                                    }`}
                                                placeholder="Project Inquiry"
                                                aria-required="true"
                                                aria-invalid={errors.subject ? "true" : "false"}
                                                aria-describedby={errors.subject ? "subject-error" : undefined}
                                            />
                                            {errors.subject && <p id="subject-error" className="text-red-500 text-xs mt-1" role="alert">{errors.subject.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="message-input" className="block text-sm font-medium mb-2">Message</label>
                                            <textarea
                                                id="message-input"
                                                {...register("message")}
                                                rows={4}
                                                className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none ${errors.message ? "border-red-500" : "border-muted"
                                                    }`}
                                                placeholder="Tell me about your project..."
                                                aria-required="true"
                                                aria-invalid={errors.message ? "true" : "false"}
                                                aria-describedby={errors.message ? "message-error" : undefined}
                                            />
                                            {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">{errors.message.message}</p>}
                                        </div>

                                        {submitError && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-xl"
                                            >
                                                {submitError}
                                            </motion.div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20"
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success-message"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center space-y-6 py-8"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Message Sent!</h3>
                                        <p className="text-muted-foreground">
                                            Thank you for reaching out. I'll get back to you as soon as possible.
                                        </p>
                                        <button
                                            onClick={resetForm}
                                            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
