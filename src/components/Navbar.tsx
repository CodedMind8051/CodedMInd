import Logo from '../assets/Logo-Photoroom.png'

function Navbar() {
    return (
        <nav className="mx-auto flex h-[56%] w-full max-w-[1300px] items-center justify-between px-3 sm:px-6">
            <img className='w-[58px] rounded-full ring-1 ring-white/10 transition-transform duration-300 hover:scale-105 sm:w-[72px] xl:w-[108px]' src={Logo} alt="Coded Mind logo" />
            <div className="navlinks flex w-[62%] items-center justify-center gap-[4%] text-xs font-medium sm:text-lg lg:text-xl">
                <a className="text-white/90 transition-colors duration-300 hover:text-white" href="#">Home</a>
                <a className="text-white/90 transition-colors duration-300 hover:text-white" href="#Projects">Projects</a>
                <a className="text-white/90 transition-colors duration-300 hover:text-white" href="#About">About</a>
                <a className="text-white/90 transition-colors duration-300 hover:text-white" href="#Contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
