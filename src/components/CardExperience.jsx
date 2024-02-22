import { useState } from "react"
import 'animate.css'

export default function CardExperience({title, data, description, certificate, children}){

    const [show, setShow] = useState(false)

    const isHidden = () =>{
        if(show == true){
            return "animate__animated animate__backOutRight"
        }return "animate__animated animate__backInRight"
    }

    return(
    <div className="mt-32 mx-auto xl:flex justify-between">

        <div className="ml-2 sm:ml-0">
            <div className="flex gap-2">
                <div className="hidden sm:inline-block rounded-full bg-lime-600 w-[4.8rem] h-[4.5rem]" >
                    <img className="object-cover" src="/laureLogo-Photoroom.png-Photoroom.png" alt="" />
                </div>
                <div>
                    <h2 className="text-xl font-bold">{title} | <span className="font-semibold">{data}</span></h2>
                    <h3>JUNIOR FULL STACK WEB DEVELOPER TRAINEE</h3>
                    <hr className="border-lime-500 my-4"  />
                </div>
            </div>

            <div className="sm:ml-20 w-2/4">
                <div>
                    <p>{description}</p>
                    {children}
                    <button onClick={()=> setShow(show == false ? true : false)} className="p-2 border-lime-500 border-2 my-5 hover:bg-lime-500 hover:ease-in duration-300">
                        {show == false && <span>HIDE CERTIFICATE</span>}
                        {show == true && <span>SHOW CERTIFICATE</span>}
                    </button>
                </div>
            </div>
        </div>

        <div className={isHidden()}>
            <img className="max-w-[40rem]" src={certificate} alt="" />
        </div>

    </div>
    )
}