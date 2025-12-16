import Me from '../assets/Me.png'
import { SiReact, SiGithub, SiTailwindcss, SiFigma, SiPostman, SiVercel, SiDocker, SiDjango, SiFastapi, SiYoutube, SiInstagram, SiX, SiLinkedin, SiAmazonwebservices, SiNodedotjs, SiPython, SiExpress, SiPostgresql, SiMongodb, SiShadcnui } from 'react-icons/si'
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
        { icon: <SiExpress className='text-[#fcfaf5]  cursor-pointer  ' />, label: "Express.js" },
        { icon: <SiPostgresql className='text-[#399cdc]  cursor-pointer  ' />, label: "Sql" },
        { icon: <SiMongodb className='text-[#08ee69]  cursor-pointer  ' />, label: "Mongo DB" },
        { icon: <SiAmazonwebservices className='text-[#ff9900]  cursor-pointer  ' />, label: "AWS" },
        { icon: <SiDocker className='text-[#2496ed]  cursor-pointer  ' />, label: "Docker" },
        { icon: <SiFastapi className='text-[#009688]  cursor-pointer  ' />, label: "Fast Api" },
        { icon: <SiDjango className='text-[#096e48]  cursor-pointer  ' />, label: "Django" },
        { icon: <SiFigma className='text-[#f25425]  cursor-pointer  ' />, label: "Figma" },
        { icon: <SiVercel className='text-white  cursor-pointer  ' />, label: "Vercel" },
        { icon: <SiPostman className='text-[#ff713d]  cursor-pointer  ' />, label: "Postman" },
        { icon: <SiShadcnui className='text-white  cursor-pointer  ' />, label: "Shadcnui" },
    ];

    const Socials = [
        { icon: <SiGithub className="  text-[#f7fafa] cursor-pointer" />, label: "Github" },
        { icon: <SiYoutube className="  text-[#f61f1f] cursor-pointer " />, label: "Youtube" },
        { icon: <SiInstagram className="  text-[#df3477] cursor-pointer " />, label: "Instagram" },
        { icon: <SiX className="  text-[#fcf8fa] cursor-pointer " />, label: "X" },
        { icon: <SiLinkedin className="  text-[#2f6cb4] cursor-pointer " />, label: "Linkedin" },
    ];

    return (
        <div className='flex flex-col h-[100%] w-[50%]  max-[900px]:w-[90%] '>
            <div>
                <h3 className="text-sm text-gray-400">About</h3>
                <h1 className="font-bold text-2xl" >Me</h1>
            </div>
            <div className='flex  max-[750px]:block max-[750px]:h-[80%]  brder py-2 mt-5.5 '>
                <img className='rounded-xl min-[1000px]:h-[95%]' src={Me} alt="" />
                <div>
                    <h1 className='px-5 py-2 max-[750px]:p-2 font-bold text-xl'>Md. Shahzade</h1>
                    <p className='px-5 text-[17px] text-gray-400 max-[750px]:p-2'>I'm a full-stack web developer who specializes in building robust, scalable web applications. That's where my expertise lies—crafting clean code, architecting solid systems, and creating seamless user experiences on the web.</p>

                    <div className=' m-5 text-[17px] font-bold max-[750px]:m-2'><h1>Skill</h1>
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
            <div className=''>
                <div className='py-2'>
                    <h1 className='font-bold text-xl'>Beyond Web Development:</h1>
                    <p className='font-semibold text-[#8e8e90]'>While web development is my core strength, I'm comfortable working across different domains when projects require it. I've worked with mobile apps, AI integrations, databases, cloud infrastructure, and UI/UX design—not as a jack-of-all-trades, but as someone who understands how these pieces connect to build complete solutions.</p>
                </div>
                <div className='py-2'>
                    <h1 className='font-bold text-xl'>What Drives Me:</h1>
                    <p className='font-semibold text-[#8e8e90]'>I'm genuinely curious and experimental by nature. I love diving deep into technologies, understanding how they work, and exploring their possibilities. My interest in physics and mathematics shapes how I approach problem-solving—with analytical thinking and a desire to understand the fundamentals.</p>
                </div>
                <div className='py-2'>
                    <h1 className='font-bold text-xl'>My Philosophy:</h1>
                    <p className='font-semibold text-[#8e8e90]'>
                        <span className='underline text-white '>Stay curious, stay driven.  </span>
                        I'm at my best when I'm learning, experimenting, and pushing boundaries. Web development is my foundation, but my curiosity keeps me exploring. When a project needs something beyond traditional web dev, I'm not afraid to dive in, learn what's necessary, and deliver.
                    </p>
                </div>
                <div className='flex py-2 max-[641px]:block max-[641px]:p-0'>
                    <h1 className='  font-bold text-xl'>Core Expertise:  </h1>
                    <p className='font-semibold text-[#8e8e90] p-1'>Full Stack Web Development , Cloud , System design  </p>
                </div>
                <div className='flex py-2 max-[641px]:block max-[641px]:p-0'>
                    <h1 className='  font-bold text-xl'>Extended Skills: </h1>
                    <p className='font-semibold text-[#8e8e90] p-1'>Mobile, AI, Databases, UI/UX—as projects demand</p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe