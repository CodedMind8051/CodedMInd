import { motion, type Variants } from 'framer-motion'
import Me from '../assets/Me.png'
import { SiReact, SiGithub, SiTailwindcss, SiFigma, SiPostman, SiNextdotjs,SiVercel, SiDocker, SiDjango, SiFastapi, SiYoutube, SiInstagram, SiX, SiAmazonwebservices, SiNodedotjs, SiPython, SiExpress, SiPostgresql, SiMongodb, SiShadcnui } from 'react-icons/si'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"

// Premium entrance animation
const sectionVar: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1], 
            staggerChildren: 0.08 
        }
    }
}

const itemVar = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}as const

function AboutMe() {
    const skills = [
        { icon: <SiReact className="text-[#08dcff]" />, label: "React.js" },
        { icon: <SiTailwindcss className="text-[#1dc0cd]" />, label: "Tailwind CSS" },
        { icon: <SiNodedotjs className='text-[#85c00a]' />, label: "Node.js" },
        { icon: <SiPython className='text-[#f7ce43]' />, label: "Python" },
        { icon: <SiExpress className='text-white' />, label: "Express.js" },
        { icon: <SiPostgresql className='text-[#399cdc]' />, label: "SQL" },
        { icon: <SiMongodb className='text-[#08ee69]' />, label: "MongoDB" },
        { icon: <SiAmazonwebservices className='text-[#ff9900]' />, label: "AWS" },
        { icon: <SiDocker className='text-[#2496ed]' />, label: "Docker" },
        { icon: <SiFastapi className='text-[#009688]' />, label: "FastAPI" },
        { icon: <SiDjango className='text-[#096e48]' />, label: "Django" },
        { icon: <SiFigma className='text-[#f25425]' />, label: "Figma" },
        { icon: <SiVercel className='text-white' />, label: "Vercel" },
        { icon: <SiPostman className='text-[#ff713d]' />, label: "Postman" },
        { icon: <SiShadcnui className='text-white' />, label: "ShadcnUI" },
        { icon: <SiNextdotjs className='text-white bg-black' />, label: "Next.js" },
    ];

    const socials = [
        { icon: <SiGithub className="text-white" />, label: "Github", link: "https://github.com/CodedMind8051" },
        { icon: <SiYoutube className="text-[#f61f1f]" />, label: "Youtube", link: "https://youtube.com/@coded_mind?si=9fB1Ct6mElRjrW-x" },
        { icon: <SiInstagram className="text-[#df3477]" />, label: "Instagram", link: "https://www.instagram.com/coded_mind__?igsh=azQ2ZnQ3cHB6aXBm" },
        { icon: <SiX className="text-white" />, label: "X", link: "https://x.com/coded_mind__?t=_eqs2HM2Huw_Vf2PPQMPsg&s=09" },
    ];

    // Premium matte card class
    const matteBoxClass = "w-full bg-neutral-900/40 backdrop-blur-sm p-6 sm:p-7 rounded-xl border border-neutral-800/50 shadow-lg hover:border-neutral-700/50 transition-all duration-500";

    return (
        <TooltipProvider delayDuration={100}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVar}
                className='flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 items-center sm:items-start overflow-hidden'
            >
                {/* Header */}
                <motion.div variants={itemVar} className='mb-10 sm:mb-12 w-full'>
                    <h3 className="text-xs sm:text-sm font-medium tracking-[0.25em] text-neutral-500 uppercase mb-2">About</h3>
                    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-neutral-100 tracking-tight">Me</h1>
                </motion.div>

                {/* Profile Section */}
                <div className='flex flex-col lg:flex-row gap-10 sm:gap-12 mb-16 sm:mb-20 w-full items-center lg:items-start'>
                    <motion.div variants={itemVar} className='w-full lg:w-1/2'>
                        <motion.img
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className='rounded-xl w-full h-auto object-cover border border-neutral-800/50 shadow-2xl'
                            src={Me}
                            alt="Md. Shahzade"
                        />
                    </motion.div>

                    <motion.div variants={itemVar} className='w-full lg:w-1/2 flex flex-col justify-center'>
                        <h1 className='font-semibold text-2xl sm:text-3xl text-neutral-100 mb-4'>Md. Shahzade</h1>
                        <p className='text-base sm:text-lg text-neutral-400 leading-relaxed mb-8 sm:mb-10'>
                            I'm a <span className="text-neutral-100 font-medium">full-stack web developer</span> who specializes in building robust, scalable web applications. I focus on crafting clean code, architecting solid systems, and creating seamless user experiences.
                        </p>

                        <div className='space-y-8 sm:space-y-10'>
                            <div>
                                <h1 className='text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-4'>Technical Stack</h1>
                                <div className='flex flex-wrap gap-4 sm:gap-5 text-xl sm:text-2xl'>
                                    {skills.map((skill, i) => (
                                        <Tooltip key={i}>
                                            <TooltipTrigger asChild>
                                                <motion.div 
                                                    whileHover={{ y: -3, scale: 1.05 }} 
                                                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                                    className="cursor-default"
                                                >
                                                    {skill.icon}
                                                </motion.div>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white border-neutral-200 text-black">
                                                <p className="text-sm font-medium">{skill.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h1 className='text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-4'>My Social Universe</h1>
                                <div className='flex flex-wrap gap-5 sm:gap-6 text-xl sm:text-2xl'>
                                    {socials.map((social, i) => (
                                        <Tooltip key={i}>
                                            <TooltipTrigger asChild>
                                                <motion.a 
                                                    href={social.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                                    className="hover:opacity-80 transition-opacity cursor-pointer"
                                                >
                                                    {social.icon}
                                                </motion.a>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white border-neutral-200 text-black">
                                                <p className="text-sm font-medium">{social.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Details Section - Premium Matte Cards */}
                <div className='flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-5 w-full'>
                    <motion.div variants={itemVar} className={matteBoxClass}>
                        <h1 className='font-semibold text-lg sm:text-xl text-neutral-100 border-l-[3px] border-neutral-400 pl-4 mb-3'>Beyond the Web</h1>
                        <p className='font-normal text-neutral-400 leading-relaxed text-sm sm:text-[15px]'>
                            I'm comfortable working across mobile apps, AI integrations, and cloud infrastructure. I understand how these pieces connect to build complete, modern solutions.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVar} className={matteBoxClass}>
                        <h1 className='font-semibold text-lg sm:text-xl text-neutral-100 border-l-[3px] border-neutral-400 pl-4 mb-3'>The Drive</h1>
                        <p className='font-normal text-neutral-400 leading-relaxed text-sm sm:text-[15px]'>
                            My interest in physics and mathematics shapes my problem-solving—analytical thinking combined with a desire to understand the fundamental mechanics of every project.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVar} className='md:col-span-2 space-y-3 bg-neutral-900/40 backdrop-blur-sm p-6 sm:p-7 rounded-xl border border-neutral-800/50 w-full shadow-lg'>
                        <h1 className='font-semibold text-lg sm:text-xl text-neutral-100 mb-3'>Philosophy</h1>
                        <p className='font-normal text-neutral-400 leading-relaxed text-sm sm:text-base'>
                            <span className='text-neutral-100 underline decoration-neutral-500 underline-offset-8 decoration-2'>Stay curious, stay driven.</span>
                            {" "} I'm at my best when learning and pushing boundaries. When a project needs something beyond traditional development, I dive in to deliver exactly what's necessary.
                        </p>
                    </motion.div>
                </div>

                {/* Expertise Footer - Fixed for Mobile */}
                <motion.div variants={itemVar} className='mt-12 max-[650px]:ml-6 sm:mt-16 pt-8 sm:pt-10 border-t border-neutral-800/50 w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>
                        <div className='flex flex-col gap-1.5'>
                            <h1 className='font-medium text-xs sm:text-sm uppercase text-neutral-500 tracking-wider'>Core Expertise</h1>
                            <p className='font-medium text-sm sm:text-base text-neutral-100'>Full Stack Web, Cloud, System Design</p>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <h1 className='font-medium text-xs sm:text-sm uppercase text-neutral-500 tracking-wider'>Extended Skills</h1>
                            <p className='font-medium text-sm sm:text-base text-neutral-100'>Mobile, AI, UI/UX, Databases</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </TooltipProvider>
    )
}

export default AboutMe