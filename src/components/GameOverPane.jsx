import './GameOverPane.css';
import { useState } from 'react';

function GameOverPane(props) {
    const game = props.game;
    const state = props.state;
    const [changeGOState, setChangeGOState] = useState(false);

    function handleButtonClick(event) {
        const clickedButton = event.currentTarget.innerText;
        game.GameOver = false;
        setChangeGOState(!changeGOState);   
        state(clickedButton);
    }

    function showFailedAttempts(){
        if(game.FailedAttempts === 0){
            return `Du hattest k e i n e n Fehlversuch`;
        }
        else if(game.FailedAttempts > 1){
            return `Du hattest ${game.FailedAttempts} Fehlversuche.`;
        }
        return `Du hattest ${game.FailedAttempts} Fehlversuch.`;
    }

    return (
        <article className="game-over-pane">
                <button className="x" onClick={handleButtonClick}>X</button>
            <section className="dataPane">
                <h2>Game Over</h2>
                <p className={game.FailedAttempts<6?"word":""}>{game.GameOverOutput}</p>
                <p>{showFailedAttempts()}</p>
                <p className="word">{game.Word}</p>
                <p>war das gesuchte Wort.</p>
            </section>
            <button className="game-over-btn red" onClick={handleButtonClick}>NEUES SPIEL</button>
        </article>
    );
}

export default GameOverPane;

