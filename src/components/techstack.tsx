import { SiReact, SiAndroid, SiTailwindcss, SiGit, SiFastapi, SiDjango, SiDocker, SiAmazonwebservices, SiNodedotjs, SiTypescript, SiPython, SiExpress, SiPostgresql, SiMongodb } from 'react-icons/si'

function techstack() {
  return (
    <div className='flex h-[100%] w-[40%] flex-wrap items-center justify-center gap-x-[7%] gap-y-10 text-4xl max-[1350px]:w-[50%] max-[1000px]:w-[60%] max-[850px]:w-[70%] max-[650px]:w-[90%] max-[520px]:w-[100%]'>
      <SiReact className="floating-icon text-[#08dcff]" />
      <SiTailwindcss className="floating-icon text-[#1dc0cd]" />
      <SiNodedotjs className='floating-icon text-[#85c00a]' />
      <SiPython className='floating-icon text-[#f7ce43]' />
      <SiExpress className='floating-icon text-[#fcfaf5]' />
      <SiPostgresql className='floating-icon text-[#376695]' />
      <SiMongodb className='floating-icon text-[#08ec68]' />
      <SiTypescript className='floating-icon text-[#3178c6]' />
      <SiGit className='floating-icon text-[#f05032]' />
      <SiDocker className='floating-icon text-[#2496ed]' />
      <SiAmazonwebservices className='floating-icon text-[#ff9900]' />
      <SiFastapi className='floating-icon text-[#009688]' />
      <SiDjango className='floating-icon text-[#096e48]' />
      <SiAndroid className='floating-icon text-[#3ddc84]' />
    </div>

  )
}

export default techstack
