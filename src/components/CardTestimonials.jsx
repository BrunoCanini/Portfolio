export default function CardTestimonials({name, profession, text, gitHub, image}){

    const goGitHubT = () => {
        window.open( gitHub, '_blank');
    }

    return(
        <div onClick={goGitHubT} className="bg-zinc-900 sm:flex sm:flex-col sm:flex-wrap p-10 w-full sm:w-[450px] relative mx-auto hover:scale-110 hover:shadow-md hover:shadow-zinc-800 hover:ease-in duration-300">

            <div className="py-10">
                <h1>{name}</h1>
                <h2 className="text-lime-500">{profession}</h2>
            </div>

            <div className="flex py-2">
                <p>{text}</p>
                <img className="px-2 object-contain" src="/eff..png" alt="" />
            </div>

            <div className="w-[100px] h-[100px] absolute right-10 top-[-50px]">
                <img className="object-cover w-full h-full" src={image} alt="" />
            </div>

        </div>
    )
}