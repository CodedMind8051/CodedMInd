import { useState, } from "react"
import { motion } from 'framer-motion'
import Projectlogo from '../assets/project.png'
import ComingSoon from '../assets/comingSoon.png'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../components/ui/tooltip"
import { FaGlobe, FaGithub } from "react-icons/fa"
import { SiExpress, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from "react-icons/si"

function Projects() {
    const [Cards] = useState<any>([])
    const [ProjectDetail] = useState<any>([{ Projectlogo, Name: "Forkyou" }, { Projectlogo, Name: "Forkyou" }])

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.4,
                duration: 1.2
            }
        })
    }

    for (let index = 0; index < 4; index++) {
        try {
            Cards.push(
                <motion.div 
                    key={index} 
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    whileHover={{ scale: 1.08, translateY: -8 }} 
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="card hover:cursor-pointer"
                >
                    <div className="overflow-hidden rounded-t-lg h-[38%] w-full relative group">
                        <img  
                            src={ProjectDetail[index].Projectlogo} 
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            alt="" 
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-3 text-xl max-[490px]:text-[15px] max-[400px]:text-[12px] ml-2 flex items-center justify-between">
                        <h1 className="ml-2">ForkYou</h1>
                        <div className="flex items-center gap-3 mr-3">
                            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.95 }}>
                                <Tooltip>
                                    <TooltipTrigger><FaGlobe /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>View Website</p>
                                    </TooltipContent>
                                </Tooltip>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.95 }}>
                                <Tooltip>
                                    <TooltipTrigger><FaGithub /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>View Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex p-1.5 mt-2 max-h-[20%] text-[#acacaf] items-center justify-center text-[15px] max-[730px]:text-[10px] max-[490px]:text-[8px]">
                        <p className="ml-3">
                            A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools
                        </p>
                    </div>
                    <div className="text-[15px] mt-2.5 ml-3.5 text-[#ebe4e4b2]">
                        <h2>Technologies:-</h2>
                    </div>
                    <motion.div 
                        className="flex gap-3 p-2 mt-1.5 ml-1 max-[911px]:mt-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    >
                        <motion.div whileHover={{ scale: 1.3, rotate: -10 }}>
                            <SiReact className="text-[#08dcff] drop-shadow-lg" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
                            <SiTailwindcss className="text-[#1dc0cd] drop-shadow-lg" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.3, rotate: -10 }}>
                            <SiNodedotjs className='text-[#85c00a] drop-shadow-lg' />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
                            <SiPython className='text-[#f7ce43] drop-shadow-lg' />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.3, rotate: -10 }}>
                            <SiExpress className='text-[#fcfaf5] drop-shadow-lg' />
                        </motion.div>
                    </motion.div>
                </motion.div>)
        } catch (error) {
            Cards.push(
                <motion.div 
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    whileHover={{ scale: 1.08, translateY: -8 }} 
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="card hover:cursor-pointer"
                >
                    <div className="overflow-hidden rounded-t-lg h-[45%] w-full relative group">
                        <img 
                            src={ComingSoon} 
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            alt="" 
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0bd9c8]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Coming Soon</span>
                        </div>
                    </div>
                </motion.div>)
        }
    }

    return (
        <>
            <motion.div 
                className="gap-6.5 max-[1050px]:w-[90%] max-[700px]:w-full max-[700px]:h-[70%] flex justify-center h-full flex-wrap w-[60%] text-2xl max-[700px]:text-xl font-medium text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <motion.h1 
                    className="decoration-2 decoration-white justify-center flex items-center w-full h-[5%] mt-2.5 underline ml-2 text-[#f8f5f9]"
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    Projects
                </motion.h1>
                {Cards}
            </motion.div>
        </>
    )
}

export default Projects