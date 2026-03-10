import './Home.css'
import Navbar from './components/Navbar'
import Techstack from './components/techstack'
import Projects from './components/Projects'
import { LuFile, LuSend } from 'react-icons/lu'
import { Typewriter } from 'react-simple-typewriter'
import { motion, type Variants } from 'framer-motion'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import { useState } from 'react'
import PersonalSection from './components/PresonalSection'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

function Home() {
  const [btn, setBtn] = useState<boolean>(false)

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-[#050505] selection:bg-[#8603dc]/30">

      <motion.header
        className='fixed top-0 left-0 w-full h-[70px] md:h-[90px] flex items-center z-[100] bg-[#050505]/60 backdrop-blur-xl border-b border-white/5'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Navbar />
      </motion.header>

      
      <main className="pt-24 md:pt-30 px-3 max-w-[1200px] mx-auto">
        <motion.section
          className='flex flex-col items-center mb-12'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4">
            <h1 className='flex flex-col items-center justify-center space-y-3 sm:space-y-4 md:space-y-5'>
              <span className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-tight text-neutral-100 whitespace-nowrap'>
                Hi, I'm <span className='relative inline-block'>
                  <span className='relative z-10'>CodedMind</span>
                  <span className='absolute inset-0 blur-2xl bg-neutral-400/20 -z-10' />
                </span>
              </span>

              <div className='text-neutral-400 font-light text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide px-2 sm:px-4 whitespace-nowrap'>
                <Typewriter
                  words={["crafting digital experiences", "building web systems", "a curious mind at work"]}
                  loop={true}
                  cursor
                  cursorStyle="│"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </div>
            </h1>

            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent mx-auto mt-8 sm:mt-10 md:mt-12"
            />
          </motion.div>
          
          <motion.div variants={fadeInUp} className='mt-0 w-full flex justify-center'>
            <Techstack />
          </motion.div>

          <motion.div className='flex flex-wrap gap-4 justify-center items-center mt-8' variants={fadeInUp}>
            <motion.button
              className='text-white/80 flex items-center justify-center w-[150px] py-3.5 rounded-xl bg-[#111] border border-white/5 shadow-2xl'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <LuFile className='mr-2' /> Resume/CV
            </motion.button>

            <motion.button
              className='text-black flex items-center justify-center w-[170px] py-3.5 gap-3 rounded-xl bg-white font-semibold'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setBtn(!btn)}
            >
              <LuSend /> Get in touch
            </motion.button>
          </motion.div>
        </motion.section>

        
        <div className="space-y-12">
          <section id='About'>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
              <AboutMe />
            </motion.div>
          </section>

          <section id='Projects'>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
              <Projects />
            </motion.div>
          </section>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
            <PersonalSection />
          </motion.div>

          <section id='Contact' className='pb-16'>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
              <Contact Btn={btn} />
            </motion.div>
          </section>
        </div>
      </main>

      <footer className='flex flex-col gap-3 p-8 justify-center items-center text-[#818183] border-t border-white/5 text-center'>
        <p className='font-semibold text-sm md:text-base'>
          Think, design, and — built by
          <span className='text-white font-bold ml-1'>Coded_Mind__ !</span>
        </p>
        <p className='text-xs opacity-60'>© 2026. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home