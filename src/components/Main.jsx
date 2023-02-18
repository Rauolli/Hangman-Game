import './Main.css';
import Game from './Game';
import LetterPane from './LetterPane';
import HangmanPane from './HangmanPane';
// import { useState } from 'react';
import DisplayPane from './DisplayPane';

export default function Main(){
    const game = new Game();
    const fehlVersuche = 6;
    return (
        <main>
            <DisplayPane game={ game }/>
            <LetterPane  game={game} resetGame={(game, wert)=>{return wert}}/>
            <HangmanPane fehlVersuche={ fehlVersuche} />             
        </main>
    )
}