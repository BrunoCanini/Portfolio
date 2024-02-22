import AboutMe from "./AboutMe"
import MySkills from "./MySkills"
import TechnicalSkills from "./TechnicalSkills"
import TheVideo from "./TheVideo"
import Divider from "../components/Divider"
import TheTestimonials from "./TheTestimonials"
import TheForm from "./TheForm"

export default function TheMain(){
    return(
        <div className=" flex flex-col gap-40 sm:gap-48">
            <AboutMe />
            <MySkills />
            <TechnicalSkills />
            <TheVideo />
            <Divider />
            <TheTestimonials />
            <TheForm />
        </div>
    )
}