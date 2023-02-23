import './Main.css';
import LetterPane from './LetterPane';
import HangmanPane from './HangmanPane';
import { useState } from 'react';
import DisplayPane from './DisplayPane';

export default function Main({game}){
    
    const [gameStatus, setGame] = useState(false);
    
    const setGameStatus = () => {
        setGame(!gameStatus);
    }
    

    return (
        <main>
            <DisplayPane game={game} />
            <LetterPane  game={game} gameStatus={setGameStatus}/>
            <HangmanPane failedAttempts={game.FailedAttempts} />             
        </main>
    )
}