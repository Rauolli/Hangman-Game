import './DisplayPane.css';


function DisplayPane(props){
    const game = props.game;
    

    return (
        <article>          
            <section className="dataPane">
                {/* <h3>Das zufällig Wort: {game.Word}</h3> */}
                <h2>Das zu suchende Wort: </h2>
                <h2>{game.showGuessedWord()}</h2>
                <h3>Anzahl Versuche: </h3>
                <h2>{game.NumberOfAttempts}</h2>
                <h3>Fehlversuche: </h3>
                <h2>{game.LightningFailedAttempts}</h2>
                {/* <h3>Erratene Buchstaben: {game.GuessedLetters}</h3> */}
                {/* <h3>Buchstaben im Wort: {game.ContainedLetters}</h3> */}
                {/* <h3>benutzte Buchstaben: {game.AlreadyUsedLetters}</h3>  */}
                {/* <h3>Game Over: {game.GameOver.toString()}</h3> */}
            </section>
        </article>
  );
}

export default DisplayPane;