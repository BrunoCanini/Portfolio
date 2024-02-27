import TheNav from "../components/TheNav"
import Thejumbotron from "../components/TheJumbotron"

export default function Home(){
    return(
        <div id="container_home" className="mx-auto w-full relative max-w-[2560px]">

            <div className="flex justify-between w-full mx-auto relative">

                <div className="w-3/5">
                    <TheNav></TheNav>
                    <Thejumbotron></Thejumbotron>
                </div>

                <div className="hidden sm:flex justify-end w-2/5 h-[685px] absolute bottom-0 right-0 2xl:relative animate__animated animate__bounceInRight">
                    <img className="object-cover md:w-3/4 h-full" src="/bruno.png" alt="" />
                </div>

            </div>


        </div>
    )
}