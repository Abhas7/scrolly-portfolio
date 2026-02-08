"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Server, Database, Cpu, Cloud, Code } from "lucide-react";

const Skills = () => {
    const techGroups = [
        {
            title: "Languages & Core",
            icon: <Code size={20} className="text-accent" />,
            skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "GraphQL"]
        },
        {
            title: "Frontend Ecosystem",
            icon: <Globe size={20} className="text-accent" />,
            skills: ["Next.js", "React", "Context API", "Chakra UI", "Vite", "Vue.js", "Three.js", "Tailwind CSS"]
        },
        {
            title: "Backend & Systems",
            icon: <Server size={20} className="text-accent" />,
            skills: ["Node.js", "Express.js", "FastAPI", "Socket.io", "JWT", "Prisma"]
        },
        {
            title: "Data Architecture",
            icon: <Database size={20} className="text-accent" />,
            skills: ["Postgres", "MongoDB", "MySQL", "Cassandra", "Supabase", "Firebase"]
        },
        {
            title: "Cloud & Devops",
            icon: <Cloud size={20} className="text-accent" />,
            skills: ["AWS", "GCP", "Vercel", "Netlify", "OpenStack", "Oracle", "Jenkins"]
        },
        {
            title: "AI & Data Science",
            icon: <Cpu size={20} className="text-accent" />,
            skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "NumPy", "Pandas", "Plotly", "OpenCV"]
        }
    ];

    return (
        <section id="skills" className="relative z-20 bg-[#0C0A09] py-40 px-8 md:px-32 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-[1px] bg-accent" />
                        <span className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase">The Infrastructure</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-foreground tracking-tighter font-display leading-[0.95]">
                        System <br />
                        <span className="text-[#3A3430]">Capabilities.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/10 border border-accent/10">
                    {techGroups.map((group, groupIdx) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                            className="p-10 bg-[#0C0A09] hover:bg-[#141210] transition-all border border-accent/5 group relative"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/0 group-hover:border-accent/40 transition-all" />

                            <div className="mb-10 w-12 h-12 border border-accent/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                                {group.icon}
                            </div>

                            <h3 className="text-foreground font-bold text-xl mb-8 uppercase tracking-widest font-display">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 border border-accent/10 bg-accent/[0.02] text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-accent group-hover:border-accent/30 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
