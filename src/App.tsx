import './App.css'
import Navbar from './components/Navbar'
import Techstack from './components/techstack'
import Projects from './components/Projects'
import LoadingAnimation from './components/LoadingAnimation'
import { LuFile, LuSend } from 'react-icons/lu'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

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

  return (
    <>
      {/* Fixed Navbar */}


      {/* Spacer so content doesn’t go under navbar */}
      <div className='h-16'>      <motion.div
        // className='fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center h-16 px-4'
        className='fixed flex h-[20%] w-full items-center z-100 bg-black  shadow-md p-4 mb-10'
        variants={slideInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.2 }}
      >
        <Navbar />
      </motion.div></div>

      {/* Hero Section */}
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

      {/* Techstack Section */}
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

      {/* Buttons */}
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
          className='text-black flex items-center justify-center w-[160px] gap-3 rounded bg-amber-50 border border-[2px]'
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LuSend /> Get in touch
        </motion.button>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className='flex justify-center m-7'
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25, margin: '-80px 0px -80px 0px' }}
        transition={{ duration: 1.2 }}
      >
        <Projects />
      </motion.div>
    </>
  )
}

export default App
