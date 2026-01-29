
"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        // In a real application, you would send this to an API
        console.log("Form submitted:", data);
        alert("Thank you for your message! (Demo Only)");
        reset();
    };

    return (
        <section id="contact" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Mail, label: "Email", value: "habtamubaye758@gmail.com" },
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
                            className="p-8 bg-card border rounded-3xl shadow-xl"
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        {...register("name")}
                                        className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-600 outline-none transition-all ${errors.name ? "border-red-500" : "border-muted"
                                            }`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        {...register("email")}
                                        className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-600 outline-none transition-all ${errors.email ? "border-red-500" : "border-muted"
                                            }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <input
                                        {...register("subject")}
                                        className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-600 outline-none transition-all ${errors.subject ? "border-red-500" : "border-muted"
                                            }`}
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        {...register("message")}
                                        rows={4}
                                        className={`w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none ${errors.message ? "border-red-500" : "border-muted"
                                            }`}
                                        placeholder="Tell me about your project..."
                                    />
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
