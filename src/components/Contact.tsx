"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, MessageSquare, Send, Plus } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="relative z-20 bg-[#0C0A09] py-40 px-8 md:px-32 font-sans overflow-hidden border-t border-accent/10">
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-[1px] bg-accent" />
                        <span className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase">The Connection</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-foreground tracking-tighter font-display leading-[0.95]">
                        Initiate <br />
                        <span className="text-[#3A3430]">Consultation.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-accent/10 border border-accent/10">
                    {/* Social links bento - Square Boxes */}
                    <div className="md:col-span-4 grid grid-cols-1 gap-px bg-accent/5">
                        <motion.div
                            key="footer-github"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#0C0A09] hover:bg-[#141210] transition-colors group"
                        >
                            <a
                                href="https://github.com/Abhas7"
                                target="_blank"
                                rel="noopener noreferrer"
                                suppressHydrationWarning
                                className="flex items-center justify-between p-10 w-full h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 border border-accent/20 text-gray-400 group-hover:text-accent group-hover:border-accent transition-all">
                                        <Github size={18} />
                                    </div>
                                    <span className="font-bold text-sm text-foreground font-display uppercase tracking-widest">GitHub</span>
                                </div>
                                <ArrowRight size={14} className="text-gray-700 group-hover:text-accent transition-colors" />
                            </a>
                        </motion.div>

                        <motion.div
                            key="footer-linkedin"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-[#0C0A09] hover:bg-[#141210] transition-colors group"
                        >
                            <a
                                href="https://www.linkedin.com/in/abhassomkuwar03"
                                target="_blank"
                                rel="noopener noreferrer"
                                suppressHydrationWarning
                                className="flex items-center justify-between p-10 w-full h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 border border-accent/20 text-gray-400 group-hover:text-accent group-hover:border-accent transition-all">
                                        <Linkedin size={18} />
                                    </div>
                                    <span className="font-bold text-sm text-foreground font-display uppercase tracking-widest">LinkedIn</span>
                                </div>
                                <ArrowRight size={14} className="text-gray-700 group-hover:text-accent transition-colors" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Main CTA Wall - Square Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="md:col-span-8 p-12 md:p-20 bg-[#141210] relative group"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Plus size={120} className="text-accent" strokeWidth={0.5} />
                        </div>

                        <div className="relative z-10 space-y-16">
                            <div className="space-y-6">
                                <h3 className="text-foreground font-bold text-4xl md:text-5xl font-display tracking-tight uppercase leading-none">Global Partnership</h3>
                                <p className="text-gray-500 text-xl leading-relaxed font-light italic max-w-xl">
                                    Strategic availability for agentic infrastructure builds and neural computing research projects.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-accent/10">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Channel A [Email]</p>
                                    <a href="mailto:abhassomkuwar7@gmail.com" suppressHydrationWarning className="text-xl font-medium text-foreground hover:text-accent transition-all font-display border-b border-accent/20 pb-2 flex items-center justify-between group/email">
                                        abhassomkuwar7@gmail.com
                                        <ArrowRight size={14} className="opacity-0 group-hover/email:opacity-100 transition-all translate-x-[-10px] group-hover/email:translate-x-0" />
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Channel B [Direct]</p>
                                    <a href="tel:+917489215404" suppressHydrationWarning className="text-xl font-medium text-foreground hover:text-accent transition-all font-display border-b border-accent/20 pb-2 flex items-center justify-between group/phone">
                                        +91 7489215404
                                        <ArrowRight size={14} className="opacity-0 group-hover/phone:opacity-100 transition-all translate-x-[-10px] group-hover/phone:translate-x-0" />
                                    </a>
                                </div>
                            </div>

                            <div className="pt-12">
                                <button className="group relative inline-flex items-center gap-4 px-12 py-6 bg-accent text-black font-bold uppercase text-xs tracking-[0.2em] transition-all hover:bg-white active:scale-95">
                                    <span className="relative z-10">Secure Engagement</span>
                                    <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
