import Ramx from '../assets/ramx.png'
import { SiReact, SiGithub, SiTailwindcss, SiYoutube, SiInstagram, SiX, SiLinkedin, SiAmazonwebservices, SiNodedotjs, SiTypescript, SiPython, SiExpress, SiPostgresql, SiMongodb } from 'react-icons/si'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../components/ui/tooltip"



function AboutMe() {

    const skills = [
        { icon: <SiReact className="  text-[#08dcff] cursor-pointer" />, label: "React.js" },
        { icon: <SiTailwindcss className="  text-[#1dc0cd] cursor-pointer " />, label: "Tailwind CSS" },
        { icon: <SiNodedotjs className='text-[#85c00a] cursor-pointer' />, label: "Node.js" },
        { icon: <SiPython className='text-[#f7ce43] cursor-pointer  ' />, label: "Python" },
        { icon: <SiExpress className='text-[#fcfaf5]  cursor-pointer  ' />, label: "Express.js" }
    ];

    const Socials = [
        { icon: <SiGithub className="  text-[#f7fafa] cursor-pointer" />, label: "Github" },
        { icon: <SiYoutube className="  text-[#f61f1f] cursor-pointer " />, label: "Youtube" },
        { icon: <SiInstagram className="  text-[#df3477] cursor-pointer " />, label: "Instagram" },
        { icon: <SiX className="  text-[#fcf8fa] cursor-pointer " />, label: "X" },
        { icon: <SiLinkedin className="  text-[#2f6cb4] cursor-pointer " />, label: "Linkedin" },
    ];

    return (
        <div className='flex flex-col   h-[100%] w-[50%] max-[900px]:w-[90%] '>
            <div>
                <h3 className="text-sm text-gray-400">About</h3>
                <h1 className="font-bold text-2xl" >Me</h1>
            </div>
            <div className='flex  max-[650px]:block max-[650px]:h-[80%]  brder py-2 mt-5.5 '>
                <img className='rounded-xl min-[1000px]:h-[95%]' src={Ramx} alt="" />
                <div>
                    <h1 className='px-5 py-2 max-[650px]:p-2 font-bold text-xl'>Md. Shahzade</h1>
                    <p className='px-5 text-[17px] text-gray-400 max-[650px]:p-2'>I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.</p>

                    <div className=' m-5 text-[17px] font-bold max-[650px]:m-2'><h1>Skill</h1>
                        <div className='flex gap-3 py-1.5 text-xl'>

                            {skills.map((Skill) => {

                                return (
                                    <Tooltip key={Skill.label}>
                                        <TooltipTrigger asChild>{Skill.icon}</TooltipTrigger>
                                        <TooltipContent>
                                            <p>{Skill.label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                )
                            })}
                        </div>
                        <div className=' py-2.5'>
                            <h1>My Social Universe</h1>
                            <div className='flex py-2 gap-3.5 text-xl'>
                                {Socials.map((Socials) => {
                                    return (
                                        <Tooltip key={Socials.label}>
                                            <TooltipTrigger asChild>{Socials.icon}</TooltipTrigger>
                                            <TooltipContent>
                                                <p>{Socials.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )
                                })}
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe