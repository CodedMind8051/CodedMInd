import './App.css'
import Navbar from './components/Navbar'
import { Typewriter } from 'react-simple-typewriter'
import Techstack from './components/techstack'

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
    </>
  )
}

export default App
