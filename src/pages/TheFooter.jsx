import Joke from "../components/Joke"
import FooterFooter from "../components/FooterFooter"

export default function TheFooter(){
    return(
        <>
            <div className="container mx-auto flex justify-between px-2">
                <div className=" hidden sm:flex w-1/3">
                    <Joke />
                </div>
                {/* service */}
                <div>
                    <h1 className="mb-5">All Services</h1>
                    <ul className="text-slate-400">
                        <li className="my-4">Junior Front-End Web Developer</li>
                        <li className="my-4">Junior Back-End Web Developer</li>
                        <li className="my-4">Junior Full Stack Web Developer</li>
                    </ul>
                </div>
                {/* contacts */}
                <div>
                    <h1 className="mb-5">Contacts</h1>

                    <div className="flex my-4">
                        <div className="mx-2">
                            <img className="" src="/phone.png" alt="" />
                        </div>
                        <div>
                            <p className="text-slate-400">Latina - 04100 - Italy</p>
                        </div>
                    </div>

                    <div className="flex my-4">
                        <div className="mx-2">
                            <img src="/phone1.png" alt="" />
                        </div>
                        <div>
                            <p className="text-slate-400">+39 3398991222</p>
                        </div>
                    </div>

                    <div className="flex my-4">
                        <div className="mx-2">
                            <img src="/mail.png" alt="" />
                        </div>
                        <div>
                            <p className="text-slate-400">brunocanini1994@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>

            <FooterFooter />
        </>

    )
}