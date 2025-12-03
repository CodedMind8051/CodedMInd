import { useState, } from "react"
import { motion } from 'framer-motion'
import Projectlogo from '../assets/project.png'
import ComingSoon from '../assets/comingSoon.png'

function Projects() {
    const [Cards] = useState<any>([])
    const [ProjectDetail] = useState<any>([{ Projectlogo, Name: "Forkyou" }])

    for (let index = 0; index < 4; index++) {
        try {
            Cards.push(
                <motion.div whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }} transition={{ duration: 0.5, ease: "easeOut" }} className=" card hover:cursor-pointer  ">
                    <div className=" overflow-hidden   rounded h-[45%] w-full">
                        <img src={ProjectDetail[index].Projectlogo} className="h-full rounded rounded-b-xl w-full " alt="" />
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
            <div className=" gap-6.5 max-[1050px]:w-[90%] max-[700px]:w-[100%] max-[700px]:h-[70%]  flex justify-center h-[100%] flex-wrap w-[60%] text-2xl max-[700px]:text-xl font-medium text-white">
                <h1 className="decoration-2 decoration-white justify-center flex items-center w-[100%] h-[5%] mt-2.5 underline  ml-2 text-[#f8f5f9]">Projects</h1>
                {Cards}
            </div>


        </>
    )
}

export default Projects