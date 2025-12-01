import { SiReact, SiTailwindcss, SiTsnode, SiPython, SiExpress, SiPostgresql, SiMongodb } from 'react-icons/si'


function techstack() {
  return (
    <div className='max-[1350px]:w-[50%] max-[1000px]:w-[60%] max-[850px]:w-[70%] max-[650px]:w-[90%] max-[520px]:w-[100%] text-4xl flex  h-[100%] items-center justify-center gap-[1%] w-[40%]'>
      <SiReact className="relative  text-[#08dcff] top-[15%] right-[1%] animate-bounce" />
      <SiTailwindcss className="relative  text-[#1dc0cd] top-[-20%] right-[-5%] animate-bounce" />
      <SiTsnode className='text-[#2966ab] max-[650px]:top-[-35%] relative animate-bounce top-[-24.5%] right-[24%]  ' />
      <SiPython className='text-[#f7ce43] relative animate-bounce top-[-12.5%] right-[-10%] ' />
      <SiExpress className='text-[#fcfaf5] max-[650px]:right-[54%] relative animate-bounce top-[-7.5%] right-[53%] ' />
      <SiPostgresql className='text-[#376695] relative animate-bounce top-[5%] right-[-12%] ' />
      <SiMongodb className='text-[#08ec68] relative animate-bounce top-[20%] right-[16%] max-[650px]:right-[30%] ' />


    </div>

  )
}

export default techstack