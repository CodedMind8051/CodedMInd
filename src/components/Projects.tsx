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
import { SiExpress, SiNodedotjs, SiMongodb, SiReact, SiTailwindcss } from "react-icons/si";

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
            <section className="relative w-full py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 mb-12 sm:mb-16 flex flex-col items-center text-center px-4"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4">
                        Featured Projects
                    </h1>
                    <div className="h-[2px] w-20 sm:w-24 bg-gradient-to-r from-transparent via-neutral-600 to-transparent rounded-full" />
                </motion.div>

                {/* Grid Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 w-[92%] sm:w-[90%] max-w-6xl mx-auto"
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden flex flex-col h-full hover:border-neutral-700/50 transition-all duration-500 shadow-lg"
                        >
                            {project.isComingSoon ? (
                                /* Premium Coming Soon Style */
                                <div className="relative h-full min-h-[380px] sm:min-h-[420px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-neutral-800/10 to-transparent">
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

                                    <div className="absolute top-6 left-6 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-neutral-700/30" />
                                    <div className="absolute bottom-6 right-6 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-neutral-700/30" />
                                </div>
                            ) : (
                                <>
                                    {/* Active Project Image */}
                                    <div className="relative h-48 sm:h-52 md:h-64 w-full overflow-hidden">
                                        <img
                                            src={project.logo}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            alt={project.name}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-neutral-700/50 text-[9px] sm:text-[10px] uppercase font-medium tracking-wider text-neutral-300">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start sm:items-center mb-4 gap-3">
                                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-neutral-100 group-hover:text-neutral-300 transition-colors">
                                                {project.name}
                                            </h2>
                                            <div className="flex gap-2 flex-shrink-0">
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <a 
                                                            href={project.github} 
                                                            target="_blank" 
                                                            rel="noreferrer" 
                                                            className="p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all"
                                                        >
                                                            <FaGithub size={16} className="sm:w-[18px] sm:h-[18px]" />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black text-xs font-medium">
                                                        Source Code
                                                    </TooltipContent>
                                                </Tooltip>

                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <a 
                                                            href={project.website} 
                                                            target="_blank" 
                                                            rel="noreferrer" 
                                                            className="p-2 rounded-lg bg-neutral-800/50 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all"
                                                        >
                                                            <FaGlobe size={16} className="sm:w-[18px] sm:h-[18px]" />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black text-xs font-medium">
                                                        Live Demo
                                                    </TooltipContent>
                                                </Tooltip>
                                            </div>
                                        </div>

                                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow font-normal line-clamp-3 sm:line-clamp-4">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/50">
                                            {project.tech?.map((t, i) => (
                                                <Tooltip key={i}>
                                                    <TooltipTrigger asChild>
                                                        <div className={`p-2 rounded-lg hover:cursor-pointer bg-neutral-800/30 ${t.color} hover:bg-neutral-800/50 transition-all cursor-default`}>
                                                            <t.Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black text-xs font-medium">
                                                        {t.name}
                                                    </TooltipContent>
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
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 sm:mt-16"
                >
                    <Link to="/projects">
                        <motion.button
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 text-neutral-100 text-sm sm:text-base font-medium hover:border-neutral-700/50 hover:bg-neutral-900/70 transition-all"
                        >
                            Show All Projects <FaArrowRight size={14} />
                        </motion.button>
                    </Link>
                </motion.div>
            </section>
        </TooltipProvider>
    );
}