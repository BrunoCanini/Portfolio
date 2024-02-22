import { useEffect, useState } from "react"

export default function Joke(){

    const [joke, setJoke] = useState({})

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist&type=single").then(response => response.json()).then(data => setJoke(data))
    },[])

    console.log(joke)

    return(
        <div>
            <h1 className="mb-5">Let's break the ice</h1>
            <p className="text-slate-400">" {joke.joke} "</p>
        </div>
    )
}