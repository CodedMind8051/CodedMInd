import './App.css'
import Navbar from './components/Navbar'
import { Typewriter } from 'react-simple-typewriter'
import Techstack from './components/techstack'
import { LuFile, LuSend } from 'react-icons/lu'


function App() {


  return (
    <>
      <div className='flex  h-[10%]  w-[100%] flex items-center  '>
        <Navbar />
      </div>
      <h1 className='flex mt-[4%] max-[480px]:p-0  p-7 text-[#8603dc] max-[425px]:text-[10px] max-[350px]:text-[9px] text-xs sm:text-[16px] md:text-xl lg:text-2xl  w-[100%] justify-center font-medium '>
        Hi, I'm Coded_Mind__
        <span className='text-[#0bd9c8]'>
          <Typewriter
            words={[`— a curious mind crafting meaningful digital experiences.`]}
            loop={false}
            cursor={true}
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={100000}
          />
        </span>
      </h1>
      <div className='gap-7  h-[20%] flex justify-center items-center max-[480px]:mt-6'>
        <Techstack />
      </div>
      <div className='flex gap-4 justify-center items-center  mt-10'>
        <button className='text-white flex items-center justify-center w-[160px] gap-3 rounded bg-[#151515]  border-[2px]'>
          <LuFile className='text-white' />  Resume/CV
        </button>
        <button className='text-black flex items-center justify-center w-[160px] gap-3 rounded bg-amber-50  border  border-[2px]'>
         <LuSend /> Get in touch
        </button>
      </div>
    </>
  )
}

export default App
