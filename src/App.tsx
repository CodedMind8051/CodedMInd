import { Typewriter } from 'react-simple-typewriter'
import './App.css'
import Navbar from './components/Navbar'
import Techstack from './components/techstack'
import Projects from './components/Projects'
import { LuFile, LuSend } from 'react-icons/lu'


function App() {


  return (
    <>
      <div className='flex  h-[10%]  w-[100%] flex items-center  '>
        <Navbar />
      </div>
      {/* Premium top heading: gradient, large text, animation, modern layout */}
      <header className="w-full flex flex-col items-center justify-center py-8">
  <h1 className='flex mt-[4%] max-[480px]:p-0  p-7 text-[#8603dc] max-[425px]:text-[10px] max-[350px]:text-[9px] text-xs sm:text-[16px] md:text-xl lg:text-2xl  w-[100%] justify-center font-medium '>
    Hi, I'm Coded_Mind__
    <span className='text-[#0bd9c8]'>
      <Typewriter
        words={[`— a curious mind crafting meaningful digital experiences.`]}
        loop={false}
        cursor={true}
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={100000}
      />
    </span>
  </h1>
      </header>
      {/* Impact: visually distinct, premium, modern heading for webapp */}
      <div className='gap-7  h-[20%] flex justify-center items-center max-[480px]:mt-6'>
        <Techstack />
      </div>
      <div className='flex gap-4 justify-center items-center  mt-10'>
  <button className='text-white flex items-center justify-center w-40 gap-3 rounded bg-[#151515] border-2'>
          <LuFile className='text-white' />  Resume/CV
        </button>
  <button className='text-black flex items-center justify-center w-40 gap-3 rounded bg-amber-50 border-2'>
          <LuSend /> Get in touch
        </button>
      </div>
      <div className='flex  justify-center m-7  h-[90%]'>
        <Projects />
      </div>
 
    </>
  )
}

export default App
