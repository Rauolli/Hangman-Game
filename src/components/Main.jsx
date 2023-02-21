import './Main.css';
import LetterPane from './LetterPane';
import HangmanPane from './HangmanPane';
import { useState } from 'react';
import DisplayPane from './DisplayPane';

export default function Main({game}){
    
    const [aktGame, setGame] = useState({...game})
    
    const setGameStatus = (aGame) => {
        setGame({...aGame});
    }
    

    return (
        <main>
            <DisplayPane game={game} gameStatus={setGameStatus}/>
            <LetterPane  game={game} gameStatus={setGameStatus}/>
            <HangmanPane failedAttempts={game.FailedAttempts} />             
        </main>
    )
}