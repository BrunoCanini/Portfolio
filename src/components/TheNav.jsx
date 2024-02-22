export default function TheNav(){

    return(
        <div className="hidden lg:flex gap-10 mt-10 items-center p-10 animate__animated animate__backInLeft">
            <a className="hover:underline underline-offset-8 decoration-lime-500" href="/">Home</a>
            <a className="hover:underline underline-offset-8 decoration-lime-500" href="#skills">Skill's</a>
            <a className="hover:underline underline-offset-8 decoration-lime-500" href="#project">Project</a>
            <a className="hover:underline underline-offset-8 decoration-lime-500" href="#github">GitHub</a>
            <a className="hover:underline underline-offset-8 decoration-lime-500" href="#testimonial">Testimonial</a>
            <a className="hover:underline underline-offset-8 decoration-lime-500" href="#contact">Contact Me</a>
            <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-lime-600"></div>
        </div>

    )
}