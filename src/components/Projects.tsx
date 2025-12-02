import { useState, } from "react"

function Projects() {
    const [Cards, setCards] = useState<any>([])

    for (let index = 0; index < 4; index++) {
        Cards.push(

                <div  className=" card   ">
                    <div className="p-1.5 bg-gradient-to-r from-[#ed59c0] via-[#e7039b] to-[#710ab8] rounded h-[45%] w-full">hii</div>
                </div>)
    }

    return (
        <>
            <div className=" gap-3.5 max-[1050px]:w-[90%] max-[700px]:w-[100%] max-[700px]:h-[70%]  flex justify-center h-[100%] flex-wrap w-[60%] text-2xl max-[700px]:text-xl font-medium text-white">
                <h1 className=" justify-center flex items-center w-[100%] h-[5%] mt-2.5 underline  ml-2 text-[#f8f5f9]">Projects</h1>
                {Cards}
         
            </div>


        </>
    )
}

export default Projects