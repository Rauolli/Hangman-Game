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

    return (
        <div className="game-over-pane">
            <button onClick={handleButtonClick}>X</button>
            <h2>Game Over</h2>
            <h3>{game.GameOverOutput}</h3>
            <p>Du hast {game.FailedAttempts} Fehlversuche.</p>
            <h3>{game.Word}</h3>
            <p>war das gesuchte Wort.</p>
            <button onClick={handleButtonClick}>Play again</button>
        </div>
    );
}

export default GameOverPane;

