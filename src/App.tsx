import './App.css'
import Navbar from './components/Navbar'
import Techstack from './components/techstack'
import Projects from './components/Projects'
import { LuFile, LuSend } from 'react-icons/lu'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.97, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  }

  const slideInVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const [Btn, setBtn] = useState(false)

  return (
    <>
      <div className="bg-orb bg-orb-primary" />
      <div className="bg-orb bg-orb-secondary" />

      <motion.div
        className='fixed top-0 z-100 flex h-[110px] w-full items-center border-b border-white/8 bg-black/65 shadow-xl backdrop-blur-xl max-[750px]:h-[120px]'
        variants={slideInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Navbar />
      </motion.div>

      <div className="mx-auto max-w-[1350px] px-4 pb-8 pt-32 max-[750px]:pt-24">
        <motion.h1
          className='hero-title flex w-full justify-center px-7 text-center text-[#a936f8] max-[650px]:px-0 max-[650px]:text-[15px] max-[560px]:text-[13px] max-[470px]:text-[55%] md:text-xl lg:text-2xl'
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: '-80px 0px -80px 0px' }}
        >
          Hi, I&apos;m Coded_Mind__
          <span className='ml-2 text-[#0bd9c8]'>
            <Typewriter
              words={[`— a curious mind crafting meaningful digital experiences.`]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={100000}
            />
          </span>
        </motion.h1>

        <motion.div
          className='mt-10 flex items-center justify-center gap-7 max-[480px]:mt-6'
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: '-80px 0px -80px 0px' }}
        >
          <Techstack />
        </motion.div>

        <motion.div
          className='mt-10 flex items-center justify-center gap-4'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: '-80px 0px -80px 0px' }}
        >
          <motion.button
            className='smooth-cta smooth-cta--dark'
            variants={itemVariants}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <LuFile /> Resume/CV
          </motion.button>

          <motion.button
            className='smooth-cta smooth-cta--light'
            variants={itemVariants}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => { setBtn(!Btn) }}
          >
            <LuSend /> Get in touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: '-80px 0px -80px 0px' }}
          id='About'
          className='About mt-5 flex justify-center m-7 text-white'
        >
          <AboutMe />
        </motion.div>

        <motion.div
          className='m-7 flex justify-center'
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: '-80px 0px -80px 0px' }}
          id='Projects'
        >
          <Projects />
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2 }}
          id='Contact'
          className='contact mb-7.5 flex h-[230px] items-center justify-center p-2.5 text-white'
        >
          <Contact Btn={Btn} />
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2 }}
          className='mb-7.5 flex flex-col items-center justify-center p-2.5 text-[#818183]'
        >
          <p className='font-semibold'>Think, design, and—made by <span className='font-bold'>Coded_Mind__!</span></p>
          <p>© 2025. All rights reserved.</p>
        </motion.div>
      </div>
    </>
  )
}

export default App
