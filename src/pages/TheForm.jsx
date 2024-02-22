import { useState } from "react"
import emailjs from"emailjs-com"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function TheForm(){

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: ""
    })

    const inputChange = (e) =>{
        setFormData({ ...formData, [e.target.name] : e.target.value})
    }

    const sendData = (e) =>{
        e.preventDefault()
        
        emailjs.sendForm("service_portfolio", "template_uvsryhx", e.target, "n-bUQaw-EQl9xuquG")
        .then((result) => {
            toast.success("Sent Successfully!", {
                position: "bottom-center",
                theme: "colored",
                autoClose: 5000
              });
            // console.log(result.text)
        }, (error) => {
            toast.error("Something Went Wrong!", {
                position: "bottom-center",
                theme: "colored",
                autoClose: 5000
              });
        });

        setFormData({name: "", surname: "", email: "", message: "" })

    }

    return(
        <>
            <div id="contact" className="container mx-auto flex flex-wrap">

                <div className="w-full md:w-1/2 flex flex-col gap-3 border-r px-10 mb-10 md:mb-0">

                    <h2 className="font-semibold text-3xl text-lime-500">Contact Me </h2>
                    <p className="font-semibold text-4xl md:text-5xl py-5 text-end">fill in the form to start a conversation</p>
                    <div className="flex justify-end rounded-lg">
                        <img className="md:w-full  lg:w-2/4 rounded-lg" src="/200 (2).webp" alt="" />
                    </div>
                </div>


                <div className="w-full md:w-1/2" >

                    <form className="w-3/4 mx-auto flex flex-col gap-4" onSubmit={sendData}>

                        <div className="flex flex-col">
                            <label htmlFor="name" className="pb-2">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required className="text-black py-3 px-2 rounded-md max-w-[25rem]"
                            value={formData.name} onChange={inputChange} />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="surname" className="pb-2">Surname</label>
                            <input type="text" id="surname" name="surname" placeholder="Your Surname" required className="text-black py-3 px-2 rounded-md max-w-[25rem]"
                            value={formData.surname} onChange={inputChange} />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="pb-2">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required className="text-black py-3 px-2 rounded-md max-w-[25rem]"
                            value={formData.email} onChange={inputChange} />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="pb-2">Message</label>
                            <textarea name="message" id="message" cols="20" rows="5" placeholder="Insert Message" required className="text-black py-3 px-2 rounded-md max-w-[25rem]" 
                            value={formData.message} onChange={inputChange}></textarea>
                        </div>

                        <div>
                            <button type="submit" className="py-2 px-4 rounded-md border-lime-500 border-2 my-5 hover:bg-lime-500 hover:ease-in duration-300">SEND</button>
                            <ToastContainer />
                        </div>

                    </form>

                </div>

            </div>

        </>
    )
}