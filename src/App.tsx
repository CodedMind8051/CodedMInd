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
// import Animal from './components/Animal'

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2 },
    },
  }

  const slideInVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4 },
    },
  }


  const [Btn, setBtn] = useState<any>(null)

  return (
    <>

      <motion.div
        className='fixed flex top-0   h-[120px] max-[750px]:h-[130px] w-full items-center z-100 bg-[#050505]  shadow-md  mb-10'
        variants={slideInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.2 }}

      >
        {/* <Animal /> */}

        <Navbar />
      </motion.div>
      <div className="pt-28 max-[750px]:pt-15">
        <motion.h1
          className='flex mt-25 max-[650px]:p-0 p-7 text-[#8603dc] max-[650px]:text-[15px] max-[560px]:text-[13px] max-[470px]:text-[55%] md:text-xl lg:text-2xl w-full justify-center font-medium'
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: '-80px 0px -80px 0px' }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm Coded_Mind__
          <span className='text-[#0bd9c8] ml-2'>
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
          className='flex gap-7 justify-center items-center mt-10 max-[480px]:mt-6'
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: '-80px 0px -80px 0px' }}
          transition={{ duration: 1.2 }}
        >
          <Techstack />
        </motion.div>
        <motion.div
          className='flex gap-4 justify-center items-center mt-10'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: '-80px 0px -80px 0px' }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.button
            className='text-white flex items-center justify-center w-[160px] gap-3 rounded bg-[#151515] border-[2px]'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LuFile className='text-white' /> Resume/CV
          </motion.button>

          <motion.button
            className='text-black flex items-center justify-center w-[160px] gap-3 rounded bg-white border border-[2px]'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          transition={{ duration: 1.2 }}
          id='About'
          className='About  flex  justify-center h-[30%] m-7 text-white'  >
          <AboutMe />
        </motion.div>

        <motion.div
          className='flex justify-center m-7'
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25, margin: '-80px 0px -80px 0px' }}
          transition={{ duration: 1.2 }}
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
          className='flex items-center   p-2.5 mb-7.5 h-[230px] contact justify-center  text-white'  >
          <Contact Btn={Btn} />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2 }}
          className='flex flex-col p-2.5 mb-7.5  justify-center  items-center  text-[#818183]'  >
          <p className='font-semibold'>Think, design, and—made by  <span className='font-bold'>Coded_Mind__  !</span> </p>
          <p>© 2025. All rights reserved.</p>
        </motion.div>
      </div>
    </>
  )
}

export default App
