import { useState } from "react";
import styles from '../styles/StartMenu.module.css'

export default function StartMenu({ started, onStartClick  }) {

    const [name, setName] = useState("");
    const handleClick = () => {
        onStartClick();
    }

    if (started == "start") {
        return (
            <>
                
                <form action="" className={styles.startForm}>
                    <h2>Welcome to Parkerson Brawl!</h2>
                    <p>Fight against the famous Parkerson family one by one and become the champ!</p>
                    <label htmlFor="name">Name:
                        <input type="text" id="name" />
                    </label>
                    <button onClick={handleClick} type="button">Start Game</button>
                </form>
            </>
            
        )
    }
}