import { useState } from "react";
import { useEffect } from "react";
import '../styles/App.css'
import StartMenu from "./StartMenu";

// TODO: GET PLAYER NAME


export default function App() {
    const [gameState, setGameState] = useState("start");
    const [playerName, setPlayerName] = useState("");

    function handleStartButtonClick() {
            setGameState("begun");
    }

    

    

    
    return (
        <>
            <h1>Parkerson Brawl</h1>
            <StartMenu started={gameState} onStartClick={handleStartButtonClick} />
            {gameState == "begun" && <p>Game has begun</p>}
           
        </>
    )
}