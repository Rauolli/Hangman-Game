import './GameOverPane.css';
import { useState } from 'react';

function GameOverPane(props) {
    const fehlVersuche = props.game.FehlVersuche;
    const game = props.game;
    const state = props.state;
    const [chState, setState] = useState(state);

    function handleXClick() {
        game.GameOver = false;
        setState(!state);
    }

    function handleButtonClick() {
        game.GameOver = false;
        game.resetGame();
        setState(!state);
    }

    
    return (
        <div className="game-over-pane">
            <button onClick={handleXClick}>X</button>
            <h2>Game Over</h2>
            <p>{game.GameOverAusgabe}</p>
            <p>Du hast {fehlVersuche} Fehlversuche.</p>
            <p>{game.Wort} war das gesuchte Wort.</p>
            <button onClick={handleButtonClick}>Play again</button>
        </div>
    );
}

export default GameOverPane;

