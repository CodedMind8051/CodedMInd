import Logo from '../assets/Logo-Photoroom.png'

function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-full">
      {/* Brand/Logo Area */}
   <div className="flex items-center group cursor-pointer">
  <div className="relative">
    <div className="relative bg-[#050505] border border-2 border-amber-50/5 p-2 rounded-lg  backdrop-blur-sm  transition-all duration-300">
      <img 
        className="w-10 sm:w-12 lg:w-14 aspect-square object-cover rounded" 
        src={Logo} 
        alt="Coded Mind Logo" 
      />
    </div>
  </div>
  <span className="hidden sm:block ml-4 font-semibold text-white tracking-wide text-sm lg:text-base">
    CODED_MIND__
  </span>
</div>

      {/* Nav Links */}
      <div className="flex items-center gap-6 md:gap-10 font-medium">
        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={item === 'Home' ? '#' : item==="Projects" ? '/projects' : `#${item}`}
            className="relative text-gray-400 text-[11px] sm:text-sm lg:text-base uppercase tracking-tighter sm:tracking-widest transition-colors duration-300 hover:text-white group"
          >
            {item}
            {/* Animated Underline Hook */}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#8603dc] to-[#0bd9c8] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar