import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DigitalShadow from '../assets/projects_img/DigitalShadow.png';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../components/ui/tooltip";
import { FaGlobe, FaGithub, FaArrowLeft, FaFilter } from "react-icons/fa";
import {
    SiExpress, SiNodedotjs, SiReact,
    SiTailwindcss, SiMongodb
} from "react-icons/si";

const allProjectsData = [
    {
        id: 1,
        name: "DigitalShadow",
        logo: DigitalShadow,
        description: "DigitalShadow turns your YouTube history into a mirror of your day. It shows what you actually learned and where you just did time-pass. AI splits your watching into focus, fun, and full-on bakchodi. You get a clean daily summary and a straight-up productivity score. Because before you fix your life, you need to see your digital shadow.",
        tech: [
            { Icon: SiReact, color: "text-[#61DAFB]", name: "React" },
            { Icon: SiTailwindcss, color: "text-[#38B2AC]", name: "Tailwind CSS" },
            { Icon: SiNodedotjs, color: "text-[#339933]", name: "Node.js" },
            { Icon: SiMongodb, color: "text-[#4DB33D]", name: "MongoDB" },
            { Icon: SiExpress, color: "text-[#FFFFFF]", name: "Express" }
        ],
        github: "https://github.com/CodedMind8051/DigitalShadow",
        website: "https://digitalshadow.codedmind.in",
        isComingSoon: false,
        category: "Productivity"
    },
  
    { id: 2, isComingSoon: true },
];

export default function AllProjects() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Education", "Developer Tools", "Productivity", "E-commerce"];

    const filteredProjects = filter === "All"
        ? allProjectsData
        : allProjectsData.filter(p => p.category === filter || p.isComingSoon);

    const containerVariants = {
        animate: { transition: { staggerChildren: 0.1 } }
    };

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    } as const;

    return (
        <div className="min-h-screen bg-[#050506] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
            {/* Background Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[100px] md:blur-[120px]" />
                <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[100px] md:blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20">
                {/* Navbar Area */}
                <div className="flex flex-col gap-6 mb-12 md:mb-16">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <motion.div
                                whileHover={{ x: -5 }}
                                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
                            >
                                <div className="p-2 rounded-full bg-zinc-900 border border-white/5 group-hover:border-cyan-500/50">
                                    <FaArrowLeft size={12} />
                                </div>
                                <span className="text-sm font-medium">Home</span>
                            </motion.div>
                        </Link>
                    </div>

                    {/* Filter Bar - Optimized for Mobile */}
                    <div className="flex items-center gap-3 w-full">
                        <div className="p-2.5 rounded-xl bg-zinc-900/50 border border-white/5 text-zinc-500 shrink-0">
                            <FaFilter size={14} />
                        </div>
                        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mask-fade-right">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all whitespace-nowrap border ${filter === cat
                                            ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                                            : "bg-zinc-900/30 border-white/5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/60"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Header Text */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 md:mb-20"
                >
                    <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase italic">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Archive</span>
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-lg max-w-xl font-light leading-relaxed">
                        A curated collection of digital experiences and system architectures.
                    </p>
                </motion.header>

                {/* Projects Grid */}
                <motion.div
                    layout
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="group relative bg-[#0d0d0f] border border-white/[0.05] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-cyan-500/30 transition-all duration-500"
                            >
                                {project.isComingSoon ? (
                                    <div className="relative h-[300px] md:h-[400px] flex flex-col items-center justify-center p-6 text-center">
                                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] to-transparent" />
                                        <div className="relative mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 animate-pulse flex items-center justify-center border border-cyan-500/20">
                                                <div className="w-4 h-4 rounded-full bg-cyan-500 animate-ping" />
                                            </div>
                                        </div>
                                        <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-white">In Development</h3>
                                        <p className="text-zinc-500 text-[10px] md:text-xs italic">Crafting something interesting.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="relative h-48 md:h-60 w-full overflow-hidden">
                                            <img
                                                src={project.logo}
                                                alt={project.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-80" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase font-bold tracking-wider text-cyan-400">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                                                    {project.name}
                                                </h2>
                                                <div className="flex gap-2">
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <a href={project.github} target="_blank" className="p-2 rounded-lg bg-zinc-900/50 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all">
                                                                <FaGithub size={16} />
                                                            </a>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black border-white/10 text-[10px]">Source Code</TooltipContent>
                                                    </Tooltip>

                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <a href={project.website} target="_blank" className="p-2 rounded-lg bg-zinc-900/50 text-zinc-500 hover:text-cyan-400 hover:bg-zinc-800 transition-all">
                                                                <FaGlobe size={16} />
                                                            </a>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black border-white/10 text-[10px]">Live Demo</TooltipContent>
                                                    </Tooltip>
                                                </div>
                                            </div>

                                            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow line-clamp-3 md:line-clamp-none font-light">
                                                {project.description}
                                            </p>

                                            <div className="pt-4 border-t border-white/[0.03]">
                                                <div className="flex flex-wrap gap-3 hover:cursor-pointer">
                                                    {project.tech?.map((t, i) => (
                                                        <Tooltip key={i}>
                                                            <TooltipTrigger>
                                                                <t.Icon className={`text-lg md:text-xl ${t.color} transition-all hover:scale-125`} />
                                                            </TooltipTrigger>
                                                            <TooltipContent className="bg-white text-black  border-white/10 text-[10px]">{t.name}</TooltipContent>
                                                        </Tooltip>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <footer className="mt-20 md:mt-32 pt-8 border-t border-white/5 text-center">
                    <p className="text-zinc-600 text-[10px] md:text-xs uppercase tracking-[0.2em]">
                        &copy; 2026 Coded_Mind__ &bull; All Systems Operational
                    </p>
                </footer>
            </div>
        </div>
    );
}