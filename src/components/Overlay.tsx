"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

const Overlay = ({ scrollYProgress }: OverlayProps) => {

    // Section 1: Hero (Name only)
    const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.12, 0.2], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [100, -100]);
    const scale1 = useTransform(scrollYProgress, [0, 0.08], [0.95, 1]);

    // Section 2: Core Expertise (Appears after a gap)
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.35, 0.65], [100, -100]);

    // Section 4: Final CTA Buttons (End of video)
    const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.8, 0.9], [50, 0]);

    return (
        <div className="absolute inset-0 z-50 pointer-events-none font-sans">
            {/* Section 1: Hero (Name Only) */}
            <motion.div
                style={{ opacity: opacity1, y: y1, scale: scale1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-[60]"
            >
                <div className="space-y-6 drop-shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-1 border-l border-r border-accent/40 bg-accent/[0.05] text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
                    >
                        AI-based Full stack developer
                    </motion.div>
                    <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-foreground font-display leading-[0.8] uppercase">
                        Abhas <br />
                        <span className="text-accent/80">Somkuwar</span>
                    </h1>
                </div>
            </motion.div>

            {/* Section 2: Core Expertise */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-32 z-[60]"
            >
                <div className="max-w-4xl space-y-8 drop-shadow-2xl">
                    <div className="flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-accent" />
                        <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase">Development Focus</span>
                    </div>
                    <h2 className="text-7xl md:text-[8rem] font-bold text-foreground leading-[0.8] font-display tracking-tighter uppercase">
                        AI <br />
                        <span className="text-accent/60">Architect.</span>
                    </h2>
                    <div className="space-y-6 border-l-2 border-accent/40 pl-10 max-w-2xl">
                        <p className="text-foreground text-xl md:text-3xl font-bold leading-tight tracking-tight uppercase">
                            Making full stack web apps with the integration of AI and Agentic AI.
                        </p>
                        <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed italic">
                            Dedicated to building the next generation of intelligent ecosystems.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Section 4: Final Buttons (Bottom Aligned) */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute inset-0 flex flex-col items-center justify-end pb-32 text-center px-4 pointer-events-auto z-[70]"
            >
                <div
                    className="flex flex-col md:flex-row items-center justify-center gap-px bg-accent/20 border border-accent/20 p-px relative z-50 pointer-events-auto shadow-2xl backdrop-blur-sm"
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative flex items-center justify-center gap-3 px-16 py-6 bg-[#0C0A09] text-foreground text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all cursor-pointer overflow-hidden z-[60]"
                    >
                        <span className="relative z-10">View Projects</span>
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative flex items-center justify-center gap-3 px-16 py-6 bg-accent text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all cursor-pointer overflow-hidden z-[60]"
                    >
                        <span className="relative z-10">Contact Me</span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Overlay;
