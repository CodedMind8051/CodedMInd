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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  }
};



function Home() {
  const [btn, setBtn] = useState<boolean>(false)

  return (
    /* This wrHomeer is the "fix" for the zooming issue */

    <div className="relative w-full overflow-x-hidden min-h-screen bg-[#050505]">

      <motion.header
        className='fixed top-0 left-0 w-full h-[80px] md:h-[120px] flex items-center z-[100] bg-[#050505]/90 backdrop-blur-md shadow-md'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
      </motion.header>

      <main className="pt-24 md:pt-32 px-4 max-w-[1200px] mx-auto">
        <motion.section
          className='flex flex-col items-center mt-10'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className='flex flex-col items-center justify-center text-center px-4 tracking-tight'
            variants={fadeInUp}
          >
            {/* Main Name - Large and Bold */}
            <span className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2'>
              Hi, I'm <span className='text-[#8603dc]'>CodedMind</span>
            </span>

            {/* Description - Smaller, Responsive, and Clean */}
            <div className='text-[#0bd9c8] font-medium text-sm sm:text-lg md:text-xl lg:text-2xl max-w-[90%] md:max-w-2xl'>
              <Typewriter
                words={[
                  // Short version for mobile focus, longer for impact
                  "— crafting digital experiences.",
                  "— building meaningful web Homes.",
                  "— a curious mind at work."
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2500}
              />
            </div>
          </motion.h1>

          <motion.div variants={fadeInUp} className='mt-10 w-full flex justify-center'>
            <Techstack />
          </motion.div>

          <motion.div
            className='flex flex-wrap gap-4 justify-center items-center mt-10'
            variants={fadeInUp}
          >
            <motion.button
              className='text-white flex items-center justify-center w-[150px] md:w-[160px] py-3 rounded bg-[#151515] border-[2px] border-white/10'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LuFile className='mr-2' /> Resume/CV
            </motion.button>

            <motion.button
              className='text-black flex items-center justify-center w-[160px] gap-3 rounded bg-white border border-[2px]'
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setBtn(!btn) }}
            >
              <LuSend /> Get in touch
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Content Sections */}
        <section id='About' className='mt-20'>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25, margin: '-80px 0px -80px 0px' }}
            transition={{ duration: 1.2 }}
            id='About'
            className='About  flex  justify-center h-[30%] m-7 text-white'  >
            <AboutMe />
          </motion.div>
        </section>

        <section id='Projects' className='mt-10'>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Projects />
          </motion.div>
        </section>
        
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <PersonalSection />
        </motion.div>


        <section id='Contact' className='mt-10 pb-20'>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Contact Btn={btn} />
          </motion.div>
        </section>


      </main>

      <footer className='flex flex-col p-9 justify-center items-center text-[#818183] border-t border-white/5'>
        <p className='font-semibold'>Think, design, and—made by <span className='font-bold text-white'>Coded_Mind__ !</span> </p>
        <p>© 2025. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home