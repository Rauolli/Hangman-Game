import './GameOverPane.css';
import { useState } from 'react';

function GameOverPane(props) {
    const game = props.game;
    const state = props.state;
    const [changeGOState, setChangeGOState] = useState(false);

    function handleXClick() {
        setChangeGOState(!changeGOState);
        state();    
    }

    function handleButtonClick() {
        setChangeGOState(!changeGOState);
        state();
    }

    return (
        <div className="game-over-pane">
            <button onClick={handleXClick}>X</button>
            <h2>Game Over</h2>
            <p>{game.GameOverOutput}</p>
            <p>Du hast {game.FailedAttempts} Fehlversuche.</p>
            <p>{game.Word} war das gesuchte Wort.</p>
            <button onClick={handleButtonClick}>Play again</button>
        </div>
    );
}

export default GameOverPane;

