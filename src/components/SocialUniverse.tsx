import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa'

const items = [
  { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub', color: 'from-gray-500 to-slate-500' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn', color: 'from-blue-600 to-blue-400' },
  { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter', color: 'from-cyan-500 to-blue-500' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram', color: 'from-pink-500 to-purple-500' },
  { icon: <FaDiscord />, href: 'https://discord.com', label: 'Discord', color: 'from-indigo-500 to-purple-600' },
  { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube', color: 'from-red-600 to-red-500' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export default function SocialUniverse() {
  return (
    <section id="social" className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Connect With Me</h2>
          <p className="text-[#8a8a95] text-sm md:text-base">Let's build something amazing together</p>
        </motion.div>

        <motion.div 
          className="mt-10 flex gap-4 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((it, idx) => (
            <motion.a
              key={idx}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group"
              title={it.label}
            >
              <div className={`social-icon glass-card p-5 text-3xl rounded-2xl flex items-center justify-center h-16 w-16 md:h-20 md:w-20 transition-all duration-300 hover:shadow-lg relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${it.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <span className="relative text-white group-hover:text-2xl transition-all">{it.icon}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
