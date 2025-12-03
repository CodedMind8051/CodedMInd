import { SiReact, SiAndroid, SiTailwindcss, SiGit, SiFastapi, SiDjango, SiDocker, SiAmazonwebservices, SiNodedotjs, SiTypescript, SiPython, SiExpress, SiPostgresql, SiMongodb } from 'react-icons/si'


function techstack() {
  return (
    <div className=' flex-wrap  max-[1350px]:w-[50%] max-[1000px]:w-[60%] max-[850px]:w-[70%] max-[650px]:w-[90%] max-[520px]:w-[100%] text-4xl flex   h-[100%] items-center justify-center gap-[7%] w-[40%]'>
      <SiReact className="  text-[#08dcff]  animate-bounce" />
      <SiTailwindcss className="  text-[#1dc0cd]  animate-bounce" />
      <SiNodedotjs className='text-[#85c00a]   animate-bounce  ' />
      <SiPython className='text-[#f7ce43]  animate-bounce ' />
      <SiExpress className='text-[#fcfaf5]  animate-bounce  ' />
      <SiPostgresql className='text-[#376695]  animate-bounce ' />
      <SiMongodb className='text-[#08ec68]  animate-bounce  ' />
      <SiTypescript className='text-[#3178c6]  animate-bounce ' />
      <SiGit className='text-[#f05032]  animate-bounce ' />
      <SiDocker className='text-[#2496ed]  animate-bounce ' />
      <SiAmazonwebservices className='text-[#ff9900]  animate-bounce ' />
      <SiFastapi className='text-[#009688]  animate-bounce ' />
      <SiDjango className='text-[#096e48]  animate-bounce ' />
      <SiAndroid className='text-[#3ddc84]  animate-bounce ' />
    </div>

  )
}

export default techstack