"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Plus } from "lucide-react";

const PROJECTS = [
    {
        title: "Orbital CLI",
        id: "01",
        description: "An autonomous AI agent CLI that generates code, searches the web, handles OAuth, and uses tools autonomously.",
        tags: ["Node.js", "Gemini", "Prisma"],
        link: "https://github.com/Abhas7",
        github: "https://github.com/Abhas7",
        category: "AI Agent"
    },
    {
        title: "Quick Blog",
        id: "02",
        description: "AI-powered platform generating context-aware blog posts instantly using LLM orchestration.",
        tags: ["React", "Express", "Gemini AI"],
        link: "https://github.com/Abhas7",
        github: "https://github.com/Abhas7",
        category: "Automation"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="relative z-20 bg-[#0C0A09] py-40 px-8 md:px-32 font-sans overflow-hidden border-t border-accent/5">
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
                        <span className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase">The Portfolio</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-foreground tracking-tighter font-display leading-[0.95]">
                        Visual <br />
                        <span className="text-[#3A3430]">Evidence.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/10 border border-accent/10">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-[#0C0A09] group relative flex flex-col p-12 border border-accent/5 hover:bg-[#141210] transition-colors"
                        >
                            {/* Card Content */}
                            <div className="space-y-12 h-full flex flex-col justify-between">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 px-4 py-2 border border-accent/10">
                                            {project.category}
                                        </span>
                                        <div className="text-5xl font-black text-foreground/5 font-display group-hover:text-accent/10 transition-colors">
                                            {project.id}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-accent transition-colors font-display tracking-tight uppercase leading-none">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 text-lg font-light leading-relaxed italic">
                                            "{project.description}"
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-medium text-gray-500 uppercase tracking-widest border-r border-accent/20 pr-3 last:border-0">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-12 flex items-center justify-between border-t border-accent/5 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        suppressHydrationWarning
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-widest group/link"
                                    >
                                        <Github size={14} /> Repository
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        suppressHydrationWarning
                                        className="h-14 w-14 border border-accent/20 flex items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-black transition-all group/btn"
                                    >
                                        <ArrowUpRight size={20} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
