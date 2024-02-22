import CardTestimonials from "../components/CardTestimonials"

export default function TheTestimonials(){

    const testimonals = [
        {
            name: "Samuele Madrigali",
            profession: "Boolean Careers Main Teacher",
            text: "It has been a pleasure to have Bruno as a student in the Full Stack Web Developer course at Boolean. I noticed in him a deep passion, dedication, and commitment to this field. Bruno stands out not only for his technical skills but also for his personal qualities. I am convinced that he would be a valuable member of any team. His combination of technical skills and personal characteristics makes him an exceptional collaborator and someone it is pleasant to work with.",
            gitHub: "https://github.com/samuelemadrigali",
            image: "/samu img.jpg"
        },
        {
            name: "Andrea Vassallo",
            profession: "Senior Software Engineer",
            text: "Bruno is a talented and passionate frontend developer, demonstrating not only technical proficiency but also a remarkable blend of creativity and determination. I have had the pleasure of reviewing his work firsthand and can vouch for his meticulous and thoughtful approach. What sets Bruno apart is his unique brand of positive perseverance; he tackles challenges with unwavering determination, ensuring that he meets his goals regardless of complexity. This attribute, combined with his collaborative spirit, makes Bruno a solid investment for any team seeking a passionate individual eager to learn.",
            gitHub: "https://github.com/vassalloandrea",
            image: "/andrea-vassallo-foto.jpg"
        },
        {
            name: "Gianluca Elia",
            profession: "Senior Software Engineer",
            text: "Bruno is a talented and determined frontend developer who I know well from his learning journey. He's not only skilled but also creative and always up for a challenge. Bruno is detail-oriented and thoughtful in his work, and his positive attitude is contagious. He never gives up and is always willing to learn and collaborate with others. I highly recommend Bruno as a valuable asset to any team. He's a fantastic developer and a great teammate.",
            gitHub: "https://github.com/gianlukk994",
            image: "/gianluca-img.jpg"
        }
    ]

    return(

            <div id="testimonial" className="container mx-auto p-2 sm:p-0">
                <h2 className="font-semibold text-3xl text-lime-500 text-end">TESTIMONIAL</h2>
                <h1 className="font-semibold text-5xl py-5 text-end">What Our Clients Say?</h1>

                <div className="container mx-auto my-20 gap-16 flex flex-wrap">

                    {testimonals.map((testimonal) =>{
                        return <CardTestimonials 
                        name= {testimonal.name}
                        profession= {testimonal.profession}
                        text= {testimonal.text}
                        gitHub= {testimonal.gitHub}
                        image= {testimonal.image}
                        ></CardTestimonials>
                    })}

                </div>

            </div>

    )
}