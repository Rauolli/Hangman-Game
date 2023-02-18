import './GameOverPane.css';

function GameOverPane(props) {
    
    const fehlVersuche = props.game.FehlVersuche;
    const game = props.game;
    const resetGame = props.resetGame;

    function handleClick() {
        game.GameOver = false;

        alert(game.GameOver);
    }
    
    return (
        <div className="game-over-pane">
            <button onClick={handleClick}>X</button>
            <h2>Game Over</h2>
            <p>Du hast Fehlversuche: {fehlVersuche}</p>
            <button onClick={()=> resetGame(game, false)}>Play again</button>
        </div>
    );
}

export default GameOverPane;

