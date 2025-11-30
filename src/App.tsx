import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <div className='flex h-[10%]  w-[100%] flex items-center  '>
        <Navbar />
      </div>
      <h1  className='flex mt-[4%] text-[#8603dc]  text-3xl justify-center font-medium '>
        Hi, I'm Coded_Mind__
        <span className='text-[#0bd9c8]'>— a curious mind crafting meaningful digital experiences.
        </span>
      </h1>
      <div></div>
    </>
  )
}

export default App
