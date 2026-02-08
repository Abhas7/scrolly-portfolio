"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Briefcase, GraduationCap, ChevronRight, Cloud } from "lucide-react";

const CERTIFICATES = [
    {
        title: "Google Generative AI Professional",
        issuer: "Google Cloud",
        link: "https://www.skills.google/public_profiles/3ef22da8-9286-4d0a-8f54-cd1353cd6b1c"
    },
    {
        title: "OCI 2025 Gen AI Professional",
        issuer: "Oracle",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=14E4CA1E0D818F73877E30986D3F38212222113503FF5ED5326103377C3DE56F"
    },
    {
        title: "McKinsey Forward Program",
        issuer: "McKinsey",
        link: "https://www.credly.com/badges/a02d4efb-fcbb-4bbc-bda8-9ae3b9b1a588/linked_in_profile"
    },
    {
        title: "TCS Young Professional",
        issuer: "TCS",
        link: "#"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="relative z-20 bg-[#0C0A09] py-40 px-8 md:px-32 font-sans overflow-hidden border-t border-accent/5">
            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Career Timeline */}
                    <div className="space-y-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-10 h-[1px] bg-accent" />
                                <span className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase">The Path</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-bold text-foreground tracking-tighter font-display leading-[0.95]">
                                Professional <br />
                                <span className="text-[#3A3430]">Heritage.</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-px bg-accent/5">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative p-12 bg-[#0C0A09] border border-accent/5 group"
                            >
                                <div className="absolute top-0 right-0 p-8 flex items-center gap-2">
                                    <span className="text-accent font-black text-[10px] tracking-widest">2024</span>
                                    <span className="w-4 h-[1px] bg-accent/30" />
                                </div>
                                <div className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <Briefcase size={12} /> Cognifyz Technologies
                                </div>
                                <h4 className="text-3xl font-bold text-foreground font-display mb-6 uppercase tracking-tight">Full Stack Development Intern</h4>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-light italic">
                                    Integrated complex neural interfaces with resilient backend architectures.
                                </p>
                            </motion.div>

                            {/* Google Cloud Skills Boost Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative p-12 bg-[#141210] border-t border-accent/10 group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                                    <Cloud size={80} className="text-accent" />
                                </div>
                                <div className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <Award size={12} /> Google Cloud Skills Boost
                                </div>
                                <h4 className="text-3xl font-bold text-foreground font-display mb-6 uppercase tracking-tight">Diamond League Member</h4>
                                <p className="text-gray-400 text-base leading-relaxed max-w-2xl font-light mb-8 italic">
                                    An active Google Cloud learner and a member of the Diamond League on the Google Skills Boost platform. Since joining in 2025, he has earned over 114,000 points and a vast collection of skill badges.
                                </p>
                                <div className="grid grid-cols-2 gap-px bg-accent/10 border border-accent/10">
                                    <div className="p-6 bg-[#0C0A09]">
                                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Expertise</p>
                                        <p className="text-foreground text-sm font-medium uppercase font-display">Generative AI</p>
                                    </div>
                                    <div className="p-6 bg-[#0C0A09]">
                                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Platform</p>
                                        <p className="text-foreground text-sm font-medium uppercase font-display">Vertex AI</p>
                                    </div>
                                    <div className="p-6 bg-[#0C0A09]">
                                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Data</p>
                                        <p className="text-foreground text-sm font-medium uppercase font-display">BigQuery</p>
                                    </div>
                                    <div className="p-6 bg-[#0C0A09]">
                                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Status</p>
                                        <p className="text-foreground text-sm font-medium uppercase font-display">114k+ Points</p>
                                    </div>
                                </div>
                                <a
                                    href="https://www.skills.google/public_profiles/3ef22da8-9286-4d0a-8f54-cd1353cd6b1c"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    suppressHydrationWarning
                                    className="mt-10 inline-flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors"
                                >
                                    View Skills Boost Profile <ChevronRight size={12} />
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 pb-12 border-b border-accent/10"
                        >
                            <div className="w-12 h-12 border border-accent/20 flex items-center justify-center">
                                <Award className="text-accent" size={20} />
                            </div>
                            <div>
                                <h3 className="text-foreground font-bold text-xl font-display uppercase tracking-tight">Verified Credentials</h3>
                                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Global Certifications</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-px bg-accent/5">
                            {CERTIFICATES.map((cert, idx) => (
                                <motion.div
                                    key={`cert-${idx}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                                    className="bg-[#0C0A09] border border-accent/5 hover:bg-[#141210] transition-all group"
                                >
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        suppressHydrationWarning
                                        className="p-10 flex items-center justify-between w-full h-full"
                                    >
                                        <div className="space-y-2">
                                            <h5 className="text-foreground font-bold text-lg font-display uppercase tracking-tight group-hover:text-accent transition-colors">{cert.title}</h5>
                                            <div className="flex items-center gap-2">
                                                <span className="w-4 h-[1px] bg-accent/30" />
                                                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{cert.issuer}</p>
                                            </div>
                                        </div>
                                        <div className="h-10 w-10 border border-accent/10 flex items-center justify-center group-hover:border-accent transition-all">
                                            <ExternalLink className="text-gray-700 group-hover:text-accent transition-colors" size={14} />
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
