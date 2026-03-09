import { motion, type Variants } from 'framer-motion'
import Me from '../assets/Me.png'
import { SiReact, SiGithub, SiTailwindcss, SiFigma, SiPostman, SiVercel, SiDocker, SiDjango, SiFastapi, SiYoutube, SiInstagram, SiX, SiLinkedin, SiAmazonwebservices, SiNodedotjs, SiPython, SiExpress, SiPostgresql, SiMongodb, SiShadcnui } from 'react-icons/si'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"

// Professional entrance animation
const sectionVar: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a "premium" feel
            staggerChildren: 0.05 
        }
    }
}

const itemVar = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

function AboutMe() {
    const skills = [
        { icon: <SiReact className="text-[#08dcff]" />, label: "React.js" },
        { icon: <SiTailwindcss className="text-[#1dc0cd]" />, label: "Tailwind CSS" },
        { icon: <SiNodedotjs className='text-[#85c00a]' />, label: "Node.js" },
        { icon: <SiPython className='text-[#f7ce43]' />, label: "Python" },
        { icon: <SiExpress className='text-white' />, label: "Express.js" },
        { icon: <SiPostgresql className='text-[#399cdc]' />, label: "Sql" },
        { icon: <SiMongodb className='text-[#08ee69]' />, label: "Mongo DB" },
        { icon: <SiAmazonwebservices className='text-[#ff9900]' />, label: "AWS" },
        { icon: <SiDocker className='text-[#2496ed]' />, label: "Docker" },
        { icon: <SiFastapi className='text-[#009688]' />, label: "Fast Api" },
        { icon: <SiDjango className='text-[#096e48]' />, label: "Django" },
        { icon: <SiFigma className='text-[#f25425]' />, label: "Figma" },
        { icon: <SiVercel className='text-white' />, label: "Vercel" },
        { icon: <SiPostman className='text-[#ff713d]' />, label: "Postman" },
        { icon: <SiShadcnui className='text-white' />, label: "Shadcnui" },
    ];

    const socials = [
        { icon: <SiGithub className="text-white" />, label: "Github" ,link:"https://github.com/CodedMind8051"},
        { icon: <SiYoutube className="text-[#f61f1f]" />, label: "Youtube",link:"https://youtube.com/@coded_mind?si=9fB1Ct6mElRjrW-x" },
        { icon: <SiInstagram className="text-[#df3477]" />, label: "Instagram",link:"https://www.instagram.com/coded_mind__?igsh=azQ2ZnQ3cHB6aXBm" },
        { icon: <SiX className="text-white" />, label: "X",link:"https://x.com/coded_mind__?t=_eqs2HM2Huw_Vf2PPQMPsg&s=09" },
        // { icon: <SiLinkedin className="text-[#2f6cb4]" />, label: "Linkedin",link:"" },
    ];

    return (
        <TooltipProvider delayDuration={100}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVar}
                className='flex flex-col w-full max-w-5xl mx-auto px-6 py-16'
            >
                {/* Header */}
                <motion.div variants={itemVar} className='mb-10'>
                    <h3 className="text-sm font-bold tracking-[0.2em] text-[#0bd9c8] uppercase">About</h3>
                    <h1 className="font-bold text-4xl md:text-5xl text-white tracking-tight">Me</h1>
                </motion.div>

                {/* Profile Section */}
                <div className='flex flex-col lg:flex-row gap-12 mb-20'>
                    <motion.div variants={itemVar} className='w-full lg:w-1/2'>
                        <motion.img
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            className='rounded-2xl w-full h-auto object-cover border border-white/10 shadow-2xl'
                            src={Me}
                            alt="Md. Shahzade"
                        />
                    </motion.div>

                    <motion.div variants={itemVar} className='lg:w-1/2 flex flex-col justify-center'>
                        <h1 className='font-bold text-3xl text-white mb-4'>Md. Shahzade</h1>
                        <p className='text-lg text-gray-400 leading-relaxed mb-8'>
                            I'm a <span className="text-white font-medium">full-stack web developer</span> who specializes in building robust, scalable web applications. I focus on crafting clean code, architecting solid systems, and creating seamless user experiences.
                        </p>

                        <div className='space-y-8'>
                            <div>
                                <h1 className='text-xs font-black uppercase tracking-widest text-gray-500 mb-4'>Technical Stack</h1>
                                <div className='flex flex-wrap gap-5 text-2xl'>
                                    {skills.map((skill, i) => (
                                        <Tooltip key={i}>
                                            <TooltipTrigger asChild>
                                                <motion.div 
                                                    whileHover={{ y: -5, scale: 1.2 }}
                                                    className="cursor-pointer"
                                                >
                                                    {skill.icon}
                                                </motion.div>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white border-zinc-800 text-black">
                                                <p>{skill.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h1 className='text-xs font-black uppercase tracking-widest text-gray-500 mb-4'>My Social Universe</h1>
                                <div className='flex flex-wrap gap-6 text-2xl'>
                                    {socials.map((social, i) => (
                                        <Tooltip key={i}>
                                            <TooltipTrigger asChild>
                                                <motion.div 
                                                    whileHover={{ y: -5, scale: 1.2 }}
                                                    className="cursor-pointer"
                                                >
                                                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                                                        {social.icon}
                                                    </a>
                                                </motion.div>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white border-zinc-800 text-balck">
                                                <p>{social.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Details Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10'>
                    <motion.div variants={itemVar} className="space-y-3">
                        <h1 className='font-bold text-xl text-white border-l-4 border-[#8603dc] pl-4'>Beyond the Web</h1>
                        <p className='font-medium text-gray-500 leading-relaxed text-[15px]'>
                            I'm comfortable working across mobile apps, AI integrations, and cloud infrastructure. I understand how these pieces connect to build complete, modern solutions.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVar} className="space-y-3">
                        <h1 className='font-bold text-xl text-white border-l-4 border-[#0bd9c8] pl-4'>The Drive</h1>
                        <p className='font-medium text-gray-500 leading-relaxed text-[15px]'>
                            My interest in physics and mathematics shapes my problem-solving—analytical thinking combined with a desire to understand the fundamental mechanics of every project.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVar} className='md:col-span-2 space-y-3 bg-white/5 p-6 rounded-2xl border border-white/5'>
                        <h1 className='font-bold text-xl text-white'>Philosophy</h1>
                        <p className='font-medium text-gray-400 leading-relaxed'>
                            <span className='text-white underline decoration-[#8603dc] underline-offset-8 decoration-2'>Stay curious, stay driven.</span>
                            {" "} I'm at my best when learning and pushing boundaries. When a project needs something beyond traditional development, I dive in to deliver exactly what's necessary.
                        </p>
                    </motion.div>
                </div>

                {/* Expertise Footer */}
                <motion.div variants={itemVar} className='mt-16 pt-10 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold text-sm uppercase text-gray-500 tracking-tighter'>Core Expertise</h1>
                        <p className='font-semibold text-white'>Full Stack Web, Cloud, System Design</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold text-sm uppercase text-gray-500 tracking-tighter'>Extended Skills</h1>
                        <p className='font-semibold text-white'>Mobile, AI, UI/UX, Databases</p>
                    </div>
                </motion.div>
            </motion.div>
        </TooltipProvider>
    )
}

export default AboutMe