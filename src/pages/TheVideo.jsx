import ReactPlayer from 'react-player';
import GitHub from '../components/GitHub';

export default function TheVideo(){
    return(

        <div className='relative'>

            <div id='project' className='container mx-auto'>
                <h1 className="font-semibold text-3xl text-lime-500 py-5 text-center">MY JOBS</h1>
                <h2 className="font-semibold text-4xl sm:text-4xl py-5 text-center">Clips of my final projects in academies <p className='font-semibold text-xl sm:text-2xl py-5 text-center'>Enjoy watching</p></h2>

                <div className="video-player-container container mx-auto h-[40rem]">
                    <ReactPlayer
                    url="/Il mio video-2.mp4" // Sostituisci con l'URL del tuo video
                    controls={true} // Abilita i controlli del player
                    width="100%"
                    height="100%"
                />
                </div>

                <GitHub />
            </div>

            <div className=" hidden md:block w-[35rem] absolute top-[-20rem] right-0 rotate-180">
                <img className="object-contain" src="/Ellipse 1467.png" alt="" />
            </div>

        </div>

    )
}