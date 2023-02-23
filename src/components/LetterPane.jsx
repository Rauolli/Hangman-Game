import './LetterPane.css';
import BuchstabenListe from './BuchstabenListe';
import { useState } from "react";
import GameOverPane from './GameOverPane';


export default function LetterPane(props){
    const game = props.game;
    const setGameStatus = props.gameStatus;
    const [changeState, setChangeLetterState] = useState(false);

    const alphabet = BuchstabenListe;
    
    const handleClick = (event) => {
        const clickedLetter = event.currentTarget.innerText;
        const id = event.currentTarget.id - 1;
        game.checkLetter(clickedLetter);
        game.showGuessedWord();
        setGameStatus(game.FehlVersuche);
        alphabet[id].dis = true;       
        setChangeLetterState(!changeState);
    }

    const changeGameStatus = (value) => {
        alphabet.forEach(letter => letter.dis = false);
        setChangeLetterState(!changeState);
        if (value === 'X'){
            return;
        }
        game.resetGame();
        setGameStatus();
    }


    return(
        <article>
            <div className='rel dataPane'>
                <h2>Wähle einen Buchstaben</h2>
                <section className="letterPane">
                    {alphabet.map(letter => <button key={letter.id} id={letter.id} onClick={handleClick} disabled={letter.dis} className="green">{letter.val}</button>)}
                    <div className="clear">
                        <button className="red" onClick={changeGameStatus} >NEUES SPIEL</button>
                    </div>
                </section>
            </div>
            <div>
            {game.GameOver && <GameOverPane game={game} state={changeGameStatus}/>}
            </div>  
        </article>
    );
}