"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Lightbulb, Box } from "lucide-react";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yHeader = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityHeader = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id="about" ref={containerRef} className="relative z-20 min-h-screen bg-[#0C0A09] py-40 px-8 md:px-32 font-sans overflow-hidden">
            {/* Subtle Texture/Lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#D4A373 1px, transparent 1px), linear-gradient(90deg, #D4A373 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16">
                    <motion.div
                        style={{ y: yHeader, opacity: opacityHeader }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-10 h-[1px] bg-accent" />
                            <span className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase">The Biography</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-10 tracking-tighter font-display leading-[0.9]">
                            Architecture <br />
                            <span className="text-[#3A3430]">of Intelligence.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
                            Specializing in the intersection of <span className="text-foreground border-b border-accent/30">Autonomous Agents</span> and high-performance infrastructure.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 border border-accent/10 bg-[#141210] max-w-sm relative"
                    >
                        <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-accent" />
                        <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Box size={12} /> Manifesto
                        </p>
                        <p className="text-foreground text-lg leading-relaxed font-light font-display italic">
                            "True automation isn't just following rules; it's the recursive optimization of decision-making."
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-accent/5 border border-accent/5">
                    {/* Education Card - Square Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-4 p-12 bg-[#0C0A09] border border-accent/5 hover:bg-[#141210] transition-colors group relative"
                    >
                        <div className="w-12 h-12 border border-accent/20 flex items-center justify-center mb-10 group-hover:border-accent transition-colors">
                            <GraduationCap className="text-accent" size={20} />
                        </div>
                        <h4 className="text-foreground font-bold text-xl mb-2 font-display uppercase tracking-tight">University</h4>
                        <p className="text-gray-600 font-medium text-xs mb-8 uppercase tracking-widest">Sage University, Bhopal</p>
                        <div className="flex items-baseline gap-2">
                            <div className="text-6xl font-black text-foreground tracking-tighter">8.3</div>
                            <div className="text-accent font-bold text-[10px] uppercase tracking-widest">CGPA</div>
                        </div>
                    </motion.div>

                    {/* Expertise Card - Square Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="md:col-span-8 p-12 bg-[#0C0A09] border border-accent/5 hover:bg-[#141210] transition-colors relative"
                    >
                        <div className="flex flex-col md:flex-row gap-12 items-start h-full">
                            <div className="flex-1">
                                <div className="w-12 h-12 border border-accent/20 flex items-center justify-center mb-10">
                                    <Lightbulb className="text-accent" size={20} />
                                </div>
                                <h4 className="text-foreground font-bold text-xl mb-6 font-display uppercase tracking-tight">Technical Mastery</h4>
                                <p className="text-gray-500 text-lg leading-relaxed font-light">
                                    Harnessing <span className="text-foreground font-medium">Neural Orchestration</span> to build multi-agent systems that autonomously reason and execute with precision.
                                </p>
                            </div>
                            <div className="w-full md:w-64 flex flex-col gap-px bg-accent/5">
                                <div className="p-6 bg-[#141210]">
                                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2">Research</p>
                                    <p className="text-foreground text-sm font-medium">Automation for the WEB APP</p>
                                </div> 
                                <div className="p-6 bg-[#141210]">
                                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2">Focus</p>
                                    <p className="text-foreground text-sm font-medium">LLM Toolsets</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
