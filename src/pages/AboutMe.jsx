export default function AboutMe(){
    return(
        <div className="relative">
            <div className="container mx-auto p-2 sm:p-0">
                <h1 className="font-semibold text-3xl text-lime-500 py-5">ABOUT ME</h1>

                <div className="inline-block md:flex flex-wrap">
                    <div className="w-full md:w-2/4 py-2 md:pr-14">
                        <p className="text-xl ">"My name is Bruno, I am an extremely determined person, focused on goals, and constantly striving for improvement. I have had various experiences where I have been consistently motivated to grow, learn, and adapt to ever-changing challenges. I enjoy working in teams and consider collaboration to be an added value."</p>
                    </div>

                    <div className="w-full md:w-2/4 py-2 md:pl-14 ">
                        <p className="text-xl">I was a person who completely ignored the existence of this world. I casually came across an IT project through friends who worked as web developers, and from there...</p>
                        <button className="p-2 border-lime-500 border-2 my-5 hover:bg-lime-500 hover:ease-in duration-300"> <a href="/experience">READ MORE</a></button>
                    </div>              
                </div>
            </div>

            <div className="hidden md:block w-[35rem] absolute left-0">
                <img className="object-contain" src="/Ellipse 1467.png" alt="" />
            </div>
        </div>
    )
}