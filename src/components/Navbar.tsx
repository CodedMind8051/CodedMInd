import Logo from '../assets/Logo-Photoroom.png'

function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between h-[50%]">
            <img className='w-[60px] sm:w-[80px] md:w-[80px] xl:w-[160px] lg:w-[150px] m-[10%] max-[700px]:m-[4%] max-[500px]:m-[2%] mb-[8%] rounded-[100%]' src={Logo} alt="" />
            <div className="navlinks flex gap-[3%] max-[700px]:gap-[4%] max-[500px]:gap-[5%] mt-[2%] font-medium text-xs sm:text-xl lg:text-2xl items-center justify-center w-[50%] max-[700px]:w-[60%]">
                <a className="text-white hover:underline hover:decoration-2 decoration-white" href="#">Home</a>
                <a className="text-white hover:underline hover:decoration-2 decoration-white" href="#Projects">Projects</a>
                <a className="text-white hover:underline hover:decoration-2 decoration-white" href="#About">About</a>
                <a className="text-white hover:underline hover:decoration-2 decoration-white" href="#Contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
