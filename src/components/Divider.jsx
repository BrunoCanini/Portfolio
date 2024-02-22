export default function Divider(){
    return(

        <div className="relative">

            <div className="flex-wrap gap-10 flex justify-around opacity-20 sm:pt-20">
                <div className="hidden sm:flex">
                    <img src="/Frame.png" alt="" />
                </div>
                <div className="hidden sm:flex">
                    <img src="/Frame (1).png" alt="" />
                </div>
                <div>
                    <img src="/Frame (2).png" alt="" />
                </div>
                <div>
                    <img src="/Frame(3).png" alt="" />
                </div>
                <div className="hidden sm:flex">
                    <img src="/Frame (4).png" alt="" />
                </div>
            </div>

            <div className=" hidden md:block w-[35rem] absolute bottom-0">
                <img className="object-contain" src="/Ellipse 1467.png" alt="" />
            </div>

        </div>
    )
}