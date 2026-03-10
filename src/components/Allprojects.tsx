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
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    } as const;

    return (
        <div className="min-h-screen bg-neutral-950 text-white selection:bg-neutral-700 selection:text-neutral-100 overflow-x-hidden">
            {/* Subtle Background Gradient */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-950" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/5 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
                {/* Navbar Area */}
                <div className="flex flex-col gap-5 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <motion.div
                                whileHover={{ x: -5 }}
                                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-center gap-2 sm:gap-3 text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer group"
                            >
                                <div className="p-1.5 sm:p-2 rounded-full bg-neutral-900/50 border border-neutral-800/50 group-hover:border-neutral-700/50 transition-all">
                                    <FaArrowLeft size={12} />
                                </div>
                                <span className="text-xs sm:text-sm font-medium">Home</span>
                            </motion.div>
                        </Link>
                    </div>

                    {/* Filter Bar - Premium Mobile Optimized */}
                    <div className="flex items-center gap-3 w-full">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-neutral-900/50 border border-neutral-800/50 text-neutral-500 shrink-0">
                            <FaFilter size={14} />
                        </div>
                        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mask-fade-right">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap border ${
                                        filter === cat
                                            ? "bg-neutral-800/50 border-neutral-700/50 text-neutral-100 shadow-lg"
                                            : "bg-neutral-900/30 border-neutral-800/30 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/60 hover:border-neutral-800/50"
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
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10 sm:mb-12 md:mb-20"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold mb-3 sm:mb-4 tracking-tight">
                        The Archive
                    </h1>
                    <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed">
                        A curated collection of digital experiences and system architectures.
                    </p>
                </motion.header>

                {/* Projects Grid */}
                <motion.div
                    layout
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col h-full hover:border-neutral-700/50 transition-all duration-500 shadow-lg"
                            >
                                {project.isComingSoon ? (
                                    <div className="relative h-[280px] sm:h-[300px] md:h-[400px] flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                                        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/10 to-transparent" />
                                        <div className="relative mb-6">
                                            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-neutral-800/30 flex items-center justify-center border border-neutral-700/30">
                                                <div className="relative flex h-3 w-3 sm:h-4 sm:w-4">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-40"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-neutral-500"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-2 text-neutral-300">In Development</h3>
                                        <p className="text-neutral-500 text-xs sm:text-sm font-light">Crafting something interesting.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="relative h-44 sm:h-48 md:h-60 w-full overflow-hidden">
                                            <img
                                                src={project.logo}
                                                alt={project.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                                <span className="px-2 sm:px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-neutral-700/50 text-[9px] sm:text-[10px] uppercase font-medium tracking-wider text-neutral-300">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start sm:items-center mb-4 gap-3">
                                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-neutral-100">
                                                    {project.name}
                                                </h2>
                                                <div className="flex gap-2 flex-shrink-0">
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <a 
                                                                href={project.github} 
                                                                target="_blank" 
                                                                rel="noreferrer"
                                                                className="p-1.5 sm:p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all"
                                                            >
                                                                <FaGithub size={14} className="sm:w-4 sm:h-4" />
                                                            </a>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black text-xs font-medium">Source Code</TooltipContent>
                                                    </Tooltip>

                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <a 
                                                                href={project.website} 
                                                                target="_blank"
                                                                rel="noreferrer" 
                                                                className="p-1.5 sm:p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all"
                                                            >
                                                                <FaGlobe size={14} className="sm:w-4 sm:h-4" />
                                                            </a>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black text-xs font-medium">Live Demo</TooltipContent>
                                                    </Tooltip>
                                                </div>
                                            </div>

                                            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 flex-grow line-clamp-3 md:line-clamp-4 font-normal">
                                                {project.description}
                                            </p>

                                            <div className="pt-4 border-t border-neutral-800/50">
                                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                                    {project.tech?.map((t, i) => (
                                                        <Tooltip key={i}>
                                                            <TooltipTrigger asChild>
                                                                <div className="cursor-default">
                                                                    <t.Icon className={`text-base hover:cursor-pointer sm:text-lg md:text-xl ${t.color} transition-all hover:scale-110`} />
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="bg-white text-black text-xs font-medium">{t.name}</TooltipContent>
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

                <footer className="mt-16 sm:mt-20 md:mt-32 pt-6 sm:pt-8 border-t border-neutral-800/50 text-center">
                    <p className="text-neutral-600 text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                        &copy; 2026 Coded_Mind__ &bull; All Systems Operational
                    </p>
                </footer>
            </div>
        </div>
    );
}