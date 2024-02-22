import CV from "../assets/brunocaniniCV.pdf";

export default function Thejumbotron(){

    const onButtonClick = () => {
        const pdfUrl = CV;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "BrunoCaniniCV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div className="flex flex-col gap-8 p-10 animate__animated animate__jackInTheBox">
            <h4 className="font-semibold text-3xl sm:text-5xl">HELLO I'M</h4>
            <h1 className="font-extrabold text-6xl sm:text-8xl">BRUNO CANINI</h1>
            <h2 className="font-bold text-5xl sm:text-7xl">Front-End Web Developer</h2>
            <p className="font-light">A passionate web developer who enjoys turning creative ideas into innovative digital solutions.</p>

            <div>
                <button className="bg-lime-500 font-medium py-2 px-3 animate-bounce" onClick={onButtonClick}>DOWNLOAD CV</button>

            </div>
        </div>
    )
}