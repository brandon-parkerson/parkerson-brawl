import { useState } from "react";
import { useEffect } from "react";
import '../styles/App.css'
import StartMenu from "./StartMenu";

// TODO: GET START MENU TO WORK


export default function App() {
    const [gameState, setGameState] = useState("start");
    

    function HandleStartButtonClick(clicked) {
        if (clicked == true) {
            return (
                <p>Player hit start button</p>
            )
        }
    }

    

    
    return (
        <>
            <h1>Parkerson Brawl</h1>
            <StartMenu started={gameState} />
            <HandleStartButtonClick />
           
        </>
    )
}