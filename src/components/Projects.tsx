
// Premium, responsive Projects section
import { motion } from 'framer-motion'
import Projectlogo from '../assets/project.png'
import ComingSoon from '../assets/comingSoon.png'
import { FaGlobe, FaGithub } from "react-icons/fa"
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip"
import { SiExpress, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from "react-icons/si"

const projects = [
    {
        image: Projectlogo,
        name: "ForkYou",
        description: "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
        tech: [SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiExpress],
        website: "#",
        github: "#"
    },
    // Add more projects here as needed
    {
        image: ComingSoon,
        name: "Coming Soon",
        description: "More exciting projects coming soon...",
        tech: [],
        website: "#",
        github: "#"
    }
]

function Projects() {
    // Responsive grid, premium card design, maintainable data
    return (
        <section className="w-full px-2 sm:px-4 md:px-8 py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center underline">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(11,217,200,0.12)" }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#171717] border border-[#222] rounded-xl overflow-hidden flex flex-col shadow-md hover:border-[#0bd9c8] transition-all"
                    >
                        <div className="h-40 sm:h-48 md:h-56 w-full overflow-hidden flex items-center justify-center bg-[#222]">
                            <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-lg font-semibold text-white">{project.name}</h2>
                                                                <div className="flex gap-2">
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-[#0bd9c8] hover:text-white transition-colors">
                                                                                <FaGlobe size={18} />
                                                                            </a>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>View Website</TooltipContent>
                                                                    </Tooltip>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#0bd9c8] hover:text-white transition-colors">
                                                                                <FaGithub size={18} />
                                                                            </a>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>View Github</TooltipContent>
                                                                    </Tooltip>
                                                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                                                        {project.tech.length > 0 && (
                                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                                {project.tech.map((TechIcon, i) => {
                                                                    // Assign color based on tech
                                                                                                        const colorMap: Record<string, string> = {
                                                                                                            SiReact: "#08dcff",
                                                                                                            SiTailwindcss: "#1dc0cd",
                                                                                                            SiNodedotjs: "#85c00a",
                                                                                                            SiPython: "#f7ce43",
                                                                                                            SiExpress: "#fcfaf5"
                                                                                                        }
                                                                                                        const name = (TechIcon as any).name as string
                                                                                                        const color = colorMap[name] || "#0bd9c8"
                                                                                                        return (
                                                                                                            <span key={i} className="p-2 rounded bg-[#222] border border-[#333]">
                                                                                                                <TechIcon size={20} style={{ color }} />
                                                                                                            </span>
                                                                                                        )
                                                                })}
                                                            </div>
                                                        )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
// Changes:
// - Switched to a responsive grid layout for project cards (1/2/3 columns)
// - Used a data array for maintainability and scalability
// - Premium card design with proper spacing, border, and shadow
// - Tech stack icons are shown in a row for each project
// - Added hover effects for interactivity
// Impact: Projects section is now fully responsive, visually appealing, and easy to maintain