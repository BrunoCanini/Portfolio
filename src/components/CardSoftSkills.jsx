export default function CardSoftSkills({id, name, description}){
    return(
        <div className="w-[45rem]">

            <div className="flex gap-5 sm:gap-0">

                <div className="w-1/6 text-center">
                    <h1 className="text-6xl">0{id}</h1>
                </div>
                <div className=" border-b  flex  items-center w-full">
                    <h1 className="text-2xl">{name}</h1>
                </div>

            </div>

            <div className="flex gap-5">
                <div className=" hidden sm:flex justify-center w-1/6 items-center">
                    <img className="h-[2.7rem]" src="/Arrow 1.png" alt="" />
                </div>

                <div className="flex items-center py-5 w-5/6">
                    <p>{description}</p>
                </div>

            </div>



        </div>
    )
}