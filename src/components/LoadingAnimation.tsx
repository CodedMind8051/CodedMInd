import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/loading.css'

function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2 }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-[#0e0d0d] via-[#1a1919] to-[#0e0d0d]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => !isLoading && setIsLoading(false)}
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-[#8603dc]/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        whileInView={{ rotate: 360, scale: [1, 1.2, 1] }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 md:w-28 md:h-28 rounded-full border-2 border-[#0bd9c8]/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -360 }}
        transition={{ duration: 1.8, delay: 0.4 }}
        whileInView={{ rotate: -360, scale: [1.2, 1, 1.2] }}
      />

      {/* Main loading container */}
      <motion.div
        className="flex flex-col items-center justify-center gap-6 md:gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Premium Orbiting Loader */}
        <motion.div
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          variants={itemVariants}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 md:border-3 border-transparent border-t-[#8603dc] border-r-[#8603dc]"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle rotating ring */}
          <motion.div
            className="absolute inset-3 md:inset-4 lg:inset-6 rounded-full border-2 md:border-3 border-transparent border-b-[#0bd9c8] border-l-[#0bd9c8]"
            animate={{ rotate: -360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner pulsing dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1.5 sm:w-2 md:w-3 lg:w-4 h-1.5 sm:h-2 md:h-3 lg:h-4 bg-linear-to-r from-[#8603dc] to-[#0bd9c8] rounded-full shadow-lg shadow-[#8603dc]/50" />
          </motion.div>

          {/* Outer pulsing circle */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#0bd9c8]/40"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading text with typewriter effect */}
        <motion.div
          className="flex items-center gap-1 md:gap-2"
          variants={itemVariants}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        >
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#8603dc]">
            Loading
          </span>
          <motion.span
            className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#0bd9c8]"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
          >
            .
          </motion.span>
          <motion.span
            className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#0bd9c8]"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          >
            .
          </motion.span>
          <motion.span
            className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#0bd9c8]"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="w-40 sm:w-48 md:w-56 lg:w-64 h-1 md:h-1.5 bg-gray-800 rounded-full overflow-hidden shadow-lg"
          variants={itemVariants}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.div
            className="h-full bg-linear-to-r from-[#8603dc] via-[#0bd9c8] to-[#8603dc]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.div>

        {/* Percentage text */}
        <motion.div
          className="text-xs sm:text-sm md:text-base text-[#0bd9c8] font-medium"
          variants={itemVariants}
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 2.0 }}
        >
          <motion.span
            animate={{ content: ['0%', '35%', '65%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {Math.floor(Math.random() * 100) + 1}%
          </motion.span>
        </motion.div>

        {/* Brand tagline */}
        <motion.p
          className="text-[10px] sm:text-xs md:text-sm text-[#acacaf] text-center max-w-xs md:max-w-sm px-2"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.0 }}
        >
          Crafting premium digital experiences...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default LoadingAnimation
