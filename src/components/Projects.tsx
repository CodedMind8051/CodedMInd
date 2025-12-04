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
    const [ProjectDetail] = useState<any>([{ Projectlogo, Name: "Forkyou" },{ Projectlogo, Name: "Forkyou" },{ Projectlogo, Name: "Forkyou" }, { Projectlogo, Name: "Forkyou" }])

    for (let index = 0; index < 4; index++) {
        try {
            Cards.push(
                <motion.div key={index} whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }} className=" card hover:cursor-pointer  ">
                    <div className=" overflow-hidden   rounded h-[38%] w-full">
                        <img src={ProjectDetail[index].Projectlogo} className="h-[100%] rounded rounded-b-xl w-full " alt="" />
                    </div>
                    <div className="mt-2 text-xl max-[490px]:text-[15px] max-[400px]:text-[12px] ml-2 flex items-center justify-between" >
                        <h1 className="ml-2">ForkYou</h1>
                        <div className="flex items-center gap-3 mr-3">
                            <Tooltip>
                                <TooltipTrigger><FaGlobe /></TooltipTrigger>
                                <TooltipContent>
                                    <p>View Website</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger><FaGithub /></TooltipTrigger>
                                <TooltipContent>
                                    <p>View Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="flex p-1.5 mt-2 max-h-[20%]  text-[#acacaf] items-center justify-center text-[15px] max-[730px]:text-[10px] max-[490px]:text-[8px]">
                        <p className="ml-3">
                            A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools
                        </p>
                    </div>
                    <div className=" text-[15px] mt-2.5 ml-3.5 text-[#ebe4e4b2]">
                        <h2 className="min-[700px]:mt-[7%]">Technologies:-</h2>
                    </div>
                    <div className="flex  min-[700px]:mt-[8%] gap-3 p-2 mt-1.5 ml-1 max-[911px]:mt-0">
                        <SiReact className="  text-[#08dcff] " />
                        <SiTailwindcss className="  text-[#1dc0cd] " />
                        <SiNodedotjs className='text-[#85c00a]    ' />
                        <SiPython className='text-[#f7ce43]  ' />
                        <SiExpress className='text-[#fcfaf5]   ' />
                    </div>
                </motion.div>)
        } catch (error) {
            Cards.push(
                <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.5, ease: "easeOut" }} className=" card hover:cursor-pointer  ">
                    <div className=" overflow-hidden   rounded h-[45%] w-full">
                        <img src={ComingSoon} className="h-full rounded rounded-b-xl w-full " alt="" />
                    </div>
                </motion.div>)
        }

    }

    return (
        <>
            <div className=" gap-6.5 max-[1050px]:w-[90%] item-centre max-[700px]:w-[100%] max-[700px]:h-[70%]  flex justify-center h-[100%] flex-wrap w-[60%] text-2xl max-[700px]:text-xl font-medium text-white">
                <h1 className="decoration-2 min-[700px]:mt-[7%] decoration-white justify-center flex items-center w-[100%] h-[5%] mt-2.5 underline  ml-2 text-[#f8f5f9]">Projects</h1>
                {Cards}
            </div>


        </>
    )
}

export default Projects