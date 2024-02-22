import CardSoftSkills from "../components/CardSoftSkills"

export default function MySkills(){

    const softSkills = [
        {
            id: 1,
            name: "Team Building",
            description: "I was able to experience the importance of teamwork at Boolean Academy. I found myself facing and discussing issues and solutions with my team, as there were team exercises specifically designed within the academy's curriculum to enhance this soft skill."
        },
        {
            id: 2,
            name: "Problem solving",
            description:
            "In my studies at the academies, I was able to learn techniques and methodologies necessary for analyzing a problematic situation in order to identify and implement the best solution."
        },
        {
            id: 3,
            name: "Active learning",
            description:"Thanks to the academy's curriculum, I have greatly strengthened the soft skill of active learning. All students in the class were required to actively participate in lessons, engaging in practical activities, group discussions, and problem-solving."
        },
        {
            id: 4,
            name: "Dedication",
            description:"I am a person who fulfills every commitment made and achieves every set goal. Few excuses and a lot of elbow grease."
        },
        {
            id: 5,
            name: "Relationship with clients",
            description:"I have always been accustomed to dealing with clients, from the most difficult to the kindest, considering my background before becoming a web developer. Education is at the core of every human interaction."
        },
        {
            id: 6,
            name: "Empathy",
            description:"I have always been an empathetic person; I have always shown understanding and solidarity towards others. I have always been sensitive to others' feelings and tried to put myself in their shoes. I believe it is a fundamental aspect in the world of work."
        }
    ]

    return(
        <div id="skills" className="container mx-auto p-2 sm:p-0">
            <div className="w-3/4 mx-auto">
                <h2 className="font-semibold text-3xl text-lime-500 py-5 text-center">MY SOFT SKILLS</h2>
                <h1 className="font-semibold text-xl sm:text-5xl py-5 text-center">"My soft skills are so refined that I managed to convince my computer not to give me fatal errors every time I type!"</h1>
            </div>

            <div className="flex flex-wrap gap-10 sm:gap-20 mt-20 justify-center">
                {softSkills.map((skill)=>{
                    return(
                        <CardSoftSkills
                            key={skill.id}
                            id={skill.id}
                            name={skill.name}
                            description={skill.description}
                        ></CardSoftSkills>
                    )
                })}
            </div>

        </div>
    )
}