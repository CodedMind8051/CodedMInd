import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DigitalShadow from '../assets/projects_img/DigitalShadow.png';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "../components/ui/tooltip";
import { FaGlobe, FaGithub, FaArrowRight } from "react-icons/fa";
import { SiExpress, SiNodedotjs,SiMongodb, SiReact, SiTailwindcss } from "react-icons/si";

const projectsData = [
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

export default function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    } as const;

    return (
        <TooltipProvider>
            <section className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center bg-transparent text-white overflow-hidden">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 mb-16 flex flex-col items-center text-center px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 uppercase italic">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6" />
                </motion.div>

                {/* Grid Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-[92%] max-w-6xl mx-auto"
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group relative bg-[#0d0d0f] border border-white/[0.05] rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-cyan-500/30 transition-all duration-500 shadow-2xl"
                        >
                            {project.isComingSoon ? (
                                /* Unified Coming Soon Style */
                                <div className="relative h-full min-h-[380px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-cyan-500/[0.02] to-transparent">
                                    <div className="relative mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                            <div className="relative flex h-4 w-4">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-white">In Development</h3>
                                    <p className="text-zinc-500 text-[10px] md:text-xs italic">Crafting something interesting.</p>

                                    <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/10" />
                                    <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/10" />
                                </div>
                            ) : (
                                <>
                                    {/* Active Project Image */}
                                    <div className="relative h-52 md:h-64 w-full overflow-hidden">
                                        <img
                                            src={project.logo}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            alt={project.name}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-80" />
                                        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase font-bold tracking-wider text-cyan-400">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                                {project.name}
                                            </h2>
                                            <div className="flex gap-2">
                                                <Tooltip key={project.github}>
                                                    <TooltipTrigger asChild>
                                                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-900/50 text-zinc-500 hover:text-white transition-all">
                                                            <FaGithub size={18} />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black text-xs font-bold">Source Code</TooltipContent>
                                                </Tooltip>

                                                <Tooltip key={project.website}>
                                                    <TooltipTrigger asChild>
                                                        <a href={project.website} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-zinc-900/50 text-zinc-500 hover:text-cyan-400 transition-all">
                                                            <FaGlobe size={18} />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black text-xs font-bold">Live Demo</TooltipContent>
                                                </Tooltip>

                                            </div>
                                        </div>
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow font-light line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                            {project.tech?.map((t, i) => (
                                                <Tooltip key={i}>
                                                    <TooltipTrigger asChild>
                                                        <div className={`p-2 rounded-lg bg-white/[0.03] ${t.color} hover:bg-white/[0.08] transition-colors`}>
                                                            <t.Icon size={18} />
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black text-xs font-bold">{t.name}</TooltipContent>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Link */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16">
                    <Link to="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-zinc-900 border border-white/10 text-white font-medium hover:border-cyan-500/50 transition-all"
                        >
                            Show All Projects <FaArrowRight size={14} />
                        </motion.button>
                    </Link>
                </motion.div>
            </section>
        </TooltipProvider>
    );
}