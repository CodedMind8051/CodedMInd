import { motion } from 'framer-motion'
import { SiReact, SiNodedotjs, SiDocker, SiPython, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiLinux, SiAmazonwebservices } from 'react-icons/si'

export default function Skills() {
  const skills = [
    { name: 'React.js', icon: <SiReact className='text-[#08dcff] text-2xl' />, color: 'from-cyan-500/10 to-blue-500/10' },
    { name: 'Node.js', icon: <SiNodedotjs className='text-[#85c00a] text-2xl' />, color: 'from-green-500/10 to-emerald-500/10' },
    { name: 'TypeScript', icon: <SiTypescript className='text-[#3178c6] text-2xl' />, color: 'from-blue-500/10 to-indigo-500/10' },
    { name: 'Express.js', icon: <SiExpress className='text-[#fcfaf5] text-2xl' />, color: 'from-gray-500/10 to-slate-500/10' },
    { name: 'MongoDB', icon: <SiMongodb className='text-[#08ec68] text-2xl' />, color: 'from-green-500/10 to-lime-500/10' },
    { name: 'PostgreSQL', icon: <SiPostgresql className='text-[#399cdc] text-2xl' />, color: 'from-blue-500/10 to-cyan-500/10' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-[#1dc0cd] text-2xl' />, color: 'from-cyan-500/10 to-teal-500/10' },
    { name: 'Docker', icon: <SiDocker className='text-[#2496ed] text-2xl' />, color: 'from-blue-500/10 to-sky-500/10' },
    { name: 'Python', icon: <SiPython className='text-[#f7ce43] text-2xl' />, color: 'from-yellow-500/10 to-orange-500/10' },
    { name: 'Git', icon: <SiGit className='text-[#f05032] text-2xl' />, color: 'from-red-500/10 to-orange-500/10' },
    { name: 'AWS', icon: <SiAmazonwebservices className='text-[#ff9900] text-2xl' />, color: 'from-orange-500/10 to-yellow-500/10' },
    { name: 'Linux', icon: <SiLinux className='text-[#8ab4f8] text-2xl' />, color: 'from-blue-500/10 to-purple-500/10' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="skills" className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Technical Stack</h2>
          <p className="text-[#8a8a95] text-sm md:text-base">Technologies I work with daily</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group"
            >
              <div className={`skill-card bg-linear-to-br ${skill.color} border border-[rgba(134,3,220,0.1)] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:border-[rgba(134,3,220,0.3)] hover:shadow-lg hover:shadow-[rgba(134,3,220,0.1)]`}>
                <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <span className="text-xs md:text-sm font-semibold text-[#e9e9ee] text-center">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
