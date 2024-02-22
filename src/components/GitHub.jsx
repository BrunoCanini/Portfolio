import ReactPlayer from 'react-player';

export default function GitHub(){

    const goGithub = ()=>{
        window.open('https://github.com/BrunoCanini', '_blank');
    }

    return(
        <div id='github' className="container mx-auto md:flex mt-40 p-2">

            <div className="flex flex-col justify-end  md:w-2/4 mb-12">
                <h2 className="font-semibold text-3xl text-lime-500 py-5">GitHub</h2>
                <p>"You are curious?"</p>
                <h1 className="font-semibold text-5xl md:pr-5">Touch the pink monkey will show you all my projects</h1>
            </div>

            <div className="md:w-3/5  lg:w-2/5 rounded-lg" onClick={goGithub}>
                <img className='w-full object-cover rounded-lg' src="/200 (1).webp" alt="" />
            </div>

        </div>
    )
}