import Logo from '../assets/Logo-Photoroom.png'

function Navbar() {
    return (
        <nav className="w-[100%]  flex items-center justify-between h-[50%] ">
            <img className='w-[60px] sm:w-[80px] md:w-[80px] xl:w-[160px] lg:w-[150px] m-[10%] mb-[8%] rounded-[100%] ' src={Logo} alt="" />
            <div className="navlinks flex gap-[3%] max-[500px]:gap-[5%] mt-[2%] font-medium text-xs sm:text-xl lg:text-2xl items-center justify-center  w-[50%]">
                <a className="text-white" href="#">Home</a>
                <a className="text-white" href="#">Projects</a>
                <a className="text-white" href="#">About</a>
                <a className="text-white" href="#">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar