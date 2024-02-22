import CardExperience from "../components/CardExperience"
import { useNavigate } from "react-router-dom"


export default function Experience(){

    const navigate = useNavigate();

    return(
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center uppercase">Education & Experience</h1>

            <CardExperience
                title="EXPERIS ACADEMY"
                data="November 2023 - December 2023"
                description="6-week training program, 8 hours per day, specializing in the following technologies:"
                certificate="/Immagine 2024-02-15 135949.png"
             >
            <ul className="py-2">
             <li>- NodeJS ;</li>
             <li>- Express ;</li>
             <li>- Prisma ;</li>
             <li>- React ;</li>
             <li>- Tailwind</li>
            </ul>
            </CardExperience>

            <CardExperience 
                title="MANPOWER"
                data="November 2023"
                description="General training on health and safety in the workplace"
                certificate="/att-lav.png"

            >
            </CardExperience>

            <CardExperience
                title="BOOLEAN ACADEMY"
                data="February 2023 - July 2023"
                description="An intensive 6-month program aimed at training professionals capable of taking on the role of a Full Stack Web Developer. The course includes learning and building complex web applications with both backend and responsive frontend interface."
                certificate="/att-bool.png"
            >
            <ul className="py-2">
             <li>- HTML ;</li>
             <li>- CSS ;</li>
             <li>- SCSS ;</li>
             <li>- Javascript ;</li>
             <li>- VueJs ;</li>
             <li>- Php ;</li>
             <li>- Laravel ;</li>
             <li>- Boostrap</li>
            </ul>
            </CardExperience>
            <div className="mt-28 flex justify-center">
                <button onClick={()=> navigate(-1)} className="py-2 px-10 border-lime-500 border-2 bg-lime-500">BACK</button>
            </div>

        </div>
    )
}